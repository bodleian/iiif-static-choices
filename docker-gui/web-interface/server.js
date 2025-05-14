const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');
const bodyParser = require('body-parser');
const cors = require('cors');
const archiver = require('archiver'); // Añadido para soporte de exportación ZIP

const app = express();
const port = 8080;

// Configuración de middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Configuración de multer para la subida de archivos
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = '/app/data/uploads';
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

// Rutas
app.get('/', (req, res) => {
  res.render('index');
});

// Ruta para la página de ayuda
app.get('/help', (req, res) => {
  res.render('help');
});

// Ruta para verificar el estado del servidor
app.get('/api/status', (req, res) => {
  res.json({
    status: 'ok',
    serverTime: new Date().toISOString(),
    version: '1.0.0'
  });
});

// Ruta para subir imágenes
app.post('/upload', upload.fields([
  { name: 'albedo', maxCount: 1 },
  { name: 'normals', maxCount: 1 }
]), (req, res) => {
  if (!req.files || !req.files.albedo || !req.files.normals) {
    return res.status(400).json({
      success: false,
      message: 'Es necesario subir ambas imágenes (albedo y normales).'
    });
  }

  const albedoPath = req.files.albedo[0].path;
  const normalsPath = req.files.normals[0].path;

  // Asegurarse de que el directorio image existe
  const imageDir = '/app/image';
  if (!fs.existsSync(imageDir)) {
    fs.mkdirSync(imageDir, { recursive: true });
  }

  // Copiar las imágenes al directorio image con nombres estándar
  fs.copyFileSync(albedoPath, path.join(imageDir, 'ammonite-albedo.png'));
  fs.copyFileSync(normalsPath, path.join(imageDir, 'ammonite-normals.png'));

  // Generar config.yml basado en la información proporcionada
  const outputId = req.body.outputId || 'relighting-viewer';
  const configContent = `
title: ${req.body.title || 'Sin título'}
description: ${req.body.description || 'Sin descripción'}
shelfmark: ${req.body.shelfmark || 'Sin marca'}
homepage: http://localhost:8000/
outputId: ${outputId}

# Añadir los campos necesarios
full_shelfmark: "${req.body.shelfmark || 'Sin marca'}"
summary: "${req.body.description || 'Sin descripción'}"
object_id: "${outputId}"
object_label: "${req.body.title || 'Sin título'}"
provider_id: "provider-1"
provider_name: "Proveedor"
logo_image_id: "logo"
language: "es"
thumbnail_image_id: "thumbnail"
html_terms: "<span>Términos de uso</span>"
range: "range-1"

metadata:
  Title: "${req.body.title || 'Sin título'}"
  Shelfmark: "${req.body.shelfmark || 'Sin marca'}"
  Description: "${req.body.description || 'Sin descripción'}"

part_of:
  fossils: "collection-1"

items:
  canvas_id: "canvas-1"
  folio: "folio-1"
  preferred_image: "ammonite-albedo.png"
  images:
    - image_id: "ammonite-albedo"
      map_type: "albedo"
    - image_id: "ammonite-normals"
      map_type: "normal"
`;

  const configPath = path.join(imageDir, 'ammonite-config.yml');
  fs.writeFileSync(configPath, configContent);

  console.log('Archivos preparados. Ejecutando generación de tiles...');

  // Ejecutar comandos para generar tiles y manifiesto
  exec('cd /app && python iiif_generator.py tiles -t 256 -v 3.0', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error generando tiles: ${error}`);
      return res.status(500).json({
        success: false,
        message: 'Error generando tiles',
        error: stderr
      });
    }

    console.log('Tiles generados. Generando manifiesto...');

    exec(`cd /app && python iiif_generator.py manifest -f ammonite-config.yml -o ${outputId}.json`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error generando manifiesto: ${error}`);
        return res.status(500).json({
          success: false,
          message: 'Error generando manifiesto',
          error: stderr
        });
      }

      console.log('Manifiesto generado correctamente. Generando página del visor...');

      // Generar una página index personalizada para este visor
      const viewerDir = `/app/data/viewers/${outputId}`;
      if (!fs.existsSync(viewerDir)) {
        fs.mkdirSync(viewerDir, { recursive: true });
      }

      // Leer el archivo index.html base
      fs.readFile('/app/index.html', 'utf8', (err, data) => {
        if (err) {
          console.error(`Error leyendo archivo index.html base: ${err}`);
          // Continuar con la respuesta aunque haya error
          fixHostUrlInFiles(outputId);
          return res.json({
            success: true,
            message: 'Visor generado correctamente, pero no se pudo crear la página personalizada',
            viewerUrl: `http://localhost:8000/#?manifest=http://localhost:8000/iiif/manifest/${outputId}.json`
          });
        }

        // Reemplazar la referencia al manifiesto
        let viewerContent = data.replace(
          /manifestId:.*?,/g, 
          `manifestId: 'http://localhost:8000/iiif/manifest/${outputId}.json',`
        );

        // Asegurarse de que todas las URLs usen localhost en lugar de 0.0.0.0
        viewerContent = viewerContent.replace(/http:\/\/0\.0\.0\.0:8000/g, 'http://localhost:8000');

        // Guardar el nuevo archivo
        const viewerPath = `${viewerDir}/index.html`;
        fs.writeFileSync(viewerPath, viewerContent);

        // Crear un enlace simbólico para acceder a este visor específico
        const publicDir = '/app/data/public';
        if (!fs.existsSync(publicDir)) {
          fs.mkdirSync(publicDir, { recursive: true });
        }
        
        const publicPath = `${publicDir}/${outputId}.html`;
        const publicContent = `
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="refresh" content="0;url=http://localhost:8000/viewers/${outputId}/index.html">
    <title>Redirigiendo al visor ${outputId}</title>
  </head>
  <body>
    <p>Redirigiendo al visor...</p>
  </body>
</html>`;
        fs.writeFileSync(publicPath, publicContent);

        console.log(`Página del visor generada en: /viewers/${outputId}/index.html`);

        // Corregir URL del host en los archivos generados para evitar problemas
        fixHostUrlInFiles(outputId);

        // Responder con éxito y la URL para visualizar
        res.json({
          success: true,
          message: 'Visor generado correctamente',
          viewerUrl: `http://localhost:8000/viewers/${outputId}/index.html`,
          manifestUrl: `http://localhost:8000/iiif/manifest/${outputId}.json`
        });
      });
    });
  });
});

// Ruta para exportar el visor
app.post('/export', bodyParser.json(), (req, res) => {
  const { manifestId, targetUrl } = req.body;
  
  if (!manifestId || !targetUrl) {
    return res.status(400).json({
      success: false,
      message: 'Es necesario proporcionar el ID del manifiesto y la URL de destino.'
    });
  }

  // Crear directorio temporal para la exportación
  const exportDir = `/app/data/exports/${manifestId}`;
  if (!fs.existsSync(exportDir)) {
    fs.mkdirSync(exportDir, { recursive: true });
  }

  // Crear estructura de directorios
  const iiifDir = `${exportDir}/iiif`;
  const manifestDir = `${iiifDir}/manifest`;
  const imageDir = `${iiifDir}/image`;
  const miradorDir = `${exportDir}/mirador`;
  
  // Crear los directorios necesarios
  fs.mkdirSync(manifestDir, { recursive: true });
  fs.mkdirSync(imageDir, { recursive: true });
  fs.mkdirSync(miradorDir, { recursive: true });

  try {
    // Copiar el manifiesto
    const manifestSrc = `/app/iiif/manifest/${manifestId}.json`;
    const manifestDest = `${manifestDir}/${manifestId}.json`;
    
    if (!fs.existsSync(manifestSrc)) {
      return res.status(404).json({
        success: false,
        message: `Manifiesto no encontrado: ${manifestId}.json`
      });
    }
    
    // Leer el manifiesto, reemplazar las URLs y guardarlo
    let manifestContent = fs.readFileSync(manifestSrc, 'utf8');
    manifestContent = manifestContent.replace(/http:\/\/localhost:8000/g, targetUrl.replace(/\/$/, ''));
    fs.writeFileSync(manifestDest, manifestContent);
    
    // Copiar los directorios de imágenes
    ['ammonite-albedo', 'ammonite-normals'].forEach(dir => {
      // Crear el directorio de destino
      const imageSrcDir = `/app/iiif/image/${dir}`;
      const imageDestDir = `${imageDir}/${dir}`;
      fs.mkdirSync(imageDestDir, { recursive: true });
      
      // Copiar el archivo info.json, reemplazando las URLs
      const infoSrc = `${imageSrcDir}/info.json`;
      const infoDest = `${imageDestDir}/info.json`;
      
      let infoContent = fs.readFileSync(infoSrc, 'utf8');
      infoContent = infoContent.replace(/http:\/\/localhost:8000/g, targetUrl.replace(/\/$/, ''));
      fs.writeFileSync(infoDest, infoContent);
      
      // Copiar los tiles (de forma recursiva)
      copyDirectoryRecursiveSync(imageSrcDir, imageDestDir, (file) => {
        return file !== 'info.json'; // Excluir info.json porque ya lo hemos copiado con URL modificada
      });
    });
    
    // Copiar los archivos del visor Mirador
    copyDirectoryRecursiveSync('/app/mirador/dist', `${miradorDir}/dist`);
    
    // Crear un index.html personalizado
    const indexTemplate = fs.readFileSync('/app/index.html', 'utf8');
    const customIndex = indexTemplate
      .replace(/http:\/\/localhost:8000/g, targetUrl.replace(/\/$/, ''))
      .replace(/manifestId:.*?'(.*?)'/g, `manifestId: '${targetUrl.replace(/\/$/, '')}/iiif/manifest/${manifestId}.json'`);
    
    fs.writeFileSync(`${exportDir}/index.html`, customIndex);
    
    // Crear un archivo ZIP con todo el contenido
    const zipPath = `/app/data/exports/${manifestId}.zip`;
    const output = fs.createWriteStream(zipPath);
    const archive = archiver('zip', {
      zlib: { level: 9 } // Nivel de compresión máximo
    });
    
    output.on('close', () => {
      console.log(`Archivo ZIP creado: ${zipPath} (${archive.pointer()} bytes)`);
      
      // Devolver el archivo ZIP como descarga
      res.download(zipPath, `${manifestId}.zip`, (err) => {
        if (err) {
          console.error(`Error al enviar el archivo ZIP: ${err}`);
        } else {
          // Opcional: Eliminar el directorio temporal después de enviar el ZIP
          // fs.rmSync(exportDir, { recursive: true, force: true });
        }
      });
    });
    
    archive.on('error', (err) => {
      console.error(`Error creando el archivo ZIP: ${err}`);
      res.status(500).json({
        success: false,
        message: 'Error creando el archivo ZIP',
        error: err.message
      });
    });
    
    archive.pipe(output);
    archive.directory(exportDir, false);
    archive.finalize();
    
  } catch (err) {
    console.error(`Error en el proceso de exportación: ${err}`);
    res.status(500).json({
      success: false,
      message: 'Error en el proceso de exportación',
      error: err.message
    });
  }
});

// Función para copiar directorios recursivamente
function copyDirectoryRecursiveSync(src, dest, filter = null) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    
    fs.readdirSync(src).forEach(childItemName => {
      copyDirectoryRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName),
        filter
      );
    });
  } else {
    // Es un archivo, verificar si pasa el filtro
    if (filter && !filter(path.basename(src))) {
      return;
    }
    
    fs.copyFileSync(src, dest);
  }
}

// Función para corregir URLs de 0.0.0.0 a localhost en los archivos generados
function fixHostUrlInFiles(outputId) {
  try {
    // Corregir en el manifiesto
    const manifestPath = `/app/iiif/manifest/${outputId}.json`;
    if (fs.existsSync(manifestPath)) {
      let content = fs.readFileSync(manifestPath, 'utf8');
      content = content.replace(/http:\/\/0\.0\.0\.0:8000/g, 'http://localhost:8000');
      fs.writeFileSync(manifestPath, content);
      console.log(`URLs corregidas en ${manifestPath}`);
    }

    // Corregir en los info.json de los tiles
    ['ammonite-albedo', 'ammonite-normals'].forEach(dir => {
      const infoPath = `/app/iiif/image/${dir}/info.json`;
      if (fs.existsSync(infoPath)) {
        let content = fs.readFileSync(infoPath, 'utf8');
        content = content.replace(/http:\/\/0\.0\.0\.0:8000/g, 'http://localhost:8000');
        // Asegurarse de que no haya barras invertidas en las rutas
        content = content.replace(/\\\\/g, '/');
        content = content.replace(/\\/g, '/');
        fs.writeFileSync(infoPath, content);
        console.log(`URLs corregidas en ${infoPath}`);
      }
    });
  } catch (err) {
    console.error('Error al corregir URLs:', err);
  }
}

// Añadir estas rutas para servir los visores personalizados
app.use('/viewers', express.static('/app/data/viewers'));
app.use('/public', express.static('/app/data/public'));
app.use('/exports', express.static('/app/data/exports')); // Añadido para servir archivos de exportación

// Iniciar servidor
app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor web iniciado en http://localhost:${port}`);
  console.log(`Visor IIIF disponible en http://localhost:8000`);
});
/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 *
 * Copyright © 2025 Factum Foundation for Digital Technology in Preservation / Jorge Cano
 */

const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');
const bodyParser = require('body-parser');
const cors = require('cors');
const archiver = require('archiver');

const app = express();
const port = 8080;

// Constants for paths and URLs (DOCKER)

const PATHS = {
  uploads: '/app/data/uploads',
  image: '/app/image',
  iiif: '/app/iiif',
  iiifImage: '/app/iiif/image',
  iiifManifest: '/app/iiif/manifest',
  viewers: '/app/data/viewers',
  public: '/app/data/public',
  exports: '/app/data/exports',
  indexTemplate: '/app/index.html'
};

/*
// Constants for paths and URLs (LOCAL)
const PATHS = {
  uploads: './uploads',  // Cambia esta ruta a donde quieras guardar los archivos
  image: './image',      // Ajusta esta ruta
  iiif: './iiif',        // Ajusta esta ruta
  iiifImage: './iiif/image',
  iiifManifest: './iiif/manifest',
  viewers: './viewers',
  public: './public',
  exports: './exports',
  indexTemplate: './index.html'  // Asegúrate de tener este archivo
};
*/

const HOST_URL = {
  internal: 'http://0.0.0.0:8000',
  external: 'http://localhost:8000'
};

// Ensure all required directories exist
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  return dirPath;
}

// Express middleware configuration
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Multer storage configuration for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, ensureDirectoryExists(PATHS.uploads));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/help', (req, res) => {
  res.render('help');
});

app.get('/api/status', (req, res) => {
  res.json({
    status: 'ok',
    serverTime: new Date().toISOString(),
    version: '1.0.0'
  });
});

// Helper function to replace host URLs in file content
function fixHostUrls(content) {
  return content.replace(new RegExp(HOST_URL.internal, 'g'), HOST_URL.external);
}

// Helper function to write a config file based on form data
function generateConfigFile(outputId, formData) {
  const { title, description, shelfmark } = formData;
  
  // Consistent image IDs derived from outputId
  const albedoId = `${outputId}-albedo`;
  const normalsId = `${outputId}-normals`;
  
  const configContent = `
title: ${title || 'Sin título'}
description: ${description || 'Sin descripción'}
shelfmark: ${shelfmark || 'Sin marca'}
homepage: ${HOST_URL.external}/
outputId: ${outputId}

# Additional required fields
full_shelfmark: "${shelfmark || 'Sin marca'}"
summary: "${description || 'Sin descripción'}"
object_id: "${outputId}"
object_label: "${title || 'Sin título'}"
provider_id: "provider-1"
provider_name: "Proveedor"
logo_image_id: "logo"
language: "es"
thumbnail_image_id: "thumbnail"
html_terms: "<span>Términos de uso</span>"
range: "range-1"

metadata:
  Title: "${title || 'Sin título'}"
  Shelfmark: "${shelfmark || 'Sin marca'}"
  Description: "${description || 'Sin descripción'}"

part_of:
  fossils: "collection-1"

items:
  canvas_id: "canvas-1"
  folio: "folio-1"
  preferred_image: "${albedoId}.png"
  images:
    - image_id: "${albedoId}"
      map_type: "albedo"
    - image_id: "${normalsId}"
      map_type: "normal"
`;

  const configPath = path.join(PATHS.image, `${outputId}-config.yml`);
  fs.writeFileSync(configPath, configContent);
  
  return {
    configPath,
    albedoId,
    normalsId
  };
}

// Helper function to execute a command and return a promise
function execCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Command execution error: ${error}`);
        reject({ error, stderr });
      } else {
        resolve(stdout);
      }
    });
  });
}

// Helper function to fix URLs in generated IIIF files
function fixUrlsInGeneratedFiles(outputId, imageIds) {
  try {
    // Fix manifest
    const manifestPath = path.join(PATHS.iiifManifest, `${outputId}.json`);
    if (fs.existsSync(manifestPath)) {
      let content = fs.readFileSync(manifestPath, 'utf8');
      content = fixHostUrls(content);
      fs.writeFileSync(manifestPath, content);
      console.log(`URLs fixed in ${manifestPath}`);
    }

    // Fix info.json files for each image
    imageIds.forEach(imageId => {
      const infoPath = path.join(PATHS.iiifImage, imageId, 'info.json');
      if (fs.existsSync(infoPath)) {
        let content = fs.readFileSync(infoPath, 'utf8');
        content = fixHostUrls(content);
        // Fix any backslash issues in paths
        content = content.replace(/\\\\/g, '/');
        content = content.replace(/\\/g, '/');
        fs.writeFileSync(infoPath, content);
        console.log(`URLs fixed in ${infoPath}`);
      }
    });
  } catch (err) {
    console.error('Error fixing URLs:', err);
  }
}

// Helper function to create custom viewer page
function createViewerPage(outputId) {
  const viewerDir = path.join(PATHS.viewers, outputId);
  ensureDirectoryExists(viewerDir);

  try {
    // Read template and replace manifest reference
    let viewerContent = fs.readFileSync(PATHS.indexTemplate, 'utf8');
    viewerContent = viewerContent.replace(
      /manifestId:.*?,/g, 
      `manifestId: '${HOST_URL.external}/iiif/manifest/${outputId}.json',`
    );
    viewerContent = fixHostUrls(viewerContent);

    // Save custom viewer page
    const viewerPath = path.join(viewerDir, 'index.html');
    fs.writeFileSync(viewerPath, viewerContent);
    
    // Create redirect HTML file
    ensureDirectoryExists(PATHS.public);
    const publicPath = path.join(PATHS.public, `${outputId}.html`);
    const redirectContent = `
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="refresh" content="0;url=${HOST_URL.external}/viewers/${outputId}/index.html">
    <title>Redirigiendo al visor ${outputId}</title>
  </head>
  <body>
    <p>Redirigiendo al visor...</p>
  </body>
</html>`;
    fs.writeFileSync(publicPath, redirectContent);
    
    return {
      viewerPath,
      viewerUrl: `${HOST_URL.external}/viewers/${outputId}/index.html`,
      manifestUrl: `${HOST_URL.external}/iiif/manifest/${outputId}.json`
    };
  } catch (err) {
    console.error(`Error creating viewer page: ${err}`);
    throw err;
  }
}

// Route for uploading images and generating viewer
app.post('/upload', upload.fields([
  { name: 'albedo', maxCount: 1 },
  { name: 'normals', maxCount: 1 }
]), async (req, res) => {
  try {
    // Validate uploaded files
    if (!req.files || !req.files.albedo || !req.files.normals) {
      return res.status(400).json({
        success: false,
        message: 'Es necesario subir ambas imágenes (albedo y normales).'
      });
    }

    const albedoPath = req.files.albedo[0].path;
    const normalsPath = req.files.normals[0].path;
    
    // Ensure destination directory exists
    ensureDirectoryExists(PATHS.image);

    // Generate IDs based on the outputId
    const outputId = req.body.outputId || 'relighting-viewer';
    
    // Generate config and get image IDs
    const { configPath, albedoId, normalsId } = generateConfigFile(outputId, req.body);
    
    // Copy uploaded images to image directory with proper naming
    fs.copyFileSync(albedoPath, path.join(PATHS.image, `${albedoId}.png`));
    fs.copyFileSync(normalsPath, path.join(PATHS.image, `${normalsId}.png`));

    console.log('Files prepared. Generating tiles...');

    try {
      // Generate tiles
      await execCommand('cd /app && python iiif_generator.py tiles -t 256 -v 3.0');
      console.log('Tiles generated. Generating manifest...');
      
      // Generate manifest
      await execCommand(`cd /app && python iiif_generator.py manifest -f ${outputId}-config.yml -o ${outputId}.json`);
      console.log('Manifest generated. Creating viewer page...');
      
      // Fix URLs in generated files
      fixUrlsInGeneratedFiles(outputId, [albedoId, normalsId]);
      
      // Create custom viewer page
      const { viewerUrl, manifestUrl } = createViewerPage(outputId);
      
      // Return success response
      res.json({
        success: true,
        message: 'Visor generado correctamente',
        viewerUrl,
        manifestUrl
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Error procesando imágenes',
        error: error.stderr || error.message
      });
    }
  } catch (err) {
    console.error(`Error uploading files: ${err}`);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor',
      error: err.message
    });
  }
});

// Helper function to copy directories recursively
function copyDirectoryRecursiveSync(src, dest, filter = null) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  
  if (isDirectory) {
    ensureDirectoryExists(dest);
    
    fs.readdirSync(src).forEach(childItemName => {
      copyDirectoryRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName),
        filter
      );
    });
  } else {
    // If it's a file, check if it passes the filter
    if (filter && !filter(path.basename(src))) {
      return;
    }
    
    fs.copyFileSync(src, dest);
  }
}

// Route for exporting the viewer
app.post('/export', bodyParser.json(), (req, res) => {
  const { manifestId, targetUrl } = req.body;
  
  if (!manifestId || !targetUrl) {
    return res.status(400).json({
      success: false,
      message: 'Es necesario proporcionar el ID del manifiesto y la URL de destino.'
    });
  }

  try {
    // Create export directory structure
    const exportDir = path.join(PATHS.exports, manifestId);
    const iiifDir = path.join(exportDir, 'iiif');
    const manifestDir = path.join(iiifDir, 'manifest');
    const imageDir = path.join(iiifDir, 'image');
    const miradorDir = path.join(exportDir, 'mirador');
    
    ensureDirectoryExists(manifestDir);
    ensureDirectoryExists(imageDir);
    ensureDirectoryExists(miradorDir);

    // Copy manifest file
    const manifestSrc = path.join(PATHS.iiifManifest, `${manifestId}.json`);
    const manifestDest = path.join(manifestDir, `${manifestId}.json`);
    
    if (!fs.existsSync(manifestSrc)) {
      return res.status(404).json({
        success: false,
        message: `Manifiesto no encontrado: ${manifestId}.json`
      });
    }
    
    // Extract image IDs from manifest
    let manifestContent = fs.readFileSync(manifestSrc, 'utf8');
    let imageIds = [];
    
    try {
      const manifestData = JSON.parse(manifestContent);
      
      // Navigate through manifest structure to find image IDs
      if (manifestData.items && 
          manifestData.items[0] && 
          manifestData.items[0].items && 
          manifestData.items[0].items[0] && 
          manifestData.items[0].items[0].items && 
          manifestData.items[0].items[0].items[0] && 
          manifestData.items[0].items[0].items[0].body && 
          manifestData.items[0].items[0].items[0].body.items) {
        
        const items = manifestData.items[0].items[0].items[0].body.items;
        items.forEach(item => {
          if (item.service && item.service.length > 0) {
            // Extract ID from service URL
            const serviceUrl = item.service[0]['@id'] || item.service[0].id;
            if (serviceUrl) {
              const parts = serviceUrl.split('/');
              const id = parts[parts.length - 1];
              if (id && !imageIds.includes(id)) {
                imageIds.push(id);
              }
            }
          }
        });
      }
    } catch (error) {
      console.error('Error extracting image IDs:', error);
    }
    
    // Fallback if no image IDs found
    if (imageIds.length === 0) {
      imageIds = [`${manifestId}-albedo`, `${manifestId}-normals`];
    }
    
    console.log(`Image IDs found: ${imageIds.join(', ')}`);
    
    // Replace URLs in manifest
    manifestContent = manifestContent.replace(new RegExp(HOST_URL.external, 'g'), targetUrl.replace(/\/$/, ''));
    fs.writeFileSync(manifestDest, manifestContent);
    
    // Copy image directories
    imageIds.forEach(id => {
      const imageSrcDir = path.join(PATHS.iiifImage, id);
      const imageDestDir = path.join(imageDir, id);
      
      if (!fs.existsSync(imageSrcDir)) {
        console.warn(`Image directory not found: ${imageSrcDir}`);
        return; // Skip to next directory
      }
      
      ensureDirectoryExists(imageDestDir);
      
      // Update and copy info.json
      const infoSrc = path.join(imageSrcDir, 'info.json');
      if (fs.existsSync(infoSrc)) {
        const infoDest = path.join(imageDestDir, 'info.json');
        let infoContent = fs.readFileSync(infoSrc, 'utf8');
        infoContent = infoContent.replace(new RegExp(HOST_URL.external, 'g'), targetUrl.replace(/\/$/, ''));
        fs.writeFileSync(infoDest, infoContent);
      }
      
      // Copy tiles (recursively)
      copyDirectoryRecursiveSync(imageSrcDir, imageDestDir, (file) => {
        return file !== 'info.json'; // Exclude info.json as we've already handled it
      });
    });
    
    // Copy Mirador viewer files
    copyDirectoryRecursiveSync('/app/mirador/dist', path.join(miradorDir, 'dist'));
    
    // Create customized index.html
    const indexTemplate = fs.readFileSync(PATHS.indexTemplate, 'utf8');
    const customIndex = indexTemplate
      .replace(new RegExp(HOST_URL.external, 'g'), targetUrl.replace(/\/$/, ''))
      .replace(/manifestId:.*?'(.*?)'/g, `manifestId: '${targetUrl.replace(/\/$/, '')}/iiif/manifest/${manifestId}.json'`);
    
    fs.writeFileSync(path.join(exportDir, 'index.html'), customIndex);
    
    // Create ZIP file
    const zipPath = path.join(PATHS.exports, `${manifestId}.zip`);
    const output = fs.createWriteStream(zipPath);
    const archive = archiver('zip', {
      zlib: { level: 9 } // Maximum compression
    });
    
    output.on('close', () => {
      console.log(`ZIP file created: ${zipPath} (${archive.pointer()} bytes)`);
      
      // Return ZIP file as download
      res.download(zipPath, `${manifestId}.zip`, (err) => {
        if (err) {
          console.error(`Error sending ZIP file: ${err}`);
        }
      });
    });
    
    archive.on('error', (err) => {
      console.error(`Error creating ZIP file: ${err}`);
      res.status(500).json({
        success: false,
        message: 'Error creating ZIP file',
        error: err.message
      });
    });
    
    archive.pipe(output);
    archive.directory(exportDir, false);
    archive.finalize();
    
  } catch (err) {
    console.error(`Export process error: ${err}`);
    res.status(500).json({
      success: false,
      message: 'Error in export process',
      error: err.message
    });
  }
});

// Serve static files from data directories
app.use('/viewers', express.static(PATHS.viewers));
app.use('/public', express.static(PATHS.public));
app.use('/exports', express.static(PATHS.exports));

// Start server
app.listen(port, '0.0.0.0', () => {
  console.log(`Web server started on http://localhost:${port}`);
  console.log(`IIIF viewer available at http://localhost:8000`);
});
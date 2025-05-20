# IIIF Static Choices

A IIIF static tile and manifest generator built using Python to generate IIIF tiled images and manifests, with optional Docker support and web interface.

## Overview

IIIF Static Choices allows you to create interactive 2.5D viewers from 2D images (albedo) and normal maps. This application simplifies the process of creating and hosting IIIF content without requiring specialist infrastructure such as dedicated imaging or manifest servers.

Key features:
- Generate IIIF tiled images and manifests from regular 2D images
- Create interactive 2.5D relighting viewers
- Simple Python-based implementation
- Docker container with web interface for easy use
- Export functionality for deployment on external servers
- Consistent naming conventions for multiple viewer management

The tool includes the Bodleian Libraries Mirador plug-in from the ARCHiOx project and is designed to test using 2D images to encode and present 3D information.

![Animated picture showing a pyritised ammonite and someone interacting with it using the ARCHiOx Mirador plug-in](examples/fossil.gif)

## Installation & Usage Options

You have two options for using IIIF Static Choices:

### Option 1: Docker (Recommended)

The easiest way to use IIIF Static Choices is with Docker, which includes a web interface for uploading and configuring images without using the command line.

#### Requirements
- Docker
- Docker Compose

#### Installation & Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/bodleian/iiif-static-choices.git
   cd iiif-static-choices
   ```

2. Start the container:
   ```bash
   docker-compose -f docker-compose.main.yml up -d
   ```

3. Access the web interface at http://localhost:8080
   - Upload your albedo and normal map images
   - Configure the viewer metadata
   - Generate your 2.5D viewer
   - View your model at the provided URL

4. Access the IIIF viewer at http://localhost:8000

For more detailed Docker instructions, see the [Docker Usage](#docker-usage) section below.

### Option 2: Local Installation

If you prefer to run the application directly without Docker, you can install and run it locally.

#### Requirements
- Python 3.9
- Poetry

#### Installation

```bash
# Clone the repository
git clone https://github.com/bodleian/iiif-static-choices.git
cd iiif-static-choices

# Install dependencies
poetry install --no-root
```

#### Basic Usage

1. Generate tiles:
   ```bash
   poetry run python iiif_generator.py tiles -t 256 -v 3.0
   ```

2. Generate manifest:
   ```bash
   poetry run python iiif_generator.py manifest -f ammonite-config.yml -o pyritised-ammonite.json
   ```

3. Start the server:
   ```bash
   poetry run python server.py 8000
   ```

4. Open http://0.0.0.0:8000/ in your browser

## Docker Usage

### Starting the Container

```bash
docker-compose -f docker-compose.main.yml up -d
```

This builds and starts a container with:
- Web interface (http://localhost:8080)
- IIIF server (http://localhost:8000)

### Using the Web Interface

1. Open http://localhost:8080 in your browser
2. Upload albedo and normal map images
3. Configure metadata (title, description, etc.)
4. Click "Generate 2.5D Viewer"
5. Access your viewer through the provided link

### Verifying the Installation

```bash
# Check container status
docker ps | grep iiif-static-choices

# View logs
docker logs -f iiif-static-choices-iiif-static-choices-1

# Check if services are responding
curl -s -o /dev/null -w "%{http_code}" http://localhost:8080
curl -s -o /dev/null -w "%{http_code}" http://localhost:8000
```

### Data Persistence

Data is stored persistently using Docker volumes:
- Host directory `./data` maps to `/app/data` in the container
- Generated files remain available even after restarting the container
- You can back up or inspect data directly from the `./data` folder

### File and Directory Structure

The application uses a consistent naming scheme for all files and directories:

- **Upload files**: Stored in `/app/data/uploads/`
- **Image files**: Stored as `/app/image/{id}-albedo.png` and `/app/image/{id}-normals.png`
- **Configuration**: Stored as `/app/image/{id}-config.yml`
- **Manifest file**: Generated as `/app/iiif/manifest/{id}.json`
- **Image tiles**: Generated in directories `/app/iiif/image/{id}-albedo/` and `/app/iiif/image/{id}-normals/`
- **Viewer pages**: Created in `/app/data/viewers/{id}/index.html`
- **Redirects**: Created as `/app/data/public/{id}.html`

This consistent naming structure ensures that:
- Each viewer has its own unique resources
- Multiple viewers can exist without conflicts
- All files related to a specific viewer can be easily identified

### Troubleshooting Docker

If you encounter issues:

1. Check container logs:
   ```bash
   docker logs iiif-static-choices-iiif-static-choices-1
   ```

2. Restart the container:
   ```bash
   docker-compose -f docker-compose.main.yml restart
   ```
3. Stop the container:
   ```bash
   docker-compose -f docker-compose.main.yml down
   ```
3. Rebuild the container:
   ```bash
   docker-compose -f docker-compose.main.yml up -d --build
   ```

4. Common issues:
   - **Missing Python Dependencies**: If you see errors about missing modules, the container should already have them installed, but you can install them manually if needed:
     ```bash
     docker exec -it iiif-static-choices-iiif-static-choices-1 pip install pyyaml imageio jinja2 pillow numpy
     ```
   
   - **Black Screen in 2.5D Mode**: Check if:
     - Your browser supports WebGL (verify at [get.webgl.org](https://get.webgl.org/))
     - The normal map is in standard RGB tangent-space format
     - Try a different browser like Chrome or Firefox

   - **Memory Issues with Large Images**: For very large images:
     - Increase Docker memory allocation in Docker Desktop Settings > Resources
     - Try processing smaller images or reduce the resolution
     - Use the `--memory=4g` flag when running Docker manually
     
   - **Naming Issues or Resource Conflicts**: If different viewers seem to be using the same resources:
     - Ensure you're using the latest version of the application
     - Try using a very distinct outputId when creating viewers
     - Check server.js file to ensure the naming conventions are being applied

## Exporting Viewers for External Servers

The export feature allows you to generate a package with all necessary files to deploy the viewer on your own server.

### Export Process

1. After generating a viewer, locate the "Export Viewer" section
2. Enter the base URL where the viewer will be hosted (e.g., `https://example.com/viewers/`)
3. Click "Export Viewer"
4. Download the ZIP file that contains all required files

### Deploying on Your Server

1. Extract the ZIP file to the appropriate location on your server
2. Ensure the directory structure is preserved
3. Access your viewer at the configured URL

### Server Configuration Examples

#### Apache

```apache
<VirtualHost *:80>
    ServerName example.com
    DocumentRoot /var/www/html
    
    <Directory "/var/www/html/viewers">
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
        
        # Enable CORS for IIIF
        Header set Access-Control-Allow-Origin "*"
        Header set Access-Control-Allow-Headers "Content-Type"
        Header set Access-Control-Allow-Methods "GET, OPTIONS"
    </Directory>
</VirtualHost>
```

#### Nginx

```nginx
server {
    listen 80;
    server_name example.com;
    root /var/www/html;
    
    location /viewers {
        try_files $uri $uri/ =404;
        
        # Enable CORS for IIIF
        add_header 'Access-Control-Allow-Origin' '*';
        add_header 'Access-Control-Allow-Methods' 'GET, OPTIONS';
        add_header 'Access-Control-Allow-Headers' 'Content-Type';
    }
}
```

## Advanced Usage

### Manual Tile Generation

```bash
docker exec -w /app iiif-static-choices-iiif-static-choices-1 python iiif_generator.py tiles -t 256 -v 3.0
```

### Manual Manifest Generation

```bash
docker exec -w /app iiif-static-choices-iiif-static-choices-1 bash -c 'cp image/ammonite-config.yml . && python iiif_generator.py manifest -f ammonite-config.yml -o iiif/manifest/pyritised-ammonite.json -d .'
```

### Using Your Own Images

1. Prepare two images:
   - **Albedo Image**: Regular color/texture image (PNG, JPG format)
   - **Normal Map**: RGB image containing surface relief information
   - Both should have the same resolution (recommended: 2048×2048 or higher)

2. Create a configuration file (see `image/ammonite-config.yml` for reference)

3. Follow the steps in [Basic Usage](#basic-usage) or use the web interface

## Project Structure

```
iiif-static-choices/
├── docker-compose.main.yml   # Main Docker Compose configuration
├── Dockerfile.main           # Main Dockerfile
├── iiif_generator.py         # Core Python script for generation
├── server.py                 # Simple HTTP server
├── image/                    # Directory for input images
├── iiif/                     # Generated IIIF tiles and manifests
│   ├── image/                # Generated image tiles for each viewer
│   │   ├── {id}-albedo/      # Tiles for albedo image
│   │   └── {id}-normals/     # Tiles for normal map
│   └── manifest/             # Generated manifest files
├── data/                     # Persistent data (when using Docker)
│   ├── uploads/              # Uploaded source files
│   ├── viewers/              # Custom viewer HTML pages
│   │   └── {id}/             # Viewer page for each model
│   └── public/               # Redirect pages for easy access
└── docker-gui/               # Web interface files
    └── web-interface/        # Node.js Express application
        ├── server.js         # Express server with organized code
        ├── views/            # EJS templates
        └── public/           # Static assets
```

## Recent Improvements

The project has undergone several improvements:

1. **Code Refactoring**: The server.js file has been refactored for better organization, using modern JavaScript patterns and improved error handling.

2. **Consistent Naming Conventions**: A consistent naming scheme has been implemented for all files and directories, ensuring that each viewer has its own unique resources.

3. **File Path Management**: All file paths are now centralized, making the code more maintainable and reducing errors.

4. **Enhanced Error Handling**: Improved error handling with try/catch blocks and better error reporting.

5. **Multiple Viewer Support**: Better support for creating and managing multiple viewers without resource conflicts.

6. **Improved Documentation**: Added detailed documentation of file flows and naming conventions.

## Licensing

This project is covered by the [Mozilla Public License](LICENSE) except for the bundled [Mirador](https://github.com/ProjectMirador/mirador?tab=Apache-2.0-1-ov-file#readme) and [Openseadragon](https://github.com/openseadragon/openseadragon?tab=BSD-3-Clause-1-ov-file#readme) builds which are covered by their own licenses.

The tile generation part of this project is based on and translated from the work of Glen Robson in his Java [iiif-tiler](https://github.com/glenrobson/iiif-tiler).

## Todo

- Add thumbnail generation for choices layers in Mirador
- Add logo generation
- Add multi-page manifests
- Add unit tests to prevent development breaking
- Make symbolic link creation permanent in Docker configuration
- Implement progress indicators for long-running operations

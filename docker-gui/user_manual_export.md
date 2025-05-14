# Manual: Generation and Export of 2.5D Relighting Viewers

This manual explains how to use IIIF Static Choices with Docker to generate interactive 2.5D viewers and export them for use on external servers.

## Index
1. [Installation](#1-installation)
2. [Viewer Generation](#2-viewer-generation)
3. [Export for External Servers](#3-export-for-external-servers)
4. [Generated File Structure](#4-generated-file-structure)
5. [Troubleshooting](#5-troubleshooting)

## 1. Installation

### Prerequisites
- Docker
- Docker Compose
- Modern web browser (Chrome, Firefox, Edge, Safari)

### Installation Steps

1. Clone the repository:
```bash
git clone https://github.com/bodleian/iiif-static-choices.git
cd iiif-static-choices
```

2. Run Docker Compose to start the container:
```bash
docker-compose -f docker-compose.main.yml up -d
```

3. Verify that the container is running:
```bash
docker ps | grep iiif-static-choices
```

4. Access the web interface in your browser:
```
http://localhost:8080
```

## 2. Viewer Generation

### Image Preparation

To create a 2.5D relighting viewer, you need two images:

1. **Albedo Image**: The normal color/texture image.
   - Recommended formats: PNG, JPG
   - Recommended resolution: 2048×2048 or higher

2. **Normal Map**: Image containing relief information in RGB format.
   - The R channel represents the X component of the normal vector
   - The G channel represents the Y component of the normal vector
   - The B channel represents the Z component of the normal vector
   - Must have the same resolution as the albedo image

### Generation Process

1. Access the web interface at `http://localhost:8080`

2. **Step 1: Upload Images**
   - Drag or select the albedo image in the corresponding section
   - Drag or select the normal map in its section
   - The interface will automatically advance to the next step when both images are loaded

3. **Step 2: Configure Metadata**
   - Enter a title for the viewer
   - Add a description (optional)
   - Specify a shelfmark (optional)
   - Define an ID for the manifest (default: "relighting-viewer")

4. **Step 3: Generate Viewer**
   - Click on the "Generate 2.5D Viewer" button
   - Wait while the system processes the images and generates the necessary files
   - This process may take between 30 seconds and several minutes, depending on the size of the images

5. **Step 4: Visualize**
   - Once the process is complete, a link to access the viewer will be displayed
   - Click on "Open Viewer" to see the result in a new tab

### Using the Viewer

1. The viewer will open in Mirador, an IIIF visualization platform
2. To activate relighting mode, look for the corresponding icon in the toolbar
3. Once activated, move the cursor over the image to change the direction of the light
4. You can zoom, rotate, and move the image using the standard Mirador controls

## 3. Export for External Servers

The export functionality allows you to generate a package with all the necessary files to deploy the viewer on your own server, with URLs configured correctly.

### Export Process

1. After generating a viewer, you will see the "Export Viewer" section below the viewer information

2. **Configure Target URL**
   - Enter the base URL where the viewer will be located on your server
   - For example: `https://example.com/viewers/`
   - Be sure to include the final slash (/)

3. **Generate Export Package**
   - Click on the "Export Viewer" button
   - Wait while the system prepares the package (may take a few minutes)
   - A ZIP file with all the necessary files will be automatically downloaded

### Deployment on the External Server

1. Extract the ZIP file to the appropriate location on your server
   - For example, if the base URL is `https://example.com/viewers/`, extract the file to the `viewers` directory of your web server

2. Verify that the directory structure is correct:
   ```
   viewers/
   ├── index.html               # Main viewer page
   ├── iiif/                    # Directory with IIIF resources
   │   ├── manifest/            # IIIF manifests
   │   │   └── [manifest-id].json
   │   └── image/               # Tiled images
   │       ├── [albedo-image]/
   │       └── [normals-image]/
   └── mirador/                 # IIIF viewer
       └── dist/
   ```

3. Access the viewer on your server:
   ```
   https://example.com/viewers/
   ```

## 4. Generated File Structure

The export package includes the following components:

### Main Files
- `index.html`: Main page that loads the Mirador viewer with the necessary configuration
- `iiif/manifest/[id].json`: IIIF manifest that describes the structure of the object and its images

### Image Directories
- `iiif/image/[albedo-image]/`: Tiles of the albedo image
  - `info.json`: Image description according to the IIIF Image API standard
  - Multiple subdirectories with tiles in different sizes and regions
- `iiif/image/[normals-image]/`: Tiles of the normal map
  - Same structure as the albedo directory

### Mirador Viewer
- `mirador/dist/`: Mirador viewer code with the relighting plugin
  - `mirador-with-plugins.js`: Main viewer script

## 5. Troubleshooting

### Common Issues

#### The viewer appears blank or with a "Failed to fetch" error
- **Cause**: Problem with the IIIF service URLs
- **Solution**: Verify that the URLs in the index.html file and in the manifests match the structure of your server

#### 404 error when accessing the viewer
- **Cause**: Files are not in the correct location or the server is not configured correctly
- **Solution**: Verify the directory structure and file permissions on your server

#### The relighting mode does not work correctly
- **Cause 1**: Problems with WebGL in the browser
- **Solution 1**: Verify that your browser has support for and has enabled WebGL (https://get.webgl.org)
- **Cause 2**: Incorrect format of the normal map
- **Solution 2**: Make sure the normal map is in standard RGB tangent-space format

#### The export fails or the ZIP file is incomplete
- **Cause**: Memory problems or permissions during ZIP generation
- **Solution**: Try generating the viewer with lower resolution images or restart the Docker container:
  ```bash
  docker-compose -f docker-compose.main.yml restart
  ```

#### "Error generating tiles" when processing images
- **Cause**: Problems with Python dependencies or file system permissions
- **Solution**: The optimized Docker container should already have all the necessary dependencies. If problems persist, restart the container or try with smaller images

### Technical Support

If you encounter problems that you cannot resolve, please:
1. Check the Docker container logs:
   ```bash
   docker logs iiif-static-choices-iiif-static-choices-1
   ```
2. Open an issue in the GitHub repository with a detailed description of the problem and relevant logs

---

## Appendix: Web Server Configuration Examples

### Apache

Example Apache configuration for serving IIIF files:

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

### Nginx

Example Nginx configuration for serving IIIF files:

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

### CORS and Caching

For optimal performance, consider configuring:
- CORS headers to allow access from different domains
- Cache policies to improve the loading speed of tiles
- GZIP/Brotli compression to reduce the transfer size of JSON files
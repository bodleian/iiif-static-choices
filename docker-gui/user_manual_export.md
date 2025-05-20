# IIIF Static Choices: User Manual

This guide explains how to create interactive 2.5D viewers from your images and export them for use on your own servers.

## 1. Getting Started

### Prerequisites
- Docker and Docker Compose installed on your computer
- Modern web browser (Chrome, Firefox, Edge, Safari)

### Starting the Application

1. Open a terminal and run:
   ```bash
   docker-compose -f docker-compose.main.yml up -d
   ```

2. Open your browser and access:
   ```
   http://localhost:8080
   ```

## 2. Creating a 2.5D Viewer

### Required Images

You'll need two images with the same dimensions:
- **Albedo Image**: Regular color/texture image (PNG or JPG format)
- **Normal Map**: RGB image containing surface relief information

### Step-by-Step Process

1. **Upload Images**
   - Go to http://localhost:8080
   - Upload your albedo image in the first section
   - Upload your normal map in the second section

2. **Configure Metadata**
   - Enter a title for your viewer
   - Add a description (optional)
   - Add a shelfmark/identifier (optional)
   - Set an output ID (use a unique name for each viewer)

3. **Generate Viewer**
   - Click the "Generate 2.5D Viewer" button
   - Wait for processing to complete (may take a few minutes)

4. **View Your Creation**
   - When processing completes, click "Open Viewer"
   - To use the relighting effect, click the relighting icon in the toolbar
   - Move your cursor over the image to change the light direction

## 3. Exporting for Your Own Server

### Export Process

1. After creating your viewer, locate the "Export Viewer" section

2. Configure Export:
   - Enter the URL where you'll host the viewer (e.g., `https://example.com/viewers/`)
   - Make sure to include the trailing slash

3. Export:
   - Click "Export Viewer"
   - Wait for the ZIP file to download

### Deploying on Your Server

1. Upload and extract the ZIP file to your web server
   - The location should match the URL you specified during export

2. Access your viewer at the URL you specified

3. Make sure your web server has:
   - CORS headers enabled (to allow access from different domains)
   - Proper file permissions set on the extracted files

## 4. Managing Multiple Viewers

- Use unique IDs for each viewer (e.g., "fossil-1", "manuscript-35")
- Previously created viewers remain accessible at:
  - `http://localhost:8000/viewers/[your-id]/index.html`
  - `http://localhost:8000/public/[your-id].html`

## 5. Troubleshooting

If you encounter issues:

- **Blank viewer or loading errors**: Check your web server configuration
- **Relighting doesn't work**: Make sure your browser supports WebGL
- **Server errors**: Try restarting the container:
  ```bash
  docker-compose -f docker-compose.main.yml restart
  ```

For more detailed help, check the Docker logs:
```bash
docker logs iiif-static-choices-iiif-static-choices-1
```
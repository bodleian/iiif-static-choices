# Enhance IIIF Static Choices with Docker + GUI

This PR adds a web-based graphical interface and a Docker configuration to facilitate the creation of 2.5D relighting viewers using IIIF Static Choices.

## Motivation

The original tool requires technical knowledge for its use (command line, Python, etc.) and may present compatibility problems on different operating systems (especially on Windows). This improvement allows:

1.  Using the tool without deep technical knowledge
2.  Avoiding compatibility problems by running in a Docker container
3.  Offering an intuitive interface to upload images and configure the viewer

## Main Features

-   **Docker Container**: Packages all necessary dependencies in a stable Linux environment
-   **Web Interface**: Allows uploading images and configuring the viewer visually
-   **Automatic Generation**: Processes images and generates IIIF tiles and manifests without manual commands
-   **Integrated Preview**: Visualize the result directly from the interface

## How it Works

The user can:
1.  Drag and drop albedo and normal map images
2.  Configure metadata (title, description, etc.)
3.  Automatically generate the viewer with a single click
4.  Obtain a link to visualize the result

## Usage Instructions

```bash
# Clone the repository
git clone https://github.com/bodleian/iiif-static-choices.git
cd iiif-static-choices

# Build and run the Docker container
docker-compose up -d

# Access the web interface
# Open in browser: http://localhost:8080
```

## Technical Details

-   Backend: Node.js with Express
-   Frontend: HTML, CSS, JavaScript with Bootstrap
-   Container: Docker with Python 3.9 and Node.js
-   Persistence: Docker volume to save data between sessions

## Screenshots

![Alternative text for the image](gui.png)

---

More details in the README of the `docker-gui` folder
# IIIF Static Choices

A IIIF static tile and manifest generator that creates interactive 2.5D viewers from 2D images (albedo) and normal maps.

## Overview

IIIF Static Choices allows you to create interactive 2.5D relighting viewers without requiring specialist infrastructure. The tool includes the Bodleian Libraries Mirador plug-in from the ARCHiOx project.

Key features:
- Generate IIIF tiled images and manifests from regular 2D images
- Create interactive 2.5D relighting viewers
- Docker container with web interface for easy use
- Export functionality for deployment on external servers

![Animated picture showing a pyritised ammonite and someone interacting with it using the ARCHiOx Mirador plug-in](examples/fossil.gif)

## Quick Start (Docker - Recommended)

### Requirements
- Docker
- Docker Compose

### Installation & Usage

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

4. View your model at http://localhost:8000

## Alternative: Local Installation

For local installation without Docker:

```bash
# Install dependencies
poetry install --no-root

# Generate tiles and manifest
poetry run python iiif_generator.py tiles -t 256 -v 3.0
poetry run python iiif_generator.py manifest -f config.yml -o manifest.json

# Start server
poetry run python server.py 8000
```

## Documentation

- **[Docker GUI Guide](docker-gui/README.md)** - Web interface and Docker details
- **[Development Setup](DEVELOPMENT.md)** - Development environment and advanced usage

## Project Structure

```
iiif-static-choices/
├── docker-compose.main.yml   # Main Docker configuration
├── iiif_generator.py         # Core generation script
├── server.py                 # HTTP server
├── image/                    # Input images
├── iiif/                     # Generated IIIF resources
├── data/                     # Persistent data (Docker)
└── docker-gui/               # Web interface
```

## Credits

- **[Richard Allen](https://github.com/BeebBenjamin)** (Bodleian Libraries, ARCHiOx Project) - IIIF Core & Manifest Generation
- **[Jorge Cano](https://github.com/jcanofuentes)** (Factum Foundation, ARCHiOx Project) - GUI & Docker Implementation
- **Glen Robson** - Original Java [iiif-tiler](https://github.com/glenrobson/iiif-tiler) implementation

## Licensing

This project is covered by the [Mozilla Public License](LICENSE) except for bundled Mirador and Openseadragon builds which are covered by their own licenses.

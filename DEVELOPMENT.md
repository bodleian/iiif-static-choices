# IIIF Static Choices - Development Setup

## Quick Start

### Development Mode (Hot-reload for Node.js)
```bash
docker-compose -f docker-compose.dev.yml up --build
```

### Production Mode
```bash
docker-compose -f docker-compose.main.yml up --build
```

## Key Differences

| Feature | Development | Production |
|---------|-------------|------------|
| **Node.js Changes** | Auto-restart (nodemon) | Manual rebuild |
| **Python Changes** | Manual restart required | Manual rebuild |
| **File Mounting** | All source code | Data only |
| **Startup** | Fast (volumes) | Clean build |

## File Changes

- **Auto-restart**: JS, EJS, CSS, HTML files
- **Manual restart**: Python files, Docker config, dependencies

## Troubleshooting

```bash
# Restart development environment
docker-compose -f docker-compose.dev.yml restart

# Clean rebuild
docker-compose -f docker-compose.dev.yml down
docker-compose -f docker-compose.dev.yml up --build

# Check logs
docker-compose -f docker-compose.dev.yml logs -f
```

## Access

- **Web Interface**: http://localhost:8080
- **IIIF Server**: http://localhost:8000

## Advanced Usage

### Verification Commands
```bash
# Check container status
docker ps | grep iiif-static-choices

# View logs
docker logs -f iiif-static-choices-iiif-static-choices-1

# Check services
curl -s -o /dev/null -w "%{http_code}" http://localhost:8080
curl -s -o /dev/null -w "%{http_code}" http://localhost:8000
```

### Manual Commands
```bash
# Manual tile generation
docker exec -w /app iiif-static-choices-iiif-static-choices-1 python iiif_generator.py tiles -t 256 -v 3.0

# Manual manifest generation
docker exec -w /app iiif-static-choices-iiif-static-choices-1 bash -c 'cp image/config.yml . && python iiif_generator.py manifest -f config.yml -o iiif/manifest/output.json -d .'
```

## Data Persistence

- Host directory `./data` maps to `/app/data` in container
- Generated files persist across container restarts
- Backup data from `./data` folder

### File Structure
- **Uploads**: `/app/data/uploads/`
- **Images**: `/app/image/{id}-albedo.png`, `/app/image/{id}-normals.png`
- **Config**: `/app/image/{id}-config.yml`
- **Manifests**: `/app/iiif/manifest/{id}.json`
- **Tiles**: `/app/iiif/image/{id}-albedo/`, `/app/iiif/image/{id}-normals/`
- **Viewers**: `/app/data/viewers/{id}/index.html`

## Using Your Own Images

1. **Prepare images**:
   - Albedo: Regular color/texture image (PNG, JPG)
   - Normal Map: RGB surface relief information
   - Same resolution (recommended: 2048×2048+)

2. **Create config file** (see `image/ammonite-config.yml`)

3. **Use web interface or manual commands**

## Export for External Servers

1. Generate viewer in web interface
2. Enter target URL (e.g., `https://example.com/viewers/`)
3. Click "Export Viewer" and download ZIP
4. Extract on your server preserving directory structure

## Common Issues

- **Missing dependencies**: Container should have all packages installed
- **Memory issues**: Increase Docker memory allocation for large images
- **Port conflicts**: Ensure ports 8000/8080 are available

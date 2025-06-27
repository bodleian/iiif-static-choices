# IIIF Static Choices - Development Setup

## Quick Start

### Development Mode (Hot-reload for Node.js)
```bash
docker compose -f docker-compose.dev.yml up --build
```

### Production Mode
```bash
docker compose -f docker-compose.main.yml up --build
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
docker compose -f docker-compose.dev.yml restart

# Clean rebuild
docker compose -f docker-compose.dev.yml down
docker compose -f docker-compose.dev.yml up --build

# Check logs
docker compose -f docker-compose.dev.yml logs -f
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

### Data Cleanup Commands

Generated data can accumulate over time, especially during development. Use these commands to clean up space:

#### Complete Cleanup (All Generated Data)
```bash
# Clean all generated content (uploads, exports, tiles, manifests)
docker run --rm -v "$(pwd)/data:/data" -v "$(pwd)/iiif:/iiif" alpine sh -c 'find /data -mindepth 2 -delete && find /iiif -mindepth 2 -delete'
```

#### Selective Cleanup
```bash
# Clean only exports and uploads (keep viewers and manifests)
docker run --rm -v "$(pwd)/data:/data" alpine sh -c 'rm -rf /data/exports/* /data/uploads/*'

# Clean only large export files (keep extracted folders)
docker run --rm -v "$(pwd)/data:/data" alpine sh -c 'find /data/exports -name "*.zip" -delete'

# Clean specific viewer data
docker run --rm -v "$(pwd)/data:/data" -v "$(pwd)/iiif:/iiif" alpine sh -c 'rm -rf /data/viewers/VIEWER_ID /iiif/image/VIEWER_ID-* /iiif/manifest/VIEWER_ID.json'
```

#### Alternative with Sudo (if Docker unavailable)
```bash
# Requires sudo privileges
sudo rm -rf data/*
sudo rm -rf iiif/*
```

#### Why Docker for Cleanup?
Files created by Docker containers have root permissions and cannot be deleted directly by regular users. Using Docker ensures proper cleanup without permission issues.

#### Monitor Disk Usage
```bash
# Check size of data directories
du -sh data/* iiif/*

# Check Docker image sizes
docker images --format "table {{.Repository}}\t{{.Tag}}\t{{.Size}}"

# Clean up unused Docker resources
docker system prune -a
```

## Fresh Testing Workflow

### Complete Clean + Test
```bash
# Clean everything
docker system prune -af
sudo rm -rf data/*
sudo rm -rf iiif/*

# Test dev environment
docker compose -f docker-compose.dev.yml build --no-cache
docker compose -f docker-compose.dev.yml up

# Test production environment  
docker compose -f docker-compose.main.yml build --no-cache
docker compose -f docker-compose.main.yml up
```

### Quick Clean Restart
```bash
docker compose -f docker-compose.dev.yml down
docker compose -f docker-compose.dev.yml build --no-cache
docker compose -f docker-compose.dev.yml up
```

## Common Issues

- **Memory issues**: Increase Docker memory allocation for large images
- **Port conflicts**: Ensure ports 8000/8080 are available

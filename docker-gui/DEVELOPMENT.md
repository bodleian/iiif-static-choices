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

# Performance testing
./scripts/performance-test.sh

# Clean all generated data
./scripts/cleanup_public.sh
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

> **⚠️ IMPORTANT**: Always stop running containers before cleanup to avoid file lock issues:
> ```bash
> docker compose -f docker-compose.dev.yml down
> ```

#### Complete Cleanup (All Generated Data)
```bash
# IMPORTANT: First stop any running containers
docker compose -f docker-compose.dev.yml down

# Clean all generated content using absolute paths
docker run --rm \
  -v "/home/fenix/github/iiif-static-choices/data:/data" \
  -v "/home/fenix/github/iiif-static-choices/iiif:/iiif" \
  alpine sh -c 'rm -rf /data/public/* /data/exports/* /data/uploads/* /data/viewers/* /iiif/image/* /iiif/manifest/*'
```

#### Selective Cleanup
```bash
# Clean only public folder (viewer HTML files)
docker run --rm -v "/home/fenix/github/iiif-static-choices/data:/data" alpine sh -c 'rm -rf /data/public/*'

# Clean only exports and uploads (keep viewers and manifests)
docker run --rm -v "/home/fenix/github/iiif-static-choices/data:/data" alpine sh -c 'rm -rf /data/exports/* /data/uploads/*'

# Clean only large export files (keep extracted folders)
docker run --rm -v "/home/fenix/github/iiif-static-choices/data:/data" alpine sh -c 'find /data/exports -name "*.zip" -delete'

# Clean specific viewer data
docker run --rm \
  -v "/home/fenix/github/iiif-static-choices/data:/data" \
  -v "/home/fenix/github/iiif-static-choices/iiif:/iiif" \
  alpine sh -c 'rm -rf /data/viewers/VIEWER_ID /iiif/image/VIEWER_ID-* /iiif/manifest/VIEWER_ID.json'
```

#### Alternative Methods

##### Using Cleanup Script (Recommended)
```bash
# Use the provided cleanup script (if available in project root)
./cleanup_public.sh
```

##### Manual with Sudo (if Docker commands fail)
```bash
# CAUTION: Requires sudo privileges
# Only use if Docker cleanup commands don't work
sudo rm -rf data/public/* data/uploads/* data/exports/* data/viewers/*
sudo rm -rf iiif/image/* iiif/manifest/*
```

#### Why Docker for Cleanup?
Files created by Docker containers have root permissions and cannot be deleted directly by regular users. Using Docker ensures proper cleanup without permission issues. The cleanup commands use Alpine Linux containers to safely remove files with proper permissions.

#### Troubleshooting Cleanup Issues

If cleanup commands fail:

1. **Ensure containers are stopped**: `docker compose -f docker-compose.dev.yml down`
2. **Check if paths exist**: `ls -la data/` and `ls -la iiif/`
3. **Verify Docker is running**: `docker ps`
4. **Use absolute paths** instead of `$(pwd)` if relative paths fail
5. **As last resort**, use sudo commands (see Alternative Methods above)

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

## Development Scripts

The project includes utility scripts in the `scripts/` directory for common development tasks:

### Performance Testing

Test multi-viewer generation performance to identify degradation:

```bash
# Start containers first
docker compose -f docker-compose.dev.yml up -d

# Run performance test
cd scripts/
./performance-test.sh
```

**What it does:**
- Generates 5 sequential IIIF viewers
- Measures generation time for each (~100-120s expected)
- Outputs results to `performance-test-results.txt`
- Helps identify memory leaks or performance issues

### Automated Cleanup

Clean all generated data using the cleanup script:

```bash
./scripts/cleanup_public.sh
```

**What it cleans:**
- All viewer HTML files in `/data/public/`
- Uploaded images in `/data/uploads/`
- Export packages in `/data/exports/`
- Generated viewers in `/data/viewers/`
- IIIF tiles in `/iiif/image/`
- IIIF manifests in `/iiif/manifest/`

### Script Documentation

For detailed information about all available scripts, see:
- [`scripts/README.md`](../scripts/README.md) - Complete script documentation
- Individual scripts contain inline documentation

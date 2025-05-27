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

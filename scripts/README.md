# Development Scripts

This directory contains utility scripts and tools for development and maintenance of the IIIF Static Choices project.

## Scripts

### cleanup_public.sh
**Purpose:** Cleans up generated files and data from Docker volumes

**Usage:**
```bash
./scripts/cleanup_public.sh
```

**What it cleans:**
- `/data/public/*` - Viewer HTML files
- `/data/uploads/*` - Uploaded images
- `/data/exports/*` - Export packages
- `/data/viewers/*` - Generated viewers
- `/iiif/image/*` - IIIF image tiles
- `/iiif/manifest/*` - IIIF manifests

**Note:** Requires Docker to handle root-owned files created by containers.

---

### performance-test.sh
**Purpose:** Tests multi-viewer generation performance to identify degradation

**Prerequisites:**
- Docker containers running: `docker compose -f docker-compose.dev.yml up -d`
- Server accessible at http://localhost:8080

**Usage:**
```bash
cd scripts/
./performance-test.sh
```

**What it does:**
- Generates 5 sequential IIIF viewers
- Measures generation time for each (expected: ~100-120s)
- Logs results to `performance-test-results.txt`
- Identifies performance degradation issues

**Output:**
- Console progress with timing for each viewer
- Results file with detailed metrics
- File count monitoring for resource leaks

---

## Adding New Scripts

When adding new development scripts:
1. Place them in this `scripts/` directory
2. Make them executable: `chmod +x script-name.sh`
3. Add documentation to this README
4. Include clear comments in the script itself
5. Consider adding to `.gitignore` any output files

## Notes

- These are development tools, not production scripts
- They assume a local Docker development environment
- All scripts should be run from the project root or scripts directory as indicated

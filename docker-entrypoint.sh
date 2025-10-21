#!/bin/bash
set -e

echo "Starting IIIF Static Choices..."

# Clean up old symlinks from data volume to avoid loops (only if they are symlinks)
[ -L /app/data/iiif/manifest ] && rm -f /app/data/iiif/manifest
[ -L /app/data/iiif/image ] && rm -f /app/data/iiif/image

# Prepare persistent directories
mkdir -p /app/data/iiif/manifest /app/data/iiif/image /app/data/image
cp /app/docker-gui/iiif-server-for-docker-app.py /app/data/server.py

# Copy initial content to data volume if not present
if [ ! -d "/app/data/mirador" ]; then
  cp -r /app/mirador /app/data/mirador
fi
if [ ! -d "/app/data/openseadragon" ]; then
  cp -r /app/openseadragon /app/data/openseadragon 2>/dev/null || true
fi

# Create reverse symlinks: ephemeral -> persistent
# This ensures all generated content persists across container restarts
rm -rf /app/iiif /app/image /app/viewers /app/public
ln -sf /app/data/iiif /app/iiif
ln -sf /app/data/image /app/image
ln -sf /app/data/viewers /app/viewers
ln -sf /app/data/public /app/public

echo "Persistent storage configured:"
echo "  /app/iiif -> /app/data/iiif"
echo "  /app/image -> /app/data/image"

# Start web interface in background
echo "Starting web interface on port 8080..."
cd /app/docker-gui/web-interface
npm start &

# Give the web interface time to start
sleep 5

# Start IIIF server
echo "Starting IIIF server on port 8000..."
cd /app
exec python /app/data/server.py 8000

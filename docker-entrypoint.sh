#!/bin/bash
set -e

echo "Starting IIIF Static Choices..."

# Prepare directories and symbolic links
mkdir -p /app/data/iiif
cp /app/docker-gui/iiif-server-for-docker-app.py /app/data/server.py

# Create symbolic links
ln -sf /app/data/iiif /app/iiif
ln -sf /app/data /app/viewers
ln -sf /app/data /app/public
ln -sf /app/data /app/mirador

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

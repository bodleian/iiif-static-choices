#!/bin/bash
# Script to clean up the public folder and other generated data

echo "Cleaning up public folder and generated data..."

# Navigate to project directory
cd /home/fenix/github/iiif-static-choices

# Method 1: Using Docker with Alpine
echo "Attempting cleanup with Docker Alpine container..."
docker run --rm \
  -v "/home/fenix/github/iiif-static-choices/data:/data" \
  -v "/home/fenix/github/iiif-static-choices/iiif:/iiif" \
  alpine sh -c '
    echo "Cleaning public folder..."
    if [ -d /data/public ]; then
      rm -rf /data/public/*
      echo "Public folder cleaned"
    else
      echo "Public folder not found in /data"
    fi
    
    echo "Cleaning uploads..."
    if [ -d /data/uploads ]; then
      rm -rf /data/uploads/*
      echo "Uploads cleaned"
    fi
    
    echo "Cleaning exports..."
    if [ -d /data/exports ]; then
      rm -rf /data/exports/*
      echo "Exports cleaned"
    fi
    
    echo "Cleaning viewers..."
    if [ -d /data/viewers ]; then
      rm -rf /data/viewers/*
      echo "Viewers cleaned"
    fi
    
    echo "Cleaning IIIF tiles..."
    if [ -d /iiif/image ]; then
      rm -rf /iiif/image/*
      echo "IIIF images cleaned"
    fi
    
    echo "Cleaning IIIF manifests..."
    if [ -d /iiif/manifest ]; then
      rm -rf /iiif/manifest/*
      echo "IIIF manifests cleaned"
    fi
  '

echo "Cleanup complete!"
echo ""
echo "Verifying cleanup..."
echo "Files in data/public: $(ls -1 data/public 2>/dev/null | wc -l)"
echo "Files in data/uploads: $(ls -1 data/uploads 2>/dev/null | wc -l)"
echo "Files in data/exports: $(ls -1 data/exports 2>/dev/null | wc -l)"
echo "Files in data/viewers: $(ls -1 data/viewers 2>/dev/null | wc -l)"

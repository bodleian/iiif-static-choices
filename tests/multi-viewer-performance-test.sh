#!/bin/bash

# =============================================================================
# IIIF Static Choices - Multi-Viewer Performance Testing Script
# =============================================================================
# 
# PURPOSE:
#   Tests the generation performance of multiple IIIF viewers sequentially
#   to identify any performance degradation or memory issues when creating
#   multiple viewers in succession.
#
# WHAT IT DOES:
#   1. Creates 5 sequential viewers using the same source images
#   2. Measures the generation time for each viewer
#   3. Logs results to identify any performance degradation
#   4. Cleans up test files after completion
#
# PREREQUISITES:
#   - Docker containers must be running:
#     $ docker compose -f docker-compose.dev.yml up -d
#   - Server must be accessible at http://localhost:8080
#   - Source images must exist in ../image/ directory:
#     - ammonite-albedo.png (33MB)
#     - ammonite-normals.png (29MB)
#
# USAGE:
#   $ cd tests/
#   $ ./multi-viewer-performance-test.sh
#
# OUTPUT:
#   - Console output showing progress and times
#   - Results file: multi-viewer-test-results.txt
#
# EXPECTED RESULTS:
#   - Each viewer should take approximately 100-120 seconds
#   - Times should remain stable without significant degradation
#   - No memory issues or crashes
#
# =============================================================================

# Configuration
BASE_URL="http://localhost:8080"
RESULTS_FILE="multi-viewer-test-results.txt"
SOURCE_ALBEDO="../image/ammonite-albedo.png"  # 33MB albedo texture
SOURCE_NORMALS="../image/ammonite-normals.png" # 29MB normals map

# Initialize results file with header information
echo "IIIF Static Choices - Multi-viewer Performance Test" > $RESULTS_FILE
echo "Date: $(date)" >> $RESULTS_FILE
echo "Testing sequential viewer generation performance" >> $RESULTS_FILE
echo "========================================" >> $RESULTS_FILE
echo "" >> $RESULTS_FILE

# -----------------------------------------------------------------------------
# Function: generate_viewer
# Description: Generates a single IIIF viewer and measures its creation time
# Parameters:
#   $1 - viewer_id: Unique identifier for the viewer (e.g., 1, 2, 3...)
# Process:
#   1. Creates unique copies of source images to avoid caching
#   2. Uploads images via curl POST request
#   3. Measures total upload and processing time
#   4. Logs results to file
#   5. Cleans up temporary image copies
# -----------------------------------------------------------------------------
generate_viewer() {
    local viewer_id=$1
    local albedo_copy="perf-test-$viewer_id-albedo.png"
    local normals_copy="perf-test-$viewer_id-normals.png"
    
    printf "Testing viewer #$viewer_id...\n"
    
    # Create unique copies of images to prevent caching effects
    # This ensures each test is independent and measures actual processing time
    cp "$SOURCE_ALBEDO" "$albedo_copy"
    cp "$SOURCE_NORMALS" "$normals_copy"
    
    # Record start time with nanosecond precision
    start_time=$(date +%s.%N)
    
    # Upload images and create viewer via HTTP POST
    # - Uploads both albedo and normals textures (total ~60MB)
    # - Sets viewer ID, title, description, and metadata
    # - Silent output to avoid console clutter
    curl -X POST "$BASE_URL/upload" \
        -F "albedo=@$albedo_copy" \
        -F "normals=@$normals_copy" \
        -F "outputId=perf-test-$viewer_id" \
        -F "title=Performance Test $viewer_id" \
        -F "description=Multi-viewer performance testing" \
        -F "provider=Test Suite" \
        -F "language=en" \
        --silent --output /dev/null
    
    # Record end time and calculate duration
    end_time=$(date +%s.%N)
    duration=$(echo "$end_time - $start_time" | bc)
    
    # Log results to both console and file
    echo "Viewer $viewer_id: ${duration}s" | tee -a $RESULTS_FILE
    
    # Count total files to monitor resource usage
    # This helps identify if files are accumulating unexpectedly
    total_files=$(find /home/fenix/github/iiif-static-choices/iiif -type f 2>/dev/null | wc -l)
    echo "Total files after viewer $viewer_id: $total_files" >> $RESULTS_FILE
    
    # Clean up temporary image copies to save disk space
    rm -f "$albedo_copy" "$normals_copy"
}

# =============================================================================
# MAIN EXECUTION
# =============================================================================

# -----------------------------------------------------------------------------
# Pre-test cleanup
# Removes any existing test files from previous runs to ensure clean state
# Note: This may fail if the container is not running (expected behavior)
# -----------------------------------------------------------------------------
echo "Cleaning previous test files..."
docker exec -u root iiif-static-choices-iiif-static-choices-dev-1 bash -c "rm -rf /app/iiif/image/perf-test-*" 2>/dev/null || true
docker exec -u root iiif-static-choices-iiif-static-choices-dev-1 bash -c "rm -f /app/iiif/manifest/perf-test-*.json" 2>/dev/null || true
echo "Cleanup completed."
echo ""

# -----------------------------------------------------------------------------
# Server connectivity check
# Verifies that the server is running before starting tests
# -----------------------------------------------------------------------------
echo "Checking server connectivity..."
response=$(curl -s -o /dev/null -w "%{http_code}" $BASE_URL)
if [ "$response" != "200" ]; then
    echo "ERROR: Server is not responding at $BASE_URL (HTTP $response)"
    echo "Please ensure Docker containers are running:"
    echo "  $ docker compose -f docker-compose.dev.yml up -d"
    exit 1
fi
echo "Server is responding (HTTP $response)"
echo ""

# -----------------------------------------------------------------------------
# Main test loop
# Generates 5 viewers sequentially to test for performance degradation
# Expected: Each viewer should take ~100-120 seconds with stable times
# -----------------------------------------------------------------------------
echo "Starting multi-viewer performance test..."
echo ""

for i in {1..5}; do
    generate_viewer $i
    echo ""  # Add spacing between test results
done

# -----------------------------------------------------------------------------
# Test completion summary
# -----------------------------------------------------------------------------
echo ""
echo "========================================" >> $RESULTS_FILE
echo "Test completed at: $(date)" >> $RESULTS_FILE
echo "" >> $RESULTS_FILE

echo "Multi-viewer performance test completed. Results saved in $RESULTS_FILE"
echo ""
echo "Expected result: Times should remain stable (~100-120s each) without degradation"
echo ""
echo "To view results: cat $RESULTS_FILE"

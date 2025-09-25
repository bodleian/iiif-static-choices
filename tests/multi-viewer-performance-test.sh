#!/bin/bash

# Multi-viewer performance testing script for IIIF Static Choices Docker GUI
# Tests generation times for multiple viewers to verify stable performance

BASE_URL="http://localhost:8080"
RESULTS_FILE="multi-viewer-test-results.txt"
SOURCE_ALBEDO="../image/ammonite-albedo.png"
SOURCE_NORMALS="../image/ammonite-normals.png"

echo "IIIF Static Choices - Multi-viewer Performance Test" > $RESULTS_FILE
echo "Date: $(date)" >> $RESULTS_FILE
echo "Testing sequential viewer generation performance" >> $RESULTS_FILE
echo "========================================" >> $RESULTS_FILE

generate_viewer() {
    local viewer_id=$1
    local albedo_copy="perf-test-$viewer_id-albedo.png"
    local normals_copy="perf-test-$viewer_id-normals.png"
    
    printf "Testing viewer #$viewer_id...\n"
    
    # Create unique copies for this viewer to avoid caching/reuse
    cp "$SOURCE_ALBEDO" "$albedo_copy"
    cp "$SOURCE_NORMALS" "$normals_copy"
    
    start_time=$(date +%s.%N)
    
    curl -X POST "$BASE_URL/upload" \
        -F "albedo=@$albedo_copy" \
        -F "normals=@$normals_copy" \
        -F "outputId=perf-test-$viewer_id" \
        -F "title=Performance Test $viewer_id" \
        -F "description=Multi-viewer performance testing" \
        -F "provider=Test Suite" \
        -F "language=en" \
        --silent --output /dev/null
    
    end_time=$(date +%s.%N)
    duration=$(echo "$end_time - $start_time" | bc)
    
    echo "Viewer $viewer_id: ${duration}s" | tee -a $RESULTS_FILE
    
    total_files=$(find /home/fenix/github/iiif-static-choices/iiif -type f | wc -l)
    echo "Total files after viewer $viewer_id: $total_files" >> $RESULTS_FILE
    
    # Clean up temporary copies
    rm -f "$albedo_copy" "$normals_copy"
}

# Clean previous test files
echo "Cleaning previous test files..."
docker exec -u root iiif-static-choices-iiif-static-choices-dev-1 bash -c "rm -rf /app/iiif/image/perf-test-*"
docker exec -u root iiif-static-choices-iiif-static-choices-dev-1 bash -c "rm -f /app/iiif/manifest/perf-test-*.json"
echo "Cleanup completed."
echo ""

# Test sequence - 5 viewers to test for performance degradation
echo "Starting multi-viewer performance test..."
echo ""

for i in {1..5}; do
    generate_viewer $i
    echo ""
done

echo ""
echo "Multi-viewer performance test completed. Results in $RESULTS_FILE"
echo ""
echo "Expected result: Times should remain stable (~1-2s each) without degradation"

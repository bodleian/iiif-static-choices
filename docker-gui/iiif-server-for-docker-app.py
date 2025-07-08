#!/usr/bin/env python3

from http.server import HTTPServer, SimpleHTTPRequestHandler
import sys
import os
import time

# Configure logging
def log_message(message):
    """Log a message with timestamp"""
    timestamp = time.strftime("%Y-%m-%d %H:%M:%S")
    print(f"[{timestamp}] [IIIF-SERVER] {message}")

log_message("Starting IIIF server")
log_message(f"Current directory: {os.getcwd()}")

# Define directories
APP_DIR = "/app"
DATA_DIR = "/app/data"
IIIF_DIR = f"{DATA_DIR}/iiif"
MANIFEST_DIR = f"{IIIF_DIR}/manifest"
IMAGE_DIR = f"{IIIF_DIR}/image"
VIEWERS_DIR = f"{DATA_DIR}/viewers"
PUBLIC_DIR = f"{DATA_DIR}/public"

# Verify symbolic links
def verify_symlink(link_path, target_path):
    """Verify that a symbolic link exists and points to the correct target"""
    if os.path.islink(link_path):
        actual_target = os.readlink(link_path)
        if actual_target != target_path:
            log_message(f"Warning: Symlink {link_path} points to {actual_target}, expected {target_path}")
        else:
            log_message(f"Symlink verified: {link_path} -> {target_path}")
    else:
        if os.path.exists(link_path):
            log_message(f"Warning: {link_path} exists but is not a symlink")
        else:
            log_message(f"Warning: Symlink {link_path} does not exist")

# Verify critical symlinks
log_message("Verifying symbolic links")
verify_symlink(f"{IIIF_DIR}/manifest", f"{APP_DIR}/iiif/manifest")
verify_symlink(f"{IIIF_DIR}/image", f"{APP_DIR}/iiif/image")
verify_symlink(f"{APP_DIR}/viewers", f"{DATA_DIR}/viewers")
verify_symlink(f"{APP_DIR}/public", f"{DATA_DIR}/public")

class CORSRequestHandler(SimpleHTTPRequestHandler):
    """
    Class to add CORS access control headers to the server.
    """
    def __init__(self, *args, **kwargs):
        log_message(f"Initializing server with root directory: {DATA_DIR}")
        super().__init__(*args, directory=DATA_DIR, **kwargs)

    def end_headers(self):
        """
        Method to add CORS policies to server.
        :return:
        """
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', '*')
        self.send_header('Access-Control-Allow-Headers', '*')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        return super(CORSRequestHandler, self).end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()
        
    def log_message(self, format, *args):
        # Override to add more detailed logging
        sys.stderr.write("%s - - [%s] %s\n" %
                         (self.address_string(),
                          self.log_date_time_string(),
                          format % args))
        
        # If this is a request for a manifest or image, log more details
        request = args[0].split()
        if len(request) > 1:
            path = request[1]
            if '/iiif/manifest/' in path or '/iiif/image/' in path:
                log_message(f"Requested: {path}")
                full_path = os.path.join(DATA_DIR, path[1:])
                log_message(f"Looking for file at: {full_path}")
                file_exists = os.path.exists(full_path)
                log_message(f"File exists: {file_exists}")
                
                # If symlinks are working correctly, this should resolve to the real path
                if os.path.islink(os.path.dirname(full_path)):
                    real_path = os.path.realpath(full_path)
                    log_message(f"Real path via symlink: {real_path}")
                    log_message(f"Real file exists: {os.path.exists(real_path)}")

# Get host and port from command line args
host = sys.argv[1] if len(sys.argv) > 2 else '0.0.0.0'
port = int(sys.argv[len(sys.argv)-1]) if len(sys.argv) > 1 else 8000

log_message(f"Starting server on {host}:{port}")
log_message(f"Serving files from {DATA_DIR}")
try:
    httpd = HTTPServer((host, port), CORSRequestHandler)
    httpd.serve_forever()
except Exception as e:
    log_message(f"Error starting server: {e}")

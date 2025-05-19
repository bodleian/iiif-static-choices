#!/usr/bin/env python3

from http.server import HTTPServer, SimpleHTTPRequestHandler
import sys
import os
import shutil

# Copiar los archivos de manifiesto al directorio de datos
os.makedirs("/app/data/iiif/manifest", exist_ok=True)
os.makedirs("/app/data/iiif/image", exist_ok=True)

# Copiar manifiestos
for file in os.listdir("/app/iiif/manifest"):
    if file.endswith(".json"):
        shutil.copy2(f"/app/iiif/manifest/{file}", f"/app/data/iiif/manifest/{file}")

# Copiar imágenes
for dir_name in os.listdir("/app/iiif/image"):
    if os.path.isdir(f"/app/iiif/image/{dir_name}"):
        os.makedirs(f"/app/data/iiif/image/{dir_name}", exist_ok=True)
        for root, dirs, files in os.walk(f"/app/iiif/image/{dir_name}"):
            rel_path = os.path.relpath(root, f"/app/iiif/image/{dir_name}")
            if rel_path != ".":
                os.makedirs(f"/app/data/iiif/image/{dir_name}/{rel_path}", exist_ok=True)
            for file in files:
                source = os.path.join(root, file)
                destination = f"/app/data/iiif/image/{dir_name}"
                if rel_path != ".":
                    destination = f"{destination}/{rel_path}"
                destination = f"{destination}/{file}"
                try:
                    shutil.copy2(source, destination)
                except Exception as e:
                    print(f"Error copiando {source} a {destination}: {e}")

# Crear enlaces simbólicos
os.makedirs("/app/data/viewers", exist_ok=True)
os.makedirs("/app/data/public", exist_ok=True)

# Asegurarnos de que los directorios en /app/ existan
if not os.path.exists("/app/viewers"):
    os.symlink("/app/data/viewers", "/app/viewers")

if not os.path.exists("/app/public"):
    os.symlink("/app/data/public", "/app/public")

class CORSRequestHandler(SimpleHTTPRequestHandler):
    """
    Class to add CORS access control headers to the server.
    """
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory="/app/data", **kwargs)

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

host = sys.argv[1] if len(sys.argv) > 2 else '0.0.0.0'
port = int(sys.argv[len(sys.argv)-1]) if len(sys.argv) > 1 else 8000

print("Listening on {}:{}".format(host, port))
print("Serving files from /app/data")
httpd = HTTPServer((host, port), CORSRequestHandler)
httpd.serve_forever()

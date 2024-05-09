#!/usr/bin/env python3

# It's python3 -m http.server PORT for a CORS world

from http.server import HTTPServer, SimpleHTTPRequestHandler
import sys


class CORSRequestHandler(SimpleHTTPRequestHandler):
    """
    Class to add CORS access control headers to the server.
    """

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
port = int(sys.argv[len(sys.argv)-1]) if len(sys.argv) > 1 else 8080

print("Listening on {}:{}".format(host, port))
httpd = HTTPServer((host, port), CORSRequestHandler)  # throws a type warning here, but it still works
httpd.serve_forever()

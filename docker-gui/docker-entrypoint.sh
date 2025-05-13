#!/bin/bash

# Iniciar el servidor de interfaz web
cd /app/docker-gui/web-interface
npm start &

# Esperar a que la interfaz esté lista
sleep 5

# Iniciar el servidor Python para la previsualización
cd /app
python server.py 8000

# Imagen base
FROM python:3.9-slim

# Variables de entorno
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV PATH="/root/.local/bin:$PATH"

# Instalar dependencias del sistema
RUN apt-get update && apt-get install -y \
    git \
    curl \
    nodejs \
    npm \
    && rm -rf /var/lib/apt/lists/*

# Instalar Poetry
RUN curl -sSL https://install.python-poetry.org | python3 -

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos del proyecto
COPY . /app/

# Instalar dependencias del proyecto
RUN cd /app && poetry config virtualenvs.create false \
    && poetry install --no-interaction --no-ansi --no-root

# Instalar dependencias para la interfaz web
WORKDIR /app/docker-gui/web-interface
RUN npm install

# Exponer puertos
EXPOSE 8000 8080

# Volumen para datos persistentes
VOLUME ["/app/data"]

# Script de inicio
COPY docker-gui/docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh
ENTRYPOINT ["/docker-entrypoint.sh"]
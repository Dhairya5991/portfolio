#!/bin/bash

IMAGE_NAME=portfolio
CONTAINER_NAME=portfolio-container
PORT=8000

echo "Building Docker image..."
docker build -t $IMAGE_NAME .

echo "Stopping existing container (if any)..."
docker rm -f $CONTAINER_NAME 2>/dev/null

echo "Running Docker container..."
docker run -d \
  --name $CONTAINER_NAME \
  -p $PORT:8000 \
  $IMAGE_NAME

echo "Application is running!"
echo "Access it at: http://localhost:$PORT"

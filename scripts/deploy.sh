#!/bin/bash

# Pull latest changes
git pull origin main

# Install dependencies
npm install

# Build Docker images
docker-compose build

# Stop and remove existing containers
docker-compose down

# Start new containers
docker-compose up -d

echo "Deployment complete. Services are now running."

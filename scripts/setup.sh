#!/bin/bash

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Initialize database
node scripts/init-db.js

# Build Docker images
docker-compose build

echo "Setup complete. You can now run 'docker-compose up' to start the services."

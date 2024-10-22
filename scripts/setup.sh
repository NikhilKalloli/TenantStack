#!/bin/bash

# Install root dependencies
npm install

# Set up environment variables
cp .env.example .env

echo "Please update the .env file with your actual values before proceeding."

# Install dependencies for each package
packages=("api" "tenant-manager" "auth-service" "audit-logger")
for package in "${packages[@]}"
do
    echo "Installing dependencies for $package"
    cd "packages/$package"
    npm install
    cd ../..
done

# Build Docker images
docker-compose build

echo "Setup complete. You can now run 'npm run start' to start the services."

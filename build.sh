#!/bin/bash

# Build script for deployment
echo "Starting build process..."

# Install dependencies
if command -v pnpm &> /dev/null; then
    echo "Using pnpm..."
    pnpm install
    pnpm run build
elif command -v npm &> /dev/null; then
    echo "Using npm..."
    npm install
    npm run build
else
    echo "No package manager found!"
    exit 1
fi

echo "Build completed successfully!"
echo "Static files are in the 'out' directory"

# Deploy static files
echo "Deploying static files..."
php deploy.php

echo "Deployment completed! Website is ready to serve."

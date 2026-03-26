#!/bin/bash

# Navigate to the script's directory (ensures it runs correctly from anywhere)
cd "$(dirname "$0")"

echo "Checking dependencies..."
if [ ! -d "node_modules" ]; then
    echo "node_modules not found. Installing dependencies..."
    npm install
fi

echo "Starting the personal branding website..."
npm run dev

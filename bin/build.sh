#!/bin/bash

echo "Setting up build folder"

rm -rf build/
mkdir build
mkdir -p build/static/css
cp -r public/* build

echo "Starting build"

npx tailwindcss -i ./src/tailwind.css -o ./build/static/css/index.css --minify
node ./bin/esbuild.js --minify

echo "Finished build"

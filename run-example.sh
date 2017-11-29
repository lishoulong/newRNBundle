#!/bin/bash

mkdir build
node ./build.js --platform android --output dist --config .splitconfig --dev false

# rm -rf android/app/src/main/assets/bundle/*
# cp -R build/bundle-output/split/* android/app/src/main/assets/bundle
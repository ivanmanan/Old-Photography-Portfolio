# Contents
- [Contents](#contents)
- [Overview](#overview)
- [Launching Application](#launching-application)
  - [Development](#development)
  - [Release](#release)
  - [Remove Website](#remove-website)
- [Adding Photos](#adding-photos)

# Overview
This is my photography portfolio.

# Launching Application
```bash
git clone git@github.com:ivanmanan/Photography-Portfolio.git portfolio
```

## Development
Go to localhost:3000
```bash
npm install
npm start
```

## Release
```bash
npm run build
./launch
```

## Remove Website
```bash
./close
```

# Adding Photos
1. Create a directory and name the photo after the directory name appended with the iteration number,
   starting with the number 0.
```bash
/original_photos/<DIR_NAME>/<DIR_NAME>0.jpg
```

2. Update `photos.js` with the new directory `<DIR_NAME>`.

3. Compress the image and output into `/public/images`. The bash script should already hnadle this.
```bash
node compress_image.js
```

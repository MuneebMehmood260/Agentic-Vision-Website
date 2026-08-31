import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { execSync } from 'child_process';

const svgPath = path.resolve('public/favicon.svg');
const svgBuffer = fs.readFileSync(svgPath);

async function generate() {
  console.log('Generating high-resolution favicons from SVG...');

  // 1. favicon.png (512x512)
  await sharp(svgBuffer)
    .resize(512, 512)
    .png()
    .toFile(path.resolve('public/favicon.png'));

  // 2. apple-touch-icon.png (180x180)
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.resolve('public/apple-touch-icon.png'));

  // 3. favicon-32x32.png
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile(path.resolve('public/favicon-32x32.png'));

  // 4. favicon-16x16.png
  await sharp(svgBuffer)
    .resize(16, 16)
    .png()
    .toFile(path.resolve('public/favicon-16x16.png'));

  // 5. favicon.ico
  try {
    execSync('convert public/favicon-16x16.png public/favicon-32x32.png public/favicon.ico');
    console.log('favicon.ico generated via ImageMagick');
  } catch (err) {
    console.log('Fallback copying 32x32 to favicon.ico');
    fs.copyFileSync('public/favicon-32x32.png', 'public/favicon.ico');
  }

  console.log('All favicons generated successfully!');
}

generate().catch(console.error);

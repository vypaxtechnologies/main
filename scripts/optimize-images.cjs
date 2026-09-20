const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const distDir = path.join(rootDir, 'dist');

// Images to optimize with their target dimensions
const imagesToProcess = [
  { file: 'project-digital-growth.jpg', width: 1200, quality: 75 },
  { file: 'project-clinic-growth.jpg', width: 1200, quality: 75 },
  { file: 'project-property-discovery.jpg', width: 1200, quality: 75 },
  { file: 'project-ops-dashboard.jpg', width: 1200, quality: 75 },
  { file: 'Vypax without background logo.png', width: 320, quality: 85 },
  { file: 'Vypax favicon .png', width: 64, quality: 85 },
  { file: 'Vypax-Internship-demo.png', width: 1200, quality: 80 },
];

async function optimizeImage(inputPath, outputDir, basename, width, quality) {
  const outputPath = path.join(outputDir, `${basename}.webp`);
  await sharp(inputPath)
    .resize(width, null, { withoutIncrease: true })
    .webp({ quality, lossless: false })
    .toFile(outputPath);
  const stats = fs.statSync(outputPath);
  console.log(`  ${basename}.webp: ${(stats.size / 1024).toFixed(1)}KB (was ${(fs.statSync(inputPath).size / 1024).toFixed(1)}KB)`);
  return outputPath;
}

async function main() {
  // Process public images -> output to public/
  for (const img of imagesToProcess) {
    const inputPath = path.join(publicDir, img.file);
    if (!fs.existsSync(inputPath)) {
      console.log(`  SKIP: ${img.file} not found`);
      continue;
    }
    const basename = path.parse(img.file).name.replace(/\s+/g, '');
    await optimizeImage(inputPath, publicDir, basename, img.width, img.quality);
  }

  // Copy WebP to dist if it exists
  if (fs.existsSync(distDir)) {
    for (const img of imagesToProcess) {
      const inputPath = path.join(publicDir, img.file);
      if (!fs.existsSync(inputPath)) continue;
      const basename = path.parse(img.file).name.replace(/\s+/g, '');
      const srcPath = path.join(publicDir, `${basename}.webp`);
      const dstPath = path.join(distDir, `${basename}.webp`);
      if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, dstPath);
      }
    }
  }

  console.log('\nDone!');
}

main().catch(console.error);

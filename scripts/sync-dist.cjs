const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const assetsDir = path.join(rootDir, 'assets');

if (!fs.existsSync(distDir)) {
  console.error('Dist directory does not exist. Run vite build first.');
  process.exit(1);
}

// 1. Copy compiled index.html to root
console.log('Copying compiled index.html to root...');
fs.copyFileSync(path.join(distDir, 'index.html'), path.join(rootDir, 'index.html'));

// 2. Ensure assets directory exists and copy compiled assets
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

const distAssets = fs.readdirSync(path.join(distDir, 'assets'));
for (const file of distAssets) {
  fs.copyFileSync(path.join(distDir, 'assets', file), path.join(assetsDir, file));
  console.log(`Copied asset: ${file}`);
}

// 3. Remove obsolete assets from root assets directory
const rootAssets = fs.readdirSync(assetsDir);
for (const file of rootAssets) {
  if (!distAssets.includes(file)) {
    fs.unlinkSync(path.join(assetsDir, file));
    console.log(`Removed obsolete asset: ${file}`);
  }
}

// 4. Ensure .nojekyll exists in root
fs.writeFileSync(path.join(rootDir, '.nojekyll'), '');
console.log('Created .nojekyll');

// 5. Copy static assets if they exist in dist (danang.jpg, resume.pdf, _redirects)
const staticFiles = ['danang.jpg', 'resume.pdf', '_redirects'];
for (const file of staticFiles) {
  const src = path.join(distDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(rootDir, file));
    console.log(`Copied static file: ${file}`);
  }
}

console.log('Root sync complete for GitHub Pages branch deployment.');

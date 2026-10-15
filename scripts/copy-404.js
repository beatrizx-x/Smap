const fs = require('fs');
const path = require('path');

const distBrowserDir = path.resolve(__dirname, '../dist/Smap/browser');
const indexPath = path.join(distBrowserDir, 'index.html');
const notFoundPath = path.join(distBrowserDir, '404.html');

if (fs.existsSync(indexPath)) {
  fs.copyFileSync(indexPath, notFoundPath);
  console.log('Successfully created 404.html from index.html in dist/Smap/browser');
} else {
  console.error('index.html not found in ' + distBrowserDir);
  process.exit(1);
}

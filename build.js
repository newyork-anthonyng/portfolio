const minify = require('html-minifier').minify;
const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, 'src/index.html'), 'utf8');
const result = minify(html, {
  removeAttributeQuotes: true,
  collapseWhitespace: true,
  removeComments: true
});

const BUILD_DIR = path.resolve(__dirname, 'public');
if (!fs.existsSync(BUILD_DIR)) {
  fs.mkdirSync(BUILD_DIR);
}

fs.writeFileSync(path.resolve(BUILD_DIR, 'index.html'), result);

console.log('Done');
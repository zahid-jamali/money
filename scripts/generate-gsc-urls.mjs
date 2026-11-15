import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://money.zetawala.com';
const OUT_DIR = path.resolve('out');

if (!fs.existsSync(OUT_DIR)) {
  console.error("Error: 'out' directory not found. Please run 'npm run build' first.");
  process.exit(1);
}

function getAllHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      getAllHtmlFiles(fullPath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const htmlFiles = getAllHtmlFiles(OUT_DIR);
console.log(`Found ${htmlFiles.length} HTML files.`);

const urls = [];

for (const file of htmlFiles) {
  let relative = path.relative(OUT_DIR, file).replace(/\\/g, '/');
  
  // Ignore internal Next.js error pages
  if (relative.startsWith('_not-found') || relative.startsWith('404')) {
    continue;
  }

  let route = '';
  if (relative === 'index.html') {
    route = '/';
  } else if (relative.endsWith('/index.html')) {
    route = '/' + relative.slice(0, -'index.html'.length);
  } else if (relative.endsWith('.html')) {
    route = '/' + relative.slice(0, -'.html'.length) + '/';
  } else {
    route = '/' + relative + '/';
  }

  // Ensure trailing slash
  if (!route.endsWith('/')) {
    route += '/';
  }

  urls.push(`${BASE_URL}${route}`);
}

// Sort URLs with high SEO priority first:
// 1. Homepages
// 2. Core tools
// 3. Guides
// 4. Appliances
// 5. Programmatic salary
// 6. BLZ directory
// 7. Site pages
urls.sort((a, b) => {
  const isHomeA = a === `${BASE_URL}/` || a.match(/^https:\/\/money\.zetawala\.com\/[a-z]{2}\/$/);
  const isHomeB = b === `${BASE_URL}/` || b.match(/^https:\/\/money\.zetawala\.com\/[a-z]{2}\/$/);
  if (isHomeA && !isHomeB) return -1;
  if (!isHomeA && isHomeB) return 1;

  const isBlzA = a.includes('/blz/');
  const isBlzB = b.includes('/blz/');
  if (!isBlzA && isBlzB) return -1;
  if (isBlzA && !isBlzB) return 1;

  return a.localeCompare(b);
});

// Remove duplicates
const uniqueUrls = Array.from(new Set(urls));

const outputContent = uniqueUrls.join('\n') + '\n';
fs.writeFileSync('gsc-urls.txt', outputContent, 'utf8');

console.log(`✓ Successfully generated gsc-urls.txt with ${uniqueUrls.length} total URLs ready for Google Search Console indexing!`);

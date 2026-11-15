import fs from 'fs';
import path from 'path';

const publicSitemap = path.resolve('public', 'sitemap.xml');
const outSitemap = path.resolve('out', 'sitemap.xml');

if (fs.existsSync(publicSitemap)) {
  fs.copyFileSync(publicSitemap, outSitemap);
  console.log('✓ Successfully ensured out/sitemap.xml sitemap index is active.');
}

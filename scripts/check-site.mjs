import fs from 'fs';
import path from 'path';

const OUT_DIR = path.resolve('out');

if (!fs.existsSync(OUT_DIR)) {
  console.error(`Error: 'out' directory not found. Please run 'npm run build' first.`);
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
console.log(`Found ${htmlFiles.length} HTML files in out/ directory.`);

let errorsCount = 0;
let warningsCount = 0;

const pageDataMap = new Map();
const allSiteUrls = new Set();

// Extract route from path: e.g. "out/de/iban-pruefen/index.html" -> "/de/iban-pruefen/"
function routeFromPath(filePath) {
  let relative = path.relative(OUT_DIR, filePath).replace(/\\/g, '/');
  if (relative === 'index.html') return '/';
  if (relative.endsWith('/index.html')) {
    return '/' + relative.slice(0, -'index.html'.length);
  }
  if (relative.endsWith('.html')) {
    return '/' + relative.slice(0, -'.html'.length) + '/';
  }
  return '/' + relative;
}

// 1. First Pass: Parse metadata, H1s, canonicals, hreflang, links
for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const route = routeFromPath(file);
  allSiteUrls.add(route);

  // H1 tag count
  const h1Matches = content.match(/<h1[\s>]/gi) || [];
  
  // Canonical tag
  const canonicalMatch = content.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i) ||
                         content.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i);
  const canonical = canonicalMatch ? canonicalMatch[1] : null;

  // Title tag
  const titleMatch = content.match(/<title[^>]*>([^<]*)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : null;

  // Description meta
  const descMatch = content.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i) ||
                    content.match(/<meta[^>]+content=["']([^"']*)["'][^>]+name=["']description["']/i);
  const description = descMatch ? descMatch[1].trim() : null;

  // Hreflang alternates
  const hreflangs = [];
  const hreflangRegex = /<link[^>]+rel=["']alternate["'][^>]+hreflang=["']([^"']+)["'][^>]+href=["']([^"']+)["']/gi;
  let match;
  while ((match = hreflangRegex.exec(content)) !== null) {
    hreflangs.push({ lang: match[1], href: match[2] });
  }

  // Internal Links
  const links = [];
  const linkRegex = /<a[^>]+href=["']([^"']+)["']/gi;
  while ((match = linkRegex.exec(content)) !== null) {
    const href = match[1];
    // Filter internal links
    if (href.startsWith('/') && !href.startsWith('//') && !href.startsWith('/_next')) {
      const cleanHref = href.split('#')[0].split('?')[0];
      if (cleanHref) {
        links.push(cleanHref);
      }
    }
  }

  pageDataMap.set(route, {
    file,
    route,
    h1Count: h1Matches.length,
    canonical,
    title,
    description,
    hreflangs,
    links,
  });
}

console.log(`\nStarting Technical QA Audit on ${pageDataMap.size} pages...\n`);

// 2. Audit Rules Verification
for (const [route, data] of pageDataMap.entries()) {
  // Ignore Next.js internal 404/500 helper if any
  if (route === '/_not-found/' || route === '/404/') continue;

  // Rule A: Exactly 1 H1
  if (data.h1Count !== 1) {
    console.error(`[ERROR] ${route}: Expected exactly 1 H1, found ${data.h1Count}`);
    errorsCount++;
  }

  // Rule B: Canonical exists and is absolute with trailing slash
  if (!data.canonical) {
    console.error(`[ERROR] ${route}: Missing canonical tag`);
    errorsCount++;
  } else if (!data.canonical.startsWith('https://money.zetawala.com')) {
    console.error(`[ERROR] ${route}: Canonical is not absolute: ${data.canonical}`);
    errorsCount++;
  } else if (!data.canonical.endsWith('/')) {
    console.error(`[ERROR] ${route}: Canonical missing trailing slash: ${data.canonical}`);
    errorsCount++;
  }

  // Rule C: Title exists and <= 65 chars
  if (!data.title) {
    console.error(`[ERROR] ${route}: Missing title tag`);
    errorsCount++;
  } else if (data.title.length > 70) {
    console.warn(`[WARN] ${route}: Title longer than 65 chars (${data.title.length}): "${data.title}"`);
    warningsCount++;
  }

  // Rule D: Description exists
  if (!data.description) {
    console.error(`[ERROR] ${route}: Missing meta description`);
    errorsCount++;
  }

  // Rule E: Broken internal links
  for (const link of data.links) {
    const normalized = link.endsWith('/') ? link : link + '/';
    // Skip static assets
    if (normalized.startsWith('/images/') || normalized.startsWith('/og/') || normalized.startsWith('/fonts/')) {
      continue;
    }
    if (!allSiteUrls.has(normalized) && normalized !== '/') {
      console.error(`[ERROR] ${route}: Broken internal link to "${link}" (normalized: ${normalized})`);
      errorsCount++;
    }
  }
}

// 3. Hreflang Reciprocity Audit
console.log(`Auditing hreflang reciprocity across language clusters...`);
for (const [route, data] of pageDataMap.entries()) {
  if (data.hreflangs.length > 0) {
    for (const alt of data.hreflangs) {
      if (alt.lang === 'x-default') continue;
      // Extract target route from absolute URL
      const targetUrl = new URL(alt.href);
      const targetRoute = targetUrl.pathname;

      const targetData = pageDataMap.get(targetRoute);
      if (!targetData) {
        console.error(`[ERROR] ${route}: Hreflang target "${targetRoute}" (${alt.lang}) not found on site`);
        errorsCount++;
      } else {
        // Target must link back to current page
        const linksBack = targetData.hreflangs.some((b) => {
          const bUrl = new URL(b.href);
          return bUrl.pathname === route;
        });
        if (!linksBack) {
          console.error(`[ERROR] Hreflang asymmetry: ${route} links to ${targetRoute}, but ${targetRoute} does not link back`);
          errorsCount++;
        }
      }
    }
  }
}

console.log(`\n========================================`);
console.log(`Technical QA Audit Complete:`);
console.log(`Total Pages Scanned: ${pageDataMap.size}`);
console.log(`Errors: ${errorsCount}`);
console.log(`Warnings: ${warningsCount}`);
console.log(`========================================\n`);

if (errorsCount > 0) {
  process.exit(1);
} else {
  console.log(`✓ All technical SEO, canonical, H1, internal link, and hreflang audits PASSED.`);
  process.exit(0);
}

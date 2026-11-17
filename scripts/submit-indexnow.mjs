import fs from 'fs';
import path from 'path';

const INDEXNOW_KEY = '4a417b0d5ca03a276998cf0307e13b66';
const HOST = 'money.zetawala.com';
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;
const GSC_URLS_FILE = path.resolve('gsc-urls.txt');

async function submitIndexNow() {
  if (!fs.existsSync(GSC_URLS_FILE)) {
    console.error('Error: gsc-urls.txt not found. Run "node scripts/generate-gsc-urls.mjs" first.');
    process.exit(1);
  }

  const urls = fs
    .readFileSync(GSC_URLS_FILE, 'utf8')
    .split('\n')
    .map((u) => u.trim())
    .filter((u) => u.startsWith('http'));

  console.log(`Loaded ${urls.length} URLs from gsc-urls.txt for IndexNow submission.`);

  // Batch URLs in chunks of 10,000 (IndexNow limit per request)
  const BATCH_SIZE = 10000;
  const batches = [];
  for (let i = 0; i < urls.length; i += BATCH_SIZE) {
    batches.push(urls.slice(i, i + BATCH_SIZE));
  }

  // Endpoints: api.indexnow.org automatically shares with Bing, Yandex, Seznam, Naver
  const endpoints = [
    'https://api.indexnow.org/indexnow',
    'https://www.bing.com/indexnow',
  ];

  for (let batchIndex = 0; batchIndex < batches.length; batchIndex++) {
    const batch = batches[batchIndex];
    console.log(`Submitting batch ${batchIndex + 1}/${batches.length} (${batch.length} URLs)...`);

    const payload = {
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: KEY_LOCATION,
      urlList: batch,
    };

    for (const endpoint of endpoints) {
      try {
        console.log(`Pinging ${endpoint}...`);
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
          body: JSON.stringify(payload),
        });

        console.log(`Response from ${endpoint}: HTTP ${response.status} ${response.statusText}`);
        if (response.status === 200 || response.status === 202) {
          console.log(`✓ Batch ${batchIndex + 1} successfully accepted by ${endpoint}!`);
        } else {
          const bodyText = await response.text();
          console.warn(`Response body: ${bodyText || '(empty)'}`);
        }
      } catch (err) {
        console.error(`Failed to submit to ${endpoint}:`, err.message);
      }
    }
  }

  console.log('\nIndexNow submission process completed.');
}

submitIndexNow().catch((err) => {
  console.error('IndexNow submission failed:', err);
  process.exit(1);
});

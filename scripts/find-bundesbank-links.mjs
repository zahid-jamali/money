import fs from 'fs';

async function main() {
  const url = 'https://www.bundesbank.de/de/aufgaben/unbarer-zahlungsverkehr/serviceangebot/bankleitzahlen/download-bankleitzahlen-602592';
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    console.log('Status:', res.status);
    const html = await res.text();
    const regex = /href="([^"]*(?:txt|csv|blob)[^"]*)"/gi;
    let match;
    const links = new Set();
    while ((match = regex.exec(html)) !== null) {
      links.add(match[1]);
    }
    console.log('Matches found:', links.size);
    for (const link of links) {
      console.log('LINK:', link);
    }
  } catch (err) {
    console.error('Error fetching Bundesbank page:', err);
  }
}

main();

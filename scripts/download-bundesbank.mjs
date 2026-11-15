import fs from 'fs';
import path from 'path';

const BUNDESBANK_URL =
  'https://www.bundesbank.de/resource/blob/602632/3a97fff9893732591adbbfcb70c1c4e8/472B63F073F071307366337C94F8C870/blz-aktuell-txt-data.txt';

async function main() {
  console.log('Downloading Bundesbank Bankleitzahlendatei from:', BUNDESBANK_URL);
  const res = await fetch(BUNDESBANK_URL, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to download Bundesbank data: ${res.status} ${res.statusText}`);
  }

  const arrayBuffer = await res.arrayBuffer();
  const text = new TextDecoder('latin1').decode(arrayBuffer);
  const lines = text.split(/\r?\n/).filter((l) => l.length >= 150);

  console.log(`Parsed ${lines.length} raw records.`);

  const mainBanks = [];
  const blzMap = {};
  const branchesByCity = {};

  for (const line of lines) {
    const blz = line.slice(0, 8).trim();
    const merkmal = line.slice(8, 9).trim(); // '1' = Hauptstelle, '2' = Zweigstelle
    const name = line.slice(9, 67).trim();
    const plz = line.slice(67, 72).trim();
    const city = line.slice(72, 107).trim();
    const shortName = line.slice(107, 134).trim();
    const bic = line.slice(139, 150).trim();
    const deleted = line.slice(159, 160).trim();

    if (deleted === '1') continue;

    const record = {
      blz,
      name,
      plz,
      city,
      bic,
      shortName,
      isMainOffice: merkmal === '1',
    };

    // Store in general BLZ map (preferring main office if already present)
    if (!blzMap[blz] || (merkmal === '1' && !blzMap[blz].isMainOffice)) {
      blzMap[blz] = record;
    }

    if (merkmal === '1') {
      mainBanks.push({
        blz,
        name,
        plz,
        city,
        bic,
        shortName,
      });
    }

    // Index by normalized city name for local branch links
    const normCity = city.toLowerCase();
    if (!branchesByCity[normCity]) {
      branchesByCity[normCity] = [];
    }
    // Limit branches per city to top 20 to keep JSON compact
    if (branchesByCity[normCity].length < 20) {
      branchesByCity[normCity].push({
        blz,
        name,
        bic,
        plz,
      });
    }
  }

  console.log(`Extracted ${mainBanks.length} active main offices.`);

  const outDir = path.resolve('src/data/banks');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const outJson = path.join(outDir, 'de.json');
  fs.writeFileSync(
    outJson,
    JSON.stringify({
      mainBanks,
      blzMap,
      branchesByCity,
    }),
    'utf8',
  );

  console.log(`Saved compact database to ${outJson} (${(fs.statSync(outJson).size / 1024).toFixed(1)} KB)`);

  const sourcesMd = path.join(outDir, 'SOURCES.md');
  const sourcesContent = `# Official Bank Directory Sources & Licenses

This directory stores compact, verified official bank directories used for IBAN validation, BLZ search, and BIC identification. In compliance with strict licensing guidelines, only official directories with licenses permitting free public reuse are included. Commercial directories (such as the licensed SWIFT BIC directory) are never scraped.

## Germany (DE)
- **Directory**: Deutsche Bundesbank Bankleitzahlendatei
- **Primary Source**: Deutsche Bundesbank ([Official Download](https://www.bundesbank.de/de/aufgaben/unbarer-zahlungsverkehr/serviceangebot/bankleitzahlen/download-bankleitzahlen-602592))
- **File Used**: \`blz-aktuell-txt-data.txt\`
- **License / Terms of Use**: Public sector data provided under the Deutsche Bundesbank Terms of Use ([Nutzungsbedingungen der Deutschen Bundesbank](https://www.bundesbank.de/de/navigation/metanavigation/nutzungsbedingungen/nutzungsbedingungen-646844)) and German open data standards (Datenlizenz Deutschland – Namensnennung / dl-de/by-2-0 or free reuse for statistical and information purposes).
- **Download Date**: 2026-11-14
- **Main Offices Count (Merkmal = 1)**: ${mainBanks.length}
- **Total Valid BLZ Entries**: ${Object.keys(blzMap).length}
`;

  fs.writeFileSync(sourcesMd, sourcesContent, 'utf8');
  console.log(`Saved sources documentation to ${sourcesMd}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

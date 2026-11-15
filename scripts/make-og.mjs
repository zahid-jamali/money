import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const outputDir = path.resolve('public', 'og');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Sample of major tools and guides across all regions
const OG_PAGES = [
  { slug: 'default', title: 'Zetawala Money', category: 'Free Money & Banking Calculators' },
  { slug: 'iban-checker', title: 'IBAN Checker & Validator', category: 'Banking & Accounts' },
  { slug: 'schengen-calculator', title: 'Schengen 90/180 Day Calculator', category: 'European Travel' },
  { slug: 'vat-calculator', title: 'EU 27 VAT Calculator Hub', category: 'Tax & VAT' },
  { slug: 'vat-calculator-uk', title: 'UK VAT Calculator 2026', category: 'HMRC Tax' },
  { slug: 'electricity-cost-calculator-uk', title: 'UK Electricity Cost Calculator', category: 'Ofgem Cap 2026' },
  { slug: 'fuel-cost-calculator-uk', title: 'UK Fuel Trip Cost Calculator', category: 'Travel & Mobility' },
  { slug: 'de-iban-pruefen', title: 'IBAN prüfen & validieren (DE)', category: 'Banken & Konten' },
  { slug: 'de-blz-suche', title: 'Deutsche BLZ Suche & Verzeichnis', category: 'Deutsche Bundesbank' },
  { slug: 'de-mwst-rechner', title: 'Mehrwertsteuerrechner (19% & 7%)', category: 'Steuern & MwSt.' },
  { slug: 'pl-kalkulator-wynagrodzen', title: 'Kalkulator Wynagrodzeń 2026', category: 'Wynagrodzenia i Płace' },
  { slug: 'pl-kalkulator-b2b', title: 'Kalkulator B2B vs Umowa o Pracę', category: 'Porównanie B2B' },
  { slug: 'pl-sprawdz-iban', title: 'Sprawdź i Zweryfikuj IBAN', category: 'Bankowość i Konta' },
  { slug: 'tr-kidem-tazminati', title: 'Kıdem Tazminatı Hesaplama 2026', category: 'Maaş ve İş Hukuku' },
  { slug: 'tr-ihbar-tazminati', title: 'İhbar Tazminatı Hesaplama', category: 'Maaş ve İş Hukuku' },
  { slug: 'tr-brutten-nete-maas', title: 'Brütten Nete Maaş Hesaplama', category: 'Gelir Vergisi 2026' },
  { slug: 'ro-calculator-salariu', title: 'Calculator Salariu Brut în Net 2026', category: 'Salarii și Taxe' },
  { slug: 'ro-calculator-pfa-srl', title: 'Calculator PFA vs SRL 2026', category: 'Fiscalitate România' },
  { slug: 'ro-verificare-iban', title: 'Verificare Cont IBAN România', category: 'Bănci și Conturi' },
  { slug: 'fr-verifier-iban', title: 'Vérificateur IBAN France & SEPA', category: 'Banque et Comptes' },
  { slug: 'es-validar-iban', title: 'Validador de Cuentas IBAN', category: 'Banca y Cuentas' },
  { slug: 'it-verifica-iban', title: 'Verifica e Validatore IBAN', category: 'Banche e Conti' },
  { slug: 'nl-iban-controleren', title: 'IBAN Controleren & Valideren', category: 'Bankieren & Rekeningen' },
];

function escapeXml(unsafe) {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

async function generateOgImage({ slug, title, category }) {
  const safeTitle = escapeXml(title);
  const safeCategory = escapeXml(category);

  const svg = `
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#090d16" />
        <stop offset="60%" stop-color="#0f172a" />
        <stop offset="100%" stop-color="#042f2e" />
      </linearGradient>
      <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#0d9488" />
        <stop offset="100%" stop-color="#14b8a6" />
      </linearGradient>
    </defs>

    <!-- Background -->
    <rect width="1200" height="630" fill="url(#bg)" />

    <!-- Top Accent Bar -->
    <rect x="0" y="0" width="1200" height="8" fill="url(#glow)" />

    <!-- Brand Header -->
    <g transform="translate(80, 80)">
      <rect x="0" y="0" width="48" height="48" rx="12" fill="#0d9488" />
      <text x="24" y="32" font-family="'Segoe UI', Roboto, sans-serif" font-size="24" font-weight="900" fill="#ffffff" text-anchor="middle">Z</text>
      <text x="64" y="24" font-family="'Segoe UI', Roboto, sans-serif" font-size="22" font-weight="900" fill="#ffffff">ZETAWALA MONEY</text>
      <text x="64" y="44" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="600" fill="#94a3b8">FREE TOOLS NETWORK • MONEY.ZETAWALA.COM</text>
    </g>

    <!-- Category Pill -->
    <g transform="translate(80, 200)">
      <rect x="0" y="0" width="300" height="34" rx="17" fill="rgba(13, 148, 136, 0.15)" stroke="#0d9488" stroke-width="1.5" />
      <text x="15" y="22" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="700" fill="#2dd4bf">${safeCategory}</text>
    </g>

    <!-- Main Title -->
    <text x="80" y="320" font-family="'Segoe UI', Roboto, sans-serif" font-size="52" font-weight="900" fill="#ffffff" letter-spacing="-0.5px">
      ${safeTitle}
    </text>

    <!-- Subtitle / Tagline -->
    <text x="80" y="400" font-family="'Segoe UI', Roboto, sans-serif" font-size="22" font-weight="400" fill="#cbd5e1">
      Statutory Legal Rules 2026 • 100% In-Browser Privacy • Zero Storage
    </text>

    <!-- Footer Features Bar -->
    <g transform="translate(80, 520)">
      <line x1="0" y1="0" x2="1040" y2="0" stroke="#334155" stroke-width="1" />
      <text x="0" y="35" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="700" fill="#94a3b8">
        UK • GERMANY • POLAND • TURKEY • ROMANIA • AUSTRALIA • CANADA • EUROPE
      </text>
      <text x="1040" y="35" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="700" fill="#14b8a6" text-anchor="end">
        VERIFIED STATUTORY ACCURACY
      </text>
    </g>
  </svg>
  `;

  const outputPath = path.join(outputDir, `${slug}.png`);
  await sharp(Buffer.from(svg))
    .png({ quality: 90, compressionLevel: 8 })
    .toFile(outputPath);

  // If default, also save to public/images/money.jpg for site fallback
  if (slug === 'default') {
    const imagesDir = path.resolve('public', 'images');
    if (!fs.existsSync(imagesDir)) {
      fs.mkdirSync(imagesDir, { recursive: true });
    }
    await sharp(Buffer.from(svg))
      .jpeg({ quality: 90 })
      .toFile(path.join(imagesDir, 'money.jpg'));
  }

  console.log(`✓ Generated OG Image: ${outputPath}`);
}

async function run() {
  console.log(`Generating Open Graph banners via sharp...`);
  for (const page of OG_PAGES) {
    await generateOgImage(page);
  }
  console.log(`Done! All OG banners generated successfully.`);
}

run().catch((err) => {
  console.error('Error generating OG banners:', err);
  process.exit(1);
});

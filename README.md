# Zetawala Money (money.zetawala.com)

> Free, accurate, and privacy-first money, banking, travel, and salary calculators for Europe, the UK, Australia, and Canada.

Part of the **Zetawala** network of free tools ([https://zetawala.com](https://zetawala.com)).

---

## 1. Project Overview & Architecture

**Zetawala Money** is an ultra-fast, fully static web application serving high-intent financial search queries across 9 languages and high-value advertising markets:
- **Core Markets**: United Kingdom, Germany, Australia, Canada, Netherlands, France, Spain, Italy.
- **Eastern Europe & Eurasia**: Poland, Turkey, Romania.
- **Monetization**: Built for display advertising (Google AdSense initially, transitioning to Mediavine / Raptive upon traffic thresholds) with reserved-height CLS-free ad containers, CMP consent integration, and cookieless Cloudflare Web Analytics.
- **Traffic Channel**: 100% organic search (Google SEO). Every tool, guide, directory, and programmatic page is an optimized SEO landing page.
- **Zero Server Footprint**: Next.js App Router static HTML export (`output: 'export'`). Pure client-side arithmetic—no user financial data, salary amounts, bank account numbers, or travel dates ever leave the user's web browser.

---

## 2. Technical Stack

- **Framework**: Next.js (latest App Router), TypeScript Strict Mode
- **Styling**: Tailwind CSS (with responsive mobile optimization for screens down to 360px)
- **Icons**: Lucide React
- **Testing**: Vitest with React Testing Library (807+ unit and integration tests)
- **Code Quality**: ESLint + Prettier
- **Assets & OG**: Built-in Open Graph generator (`scripts/make-og.mjs`) using Sharp
- **Build Output**: Static HTML directory (`out/`) with `trailingSlash: true`
- **Deployment Target**: Cloudflare Pages

---

## 3. Local Development & Workflow

### Prerequisites
- Node.js 20.x or higher
- npm 10.x or higher

### Commands

```bash
# Install dependencies
npm install

# Start local development server (port 3000)
npm run dev

# Run full Vitest test suite (807 tests)
npx vitest run

# Run linter
npm run lint

# Generate production static export (outputs to out/)
npm run build

# Run automated site crawler and technical SEO audit
node scripts/check-site.mjs

# Re-generate Open Graph social share images (23 banners)
node scripts/make-og.mjs
```

---

## 4. URL Breakdown & Site Inventory

Every single URL is exported as a static HTML file with absolute self-referencing canonical tags ending in a trailing slash, exactly one `<h1>`, optimized meta descriptions, and bidirectional `hreflang` alternates where localized equivalents exist.

| Section / Language | Type | Page Count | Description / URLs |
| :--- | :--- | :--- | :--- |
| **English (Global & Regional)** | Home, Tools & Guides | 33 pages | `/`, `/iban-checker/`, `/vat-calculator/`, `/vat-calculator/uk/`, `/schengen-calculator/`, `/fuel-cost-calculator/uk/`, `/fuel-cost-calculator/australia/`, `/fuel-cost-calculator/canada/`, `/fuel-cost-calculator/ev-vs-petrol/`, `/electricity-cost-calculator/uk/`, `/electricity-cost-calculator/australia/`, `/mpg-to-litres-per-100km/`, 9 travel/energy/banking guides |
| **English / Australian Appliances** | Programmatic Tools | 25 pages | `/electricity-cost-calculator/australia/[appliance]/` (Kettle, Heater, Heat Pump, EV Wallbox, Fridge, etc.) |
| **English / UK Appliances** | Programmatic Tools | 25 pages | `/electricity-cost-calculator/uk/[appliance]/` (Ofgem price cap appliance breakdown) |
| **German (`/de/`)** | Home, Tools & Guides | 17 pages | `/de/`, `/de/iban-pruefen/`, `/de/iban-rechner/`, `/de/blz-suche/`, `/de/bic-pruefen/`, `/de/mwst-rechner/`, `/de/spritkostenrechner/`, `/de/stromkosten-rechner/`, 3 banking & energy guides |
| **German Bundesbank BLZ Directory** | Programmatic Pages | 3,432 pages | `/de/blz/[blz]/` (All official German credit institutions from Deutsche Bundesbank open data) |
| **German Appliances** | Programmatic Tools | 25 pages | `/de/stromkosten-rechner/[geraet]/` (Wasserkocher, Heizlüfter, Wärmepumpe, etc.) |
| **Poland (`/pl/`)** | Home, Tools & Guides | 11 pages | `/pl/`, `/pl/sprawdz-iban/`, `/pl/kalkulator-vat/`, `/pl/kalkulator-wynagrodzen/`, `/pl/kalkulator-b2b/`, `/pl/placa-minimalna/`, `/pl/skladki-zus/`, 4 salary/B2B guides |
| **Poland Programmatic Salary Pages** | Programmatic Landing Pages | 52 pages | `/pl/wynagrodzenie/[amount]-brutto-ile-netto/` (3 000 zł to 50 000 zł brackets) |
| **Turkey (`/tr/`)** | Home, Tools & Guides | 17 pages | `/tr/`, `/tr/iban-dogrulama/`, `/tr/kdv-hesaplama/`, `/tr/schengen-gun-hesaplama/`, `/tr/kidem-tazminati-hesaplama/`, `/tr/ihbar-tazminati-hesaplama/`, `/tr/kidem-ve-ihbar-tazminati-hesaplama/`, `/tr/brutten-nete-maas-hesaplama/`, `/tr/netten-brute-maas-hesaplama/`, `/tr/asgari-ucret/`, `/tr/kidem-tazminati-tavani/`, `/tr/gelir-vergisi-dilimleri/`, 5 guides |
| **Romania (`/ro/`)** | Home, Tools & Guides | 11 pages | `/ro/`, `/ro/verificare-iban/`, `/ro/calculator-tva/`, `/ro/calculator-salariu/`, `/ro/calculator-pfa-srl/`, `/ro/salariul-minim/`, `/ro/deducere-personala/`, 3 PFA/salary guides |
| **Romania Programmatic Salary Pages** | Programmatic Landing Pages | 34 pages | `/ro/salariu/[amount]-brut-in-net/` (4 000 lei to 30 000 lei brackets) |
| **France (`/fr/`)** | Home & Tools | 2 pages | `/fr/`, `/fr/verifier-iban/` |
| **Spain (`/es/`)** | Home & Tools | 2 pages | `/es/`, `/es/validar-iban/` |
| **Italy (`/it/`)** | Home & Tools | 2 pages | `/it/`, `/it/verifica-iban/` |
| **Netherlands (`/nl/`)** | Home & Tools | 2 pages | `/nl/`, `/nl/iban-controleren/` |
| **Country IBAN Formats** | Programmatic Hubs | 86 pages | `/iban-format/[country]/` (43 countries) & `/de/iban-format/[land]/` (43 countries) |
| **Site & Legal Pages** | Trust, Privacy & Terms | 48 pages | About, Methodology, Contact, Privacy Policy, Cookie Policy, Terms of Service, Disclaimer, FAQ Hubs, HTML Sitemaps (including German `/de/impressum/` with operator placeholders) |
| **XML Sitemaps & Robots** | Technical SEO | 13 files | `/robots.txt`, `/sitemap/en.xml`, `/sitemap/de.xml`, `/sitemap/pl.xml`, `/sitemap/tr.xml`, `/sitemap/ro.xml`, `/sitemap/fr.xml`, `/sitemap/es.xml`, `/sitemap/it.xml`, `/sitemap/nl.xml`, `/sitemap/blz.xml`, `/sitemap/appliances.xml`, `/sitemap/salary-programmatic.xml` |
| **Total Exported Static Files** | | **3,825+ pages** | **100% pre-rendered pure static HTML** |

---

## 5. Environment Variables & Ad Configuration

Configure the following variables in Cloudflare Pages or your local `.env.production`:

| Variable | Type | Allowed Values | Description |
| :--- | :--- | :--- | :--- |
| `NEXT_PUBLIC_AD_PROVIDER` | string | `adsense`, `none`, `mediavine`, `raptive` | Active ad network integration. Default is `none` or `adsense`. |
| `NEXT_PUBLIC_ADSENSE_ID` | string | `ca-pub-XXXXXXXXXXXXXXXX` | Your Google AdSense publisher ID (matches `public/ads.txt`). |
| `NEXT_PUBLIC_GSC_VERIFICATION` | string | `googleXXXXXXXXXXXXXXXX` | Google Search Console HTML meta verification token. |
| `NEXT_PUBLIC_CF_ANALYTICS_TOKEN` | string | token string | Cloudflare Web Analytics cookieless beacon token. |

---

## 6. How to Update Statutory Values (Maintenance Rhythm)

All calculations are separated into pure functions in `src/lib/` driven by dated rules files in `src/rules/` and verified in `VERIFY.md`. When government authorities release new figures, update the corresponding rules file:

### 1. UK Ofgem Energy Price Cap (Quarterly)
- **Rhythm**: 1 January, 1 April, 1 July, 1 October.
- **File**: `src/rules/energy/electricity.ts` (`OFGEM_PRICE_CAPS`).
- **Action**: Add the new quarter determination (unit rate in pence/kWh and daily standing charge).

### 2. German Bundesbank Bankleitzahlendatei (Quarterly)
- **Rhythm**: First Monday of March, June, September, December.
- **Script**: `scripts/download-banks.mjs` (fetches the official Bundesbank ASCII file, parses BLZ, BIC, and branches, and outputs compact chunks into `src/data/banks/de.json`).
- **Run**: `node scripts/download-banks.mjs` followed by `npm test` and `npm run build`.

### 3. Turkey Kıdem Tazminatı Tavanı (Bi-annually)
- **Rhythm**: January (H1) and July (H2).
- **File**: `src/rules/tr/salary-2026.ts` (`KIDEM_TAZMINATI_TAVANI_2026_H1` / `H2`).
- **Source**: Ministry of Treasury and Finance (HMB) Public Finance Directorate General circular.

### 4. Poland & Romania Minimum Wage and Social Contribution Limits (Annually)
- **Rhythm**: End of December / 1 January.
- **Files**:
  - Poland: `src/rules/pl/salary-2026.ts` (`POLAND_SALARY_RULES_2026`: minimum wage, 30x cap, ZUS base, NFZ tiers).
  - Romania: `src/rules/ro/salary-2026.ts` (`ROMANIA_SALARY_RULES_2026`: minimum wage gross/net, 300 lei tax-free deduction, PFA CAS/CASS thresholds).

---

## 7. Adding a New Calculator or Language

1. **Rule Definition**: Create statutory rates with source URLs in `src/rules/<region>/<year>.ts`.
2. **Pure Math Engine**: Implement arithmetic in `src/lib/<category>/<tool>.ts` with comprehensive Vitest tests in `src/lib/<category>/<tool>.test.ts`.
3. **Register Route**: Add the page specification to `src/config/pages.ts` in `PAGES_REGISTRY` with a shared `id` to enable bidirectional `hreflang` generation.
4. **Content File**: Write localized native copy in `src/content/<lang>/<slug>.ts` implementing the standardized `ToolContent` interface.
5. **App Page**: Create `src/app/(<lang>)/.../page.tsx` using `ToolPageTemplate` and `buildMetadata(pageId, lang)`.
6. **Verify**: Run `npx vitest run`, `npm run lint`, and `node scripts/check-site.mjs`.

---

## 8. Deployment on Cloudflare Pages

1. In the **Cloudflare Dashboard**, navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
2. Select your repository.
3. Configure **Build Settings**:
   - **Framework preset**: `Next.js (Static HTML Export)`
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Root directory**: `/` (or repository root)
4. Configure **Environment Variables**:
   - `NODE_VERSION`: `20`
   - `NEXT_PUBLIC_AD_PROVIDER`: `adsense`
   - `NEXT_PUBLIC_ADSENSE_ID`: `ca-pub-XXXXXXXXXXXXXXXX`
   - `NEXT_PUBLIC_GSC_VERIFICATION`: `your_gsc_token`
   - `NEXT_PUBLIC_CF_ANALYTICS_TOKEN`: `your_cloudflare_analytics_token`
5. Click **Save and Deploy**.
6. Set custom domain to `money.zetawala.com` and ensure SSL/TLS is set to **Full (strict)**.

---

## 9. QA & Testing Verification

All 807 automated tests and technical SEO crawl audits run on every deployment:
- **Zero Hallucinated Numbers**: Every statutory tax rate, minimum wage, and VAT rule is verified against official gazettes in `VERIFY.md`.
- **Hreflang Symmetry**: Every localized alternate has an exact reciprocal return tag.
- **Mobile Responsiveness**: Designed for 360px viewport widths with horizontal overflow wrappers and word wrapping for compound German and Polish terms.
- **Zero Server Leaks**: Pure browser execution ensuring total data privacy.

---

© 2026 Zetawala Money. Part of the [Zetawala Network](https://zetawala.com).

import { rulesUK2026 } from '@/rules/uk/2026';
import { rulesDE2026 } from '@/rules/de/2026';
import { rulesPL2026 } from '@/rules/pl/2026';
import { POLAND_SALARY_RULES_2026 } from '@/rules/pl/salary-2026';
import { ASGARI_UCRET_2026, KIDEM_TAZMINATI_TAVANI_2026_H1 } from '@/rules/tr/salary-2026';
import { ROMANIA_SALARY_RULES_2026 } from '@/rules/ro/salary-2026';
import { OFGEM_PRICE_CAPS, AUSTRALIA_ELECTRICITY_RATES } from '@/rules/energy/electricity';
import { FUEL_PRICES_UK, FUEL_PRICES_AUSTRALIA, FUEL_PRICES_CANADA } from '@/rules/fuel/prices';
import { SCHENGEN_COUNTRIES } from '@/rules/eu/schengen';

export interface MethodologyEntry {
  calculatorName: string;
  category: 'Banking' | 'Tax & VAT' | 'Salary' | 'Travel' | 'Home & Energy';
  region: string;
  formula: string;
  statutorySource: string;
  sourceUrl: string;
  currentValues: string;
  validFrom: string;
  updateRhythm: string;
  notes: string;
}

export const METHODOLOGY_REGISTRY: MethodologyEntry[] = [
  // 1. IBAN Checker
  {
    calculatorName: 'IBAN Checker & National Validator',
    category: 'Banking',
    region: 'Global / SEPA',
    formula: 'ISO 13616 modulo 97 check: move first 4 characters to tail, convert letters A=10..Z=35, chunked remainder must equal 1.',
    statutorySource: 'ISO 13616:2020 & SWIFT Official IBAN Registry',
    sourceUrl: 'https://www.swift.com/standards/data-standards/iban',
    currentValues: '80+ country structures; bonus national checks: BE mod 97, FR RIB key 97, ES CIN mod 11, IT CIN control character.',
    validFrom: '2026-01-01',
    updateRhythm: 'Quarterly registry review / upon ISO standard amendments',
    notes: 'Pure in-browser execution with zero transmission over the wire.',
  },
  // 2. German BLZ Search & IBAN Generator
  {
    calculatorName: 'German BLZ Search & Account-to-IBAN',
    category: 'Banking',
    region: 'Germany (DE)',
    formula: 'DE + CheckDigits(MOD-97) + BLZ (8 digits) + AccountNumber (10 digits left-padded with zeros).',
    statutorySource: 'Deutsche Bundesbank Bankleitzahlendatei (Open Data)',
    sourceUrl: 'https://www.bundesbank.de/de/aufgaben/unbarer-zahlungsverkehr/serviceangebot/bankleitzahlen',
    currentValues: '3,432 credit institutions, BLZ routing codes, BIC identifiers, postal codes and cities.',
    validFrom: '2026-03-02',
    updateRhythm: 'Quarterly (March, June, September, December) upon Bundesbank release',
    notes: 'Split JSON chunks by first digit for instantaneous, zero-latency client search.',
  },
  // 3. BIC / SWIFT Validator
  {
    calculatorName: 'SWIFT / BIC Code Validator',
    category: 'Banking',
    region: 'Global',
    formula: '4 letters (Bank code) + 2 letters (ISO country) + 2 alphanumeric (Location) + optional 3 alphanumeric (Branch).',
    statutorySource: 'ISO 9362:2014 Business Identifier Codes',
    sourceUrl: 'https://www.swift.com/standards/data-standards/bic',
    currentValues: '8- and 11-character formatting validation with geographic country code verification.',
    validFrom: '2026-01-01',
    updateRhythm: 'Annual standard verification',
    notes: 'Only official syntax verified; commercial BIC directories are not scraped.',
  },
  // 4. UK VAT Calculator
  {
    calculatorName: 'UK VAT Calculator',
    category: 'Tax & VAT',
    region: 'United Kingdom (UK)',
    formula: 'Forward: Gross = Net × (1 + Rate); Reverse: Net = Gross / (1 + Rate); VAT = Gross – Net.',
    statutorySource: 'Value Added Tax Act 1994 (HMRC)',
    sourceUrl: 'https://www.gov.uk/vat-rates',
    currentValues: `Standard rate: ${rulesUK2026.vat.standard.value}%, Reduced rate: ${rulesUK2026.vat.reduced?.value}%, Registration threshold: £90,000.`,
    validFrom: rulesUK2026.vat.standard.validFrom,
    updateRhythm: 'Yearly / per Chancellor of the Exchequer budget statements',
    notes: 'Half-up fractional penny rounding in compliance with HMRC notice 700.',
  },
  // 5. German MwSt Rechner
  {
    calculatorName: 'German MwSt.-Rechner',
    category: 'Tax & VAT',
    region: 'Germany (DE)',
    formula: 'MwSt-Betrag = Nettobetrag × Steuersatz; Bruttobetrag = Nettobetrag + MwSt-Betrag.',
    statutorySource: 'Umsatzsteuergesetz (UStG) § 12',
    sourceUrl: 'https://www.gesetze-im-internet.de/ustg_1980/__12.html',
    currentValues: `Regelsteuersatz: ${rulesDE2026.vat.standard.value} %, Ermäßigter Steuersatz: ${rulesDE2026.vat.reduced?.value} %.`,
    validFrom: rulesDE2026.vat.standard.validFrom,
    updateRhythm: 'Yearly / upon federal legislative amendments',
    notes: 'Kaufmännische Rundung auf volle Cent gemäß § 14 UStG.',
  },
  // 6. Polish VAT Calculator
  {
    calculatorName: 'Polish VAT Calculator',
    category: 'Tax & VAT',
    region: 'Poland (PL)',
    formula: 'Brutto = Netto × (1 + Stawka_VAT); Kwota_VAT = Brutto – Netto.',
    statutorySource: 'Ustawa o podatku od towarów i usług (Dz.U. 2024 poz. 361)',
    sourceUrl: 'https://www.podatki.gov.pl/vat/stawki-vat/',
    currentValues: `Stawka podstawowa: ${rulesPL2026.vat.standard.value}%, Stawki obniżone: ${rulesPL2026.vat.reduced?.value}% i ${rulesPL2026.vat.superReduced?.value}%.`,
    validFrom: rulesPL2026.vat.standard.validFrom,
    updateRhythm: 'Rocznie / według nowelizacji ustawy o VAT',
    notes: 'Dokładność do grosza z zaokrągleniem matematycznym.',
  },
  // 7. Schengen 90/180 Day Calculator
  {
    calculatorName: 'Schengen 90/180 Day Short-Stay Calculator',
    category: 'Travel',
    region: 'European Union (29 States)',
    formula: 'Rolling window: For any reference date D, days spent = sum of days present in [D – 179, D]. Entry and exit days count as 1 full day each.',
    statutorySource: 'Regulation (EU) 2016/399 (Schengen Borders Code)',
    sourceUrl: 'https://home-affairs.ec.europa.eu/policies/schengen-borders-and-visa_en',
    currentValues: '29 Schengen states (including Bulgaria and Romania from 1 Jan 2025; Cyprus and Ireland excluded). Maximum allowance: 90 days.',
    validFrom: SCHENGEN_COUNTRIES[0]?.joinedDate || '2025-01-01',
    updateRhythm: 'Per European Commission accession and border regulation updates',
    notes: 'Matches the exact logic of the European Commission official short-stay calculator.',
  },
  // 8. UK Electricity Cost Calculator
  {
    calculatorName: 'UK Electricity Cost Calculator',
    category: 'Home & Energy',
    region: 'United Kingdom (UK)',
    formula: 'Energy (kWh) = (Power in Watts / 1000) × Hours used; Running Cost = Energy × Unit Rate + Standing Charge.',
    statutorySource: 'Ofgem Default Tariff Price Cap Determinations',
    sourceUrl: 'https://www.ofgem.gov.uk/energy-price-cap',
    currentValues: `Price cap: ${OFGEM_PRICE_CAPS[0]?.unitRatePence}p/kWh unit rate, ${OFGEM_PRICE_CAPS[0]?.standingChargePencePerDay}p/day standing charge.`,
    validFrom: OFGEM_PRICE_CAPS[0]?.validFrom || '2026-01-01',
    updateRhythm: 'Quarterly (1 January, 1 April, 1 July, 1 October) upon Ofgem publication',
    notes: 'Default appliance database with 25 household appliances based on Energy Saving Trust benchmarks.',
  },
  // 9. Australia Electricity Calculator
  {
    calculatorName: 'Australia Electricity Cost Calculator',
    category: 'Home & Energy',
    region: 'Australia (AU)',
    formula: 'Cost ($) = (Watts / 1000) × Hours × State Tariff Rate ($/kWh).',
    statutorySource: 'Australian Energy Regulator (AER) Default Market Offer (DMO)',
    sourceUrl: 'https://www.aer.gov.au',
    currentValues: `National average: ${AUSTRALIA_ELECTRICITY_RATES.national?.unitRateCents}c/kWh; NSW: ${AUSTRALIA_ELECTRICITY_RATES.nsw?.unitRateCents}c/kWh; VIC: ${AUSTRALIA_ELECTRICITY_RATES.vic?.unitRateCents}c/kWh.`,
    validFrom: '2025-07-01',
    updateRhythm: 'Annually on 1 July upon AER DMO determinations',
    notes: 'State-specific standing charges and default market offers.',
  },
  // 10. Fuel Cost Calculator
  {
    calculatorName: 'Road Fuel Trip Cost Calculator',
    category: 'Travel',
    region: 'UK, Australia, Canada, Germany',
    formula: 'Fuel Volume (L) = (Distance / 100) × Consumption (L/100km); Trip Cost = Volume × Price per Litre.',
    statutorySource: 'DESNZ (UK), AIP (AU), NRCan (CA), ADAC (DE)',
    sourceUrl: 'https://www.gov.uk/government/collections/road-fuel-prices',
    currentValues: `UK: ${FUEL_PRICES_UK.petrol.pricePerLitre.value}p petrol, ${FUEL_PRICES_UK.diesel.pricePerLitre.value}p diesel; AU: ${FUEL_PRICES_AUSTRALIA.petrol.pricePerLitre.value}c petrol; CA: ${FUEL_PRICES_CANADA.petrol.pricePerLitre.value}c regular.`,
    validFrom: FUEL_PRICES_UK.petrol.pricePerLitre.validFrom,
    updateRhythm: 'Weekly / monthly based on government statistical bulletins',
    notes: 'Supports automatic bidirectional unit conversion between MPG and L/100km.',
  },
  // 11. Turkey Severance & Salary Calculators
  {
    calculatorName: 'Turkey Kıdem & İhbar Tazminatı ve Maaş',
    category: 'Salary',
    region: 'Turkey (TR)',
    formula: 'Kıdem: 30 gün giydirilmiş brüt ücret (max tavan) × Yıl; Kesinti: yalnızca Damga Vergisi (%0,759). İhbar: 2–8 hafta ücreti – Gelir Vergisi – Damga Vergisi.',
    statutorySource: '1475 SK m.14, 4857 SK m.17, HMB Maliye Genelgesi, 193 SK m.103',
    sourceUrl: 'https://www.hmb.gov.tr',
    currentValues: `Asgari Ücret: ${ASGARI_UCRET_2026.gross.toLocaleString('tr-TR')} TL brüt / ${ASGARI_UCRET_2026.net.toLocaleString('tr-TR')} TL net; Kıdem Tavanı: ${KIDEM_TAZMINATI_TAVANI_2026_H1.current.toLocaleString('tr-TR')} TL.`,
    validFrom: KIDEM_TAZMINATI_TAVANI_2026_H1.validFrom,
    updateRhythm: 'Twice a year (January and July) for severance ceiling; annually for tax brackets and minimum wage',
    notes: 'Full cumulative tax bracket progression month by month with statutory minimum wage tax exemption.',
  },
  // 12. Poland Salary & B2B Calculator
  {
    calculatorName: 'Poland Kalkulator Wynagrodzeń & B2B',
    category: 'Salary',
    region: 'Poland (PL)',
    formula: 'UoP: Brutto – ZUS (13,71%) – NFZ (9%) – PIT (12%/32% po KUP i uldze 300 zł). B2B: Przychód – Koszty – ZUS społeczny – NFZ (skala/liniowy/ryczałt) – Podatek dochodowy.',
    statutorySource: 'Ustawa o PIT, Ustawa o SUS, Rozporządzenie RM w sprawie płacy minimalnej (Dz.U. 2024 poz. 1362)',
    sourceUrl: 'https://isap.sejm.gov.pl',
    currentValues: `Płaca minimalna: ${POLAND_SALARY_RULES_2026.minimalWage.grossMonthly.toLocaleString('pl-PL')} zł, Limit 30-krotności: ${POLAND_SALARY_RULES_2026.minimalWage.annual30xCap.toLocaleString('pl-PL')} zł.`,
    validFrom: POLAND_SALARY_RULES_2026.validFrom,
    updateRhythm: 'Annually on 1 January (with occasional mid-year minimum wage adjustments)',
    notes: 'Handles Ulga na start, ZUS preferencyjny, Mały ZUS Plus, Ulga dla młodych, and PPK.',
  },
  // 13. Romania Salary & PFA/SRL Calculator
  {
    calculatorName: 'Romania Calculator Salariu & PFA vs SRL',
    category: 'Salary',
    region: 'Romania (RO)',
    formula: 'Salariu: Brut – CAS (25%) – CASS (10%) – Impozit (10% după deducere art. 77). PFA: Venit net – CAS (12/24 salarii) – CASS (10% plafonat la 6-60 salarii) – Impozit (10%).',
    statutorySource: 'Legea nr. 227/2015 Codul Fiscal, HG nr. 141/2025, OUG nr. 115/2023, Legea nr. 296/2023',
    sourceUrl: 'https://www.anaf.ro',
    currentValues: `Salariul minim: ${ROMANIA_SALARY_RULES_2026.minimumWageGross.toLocaleString('ro-RO')} lei brut / ${ROMANIA_SALARY_RULES_2026.minimumWageNet.toLocaleString('ro-RO')} lei net (cu scutirea de 300 lei neimpozabili), CAM: ${(ROMANIA_SALARY_RULES_2026.camRate * 100).toFixed(2)}%.`,
    validFrom: ROMANIA_SALARY_RULES_2026.validFrom,
    updateRhythm: 'Annually / upon Emergency Ordinances and Government Decisions',
    notes: 'Exact regressive personal deduction calculation based on number of dependents and school attendance.',
  },
];

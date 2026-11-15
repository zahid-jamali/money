export type PageType = 'tool' | 'guide' | 'info' | 'site' | 'programmatic';
export type PageCategory = 'banking' | 'tax-vat' | 'salary' | 'travel' | 'home-energy';
export type SupportedLang = 'en' | 'de' | 'pl' | 'tr' | 'ro' | 'fr' | 'es' | 'it' | 'nl';

export interface PageRegistryItem {
  id: string; // Shared across translations of the exact same tool/page
  lang: SupportedLang;
  region?: 'uk' | 'de' | 'pl' | 'tr' | 'ro' | 'au' | 'ca' | 'eu' | 'fr' | 'es' | 'it' | 'nl';
  slug: string; // Evergreen slug without year
  type: PageType;
  category: PageCategory;
  priority: number; // 0.1 to 1.0
  updatedAt: string; // YYYY-MM-DD
  isTodo?: boolean; // Future tool link placeholder
}

export const PAGES_REGISTRY: PageRegistryItem[] = [
  // =================== HOMEPAGES ===================
  { id: 'home', lang: 'en', slug: '', type: 'site', category: 'banking', priority: 1.0, updatedAt: '2026-11-14' },
  { id: 'home', lang: 'de', slug: 'de', type: 'site', category: 'banking', priority: 1.0, updatedAt: '2026-11-14' },
  { id: 'home', lang: 'pl', slug: 'pl', type: 'site', category: 'banking', priority: 1.0, updatedAt: '2026-11-14' },
  { id: 'home', lang: 'tr', slug: 'tr', type: 'site', category: 'banking', priority: 1.0, updatedAt: '2026-11-14' },
  { id: 'home', lang: 'ro', slug: 'ro', type: 'site', category: 'banking', priority: 1.0, updatedAt: '2026-11-14' },
  { id: 'home', lang: 'fr', slug: 'fr', type: 'site', category: 'banking', priority: 1.0, updatedAt: '2026-11-14' },
  { id: 'home', lang: 'es', slug: 'es', type: 'site', category: 'banking', priority: 1.0, updatedAt: '2026-11-14' },
  { id: 'home', lang: 'it', slug: 'it', type: 'site', category: 'banking', priority: 1.0, updatedAt: '2026-11-14' },
  { id: 'home', lang: 'nl', slug: 'nl', type: 'site', category: 'banking', priority: 1.0, updatedAt: '2026-11-14' },

  // =================== 1. IBAN CHECKER IN 9 LANGUAGES (SHARED ID: iban-checker) ===================
  { id: 'iban-checker', lang: 'en', slug: 'iban-checker', type: 'tool', category: 'banking', priority: 0.95, updatedAt: '2026-11-14' },
  { id: 'iban-checker', lang: 'de', slug: 'de/iban-pruefen', type: 'tool', category: 'banking', priority: 0.95, updatedAt: '2026-11-14' },
  { id: 'iban-checker', lang: 'pl', slug: 'pl/sprawdz-iban', type: 'tool', category: 'banking', priority: 0.95, updatedAt: '2026-11-14' },
  { id: 'iban-checker', lang: 'tr', slug: 'tr/iban-dogrulama', type: 'tool', category: 'banking', priority: 0.95, updatedAt: '2026-11-14' },
  { id: 'iban-checker', lang: 'ro', slug: 'ro/verificare-iban', type: 'tool', category: 'banking', priority: 0.95, updatedAt: '2026-11-14' },
  { id: 'iban-checker', lang: 'fr', slug: 'fr/verifier-iban', type: 'tool', category: 'banking', priority: 0.95, updatedAt: '2026-11-14' },
  { id: 'iban-checker', lang: 'es', slug: 'es/validar-iban', type: 'tool', category: 'banking', priority: 0.95, updatedAt: '2026-11-14' },
  { id: 'iban-checker', lang: 'it', slug: 'it/verifica-iban', type: 'tool', category: 'banking', priority: 0.95, updatedAt: '2026-11-14' },
  { id: 'iban-checker', lang: 'nl', slug: 'nl/iban-controleren', type: 'tool', category: 'banking', priority: 0.95, updatedAt: '2026-11-14' },

  // =================== 2. GERMAN BANKING TOOLS ===================
  { id: 'german-iban-calculator', lang: 'de', region: 'de', slug: 'de/iban-rechner', type: 'tool', category: 'banking', priority: 0.9, updatedAt: '2026-11-14' },
  { id: 'german-blz-search', lang: 'de', region: 'de', slug: 'de/blz-suche', type: 'tool', category: 'banking', priority: 0.9, updatedAt: '2026-11-14' },

  // =================== 3. BIC / SWIFT CHECKER ===================
  { id: 'bic-checker', lang: 'en', slug: 'bic-swift-checker', type: 'tool', category: 'banking', priority: 0.85, updatedAt: '2026-11-14' },
  { id: 'bic-checker', lang: 'de', slug: 'de/bic-pruefen', type: 'tool', category: 'banking', priority: 0.85, updatedAt: '2026-11-14' },

  // =================== 4. VAT CALCULATORS ===================
  // English EU Hub:
  { id: 'vat-calculator', lang: 'en', region: 'eu', slug: 'vat-calculator', type: 'tool', category: 'tax-vat', priority: 0.95, updatedAt: '2026-11-14' },
  // German MwSt:
  { id: 'vat-calculator', lang: 'de', region: 'de', slug: 'de/mwst-rechner', type: 'tool', category: 'tax-vat', priority: 0.9, updatedAt: '2026-11-14' },
  // UK VAT:
  { id: 'vat-calculator-uk', lang: 'en', region: 'uk', slug: 'vat-calculator/uk', type: 'tool', category: 'tax-vat', priority: 0.9, updatedAt: '2026-11-14' },
  // Polish VAT:
  { id: 'kalkulator-vat-pl', lang: 'pl', region: 'pl', slug: 'pl/kalkulator-vat', type: 'tool', category: 'tax-vat', priority: 0.9, updatedAt: '2026-11-14' },
  // Turkish KDV:
  { id: 'kdv-hesaplama-tr', lang: 'tr', region: 'tr', slug: 'tr/kdv-hesaplama', type: 'tool', category: 'tax-vat', priority: 0.9, updatedAt: '2026-11-14' },
  // Romanian TVA:
  { id: 'calculator-tva-ro', lang: 'ro', region: 'ro', slug: 'ro/calculator-tva', type: 'tool', category: 'tax-vat', priority: 0.9, updatedAt: '2026-11-14' },

  // =================== 5. SCHENGEN & TRAVEL TOOLS ===================
  { id: 'schengen-calculator', lang: 'en', slug: 'schengen-calculator', type: 'tool', category: 'travel', priority: 0.95, updatedAt: '2026-11-14' },
  { id: 'schengen-calculator', lang: 'tr', region: 'tr', slug: 'tr/schengen-gun-hesaplama', type: 'tool', category: 'travel', priority: 0.95, updatedAt: '2026-11-14' },
  { id: 'etias', lang: 'en', slug: 'etias', type: 'info', category: 'travel', priority: 0.9, updatedAt: '2026-11-14' },
  { id: 'ees-entry-exit', lang: 'en', slug: 'ees-entry-exit-system', type: 'info', category: 'travel', priority: 0.9, updatedAt: '2026-11-14' },

  // =================== 6. FUEL COST TOOLS ===================
  { id: 'fuel-cost-calculator', lang: 'en', region: 'uk', slug: 'fuel-cost-calculator/uk', type: 'tool', category: 'travel', priority: 0.9, updatedAt: '2026-11-14' },
  { id: 'fuel-cost-calculator', lang: 'en', region: 'au', slug: 'fuel-cost-calculator/australia', type: 'tool', category: 'travel', priority: 0.9, updatedAt: '2026-11-14' },
  { id: 'fuel-cost-calculator', lang: 'en', region: 'ca', slug: 'fuel-cost-calculator/canada', type: 'tool', category: 'travel', priority: 0.9, updatedAt: '2026-11-14' },
  { id: 'fuel-cost-calculator', lang: 'de', region: 'de', slug: 'de/spritkostenrechner', type: 'tool', category: 'travel', priority: 0.9, updatedAt: '2026-11-14' },
  { id: 'mpg-converter', lang: 'en', slug: 'mpg-to-litres-per-100km', type: 'tool', category: 'travel', priority: 0.85, updatedAt: '2026-11-14' },
  { id: 'ev-vs-petrol', lang: 'en', slug: 'fuel-cost-calculator/ev-vs-petrol', type: 'tool', category: 'travel', priority: 0.85, updatedAt: '2026-11-14' },

  // =================== 7. ELECTRICITY COST REGIONAL TOOLS ===================
  { id: 'electricity-cost-calculator', lang: 'en', region: 'uk', slug: 'electricity-cost-calculator/uk', type: 'tool', category: 'home-energy', priority: 0.9, updatedAt: '2026-11-14' },
  { id: 'electricity-cost-calculator', lang: 'en', region: 'au', slug: 'electricity-cost-calculator/australia', type: 'tool', category: 'home-energy', priority: 0.9, updatedAt: '2026-11-14' },
  { id: 'electricity-cost-calculator', lang: 'de', region: 'de', slug: 'de/stromkosten-rechner', type: 'tool', category: 'home-energy', priority: 0.9, updatedAt: '2026-11-14' },

  // =================== 8. TRAVEL GUIDES ===================
  { id: 'guide-schengen-rule-explained', lang: 'en', slug: 'guides/schengen-90-180-rule-explained', type: 'guide', category: 'travel', priority: 0.85, updatedAt: '2026-11-14' },
  { id: 'guide-uk-citizens-europe-travel', lang: 'en', slug: 'guides/uk-citizens-europe-travel-rules', type: 'guide', category: 'travel', priority: 0.85, updatedAt: '2026-11-14' },
  { id: 'guide-schengen-overstay-consequences', lang: 'en', slug: 'guides/schengen-overstay-consequences', type: 'guide', category: 'travel', priority: 0.85, updatedAt: '2026-11-14' },
  { id: 'guide-schengen-countries-list', lang: 'en', slug: 'guides/schengen-countries-list', type: 'guide', category: 'travel', priority: 0.85, updatedAt: '2026-11-14' },
  { id: 'guide-tr-schengen-vize-rehberi', lang: 'tr', region: 'tr', slug: 'tr/rehber/schengen-vizesi-90-180-kurali', type: 'guide', category: 'travel', priority: 0.85, updatedAt: '2026-11-14' },

  // =================== 9. ENERGY GUIDES ===================
  { id: 'guide-how-to-read-electricity-bill', lang: 'en', slug: 'guides/how-to-read-your-electricity-bill-uk', type: 'guide', category: 'home-energy', priority: 0.85, updatedAt: '2026-11-14' },
  { id: 'guide-energy-price-cap-explained', lang: 'en', slug: 'guides/energy-price-cap-explained', type: 'guide', category: 'home-energy', priority: 0.85, updatedAt: '2026-11-14' },
  { id: 'guide-de-stromverbrauch-senken', lang: 'de', slug: 'de/ratgeber/stromverbrauch-senken', type: 'guide', category: 'home-energy', priority: 0.85, updatedAt: '2026-11-14' },

  // =================== 10. BANKING GUIDES ===================
  { id: 'guide-what-is-iban', lang: 'en', slug: 'guides/what-is-an-iban', type: 'guide', category: 'banking', priority: 0.8, updatedAt: '2026-11-14' },
  { id: 'guide-iban-vs-bic', lang: 'en', slug: 'guides/iban-vs-swift-bic', type: 'guide', category: 'banking', priority: 0.8, updatedAt: '2026-11-14' },
  { id: 'guide-how-to-find-iban', lang: 'en', slug: 'guides/how-to-find-your-iban', type: 'guide', category: 'banking', priority: 0.8, updatedAt: '2026-11-14' },
  { id: 'guide-de-iban-structure', lang: 'de', slug: 'de/ratgeber/iban-aufbau', type: 'guide', category: 'banking', priority: 0.8, updatedAt: '2026-11-14' },
  { id: 'guide-de-blz-bic', lang: 'de', slug: 'de/ratgeber/blz-und-bic', type: 'guide', category: 'banking', priority: 0.8, updatedAt: '2026-11-14' },

  // =================== 11. TURKEY SALARY & TAX TOOLS ===================
  { id: 'kidem-tazminati-hesaplama', lang: 'tr', region: 'tr', slug: 'tr/kidem-tazminati-hesaplama', type: 'tool', category: 'salary', priority: 0.95, updatedAt: '2026-11-14' },
  { id: 'ihbar-tazminati-hesaplama', lang: 'tr', region: 'tr', slug: 'tr/ihbar-tazminati-hesaplama', type: 'tool', category: 'salary', priority: 0.95, updatedAt: '2026-11-14' },
  { id: 'kidem-ve-ihbar-tazminati-hesaplama', lang: 'tr', region: 'tr', slug: 'tr/kidem-ve-ihbar-tazminati-hesaplama', type: 'tool', category: 'salary', priority: 0.9, updatedAt: '2026-11-14' },
  { id: 'brutten-nete-maas-hesaplama', lang: 'tr', region: 'tr', slug: 'tr/brutten-nete-maas-hesaplama', type: 'tool', category: 'salary', priority: 0.95, updatedAt: '2026-11-14' },
  { id: 'netten-brute-maas-hesaplama', lang: 'tr', region: 'tr', slug: 'tr/netten-brute-maas-hesaplama', type: 'tool', category: 'salary', priority: 0.9, updatedAt: '2026-11-14' },
  { id: 'asgari-ucret-tr', lang: 'tr', region: 'tr', slug: 'tr/asgari-ucret', type: 'tool', category: 'salary', priority: 0.95, updatedAt: '2026-11-14' },
  { id: 'kidem-tazminati-tavani-tr', lang: 'tr', region: 'tr', slug: 'tr/kidem-tazminati-tavani', type: 'tool', category: 'salary', priority: 0.9, updatedAt: '2026-11-14' },
  { id: 'gelir-vergisi-dilimleri-tr', lang: 'tr', region: 'tr', slug: 'tr/gelir-vergisi-dilimleri', type: 'tool', category: 'salary', priority: 0.9, updatedAt: '2026-11-14' },

  // =================== 12. TURKEY SALARY GUIDES ===================
  { id: 'guide-tr-istifa-eden-kidem-tazminati', lang: 'tr', region: 'tr', slug: 'tr/rehber/istifa-eden-kidem-tazminati-alabilir-mi', type: 'guide', category: 'salary', priority: 0.85, updatedAt: '2026-11-14' },
  { id: 'guide-tr-kidem-tazminati-sartlari', lang: 'tr', region: 'tr', slug: 'tr/rehber/kidem-tazminati-sartlari', type: 'guide', category: 'salary', priority: 0.85, updatedAt: '2026-11-14' },
  { id: 'guide-tr-ihbar-suresi-nasil-hesaplanir', lang: 'tr', region: 'tr', slug: 'tr/rehber/ihbar-suresi-nasil-hesaplanir', type: 'guide', category: 'salary', priority: 0.85, updatedAt: '2026-11-14' },
  { id: 'guide-tr-evlilik-nedeniyle-kidem-tazminati', lang: 'tr', region: 'tr', slug: 'tr/rehber/evlilik-nedeniyle-kidem-tazminati', type: 'guide', category: 'salary', priority: 0.85, updatedAt: '2026-11-14' },

  // =================== 13. POLAND SALARY & TAX TOOLS ===================
  { id: 'kalkulator-wynagrodzen-pl', lang: 'pl', region: 'pl', slug: 'pl/kalkulator-wynagrodzen', type: 'tool', category: 'salary', priority: 0.95, updatedAt: '2026-11-15' },
  { id: 'kalkulator-b2b-pl', lang: 'pl', region: 'pl', slug: 'pl/kalkulator-b2b', type: 'tool', category: 'salary', priority: 0.95, updatedAt: '2026-11-15' },
  { id: 'placa-minimalna-pl', lang: 'pl', region: 'pl', slug: 'pl/placa-minimalna', type: 'info', category: 'salary', priority: 0.9, updatedAt: '2026-11-15' },
  { id: 'skladki-zus-pl', lang: 'pl', region: 'pl', slug: 'pl/skladki-zus', type: 'info', category: 'salary', priority: 0.9, updatedAt: '2026-11-15' },
  { id: 'progi-podatkowe-pl', lang: 'pl', region: 'pl', slug: 'pl/progi-podatkowe', type: 'info', category: 'salary', priority: 0.9, updatedAt: '2026-11-15' },

  // =================== 14. POLAND SALARY GUIDES ===================
  { id: 'guide-pl-b2b-czy-umowa-o-prace', lang: 'pl', region: 'pl', slug: 'pl/poradniki/b2b-czy-umowa-o-prace', type: 'guide', category: 'salary', priority: 0.85, updatedAt: '2026-11-15' },
  { id: 'guide-pl-ryczalt-czy-liniowy', lang: 'pl', region: 'pl', slug: 'pl/poradniki/ryczalt-czy-liniowy', type: 'guide', category: 'salary', priority: 0.85, updatedAt: '2026-11-15' },
  { id: 'guide-pl-ulga-dla-mlodych', lang: 'pl', region: 'pl', slug: 'pl/poradniki/ulga-dla-mlodych', type: 'guide', category: 'salary', priority: 0.85, updatedAt: '2026-11-15' },
  { id: 'guide-pl-jak-czytac-pasek-wyplaty', lang: 'pl', region: 'pl', slug: 'pl/poradniki/jak-czytac-pasek-wyplaty', type: 'guide', category: 'salary', priority: 0.85, updatedAt: '2026-11-15' },

  // =================== 15. ROMANIA SALARY & TAX TOOLS ===================
  { id: 'calculator-salariu-ro', lang: 'ro', region: 'ro', slug: 'ro/calculator-salariu', type: 'tool', category: 'salary', priority: 0.95, updatedAt: '2026-11-15' },
  { id: 'calculator-pfa-srl-ro', lang: 'ro', region: 'ro', slug: 'ro/calculator-pfa-srl', type: 'tool', category: 'salary', priority: 0.95, updatedAt: '2026-11-15' },
  { id: 'salariul-minim-ro', lang: 'ro', region: 'ro', slug: 'ro/salariul-minim', type: 'info', category: 'salary', priority: 0.9, updatedAt: '2026-11-15' },
  { id: 'deducere-personala-ro', lang: 'ro', region: 'ro', slug: 'ro/deducere-personala', type: 'info', category: 'salary', priority: 0.9, updatedAt: '2026-11-15' },

  // =================== 16. ROMANIA SALARY GUIDES ===================
  { id: 'guide-ro-pfa-sau-srl', lang: 'ro', region: 'ro', slug: 'ro/ghiduri/pfa-sau-srl', type: 'guide', category: 'salary', priority: 0.85, updatedAt: '2026-11-15' },
  { id: 'guide-ro-cum-se-calculeaza-salariul-net', lang: 'ro', region: 'ro', slug: 'ro/ghiduri/cum-se-calculeaza-salariul-net', type: 'guide', category: 'salary', priority: 0.85, updatedAt: '2026-11-15' },
  { id: 'guide-ro-declaratia-unica-pfa', lang: 'ro', region: 'ro', slug: 'ro/ghiduri/declaratia-unica-pfa', type: 'guide', category: 'salary', priority: 0.85, updatedAt: '2026-11-15' },

  // =================== 17. FUTURE SALARY TOOLS (TODO PLACEHOLDERS) ===================
  { id: 'salary-calculator-uk', lang: 'en', region: 'uk', slug: 'salary-calculator/uk', type: 'tool', category: 'salary', priority: 0.7, updatedAt: '2026-11-14', isTodo: true },
  { id: 'gehaltsrechner-de', lang: 'de', region: 'de', slug: 'de/gehaltsrechner', type: 'tool', category: 'salary', priority: 0.7, updatedAt: '2026-11-14', isTodo: true },

  // =================== 18. SITE PAGES & LEGAL ===================
  // About (shared ID: about)
  { id: 'about', lang: 'en', slug: 'about', type: 'site', category: 'banking', priority: 0.5, updatedAt: '2026-11-15' },
  { id: 'about', lang: 'de', slug: 'de/ueber-uns', type: 'site', category: 'banking', priority: 0.5, updatedAt: '2026-11-15' },
  { id: 'about', lang: 'pl', slug: 'pl/o-nas', type: 'site', category: 'banking', priority: 0.5, updatedAt: '2026-11-15' },
  { id: 'about', lang: 'tr', slug: 'tr/hakkimizda', type: 'site', category: 'banking', priority: 0.5, updatedAt: '2026-11-15' },
  { id: 'about', lang: 'ro', slug: 'ro/despre-noi', type: 'site', category: 'banking', priority: 0.5, updatedAt: '2026-11-15' },
  { id: 'about', lang: 'fr', slug: 'fr/a-propos', type: 'site', category: 'banking', priority: 0.5, updatedAt: '2026-11-15' },
  { id: 'about', lang: 'es', slug: 'es/sobre-nosotros', type: 'site', category: 'banking', priority: 0.5, updatedAt: '2026-11-15' },
  { id: 'about', lang: 'it', slug: 'it/chi-siamo', type: 'site', category: 'banking', priority: 0.5, updatedAt: '2026-11-15' },
  { id: 'about', lang: 'nl', slug: 'nl/over-ons', type: 'site', category: 'banking', priority: 0.5, updatedAt: '2026-11-15' },

  // Methodology (shared ID: methodology)
  { id: 'methodology', lang: 'en', slug: 'methodology', type: 'site', category: 'banking', priority: 0.6, updatedAt: '2026-11-15' },
  { id: 'methodology', lang: 'de', slug: 'de/methodik', type: 'site', category: 'banking', priority: 0.6, updatedAt: '2026-11-15' },
  { id: 'methodology', lang: 'pl', slug: 'pl/metodologia', type: 'site', category: 'banking', priority: 0.6, updatedAt: '2026-11-15' },
  { id: 'methodology', lang: 'tr', slug: 'tr/metodoloji', type: 'site', category: 'banking', priority: 0.6, updatedAt: '2026-11-15' },
  { id: 'methodology', lang: 'ro', slug: 'ro/metodologie', type: 'site', category: 'banking', priority: 0.6, updatedAt: '2026-11-15' },

  // Contact (shared ID: contact)
  { id: 'contact', lang: 'en', slug: 'contact', type: 'site', category: 'banking', priority: 0.4, updatedAt: '2026-11-15' },
  { id: 'contact', lang: 'de', slug: 'de/kontakt', type: 'site', category: 'banking', priority: 0.4, updatedAt: '2026-11-15' },
  { id: 'contact', lang: 'pl', slug: 'pl/kontakt', type: 'site', category: 'banking', priority: 0.4, updatedAt: '2026-11-15' },
  { id: 'contact', lang: 'tr', slug: 'tr/iletisim', type: 'site', category: 'banking', priority: 0.4, updatedAt: '2026-11-15' },
  { id: 'contact', lang: 'ro', slug: 'ro/contact', type: 'site', category: 'banking', priority: 0.4, updatedAt: '2026-11-15' },
  { id: 'contact', lang: 'fr', slug: 'fr/contact', type: 'site', category: 'banking', priority: 0.4, updatedAt: '2026-11-15' },
  { id: 'contact', lang: 'es', slug: 'es/contacto', type: 'site', category: 'banking', priority: 0.4, updatedAt: '2026-11-15' },
  { id: 'contact', lang: 'it', slug: 'it/contatti', type: 'site', category: 'banking', priority: 0.4, updatedAt: '2026-11-15' },
  { id: 'contact', lang: 'nl', slug: 'nl/contact', type: 'site', category: 'banking', priority: 0.4, updatedAt: '2026-11-15' },

  // Privacy Policy (shared ID: privacy-policy)
  { id: 'privacy-policy', lang: 'en', slug: 'privacy-policy', type: 'site', category: 'banking', priority: 0.3, updatedAt: '2026-11-15' },
  { id: 'privacy-policy', lang: 'de', slug: 'de/datenschutz', type: 'site', category: 'banking', priority: 0.3, updatedAt: '2026-11-15' },
  { id: 'privacy-policy', lang: 'pl', slug: 'pl/polityka-prywatnosci', type: 'site', category: 'banking', priority: 0.3, updatedAt: '2026-11-15' },
  { id: 'privacy-policy', lang: 'tr', slug: 'tr/gizlilik-politikasi', type: 'site', category: 'banking', priority: 0.3, updatedAt: '2026-11-15' },
  { id: 'privacy-policy', lang: 'ro', slug: 'ro/politica-de-confidentialitate', type: 'site', category: 'banking', priority: 0.3, updatedAt: '2026-11-15' },
  { id: 'privacy-policy', lang: 'fr', slug: 'fr/politique-de-confidentialite', type: 'site', category: 'banking', priority: 0.3, updatedAt: '2026-11-15' },
  { id: 'privacy-policy', lang: 'es', slug: 'es/politica-de-privacidad', type: 'site', category: 'banking', priority: 0.3, updatedAt: '2026-11-15' },
  { id: 'privacy-policy', lang: 'it', slug: 'it/informativa-privacy', type: 'site', category: 'banking', priority: 0.3, updatedAt: '2026-11-15' },
  { id: 'privacy-policy', lang: 'nl', slug: 'nl/privacybeleid', type: 'site', category: 'banking', priority: 0.3, updatedAt: '2026-11-15' },

  // Cookie Policy (shared ID: cookie-policy)
  { id: 'cookie-policy', lang: 'en', slug: 'cookie-policy', type: 'site', category: 'banking', priority: 0.3, updatedAt: '2026-11-15' },
  { id: 'cookie-policy', lang: 'de', slug: 'de/cookie-richtlinie', type: 'site', category: 'banking', priority: 0.3, updatedAt: '2026-11-15' },
  { id: 'cookie-policy', lang: 'pl', slug: 'pl/polityka-cookies', type: 'site', category: 'banking', priority: 0.3, updatedAt: '2026-11-15' },
  { id: 'cookie-policy', lang: 'tr', slug: 'tr/cerez-politikasi', type: 'site', category: 'banking', priority: 0.3, updatedAt: '2026-11-15' },
  { id: 'cookie-policy', lang: 'ro', slug: 'ro/politica-de-cookie-uri', type: 'site', category: 'banking', priority: 0.3, updatedAt: '2026-11-15' },

  // Terms of Use (shared ID: terms)
  { id: 'terms', lang: 'en', slug: 'terms', type: 'site', category: 'banking', priority: 0.3, updatedAt: '2026-11-15' },
  { id: 'terms', lang: 'de', slug: 'de/nutzungsbedingungen', type: 'site', category: 'banking', priority: 0.3, updatedAt: '2026-11-15' },
  { id: 'terms', lang: 'pl', slug: 'pl/regulamin', type: 'site', category: 'banking', priority: 0.3, updatedAt: '2026-11-15' },
  { id: 'terms', lang: 'tr', slug: 'tr/kullanim-sartlari', type: 'site', category: 'banking', priority: 0.3, updatedAt: '2026-11-15' },
  { id: 'terms', lang: 'ro', slug: 'ro/termeni-si-conditii', type: 'site', category: 'banking', priority: 0.3, updatedAt: '2026-11-15' },
  { id: 'terms', lang: 'fr', slug: 'fr/conditions-utilisation', type: 'site', category: 'banking', priority: 0.3, updatedAt: '2026-11-15' },
  { id: 'terms', lang: 'es', slug: 'es/terminos-y-condiciones', type: 'site', category: 'banking', priority: 0.3, updatedAt: '2026-11-15' },
  { id: 'terms', lang: 'it', slug: 'it/termini-e-condizioni', type: 'site', category: 'banking', priority: 0.3, updatedAt: '2026-11-15' },
  { id: 'terms', lang: 'nl', slug: 'nl/algemene-voorwaarden', type: 'site', category: 'banking', priority: 0.3, updatedAt: '2026-11-15' },

  // Disclaimer (shared ID: disclaimer)
  { id: 'disclaimer', lang: 'en', slug: 'disclaimer', type: 'site', category: 'banking', priority: 0.3, updatedAt: '2026-11-15' },
  { id: 'disclaimer', lang: 'de', slug: 'de/haftungsausschluss', type: 'site', category: 'banking', priority: 0.3, updatedAt: '2026-11-15' },
  { id: 'disclaimer', lang: 'pl', slug: 'pl/zastrzezenia-prawne', type: 'site', category: 'banking', priority: 0.3, updatedAt: '2026-11-15' },
  { id: 'disclaimer', lang: 'tr', slug: 'tr/sorumluluk-reddi', type: 'site', category: 'banking', priority: 0.3, updatedAt: '2026-11-15' },
  { id: 'disclaimer', lang: 'ro', slug: 'ro/declinarea-responsabilitatii', type: 'site', category: 'banking', priority: 0.3, updatedAt: '2026-11-15' },

  // FAQ Hub (shared ID: faq)
  { id: 'faq', lang: 'en', slug: 'faq', type: 'site', category: 'banking', priority: 0.7, updatedAt: '2026-11-15' },
  { id: 'faq', lang: 'de', slug: 'de/faq', type: 'site', category: 'banking', priority: 0.7, updatedAt: '2026-11-15' },
  { id: 'faq', lang: 'pl', slug: 'pl/faq', type: 'site', category: 'banking', priority: 0.7, updatedAt: '2026-11-15' },
  { id: 'faq', lang: 'tr', slug: 'tr/sss', type: 'site', category: 'banking', priority: 0.7, updatedAt: '2026-11-15' },
  { id: 'faq', lang: 'ro', slug: 'ro/intrebari-frecvente', type: 'site', category: 'banking', priority: 0.7, updatedAt: '2026-11-15' },

  // Sitemap (shared ID: sitemap)
  { id: 'sitemap', lang: 'en', slug: 'sitemap', type: 'site', category: 'banking', priority: 0.4, updatedAt: '2026-11-15' },
  { id: 'sitemap', lang: 'de', slug: 'de/sitemap', type: 'site', category: 'banking', priority: 0.4, updatedAt: '2026-11-15' },
  { id: 'sitemap', lang: 'pl', slug: 'pl/mapa-strony', type: 'site', category: 'banking', priority: 0.4, updatedAt: '2026-11-15' },
  { id: 'sitemap', lang: 'tr', slug: 'tr/site-haritasi', type: 'site', category: 'banking', priority: 0.4, updatedAt: '2026-11-15' },
  { id: 'sitemap', lang: 'ro', slug: 'ro/harta-site-ului', type: 'site', category: 'banking', priority: 0.4, updatedAt: '2026-11-15' },

  // German Impressum
  { id: 'impressum', lang: 'de', region: 'de', slug: 'de/impressum', type: 'site', category: 'banking', priority: 0.3, updatedAt: '2026-11-15' },
];

export function getPageBySlug(slug: string): PageRegistryItem | undefined {
  const normalized = slug.replace(/^\/+|\/+$/g, '');
  return PAGES_REGISTRY.find((p) => p.slug === normalized);
}

export function getPageById(id: string, lang: SupportedLang, region?: string): PageRegistryItem | undefined {
  return PAGES_REGISTRY.find(
    (p) => p.id === id && p.lang === lang && (!region || p.region === region),
  );
}

export function getAlternatesForPage(id: string): PageRegistryItem[] {
  return PAGES_REGISTRY.filter((p) => p.id === id && !p.isTodo);
}

export function getPagesByLanguage(lang: SupportedLang): PageRegistryItem[] {
  return PAGES_REGISTRY.filter((p) => p.lang === lang && !p.isTodo);
}

export function getToolsByCategory(lang: SupportedLang, category: PageCategory): PageRegistryItem[] {
  return PAGES_REGISTRY.filter(
    (p) => p.lang === lang && p.type === 'tool' && p.category === category && !p.isTodo,
  );
}

export function getSlugUrl(slug: string): string {
  if (!slug) return '/';
  return `/${slug.replace(/^\/+|\/+$/g, '')}/`;
}

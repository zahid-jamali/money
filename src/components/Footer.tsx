import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import {
  SupportedLang,
  PAGES_REGISTRY,
  getSlugUrl,
} from '@/config/pages';
import { getDictionary } from '@/i18n';
import { SITE_PAGES_MAP, getSitePageLink } from '@/config/site-pages';
import { ShieldCheck, Lock, Cpu } from 'lucide-react';

export interface FooterProps {
  lang?: SupportedLang;
  className?: string;
}

interface FooterLinkItem {
  label: string;
  href: string;
}

export const TOOL_NAMES: Record<string, Record<SupportedLang, string>> = {
  'vat-calculator': {
    en: 'VAT Calculator',
    de: 'MwSt.-Rechner',
    pl: 'Kalkulator VAT',
    tr: 'KDV Hesaplama',
    ro: 'Calculator TVA',
    fr: 'Calculateur TVA',
    es: 'Calculadora IVA',
    it: 'Calcolatore IVA',
    nl: 'Btw-calculator',
  },
  'iban-checker': {
    en: 'IBAN Checker & Validator',
    de: 'IBAN prüfen & validieren',
    pl: 'Sprawdź i zweryfikuj IBAN',
    tr: 'IBAN Doğrulama',
    ro: 'Verificare IBAN',
    fr: 'Vérifier IBAN',
    es: 'Validar y Verificar IBAN',
    it: 'Verifica e convalida IBAN',
    nl: 'IBAN controleren & valideren',
  },
  'electricity-cost-calculator': {
    en: 'Electricity Cost Calculator',
    de: 'Stromkostenrechner',
    pl: 'Kalkulator kosztów prądu',
    tr: 'Elektrik Maliyeti Hesaplama',
    ro: 'Calculator consum energie',
    fr: 'Calculateur coût électricité',
    es: 'Calculadora de electricidad',
    it: 'Calcolatore costo energia',
    nl: 'Stroomkosten berekenen',
  },
};

export const GUIDES_MAP: Record<SupportedLang, FooterLinkItem[]> = {
  en: [
    { label: 'Schengen 90/180 Rule Explained', href: '/guides/schengen-90-180-rule-explained/' },
    { label: 'What is an IBAN & How to Find It', href: '/guides/what-is-an-iban/' },
    { label: 'UK Energy Price Cap Guide', href: '/guides/energy-price-cap-explained/' },
    { label: 'UK Citizens Europe Travel Rules', href: '/guides/uk-citizens-europe-travel-rules/' },
  ],
  de: [
    { label: 'BLZ & BIC Verzeichnis Leitfaden', href: '/de/ratgeber/blz-und-bic/' },
    { label: 'IBAN Aufbau & Prüfziffern', href: '/de/ratgeber/iban-aufbau/' },
    { label: 'Stromverbrauch im Haushalt senken', href: '/de/ratgeber/stromverbrauch-senken/' },
  ],
  pl: [
    { label: 'B2B czy umowa o pracę (UoP)?', href: '/pl/poradniki/b2b-czy-umowa-o-prace/' },
    { label: 'Ryczałt czy podatek liniowy?', href: '/pl/poradniki/ryczalt-czy-liniowy/' },
    { label: 'Ulga dla młodych (zerowy PIT)', href: '/pl/poradniki/ulga-dla-mlodych/' },
    { label: 'Jak czytać pasek wynagrodzenia', href: '/pl/poradniki/jak-czytac-pasek-wyplaty/' },
  ],
  tr: [
    { label: 'Kıdem Tazminatı Alma Şartları', href: '/tr/rehber/kidem-tazminati-sartlari/' },
    { label: 'İhbar Süresi Nasıl Hesaplanır?', href: '/tr/rehber/ihbar-suresi-nasil-hesaplanir/' },
    { label: 'İstifa Eden Kıdem Alabilir mi?', href: '/tr/rehber/istifa-eden-kidem-tazminati-alabilir-mi/' },
    { label: 'Schengen Vizesi 90/180 Kuralı', href: '/tr/rehber/schengen-vizesi-90-180-kurali/' },
  ],
  ro: [
    { label: 'PFA sau SRL în 2026? Comparație', href: '/ro/ghiduri/pfa-sau-srl/' },
    { label: 'Cum se calculează salariul net', href: '/ro/ghiduri/cum-se-calculeaza-salariul-net/' },
    { label: 'Declarația unică PFA 2026', href: '/ro/ghiduri/declaratia-unica-pfa/' },
  ],
  fr: [
    { label: 'Règles Schengen 90/180 (EN)', href: '/guides/schengen-90-180-rule-explained/' },
    { label: 'Qu’est-ce qu’un IBAN ? (EN)', href: '/guides/what-is-an-iban/' },
    { label: 'Différence IBAN et BIC (EN)', href: '/guides/iban-vs-swift-bic/' },
  ],
  es: [
    { label: 'Regla 90/180 de Schengen (EN)', href: '/guides/schengen-90-180-rule-explained/' },
    { label: '¿Qué es un código IBAN? (EN)', href: '/guides/what-is-an-iban/' },
    { label: 'Diferencia entre IBAN y BIC (EN)', href: '/guides/iban-vs-swift-bic/' },
  ],
  it: [
    { label: 'Regola 90/180 per Schengen (EN)', href: '/guides/schengen-90-180-rule-explained/' },
    { label: 'Che cos’è l’IBAN bancario? (EN)', href: '/guides/what-is-an-iban/' },
    { label: 'Differenza tra IBAN e BIC (EN)', href: '/guides/iban-vs-swift-bic/' },
  ],
  nl: [
    { label: 'Schengen 90/180-dagenregel (EN)', href: '/guides/schengen-90-180-rule-explained/' },
    { label: 'Wat is een IBAN-nummer? (EN)', href: '/guides/what-is-an-iban/' },
    { label: 'Verschil tussen IBAN en BIC (EN)', href: '/guides/iban-vs-swift-bic/' },
  ],
};

export function Footer({ lang = 'en', className = '' }: FooterProps) {
  const dict = getDictionary(lang);
  const homePath = lang === 'en' ? '/' : `/${lang}/`;
  const currentYear = 2026;

  // 1. Calculators by category for the current language
  const toolsInLang = PAGES_REGISTRY.filter(
    (p) => p.lang === lang && p.type === 'tool' && !p.isTodo,
  );

  const toolsList: FooterLinkItem[] = [];
  const addedIds = new Set<string>();

  for (const tool of toolsInLang) {
    if (!addedIds.has(tool.id)) {
      addedIds.add(tool.id);
      const label =
        TOOL_NAMES[tool.id]?.[lang] ||
        tool.id
          .split('-')
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(' ');
      toolsList.push({
        label,
        href: getSlugUrl(tool.slug),
      });
    }
  }

  // If language has minimal tools (e.g. FR, ES, IT, NL), supplement with global English tools
  if (toolsList.length < 3 && lang !== 'en') {
    if (!addedIds.has('schengen-calculator')) {
      toolsList.push({
        label: 'Schengen 90/180 Calculator (EN)',
        href: '/schengen-calculator/',
      });
    }
    if (!addedIds.has('vat-calculator')) {
      toolsList.push({
        label: 'VAT Calculator (EN)',
        href: '/vat-calculator/',
      });
    }
  }

  // 2. Guides for current language
  const guidesList: FooterLinkItem[] =
    GUIDES_MAP[lang] || GUIDES_MAP.en;

  // 3. Information pages
  const infoList: FooterLinkItem[] = [
    { label: dict.footer.about, href: getSitePageLink('about', lang) },
    ...(SITE_PAGES_MAP[lang]?.methodology
      ? [{ label: dict.footer.methodology, href: getSitePageLink('methodology', lang) }]
      : []),
    { label: dict.footer.contact, href: getSitePageLink('contact', lang) },
    ...(SITE_PAGES_MAP[lang]?.faq
      ? [{ label: dict.footer.faq, href: getSitePageLink('faq', lang) }]
      : []),
  ];

  // 4. Zetawala Money legal & site links
  const siteList: FooterLinkItem[] = [
    { label: dict.footer.privacy, href: getSitePageLink('privacy', lang) },
    { label: dict.footer.terms, href: getSitePageLink('terms', lang) },
    ...(SITE_PAGES_MAP[lang]?.disclaimer
      ? [{ label: dict.footer.disclaimer, href: getSitePageLink('disclaimer', lang) }]
      : []),
    ...(SITE_PAGES_MAP[lang]?.sitemap
      ? [{ label: dict.footer.sitemap, href: getSitePageLink('sitemap', lang) }]
      : []),
  ];

  // Crucial: Add Impressum on German (/de/)
  if (lang === 'de') {
    siteList.push({
      label: dict.footer.impressum || 'Impressum',
      href: '/de/impressum/',
    });
  }

  return (
    <footer
      className={`border-t border-slate-200/90 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Info Column (5 cols on desktop) */}
          <div className="md:col-span-4 lg:col-span-4 space-y-4">
            <Link
              href={homePath}
              className="inline-flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-xl"
            >
              <div className="relative w-9 h-9 rounded-xl overflow-hidden bg-slate-950 shadow-md flex items-center justify-center p-1 border border-slate-800 shrink-0">
                <Image
                  src="/images/logo.png"
                  alt={siteConfig.name}
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white leading-none">
                Zetawala <span className="text-emerald-600 dark:text-emerald-400">Money</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              Free, accurate money, banking, travel, and salary calculators for Europe, the UK, Australia, and Canada. Zero tracking, no registration, 100% in-browser calculations.
            </p>

            {/* Micro Trust Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-2 text-[11px] font-semibold text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Statutory Accuracy
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                <Lock className="w-3.5 h-3.5 text-slate-500" />
                Zero Data Storage
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                <Cpu className="w-3.5 h-3.5 text-slate-500" />
                Client-Side Engine
              </span>
            </div>
          </div>

          {/* 3 Navigation Columns (8 cols on desktop) */}
          <div className="md:col-span-8 lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
            {/* Column 1: Calculators */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3 sm:mb-4">
                {dict.footer.toolsTitle}
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm">
                {toolsList.slice(0, 7).map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors block py-0.5"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Guides & Knowledge */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3 sm:mb-4">
                {dict.footer.guidesTitle}
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm">
                {guidesList.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors block py-0.5"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Legal & Trust */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3 sm:mb-4">
                {dict.footer.infoTitle}
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm">
                {infoList.map((item, idx) => (
                  <li key={`info-${idx}`}>
                    <Link
                      href={item.href}
                      className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors block py-0.5"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                {siteList.map((item, idx) => (
                  <li key={`site-${idx}`}>
                    <Link
                      href={item.href}
                      className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors block py-0.5"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Single Discrete Zetawala Mention */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left">
          <p>
            © {currentYear} {siteConfig.name}. All rights reserved. A project by{' '}
            <a
              href={siteConfig.parentBrand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors underline underline-offset-2"
            >
              {siteConfig.parentBrand.name}
            </a>
            .
          </p>
          <p className="text-[11px] text-slate-400 dark:text-slate-500">
            Privacy-first • Zero server storage • 100% in-browser calculations
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

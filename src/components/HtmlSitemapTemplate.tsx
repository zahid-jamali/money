import React from 'react';
import Link from 'next/link';
import { Map, ArrowRight, ExternalLink } from 'lucide-react';
import { SupportedLang, PAGES_REGISTRY, PageCategory, getSlugUrl } from '@/config/pages';
import { SITE_PAGES_MAP } from '@/config/site-pages';
import { JsonLd } from '@/components/JsonLd';

export interface HtmlSitemapTemplateProps {
  lang: SupportedLang;
}

const SITEMAP_TITLES: Record<SupportedLang, { title: string; subtitle: string }> = {
  en: {
    title: 'HTML Site Map',
    subtitle: 'Complete alphabetical and category directory of every page, calculator, and guide on Zetawala Money.',
  },
  de: {
    title: 'Seitenübersicht (HTML Sitemap)',
    subtitle: 'Vollständiges Verzeichnis aller Rechner, Ratgeber und Informationsseiten für Deutschland.',
  },
  pl: {
    title: 'Mapa Strony (HTML Sitemap)',
    subtitle: 'Pełny spis wszystkich kalkulatorów wynagrodzeń, podatków i poradników w serwisie Zetawala Money.',
  },
  tr: {
    title: 'Site Haritası (HTML Sitemap)',
    subtitle: 'Zetawala Money üzerindeki tüm hesaplama araçları, yasal rehberler ve bilgi sayfalarının dizini.',
  },
  ro: {
    title: 'Harta Site-ului (HTML Sitemap)',
    subtitle: 'Indexul complet al tuturor calculatoarelor de salarii, ghidurilor fiscale și paginilor informative.',
  },
  fr: {
    title: 'Plan du Site (HTML Sitemap)',
    subtitle: 'Index de toutes les pages et calculateurs financiers.',
  },
  es: {
    title: 'Mapa del Sitio (HTML Sitemap)',
    subtitle: 'Índice de todas las calculadoras y páginas de Zetawala Money.',
  },
  it: {
    title: 'Mappa del Sito (HTML Sitemap)',
    subtitle: 'Indice di tutte le pagine e strumenti di calcolo.',
  },
  nl: {
    title: 'Sitemap (HTML Sitemap)',
    subtitle: 'Overzicht van alle calculators en pagina’s op Zetawala Money.',
  },
};

const CATEGORY_LABELS: Record<string, Record<SupportedLang, string>> = {
  banking: {
    en: 'Banking & Account Verification',
    de: 'Banken & Kontenprüfung',
    pl: 'Bankowość i Weryfikacja Kont',
    tr: 'Bankacılık ve Hesap Doğrulama',
    ro: 'Bănci și Verificare Conturi',
    fr: 'Banque et Vérification',
    es: 'Banca y Validación',
    it: 'Banche e Verifica',
    nl: 'Bankieren & Controle',
  },
  'tax-vat': {
    en: 'Tax & VAT Calculators',
    de: 'Steuern & Mehrwertsteuer',
    pl: 'Podatki i Kalkulatory VAT',
    tr: 'Vergi ve KDV Hesaplamaları',
    ro: 'Taxe și Calculatoare TVA',
    fr: 'Taxes et TVA',
    es: 'Impuestos e IVA',
    it: 'Tasse e IVA',
    nl: 'Belasting en Btw',
  },
  salary: {
    en: 'Salary, Employment & Tax',
    de: 'Gehalt & Arbeitsrecht',
    pl: 'Wynagrodzenia, Praca i ZUS',
    tr: 'Maaş, Kıdem ve İhbar Tazminatı',
    ro: 'Salarii, Muncă și Contribuții',
    fr: 'Salaires et Emploi',
    es: 'Salarios y Empleo',
    it: 'Stipendi e Lavoro',
    nl: 'Salaris en Werk',
  },
  travel: {
    en: 'Travel, Schengen & Mobility',
    de: 'Reise, Schengen & Spritkosten',
    pl: 'Podróże, Paliwo i Schengen',
    tr: 'Seyahat, Vize ve Yakıt',
    ro: 'Călătorii, Schengen și Combustibil',
    fr: 'Voyage et Mobilité',
    es: 'Viajes y Movilidad',
    it: 'Viaggi e Mobilità',
    nl: 'Reizen & Mobiliteit',
  },
  'home-energy': {
    en: 'Home & Energy Consumption',
    de: 'Energie & Haushaltsgeräte',
    pl: 'Energia i Koszty Prądu',
    tr: 'Enerji ve Ev Tüketimi',
    ro: 'Energie și Consum Casnic',
    fr: 'Énergie et Maison',
    es: 'Energía y Hogar',
    it: 'Energia e Casa',
    nl: 'Energie en Wonen',
  },
  site: {
    en: 'Corporate & Legal Information',
    de: 'Rechtliches & Information',
    pl: 'Informacje Prawne i O Serwisie',
    tr: 'Kurumsal ve Yasal Bilgiler',
    ro: 'Informații Legale și Despre Site',
    fr: 'Informations Légales',
    es: 'Información Legal',
    it: 'Informazioni Legali',
    nl: 'Juridische Informatie',
  },
};

export function HtmlSitemapTemplate({ lang }: HtmlSitemapTemplateProps) {
  const t = SITEMAP_TITLES[lang] || SITEMAP_TITLES.en;
  const currentSlug = lang === 'en' ? 'sitemap' : `${lang}/sitemap`;

  // Get all pages for this language
  const pagesInLang = PAGES_REGISTRY.filter((p) => p.lang === lang && !p.isTodo && p.type !== 'site');

  // Group pages by category
  const categories: PageCategory[] = ['banking', 'tax-vat', 'salary', 'travel', 'home-energy'];
  const grouped: Record<string, typeof pagesInLang> = {};

  categories.forEach((cat) => {
    const items = pagesInLang.filter((p) => p.category === cat);
    if (items.length > 0) {
      grouped[cat] = items;
    }
  });

  // Collect legal site pages
  const sitePages = SITE_PAGES_MAP[lang] || SITE_PAGES_MAP.en;

  return (
    <>
      <JsonLd
        lang={lang}
        pageId="sitemap"
        slug={currentSlug}
        type="site"
        title={t.title}
        description={t.subtitle}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <header className="mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-900/60 text-teal-700 dark:text-teal-300 text-xs font-semibold mb-4">
            <Map className="w-4 h-4 text-teal-600" />
            <span>Complete Page Index • HTML Sitemap</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-3">
            {t.title}
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.subtitle}
          </p>
        </header>

        <div className="space-y-10">
          {Object.entries(grouped).map(([catKey, items]) => {
            const catLabel = CATEGORY_LABELS[catKey]?.[lang] || catKey;

            return (
              <section key={catKey} className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 pb-2 border-b border-slate-100 dark:border-slate-800">
                  {catLabel}
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  {items.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={getSlugUrl(item.slug)}
                        className="text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors flex items-center gap-1.5 group"
                      >
                        <ArrowRight className="w-3.5 h-3.5 text-teal-600 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="font-medium group-hover:underline">
                          {item.id.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono ml-auto">
                          /{item.slug}/
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}

          {/* Legal and Site Section */}
          <section className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-xs">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 pb-2 border-b border-slate-200 dark:border-slate-800">
              {CATEGORY_LABELS.site?.[lang] || 'Corporate & Legal Information'}
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              {Object.entries(sitePages).map(([key, url]) => (
                <li key={key}>
                  <Link
                    href={url}
                    className="text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-teal-600 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="font-medium group-hover:underline capitalize">
                      {key.replace(/([A-Z])/g, ' $1')}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono ml-auto">
                      {url}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}

export default HtmlSitemapTemplate;

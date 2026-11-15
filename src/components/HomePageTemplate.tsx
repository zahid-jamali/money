import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheck,
  Zap,
  Globe2,
  ArrowRight,
  Landmark,
  Receipt,
  TrendingUp,
  Plane,
  Home as HomeIcon,
  HelpCircle,
  CheckCircle2,
  BookOpen,
} from 'lucide-react';
import { SupportedLang } from '@/config/pages';
import { siteConfig } from '@/config/site';
import { HOME_DATA_MAP } from '@/content/home-data';
import { JsonLd } from '@/components/JsonLd';
import { AdSlot } from '@/components/ui/AdSlot';

export interface HomePageTemplateProps {
  lang: SupportedLang;
}

const CATEGORY_ICON_MAP = {
  banking: Landmark,
  'tax-vat': Receipt,
  salary: TrendingUp,
  travel: Plane,
  'home-energy': HomeIcon,
};

const CATEGORY_NAME_MAP: Record<string, Record<SupportedLang, string>> = {
  banking: {
    en: 'Banking & Accounts',
    de: 'Banken & Konten',
    pl: 'Bankowość i Konta',
    tr: 'Bankacılık ve Hesaplar',
    ro: 'Bănci și Conturi',
    fr: 'Banque et Comptes',
    es: 'Banca y Cuentas',
    it: 'Banche e Conti',
    nl: 'Bankieren & Rekeningen',
  },
  'tax-vat': {
    en: 'Tax & VAT',
    de: 'Steuern & MwSt.',
    pl: 'Podatki i VAT',
    tr: 'Vergi ve KDV',
    ro: 'Taxe și TVA',
    fr: 'Taxes et TVA',
    es: 'Impuestos e IVA',
    it: 'Tasse e IVA',
    nl: 'Belasting en Btw',
  },
  salary: {
    en: 'Salary & Employment',
    de: 'Gehalt & Arbeit',
    pl: 'Wynagrodzenia i Praca',
    tr: 'Maaş ve Tazminat',
    ro: 'Salarii și Muncă',
    fr: 'Salaires et Emploi',
    es: 'Salarios y Empleo',
    it: 'Stipendi e Lavoro',
    nl: 'Salaris en Werk',
  },
  travel: {
    en: 'Travel & Mobility',
    de: 'Reise & Mobilität',
    pl: 'Podróże i Paliwo',
    tr: 'Seyahat ve Vize',
    ro: 'Călătorii și Combustibil',
    fr: 'Voyage et Mobilité',
    es: 'Viajes y Movilidad',
    it: 'Viaggi e Mobilità',
    nl: 'Reizen & Mobiliteit',
  },
  'home-energy': {
    en: 'Energy & Household',
    de: 'Energie & Haushalt',
    pl: 'Energia i Gospodarstwo',
    tr: 'Enerji ve Ev',
    ro: 'Energie și Locuință',
    fr: 'Énergie et Maison',
    es: 'Energía y Hogar',
    it: 'Energia e Casa',
    nl: 'Energie en Wonen',
  },
};

export function HomePageTemplate({ lang }: HomePageTemplateProps) {
  const data = HOME_DATA_MAP[lang] || HOME_DATA_MAP.en;
  const slugPrefix = lang === 'en' ? '' : `${lang}`;

  return (
    <>
      <JsonLd
        lang={lang}
        slug={slugPrefix}
        pageId="home"
        type="website"
        title={data.metaTitle}
        description={data.metaDescription}
        faqs={data.faqs}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Top Trust Badge & Hero */}
        <header className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-900/60 text-teal-700 dark:text-teal-300 text-xs font-semibold mb-4">
            <ShieldCheck className="w-4 h-4 text-teal-600" />
            <span>Accurate • Statutory Legal Rules 2026 • 100% In-Browser</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            {data.h1}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            {data.subtitle}
          </p>
        </header>

        {/* 3 Core Trust Pillars */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16" aria-label="Key Features">
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-teal-50 dark:bg-teal-950 text-teal-600 shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-slate-900 dark:text-white">
                Instant Browser Math
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                Zero network lag. All formulas execute locally in your client with zero server storage.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-teal-50 dark:bg-teal-950 text-teal-600 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-slate-900 dark:text-white">
                Official Primary Rules
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                Direct statutory benchmarks from HMRC, Bundesbank, Ofgem, ZUS, GİB, and ANAF.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-teal-50 dark:bg-teal-950 text-teal-600 shrink-0">
              <Globe2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-slate-900 dark:text-white">
                Multi-Currency & Region
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                Exact localized tax brackets, currency formatting, and languages across 9 regions.
              </p>
            </div>
          </div>
        </section>

        {/* Most Used Tools */}
        {data.mostUsedTools.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-200 dark:border-slate-800">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {data.featuredToolsTitle}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {data.mostUsedTools.map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/${tool.slug}/`}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-teal-500 dark:hover:border-teal-500 hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 border border-teal-200/60 dark:border-teal-800/60 mb-2 inline-block">
                      {tool.badge}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-teal-600 transition-colors">
                      {tool.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center text-xs font-bold text-teal-600 group-hover:translate-x-1 transition-transform">
                    <span>Calculate Now</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Controlled Ad Slot 1 (Horizontal Banner) */}
        <AdSlot slotId="home-top-banner" format="horizontal-banner" minHeight={90} className="my-8" />

        {/* Tools By Category */}
        <section className="mb-16 space-y-12">
          <div className="pb-2 border-b border-slate-200 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {data.categoriesTitle}
            </h2>
          </div>

          {Object.entries(data.categoryTools).map(([catKey, tools]) => {
            const IconComponent = CATEGORY_ICON_MAP[catKey as keyof typeof CATEGORY_ICON_MAP] || Landmark;
            const categoryTitle = CATEGORY_NAME_MAP[catKey]?.[lang] || catKey;

            return (
              <div key={catKey} id={catKey} className="scroll-mt-20">
                <div className="flex items-center gap-2 mb-4">
                  <IconComponent className="w-5 h-5 text-teal-600" />
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {categoryTitle}
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {tools.map((tool) => (
                    <Link
                      key={tool.slug}
                      href={`/${tool.slug}/`}
                      className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-teal-500 dark:hover:border-teal-500 hover:shadow-sm transition-all group flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                            {tool.badge}
                          </span>
                        </div>
                        <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-teal-600 transition-colors">
                          {tool.title}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                          {tool.description}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center text-xs font-bold text-teal-600 group-hover:translate-x-1 transition-transform">
                        <span>Open Tool</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        {/* Popular Guides Section */}
        {data.popularGuides.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-teal-600" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {data.guidesTitle}
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {data.popularGuides.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/${guide.slug}/`}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-teal-500 dark:hover:border-teal-500 hover:shadow-sm transition-all group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 mb-1.5 block">
                      {guide.readTime}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-teal-600 transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed line-clamp-3">
                      {guide.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center text-xs font-bold text-teal-600 group-hover:translate-x-1 transition-transform">
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Built For The UK, Europe, Australia and Canada */}
        <section className="mb-16 p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
          <div className="max-w-3xl mb-8">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-2">
              {data.builtForTitle}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {data.builtForSubtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span className="text-xs font-bold text-teal-600 block mb-1">United Kingdom</span>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Ofgem Q1 2026 price caps, HMRC VAT standard 20% & reduced 5%, and DESNZ fuel prices.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span className="text-xs font-bold text-teal-600 block mb-1">Germany & Eurozone</span>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Bundesbank BLZ directory, § 12 UStG MwSt, BDEW electricity, and Schengen 90/180 rules.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span className="text-xs font-bold text-teal-600 block mb-1">Poland, Turkey & Romania</span>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                ZUS & PIT thresholds, Turkish kıdem tazminatı tavanı 59.250 TL, and Romanian salariul minim 4.050 lei.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span className="text-xs font-bold text-teal-600 block mb-1">Australia & Canada</span>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                AER electricity tariffs across NSW, VIC, QLD, AIP Australian fuel, and NRCan Canadian pump rates.
              </p>
            </div>
          </div>
        </section>

        {/* Short About Block with Zetawala Logo */}
        <section className="mb-16 p-8 rounded-3xl bg-gradient-to-r from-teal-50 via-emerald-50 to-teal-50 dark:from-slate-900 dark:via-teal-950/20 dark:to-slate-900 border border-teal-200/60 dark:border-teal-900/60 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-3">
              <Image
                src={siteConfig.parentBrand.logo}
                alt={siteConfig.parentBrand.name}
                width={32}
                height={32}
                className="h-8 w-auto object-contain"
              />
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                {data.aboutTitle}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {data.aboutText}
            </p>
            <p className="text-xs text-teal-700 dark:text-teal-400 font-medium">
              {data.aboutNetworkNotice}
            </p>
          </div>
          <a
            href={siteConfig.parentBrand.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold shadow-xs hover:shadow-md transition-all shrink-0"
          >
            <span>Visit Zetawala Network</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </a>
        </section>

        {/* 6 FAQs */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-6 pb-2 border-b border-slate-200 dark:border-slate-800">
            <HelpCircle className="w-5 h-5 text-teal-600" />
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {data.faqTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
              >
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                      {faq.q}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default HomePageTemplate;

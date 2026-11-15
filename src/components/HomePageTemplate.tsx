'use client';

import React, { useState, useMemo } from 'react';
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
  Search,
  X,
  Sparkles,
  Lock,
  Cpu,
  ChevronRight,
  SlidersHorizontal,
} from 'lucide-react';
import { SupportedLang } from '@/config/pages';
import { siteConfig } from '@/config/site';
import { SITE_PAGES_MAP } from '@/config/site-pages';
import { HOME_DATA_MAP, HomeToolItem } from '@/content/home-data';
import { JsonLd } from '@/components/JsonLd';

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
  all: {
    en: 'All Tools',
    de: 'Alle Rechner',
    pl: 'Wszystkie Narzędzia',
    tr: 'Tüm Hesaplama Araçları',
    ro: 'Toate Calculatoarele',
    fr: 'Tous les Outils',
    es: 'Todas las Herramientas',
    it: 'Tutti gli Strumenti',
    nl: 'Alle Rekenhulpen',
  },
  banking: {
    en: 'Banking & IBAN',
    de: 'Banken & IBAN',
    pl: 'Bankowość i IBAN',
    tr: 'Bankacılık ve IBAN',
    ro: 'Bănci și IBAN',
    fr: 'Banque et IBAN',
    es: 'Banca e IBAN',
    it: 'Banche e IBAN',
    nl: 'Bankieren & IBAN',
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
    en: 'Travel & Visa',
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
    en: 'Energy & Utilities',
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

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Collect all category tools into a single searchable array
  const allCategoryTools = useMemo(() => {
    const list: HomeToolItem[] = [];
    const seen = new Set<string>();

    Object.values(data.categoryTools).forEach((tools) => {
      tools.forEach((tool) => {
        if (!seen.has(tool.slug)) {
          seen.add(tool.slug);
          list.push(tool);
        }
      });
    });

    // Also include most-used tools if any are not in categories
    data.mostUsedTools.forEach((tool) => {
      if (!seen.has(tool.slug)) {
        seen.add(tool.slug);
        list.push(tool);
      }
    });

    return list;
  }, [data]);

  // Filter tools based on category and search query
  const filteredTools = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return allCategoryTools.filter((tool) => {
      const matchesCategory =
        selectedCategory === 'all' || tool.category === selectedCategory;

      if (!matchesCategory) return false;
      if (!q) return true;

      return (
        tool.title.toLowerCase().includes(q) ||
        tool.description.toLowerCase().includes(q) ||
        tool.badge.toLowerCase().includes(q) ||
        tool.slug.toLowerCase().includes(q)
      );
    });
  }, [allCategoryTools, selectedCategory, searchQuery]);

  const categories = useMemo(() => {
    const presentCategories = new Set(allCategoryTools.map((t) => t.category));
    const list: string[] = ['all'];

    ['banking', 'tax-vat', 'salary', 'travel', 'home-energy'].forEach((cat) => {
      if (presentCategories.has(cat as any)) {
        list.push(cat);
      }
    });

    return list;
  }, [allCategoryTools]);

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

      <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 text-slate-800 dark:text-slate-200">
        {/* HERO SECTION WITH LOGO IDENTITY & SEARCH */}
        <section className="relative overflow-hidden pt-8 pb-14 sm:pt-16 sm:pb-20 border-b border-slate-200/70 dark:border-slate-800/80 bg-gradient-to-b from-white via-slate-50/70 to-slate-100/40 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-950">
          {/* Subtle geometric background glow inspired by the logo's navy and emerald palette */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-emerald-500/15 via-teal-400/10 to-indigo-500/15 blur-3xl opacity-60 dark:opacity-40"
          />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            {/* Top Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50/90 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>100% In-Browser Execution • 2026 Statutory Rules</span>
            </div>

            {/* Main H1 Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15] mb-5">
              {data.h1}
            </h1>

            {/* Subtitle */}
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed mb-8 sm:mb-10">
              {data.subtitle}
            </p>

            {/* Interactive Search Bar (Mobile First) */}
            <div className="max-w-xl mx-auto relative mb-6">
              <div className="relative flex items-center">
                <Search className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={
                    lang === 'de'
                      ? 'Rechner suchen (z.B. IBAN, MwSt, BLZ, Strom)...'
                      : lang === 'pl'
                      ? 'Szukaj kalkulatora (np. IBAN, VAT, B2B, wynagrodzenie)...'
                      : lang === 'tr'
                      ? 'Hesaplayıcı ara (ör. IBAN, KDV, Kıdem, Maaş)...'
                      : lang === 'ro'
                      ? 'Caută calculator (ex. IBAN, TVA, Salariu, PFA)...'
                      : 'Search any calculator (e.g. IBAN, VAT, Schengen, Electricity)...'
                  }
                  className="w-full pl-11 pr-10 py-3.5 sm:py-4 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm sm:text-base font-medium shadow-md focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/15 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    aria-label="Clear search"
                    className="absolute right-3.5 p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Quick shortcut tags */}
              <div className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap mt-3 text-xs text-slate-500 dark:text-slate-400">
                <span className="font-semibold text-slate-400">Popular:</span>
                {data.mostUsedTools.slice(0, 4).map((tool) => (
                  <button
                    key={tool.slug}
                    onClick={() => {
                      setSearchQuery(tool.title.split(' ')[0]);
                    }}
                    className="px-2 py-0.5 rounded-md bg-white/80 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-emerald-500 hover:text-emerald-600 transition-colors cursor-pointer"
                  >
                    {tool.badge || tool.title.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* 3 Core Trust Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-3xl mx-auto pt-6 text-left">
              <div className="p-4 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-xs flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-xs font-bold text-slate-900 dark:text-white">
                    Instant Browser Math
                  </h2>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Zero server latency or lag
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-xs flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-xs font-bold text-slate-900 dark:text-white">
                    100% Private &amp; Secure
                  </h2>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Zero data transmitted or saved
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-xs flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-xs font-bold text-slate-900 dark:text-white">
                    Official Primary Sources
                  </h2>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    HMRC, Bundesbank, Ofgem, ZUS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN BODY CONTAINER */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-16">
          {/* SEARCH RESULTS OR MOST USED TOOLS */}
          {searchQuery ? (
            <section className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Search className="w-5 h-5 text-emerald-600" />
                  <span>Search Results ({filteredTools.length})</span>
                </h2>
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-xs font-semibold text-emerald-600 hover:underline"
                >
                  Clear Search
                </button>
              </div>

              {filteredTools.length === 0 ? (
                <div className="p-10 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center space-y-3">
                  <p className="text-base font-semibold text-slate-700 dark:text-slate-300">
                    No calculators matching &ldquo;{searchQuery}&rdquo;
                  </p>
                  <p className="text-xs text-slate-500">
                    Try searching for IBAN, VAT, Schengen, Electricity, or Salary.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {filteredTools.map((tool) => (
                    <Link
                      key={tool.slug}
                      href={`/${tool.slug}/`}
                      className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500 hover:shadow-lg transition-all group flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60">
                            {tool.badge}
                          </span>
                        </div>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">
                          {tool.title}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                          {tool.description}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center text-xs font-bold text-emerald-600 group-hover:translate-x-1 transition-transform">
                        <span>Calculate Now</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </section>
          ) : (
            <>
              {/* FEATURED / MOST USED CALCULATORS */}
              {data.mostUsedTools.length > 0 && (
                <section>
                  <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-200/80 dark:border-slate-800">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                        {data.featuredToolsTitle}
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                        Most frequently accessed financial calculation engines
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {data.mostUsedTools.map((tool) => (
                      <Link
                        key={tool.slug}
                        href={`/${tool.slug}/`}
                        className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500 hover:shadow-xl hover:-translate-y-0.5 transition-all group flex flex-col justify-between"
                      >
                        <div>
                          <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60 mb-2.5 inline-block">
                            {tool.badge}
                          </span>
                          <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors leading-snug">
                            {tool.title}
                          </h3>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                            {tool.description}
                          </p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center text-xs font-bold text-emerald-600 group-hover:translate-x-1 transition-transform">
                          <span>Calculate Now</span>
                          <ArrowRight className="w-3.5 h-3.5 ml-1" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {/* BROWSE BY CATEGORY DIRECTORY WITH MOBILE PILLS */}
              <section className="space-y-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-slate-200/80 dark:border-slate-800">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                      {data.categoriesTitle}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                      Explore tools organized by financial jurisdiction and use case
                    </p>
                  </div>

                  {/* Horizontal Scrollable Category Filter Pills for Mobile & Desktop */}
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full no-scrollbar">
                    {categories.map((catKey) => {
                      const isActive = selectedCategory === catKey;
                      const name = CATEGORY_NAME_MAP[catKey]?.[lang] || catKey;
                      return (
                        <button
                          key={catKey}
                          onClick={() => setSelectedCategory(catKey)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                            isActive
                              ? 'bg-slate-900 text-white dark:bg-emerald-600 shadow-sm'
                              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-slate-300'
                          }`}
                        >
                          {name}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Categorized Tools View */}
                {Object.entries(data.categoryTools).map(([catKey, tools]) => {
                  if (selectedCategory !== 'all' && selectedCategory !== catKey) {
                    return null;
                  }

                  const IconComponent =
                    CATEGORY_ICON_MAP[catKey as keyof typeof CATEGORY_ICON_MAP] || Landmark;
                  const categoryTitle = CATEGORY_NAME_MAP[catKey]?.[lang] || catKey;

                  return (
                    <div key={catKey} id={catKey} className="scroll-mt-24 space-y-4">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                          {categoryTitle}
                        </h3>
                        <span className="text-xs font-mono text-slate-400">
                          ({tools.length})
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {tools.map((tool) => (
                          <Link
                            key={tool.slug}
                            href={`/${tool.slug}/`}
                            className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500 hover:shadow-md transition-all group flex flex-col justify-between"
                          >
                            <div>
                              <div className="flex items-center justify-between gap-2 mb-2">
                                <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                                  {tool.badge}
                                </span>
                              </div>
                              <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">
                                {tool.title}
                              </h4>
                              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                                {tool.description}
                              </p>
                            </div>
                            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center text-xs font-bold text-emerald-600 group-hover:translate-x-1 transition-transform">
                              <span>Open Calculator</span>
                              <ArrowRight className="w-3.5 h-3.5 ml-1" />
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </section>

              {/* POPULAR GUIDES */}
              {data.popularGuides.length > 0 && (
                <section className="space-y-6">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 dark:border-slate-800">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div>
                        <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                          {data.guidesTitle}
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                          Statutory rules, legal benchmarks, and practical tax explanations
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {data.popularGuides.map((guide) => (
                      <Link
                        key={guide.slug}
                        href={`/${guide.slug}/`}
                        className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500 hover:shadow-md transition-all group flex flex-col justify-between"
                      >
                        <div>
                          <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 mb-2 block">
                            {guide.readTime}
                          </span>
                          <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors leading-snug">
                            {guide.title}
                          </h3>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed line-clamp-3">
                            {guide.description}
                          </p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center text-xs font-bold text-emerald-600 group-hover:translate-x-1 transition-transform">
                          <span>Read Guide</span>
                          <ArrowRight className="w-3.5 h-3.5 ml-1" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {/* JURISDICTION COVERAGE */}
              <section className="p-6 sm:p-10 rounded-3xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
                <div className="max-w-3xl mb-8">
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-2">
                    {data.builtForTitle}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {data.builtForSubtitle}
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 block mb-1">
                      United Kingdom
                    </span>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      Ofgem Q1 2026 price caps, HMRC VAT standard 20% &amp; reduced 5%, and DESNZ fuel prices.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 block mb-1">
                      Germany &amp; Eurozone
                    </span>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      Bundesbank BLZ directory, § 12 UStG MwSt, BDEW electricity, and Schengen 90/180 rules.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 block mb-1">
                      Poland, Turkey &amp; Romania
                    </span>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      ZUS &amp; PIT thresholds, Turkish kıdem tazminatı tavanı 59.250 TL, and Romanian salariul minim 4.050 lei.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 block mb-1">
                      Australia &amp; Canada
                    </span>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      AER electricity tariffs across NSW, VIC, QLD, AIP Australian fuel, and NRCan Canadian pump rates.
                    </p>
                  </div>
                </div>
              </section>

              {/* PRODUCT TRUST & METHODOLOGY COMMITMENT (STANDALONE PRODUCT) */}
              <section className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white shadow-xl relative overflow-hidden">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"
                />
                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="space-y-3 max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/80 text-emerald-400 text-xs font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Statutory Data Transparency</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                      Built with Zero Server Footprint &amp; Total Data Privacy
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Every calculator runs 100% inside your device. Your sensitive financial inputs, account numbers, and personal travel plans never leave your browser. We publish our formulas and government source gazettes transparently on our methodology ledger.
                    </p>
                  </div>
                  <Link
                    href={SITE_PAGES_MAP[lang]?.methodology || SITE_PAGES_MAP[lang]?.about || '/about/'}
                    className="inline-flex items-center px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all shrink-0"
                  >
                    <span>Inspect Our Methodology</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </section>

              {/* 6 FAQS WITH STRUCTURED SCHEMA */}
              <section className="space-y-6">
                <div className="flex items-center gap-2.5 pb-3 border-b border-slate-200/80 dark:border-slate-800">
                  <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                      {data.faqTitle}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                      Common questions about accuracy, privacy, and statutory calculations
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data.faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs"
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2 leading-snug">
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
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default HomePageTemplate;

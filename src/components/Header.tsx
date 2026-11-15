'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { SupportedLang, PAGES_REGISTRY, getSlugUrl, getPageBySlug } from '@/config/pages';
import { getDictionary } from '@/i18n';
import { Globe, ChevronDown, Menu, X, Landmark, Receipt, TrendingUp, Plane, Zap } from 'lucide-react';

export interface HeaderProps {
  lang?: SupportedLang;
  currentPageId?: string;
  currentSlug?: string;
  currentRegion?: string;
  className?: string;
}

export const LANGUAGE_LABELS: Record<
  SupportedLang,
  { name: string; flag: string; code: string }
> = {
  en: { name: 'English', flag: '🇬🇧', code: 'EN' },
  de: { name: 'Deutsch', flag: '🇩🇪', code: 'DE' },
  pl: { name: 'Polski', flag: '🇵🇱', code: 'PL' },
  tr: { name: 'Türkçe', flag: '🇹🇷', code: 'TR' },
  ro: { name: 'Română', flag: '🇷🇴', code: 'RO' },
  fr: { name: 'Français', flag: '🇫🇷', code: 'FR' },
  es: { name: 'Español', flag: '🇪🇸', code: 'ES' },
  it: { name: 'Italiano', flag: '🇮🇹', code: 'IT' },
  nl: { name: 'Nederlands', flag: '🇳🇱', code: 'NL' },
};

/**
 * Resolves the destination URL when switching to another language:
 * Links to the EXACT SAME tool in that language if present in PAGES_REGISTRY,
 * otherwise falls back to that language's home page (/${targetLang}/).
 */
export function getTargetUrlForLang(
  targetLang: SupportedLang,
  currentPageId?: string,
): string {
  if (currentPageId && currentPageId !== 'home') {
    const match = PAGES_REGISTRY.find(
      (p) => p.id === currentPageId && p.lang === targetLang,
    );
    if (match) {
      return getSlugUrl(match.slug);
    }
  }
  return targetLang === 'en' ? '/' : `/${targetLang}/`;
}

export function Header({
  lang = 'en',
  currentPageId,
  currentSlug,
  className = '',
}: HeaderProps) {
  const dict = getDictionary(lang);
  const homePath = lang === 'en' ? '/' : `/${lang}/`;
  const currentLangInfo = LANGUAGE_LABELS[lang] || LANGUAGE_LABELS.en;

  // Resolve effective pageId from currentSlug if not directly provided
  const effectivePageId =
    currentPageId || (currentSlug ? getPageBySlug(currentSlug)?.id : undefined);

  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  // Close language menu on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        langMenuRef.current &&
        !langMenuRef.current.contains(event.target as Node)
      ) {
        setIsLangMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navCategories = [
    { id: 'banking', label: dict.nav.banking, href: `${homePath}#banking`, icon: Landmark },
    { id: 'tax-vat', label: dict.nav.taxVat, href: `${homePath}#tax-vat`, icon: Receipt },
    { id: 'salary', label: dict.nav.salary, href: `${homePath}#salary`, icon: TrendingUp },
    { id: 'travel', label: dict.nav.travel, href: `${homePath}#travel`, icon: Plane },
    { id: 'home-energy', label: dict.nav.homeEnergy, href: `${homePath}#home-energy`, icon: Zap },
  ];

  const availableLangs = (siteConfig.locales as SupportedLang[]) || [
    'en',
    'de',
    'pl',
    'tr',
    'ro',
    'fr',
    'es',
    'it',
    'nl',
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur transition-colors ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
        {/* Left: Brand Identity with custom logo */}
        <Link
          href={homePath}
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-xl py-1 pr-2 transition-transform"
          title={`${siteConfig.name} - ${dict.nav.home}`}
        >
          <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-xl overflow-hidden bg-slate-950 shadow-md flex items-center justify-center p-1 border border-slate-800 shrink-0">
            <Image
              src="/images/logo.png"
              alt={siteConfig.name}
              width={44}
              height={44}
              priority
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-tight flex items-center gap-1">
              <span>Zetawala</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-black">Money</span>
            </span>
            <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500 dark:text-slate-400 tracking-wider uppercase">
              Financial Calculators
            </span>
          </div>
        </Link>

        {/* Center: Localized category navigation menu */}
        <nav
          aria-label="Financial Categories"
          className="hidden md:flex items-center gap-5 lg:gap-7 text-sm font-semibold text-slate-600 dark:text-slate-300"
        >
          {navCategories.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-1.5 focus:outline-none focus:ring-1 focus:ring-emerald-500 rounded"
            >
              {cat.label}
            </Link>
          ))}
        </nav>

        {/* Right: Language switcher dropdown & mobile menu trigger */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switcher Dropdown */}
          <div className="relative" ref={langMenuRef}>
            <button
              type="button"
              onClick={() => setIsLangMenuOpen((prev) => !prev)}
              aria-expanded={isLangMenuOpen}
              aria-haspopup="true"
              aria-label={dict.nav.language || 'Language'}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 hover:border-emerald-500/50 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-xs"
            >
              <Globe className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>{currentLangInfo.flag}</span>
              <span className="font-bold">{currentLangInfo.code}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {isLangMenuOpen && (
              <div
                className="absolute right-0 mt-2 w-56 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-1"
                role="menu"
                aria-orientation="vertical"
              >
                <div className="px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-800 mb-1">
                  {dict.nav.language || 'Select Language'}
                </div>
                <div className="max-h-72 overflow-y-auto py-0.5">
                  {availableLangs.map((l) => {
                    const info = LANGUAGE_LABELS[l] || {
                      name: l.toUpperCase(),
                      flag: '🌐',
                      code: l.toUpperCase(),
                    };
                    const isActive = l === lang;
                    const targetUrl = getTargetUrlForLang(l, effectivePageId);

                    return (
                      <Link
                        key={l}
                        href={targetUrl}
                        onClick={() => setIsLangMenuOpen(false)}
                        role="menuitem"
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 text-xs sm:text-sm transition-colors ${
                          isActive
                            ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 font-bold'
                            : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/80 font-medium'
                        }`}
                      >
                        <span className="flex items-center gap-2.5">
                          <span className="text-base">{info.flag}</span>
                          <span>{info.name}</span>
                        </span>
                        <span className="text-[11px] font-mono text-slate-400 uppercase font-semibold">
                          {info.code}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setIsMobileNavOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2.5 rounded-xl text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
          >
            {isMobileNavOpen ? (
              <X className="w-5 h-5 text-emerald-600" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {isMobileNavOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white/98 dark:bg-slate-900/98 backdrop-blur px-4 pt-3 pb-5 space-y-1 shadow-lg animate-in slide-in-from-top-1">
          <div className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            {dict.footer.toolsTitle}
          </div>
          {navCategories.map((cat) => {
            const IconComp = cat.icon;
            return (
              <Link
                key={cat.id}
                href={cat.href}
                onClick={() => setIsMobileNavOpen(false)}
                className="flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-100 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
              >
                <div className="p-1.5 rounded-lg bg-emerald-100/60 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400">
                  <IconComp className="w-4 h-4" />
                </div>
                <span>{cat.label}</span>
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}

export default Header;

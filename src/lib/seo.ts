import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import {
  getPageById,
  getAlternatesForPage,
  getSlugUrl,
  SupportedLang,
  PageRegistryItem,
  PAGES_REGISTRY,
} from '@/config/pages';
import { getDictionary } from '@/i18n';
import { PageContent } from '@/content/types';

export const OG_LOCALE_MAP: Record<SupportedLang, string> = {
  en: 'en_GB',
  de: 'de_DE',
  pl: 'pl_PL',
  tr: 'tr_TR',
  ro: 'ro_RO',
  fr: 'fr_FR',
  es: 'es_ES',
  it: 'it_IT',
  nl: 'nl_NL',
};

export const REGIONAL_OG_LOCALE_MAP: Record<string, string> = {
  au: 'en_AU',
  ca: 'en_CA',
  uk: 'en_GB',
  de: 'de_DE',
  pl: 'pl_PL',
  tr: 'tr_TR',
  ro: 'ro_RO',
  fr: 'fr_FR',
  es: 'es_ES',
  it: 'it_IT',
  nl: 'nl_NL',
};

/**
 * Returns the OpenGraph locale string based on language and optional region.
 * Handles en_GB, de_DE, pl_PL, tr_TR, ro_RO, fr_FR, es_ES, it_IT, nl_NL, en_AU, en_CA.
 */
export function getOgLocale(lang: SupportedLang, region?: string): string {
  if (lang === 'en') {
    if (region === 'au') return 'en_AU';
    if (region === 'ca') return 'en_CA';
    return 'en_GB';
  }
  return OG_LOCALE_MAP[lang] || 'en_GB';
}

/**
 * Builds an absolute canonical URL ending with a trailing slash.
 * E.g. https://money.zetawala.com/vat-calculator/ or https://money.zetawala.com/
 */
export function buildCanonicalUrl(slug: string): string {
  const base = siteConfig.url.replace(/\/+$/, '');
  const cleanSlug = (slug || '').replace(/^\/+|\/+$/g, '');
  return cleanSlug ? `${base}/${cleanSlug}/` : `${base}/`;
}

/**
 * Builds an SEO title: max 60 chars.
 * Prioritizes keyword first, year (2026) when relevant, and "| Zetawala Money" if fits.
 */
export function buildSeoTitle(
  rawTitle?: string,
  brandSuffix: string = ` | ${siteConfig.name}`,
  year: number = 2026,
): string {
  const maxLen = 60;
  const brand = brandSuffix.startsWith(' ') ? brandSuffix : ` ${brandSuffix}`;

  if (!rawTitle || !rawTitle.trim()) {
    const defaultTitle = `${siteConfig.name} — Financial Calculators ${year}`;
    return defaultTitle.length <= maxLen ? defaultTitle : defaultTitle.slice(0, maxLen);
  }

  let title = rawTitle.trim();

  // Strip existing brand suffix if already appended to avoid duplicate brand names
  const cleanBrand = brand.trim();
  if (title.endsWith(cleanBrand)) {
    title = title.slice(0, -cleanBrand.length).trim();
    if (title.endsWith('|') || title.endsWith('-') || title.endsWith('—')) {
      title = title.slice(0, -1).trim();
    }
  }

  // Include year if space allows and not already present
  const yearStr = `${year}`;
  if (!title.includes(yearStr)) {
    const candidateWithYear = `${title} ${yearStr}`;
    if (candidateWithYear.length + brand.length <= maxLen) {
      title = candidateWithYear;
    }
  }

  const candidate = `${title}${brand}`;
  if (candidate.length <= maxLen) {
    return candidate;
  }

  // If candidate is too long, truncate the main keyword part so brand fits within 60 chars
  const availableMainLen = maxLen - brand.length;
  if (availableMainLen > 10) {
    const truncatedMain = title.slice(0, availableMainLen).trimEnd();
    return `${truncatedMain}${brand}`;
  }

  // Fallback if brand itself is too wide
  return candidate.slice(0, maxLen);
}

/**
 * Builds an SEO description: max 155 chars with a clear benefit.
 */
export function buildSeoDescription(rawDesc?: string, fallbackDesc?: string): string {
  const maxLen = 155;
  const desc = (rawDesc && rawDesc.trim()) || (fallbackDesc && fallbackDesc.trim()) || '';

  if (desc.length <= maxLen) {
    return desc;
  }

  // Clamp cleanly to 155 characters
  return desc.slice(0, 154).trimEnd() + '…';
}

/**
 * Maps a PageRegistryItem to its corresponding hreflang tag.
 */
function getHreflangCode(item: PageRegistryItem): string {
  if (item.lang === 'en') {
    if (item.region === 'au') return 'en-AU';
    if (item.region === 'ca') return 'en-CA';
    if (item.region === 'uk') return 'en-GB';
    return 'en';
  }
  if (item.region) {
    return `${item.lang}-${item.region.toUpperCase()}`;
  }
  return item.lang;
}

/**
 * Builds metadata for a given pageId, language, and optional region.
 * Fetches registry info, content metadata, enforces 60-char title, 155-char description,
 * absolute canonical with trailing slash, OpenGraph with exact locale, Twitter cards,
 * and hreflang alternates linking identical page equivalents with x-default.
 */
export function buildMetadata(
  pageId: string,
  lang: SupportedLang,
  region?: string,
  overrides?: Partial<PageContent>,
): Metadata {
  const page = getPageById(pageId, lang, region);
  const dict = getDictionary(lang);

  // Determine current page slug
  let slug = '';
  if (page) {
    slug = page.slug;
  } else if (pageId === 'home') {
    slug = lang === 'en' ? '' : lang;
  } else {
    slug = lang === 'en' ? pageId : `${lang}/${pageId}`;
  }

  const canonicalUrl = buildCanonicalUrl(slug);

  // Determine raw title and description
  let rawTitle = overrides?.metaTitle;
  let rawDesc = overrides?.metaDescription;

  if (!rawTitle) {
    if (pageId === 'home') {
      rawTitle = dict.meta.siteTitle;
    } else {
      // Format pageId nicely (e.g. "vat-calculator" -> "VAT Calculator")
      const words = pageId
        .split('-')
        .map((w) => (w.toLowerCase() === 'vat' ? 'VAT' : w.charAt(0).toUpperCase() + w.slice(1)));
      rawTitle = words.join(' ');
    }
  }

  if (!rawDesc) {
    if (pageId === 'home') {
      rawDesc = dict.meta.siteDescription;
    } else {
      rawDesc = `${rawTitle}. Fast, accurate, free calculation tool with instant results and no registration required.`;
    }
  }

  const title = buildSeoTitle(rawTitle);
  const description = buildSeoDescription(rawDesc, dict.meta.siteDescription);
  const ogLocale = getOgLocale(lang, region || page?.region);
  const imageUrl = `${siteConfig.url}/images/money.jpg`;

  // Build alternates and hreflang
  const alternates: {
    canonical: string;
    languages?: Record<string, string>;
  } = {
    canonical: canonicalUrl,
  };

  // Find all alternate pages with the exact same ID
  const allAlternates = getAlternatesForPage(pageId);

  if (allAlternates.length > 1) {
    const languages: Record<string, string> = {};

    // Find the English equivalent for x-default
    const enVariant =
      allAlternates.find((a) => a.lang === 'en' && (!a.region || a.region === 'uk')) ||
      allAlternates.find((a) => a.lang === 'en') ||
      allAlternates[0];

    for (const alt of allAlternates) {
      const code = getHreflangCode(alt);
      const url = buildCanonicalUrl(alt.slug);
      languages[code] = url;

      // Also ensure generic language code exists (e.g. 'de', 'en')
      if (!languages[alt.lang]) {
        languages[alt.lang] = url;
      }
      // If UK English is mapped as en-GB, also map generic en
      if (alt.lang === 'en' && alt.region === 'uk' && !languages['en']) {
        languages['en'] = url;
      }
    }

    // Crucial: Set x-default to English equivalent URL
    languages['x-default'] = buildCanonicalUrl(enVariant.slug);
    alternates.languages = languages;
  }

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    verification: siteConfig.gscVerification ? { google: siteConfig.gscVerification } : undefined,
    alternates,
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: ogLocale,
      type: 'website',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: siteConfig.social.twitter,
      creator: siteConfig.social.twitter,
      title,
      description,
      images: [imageUrl],
    },
  };
}

import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import {
  PAGES_REGISTRY,
  SupportedLang,
  getAlternatesForPage,
  getSlugUrl,
  PageRegistryItem,
} from '@/config/pages';
import deBanksData from '@/data/banks/de.json';
import { APPLIANCES } from '@/data/appliances';
import { POLAND_PROGRAMMATIC_SALARY_AMOUNTS } from '@/rules/pl/salary-2026';
import { ROMANIA_PROGRAMMATIC_SALARY_AMOUNTS } from '@/rules/ro/salary-2026';

export const dynamic = 'force-static';

export async function generateSitemaps() {
  return [
    { id: 'en' },
    { id: 'de' },
    { id: 'pl' },
    { id: 'tr' },
    { id: 'ro' },
    { id: 'fr' },
    { id: 'es' },
    { id: 'it' },
    { id: 'nl' },
    { id: 'blz' },
    { id: 'appliances' },
    { id: 'salary-programmatic' },
  ];
}

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

export default async function sitemap({
  id,
}: {
  id: string;
}): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url.replace(/\/+$/, '');

  // 1. Language Sitemaps
  const supportedLangs: SupportedLang[] = ['en', 'de', 'pl', 'tr', 'ro', 'fr', 'es', 'it', 'nl'];
  if (supportedLangs.includes(id as SupportedLang)) {
    const lang = id as SupportedLang;
    const pages = PAGES_REGISTRY.filter((p) => p.lang === lang && !p.isTodo);

    return pages.map((page) => {
      const pageUrl = page.slug ? `${baseUrl}/${page.slug}/` : `${baseUrl}/`;
      const alternates = getAlternatesForPage(page.id);

      let languagesMap: Record<string, string> | undefined = undefined;
      if (alternates.length > 1) {
        languagesMap = {};
        for (const alt of alternates) {
          const code = getHreflangCode(alt);
          languagesMap[code] = alt.slug ? `${baseUrl}/${alt.slug}/` : `${baseUrl}/`;
        }
        const enAlt = alternates.find((a) => a.lang === 'en') || alternates[0];
        languagesMap['x-default'] = enAlt.slug ? `${baseUrl}/${enAlt.slug}/` : `${baseUrl}/`;
      }

      return {
        url: pageUrl,
        lastModified: new Date(page.updatedAt || '2026-01-01'),
        changeFrequency: page.type === 'tool' ? 'weekly' : 'monthly',
        priority: page.priority || 0.7,
        alternates: languagesMap ? { languages: languagesMap } : undefined,
      };
    });
  }

  // 2. German BLZ Directory Pages (3,432 main banks)
  if (id === 'blz') {
    const mainBanks = (deBanksData as any).mainBanks || [];
    return mainBanks.map((bank: any) => ({
      url: `${baseUrl}/de/blz/${bank.blz}/`,
      lastModified: new Date('2026-03-02'),
      changeFrequency: 'monthly',
      priority: 0.6,
    }));
  }

  // 3. Energy Appliance Pages (UK, AU, and DE)
  if (id === 'appliances') {
    const entries: MetadataRoute.Sitemap = [];

    // UK appliances
    for (const app of APPLIANCES) {
      entries.push({
        url: `${baseUrl}/electricity-cost-calculator/uk/${app.slug}/`,
        lastModified: new Date('2026-01-01'),
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    }

    // Australia appliances
    for (const app of APPLIANCES) {
      entries.push({
        url: `${baseUrl}/electricity-cost-calculator/australia/${app.slug}/`,
        lastModified: new Date('2026-01-01'),
        changeFrequency: 'monthly',
        priority: 0.75,
      });
    }

    // German appliances
    for (const app of APPLIANCES) {
      entries.push({
        url: `${baseUrl}/de/stromkosten-rechner/${app.deSlug}/`,
        lastModified: new Date('2026-01-01'),
        changeFrequency: 'monthly',
        priority: 0.75,
      });
    }

    return entries;
  }

  // 4. Programmatic Salary Pages (PL 52 + RO 34)
  if (id === 'salary-programmatic') {
    const entries: MetadataRoute.Sitemap = [];

    // Poland
    for (const amount of POLAND_PROGRAMMATIC_SALARY_AMOUNTS) {
      entries.push({
        url: `${baseUrl}/pl/wynagrodzenie/${amount}-brutto-ile-netto/`,
        lastModified: new Date('2026-01-01'),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    }

    // Romania
    for (const amount of ROMANIA_PROGRAMMATIC_SALARY_AMOUNTS) {
      entries.push({
        url: `${baseUrl}/ro/salariu/${amount}-brut-in-net/`,
        lastModified: new Date('2026-01-01'),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    }

    return entries;
  }

  return [];
}

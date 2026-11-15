import React from 'react';
import { siteConfig } from '@/config/site';
import { SupportedLang, PageCategory, getPageById, PAGES_REGISTRY } from '@/config/pages';
import { getDictionary } from '@/i18n';
import { FaqItem } from '@/content/types';
import { buildCanonicalUrl } from '@/lib/seo';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface JsonLdProps {
  pageId?: string;
  lang?: SupportedLang;
  region?: string;
  slug?: string;
  name?: string;
  title?: string;
  description?: string;
  category?: PageCategory;
  type?: 'website' | 'tool' | 'guide' | 'site' | string;
  isTool?: boolean;
  currency?: string;
  applicationCategory?: string;
  operatingSystem?: string;
  breadcrumbs?: BreadcrumbItem[];
  faqs?: FaqItem[];
  siteWideOnly?: boolean;
}

/**
 * Builds standard Schema.org structured data graph for Zetawala Money.
 */
export function buildJsonLdData(props: JsonLdProps) {
  const lang = props.lang || 'en';
  const dict = getDictionary(lang);

  const page = props.pageId
    ? getPageById(props.pageId, lang, props.region)
    : props.slug
      ? PAGES_REGISTRY.find((p) => p.slug === props.slug)
      : undefined;

  const currentSlug =
    props.slug ||
    page?.slug ||
    (props.pageId === 'home' || !props.pageId ? (lang === 'en' ? '' : lang) : props.pageId);
  const canonicalUrl = buildCanonicalUrl(currentSlug);

  const effectiveTitle =
    props.name || props.title || (page ? page.id.replace(/-/g, ' ') : dict.meta.siteTitle);
  const effectiveDescription = props.description || dict.meta.siteDescription;
  const effectiveCategory = props.category || page?.category;

  // 1. Organization Schema (Zetawala Money) with parentOrganization (Zetawala)
  const organizationSchema = {
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    parentOrganization: {
      '@type': 'Organization',
      name: siteConfig.parentBrand.name,
      url: siteConfig.parentBrand.url,
      logo: `${siteConfig.url}${siteConfig.parentBrand.logo}`,
    },
  };

  // 2. WebSite Schema
  const websiteSchema = {
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    publisher: {
      '@id': `${siteConfig.url}/#organization`,
    },
  };

  const graph: any[] = [organizationSchema, websiteSchema];

  if (props.siteWideOnly || props.type === 'website') {
    return {
      '@context': 'https://schema.org',
      '@graph': graph,
    };
  }

  // 3. WebApplication Schema (Per tool page)
  const isToolPage =
    props.type !== 'guide' &&
    page?.type !== 'guide' &&
    (props.isTool ||
      props.type === 'tool' ||
      page?.type === 'tool' ||
      (page === undefined && props.pageId && props.pageId !== 'home'));

  if (isToolPage) {
    graph.push({
      '@type': 'WebApplication',
      '@id': `${canonicalUrl}#webapp`,
      url: canonicalUrl,
      name: effectiveTitle,
      description: effectiveDescription,
      applicationCategory: props.applicationCategory || 'FinanceApplication',
      operatingSystem: props.operatingSystem || 'Any',
      inLanguage: lang,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: props.currency || 'USD',
      },
      browserRequirements: 'Requires JavaScript. Requires HTML5.',
    });
  }

  // 3b. Article Schema (Per guide page)
  const isGuidePage = props.type === 'guide' || page?.type === 'guide';
  if (isGuidePage) {
    graph.push({
      '@type': 'Article',
      '@id': `${canonicalUrl}#article`,
      isPartOf: {
        '@id': `${siteConfig.url}/#website`,
      },
      headline: effectiveTitle,
      description: effectiveDescription,
      inLanguage: lang,
      mainEntityOfPage: canonicalUrl,
      author: {
        '@type': 'Organization',
        name: siteConfig.name,
        url: siteConfig.url,
      },
      publisher: {
        '@id': `${siteConfig.url}/#organization`,
      },
      datePublished: '2026-01-01',
      dateModified: page?.updatedAt || '2026-11-14',
    });
  }

  // 4. BreadcrumbList Schema
  let resolvedCrumbs: BreadcrumbItem[] = [];
  if (props.breadcrumbs && props.breadcrumbs.length > 0) {
    resolvedCrumbs = props.breadcrumbs;
  } else if (currentSlug) {
    const homeUrl = buildCanonicalUrl(lang === 'en' ? '' : lang);
    resolvedCrumbs.push({
      name: dict.nav.home || 'Home',
      url: homeUrl,
    });

    if (effectiveCategory) {
      const categoryLabelMap: Record<PageCategory, string> = {
        banking: dict.nav.banking,
        'tax-vat': dict.nav.taxVat,
        salary: dict.nav.salary,
        travel: dict.nav.travel,
        'home-energy': dict.nav.homeEnergy,
      };

      resolvedCrumbs.push({
        name: categoryLabelMap[effectiveCategory] || effectiveCategory,
        url: `${homeUrl}#${effectiveCategory}`,
      });
    }

    resolvedCrumbs.push({
      name: effectiveTitle,
      url: canonicalUrl,
    });
  }

  if (resolvedCrumbs.length > 0) {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${canonicalUrl}#breadcrumbs`,
      itemListElement: resolvedCrumbs.map((crumb, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: crumb.name,
        item: crumb.url.startsWith('http')
          ? crumb.url
          : `${siteConfig.url}${crumb.url.startsWith('/') ? crumb.url : `/${crumb.url}`}`,
      })),
    });
  }

  // 5. FAQPage Schema
  if (props.faqs && props.faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${canonicalUrl}#faq`,
      mainEntity: props.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

/**
 * Universal JsonLd component that renders application/ld+json script tag.
 */
export function JsonLd(props: JsonLdProps) {
  const structuredData = buildJsonLdData(props);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

/**
 * Site-wide structured data helper component for root layouts.
 */
export function SiteJsonLd({ lang = 'en' }: { lang?: SupportedLang }) {
  return <JsonLd lang={lang} siteWideOnly />;
}

/**
 * Tool page structured data helper component.
 */
export function ToolJsonLd(props: Omit<JsonLdProps, 'isTool'>) {
  return <JsonLd {...props} isTool />;
}

export default JsonLd;

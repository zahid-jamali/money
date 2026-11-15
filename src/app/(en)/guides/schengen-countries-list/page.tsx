import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { guideSchengenCountriesListEn } from '@/content/en/guides/schengen-countries-list';
import { GuidePageTemplate } from '@/components/GuidePageTemplate';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('guide-schengen-countries-list', 'en');

export default function SchengenCountriesListPage() {
  return (
    <>
      <JsonLd
        lang="en"
        type="guide"
        pageId="guide-schengen-countries-list"
        slug="guides/schengen-countries-list"
        title={guideSchengenCountriesListEn.h1}
        description={guideSchengenCountriesListEn.metaDescription}
        faqs={guideSchengenCountriesListEn.faqs}
        category="travel"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Travel Guides', url: '/#travel' },
          { name: 'Schengen Countries List 2026', url: '/guides/schengen-countries-list/' },
        ]}
      />
      <GuidePageTemplate
        lang="en"
        content={guideSchengenCountriesListEn}
        categoryName="Travel Guides"
        categorySlug="travel"
      />
    </>
  );
}

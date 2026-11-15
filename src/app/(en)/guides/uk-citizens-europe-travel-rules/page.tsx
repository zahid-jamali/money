import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { guideUkCitizensEuropeTravelEn } from '@/content/en/guides/uk-citizens-europe-travel-rules';
import { GuidePageTemplate } from '@/components/GuidePageTemplate';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('guide-uk-citizens-europe-travel', 'en');

export default function UkCitizensEuropeTravelRulesPage() {
  return (
    <>
      <JsonLd
        lang="en"
        type="guide"
        pageId="guide-uk-citizens-europe-travel"
        slug="guides/uk-citizens-europe-travel-rules"
        title={guideUkCitizensEuropeTravelEn.h1}
        description={guideUkCitizensEuropeTravelEn.metaDescription}
        faqs={guideUkCitizensEuropeTravelEn.faqs}
        category="travel"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Travel Guides', url: '/#travel' },
          { name: 'UK Citizens Europe Travel Rules', url: '/guides/uk-citizens-europe-travel-rules/' },
        ]}
      />
      <GuidePageTemplate
        lang="en"
        content={guideUkCitizensEuropeTravelEn}
        categoryName="Travel Guides"
        categorySlug="travel"
      />
    </>
  );
}

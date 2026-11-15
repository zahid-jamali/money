import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { guideSchengenOverstayConsequencesEn } from '@/content/en/guides/schengen-overstay-consequences';
import { GuidePageTemplate } from '@/components/GuidePageTemplate';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('guide-schengen-overstay-consequences', 'en');

export default function SchengenOverstayConsequencesPage() {
  return (
    <>
      <JsonLd
        lang="en"
        type="guide"
        pageId="guide-schengen-overstay-consequences"
        slug="guides/schengen-overstay-consequences"
        title={guideSchengenOverstayConsequencesEn.h1}
        description={guideSchengenOverstayConsequencesEn.metaDescription}
        faqs={guideSchengenOverstayConsequencesEn.faqs}
        category="travel"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Travel Guides', url: '/#travel' },
          { name: 'Schengen Overstay Consequences', url: '/guides/schengen-overstay-consequences/' },
        ]}
      />
      <GuidePageTemplate
        lang="en"
        content={guideSchengenOverstayConsequencesEn}
        categoryName="Travel Guides"
        categorySlug="travel"
      />
    </>
  );
}

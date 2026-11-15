import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { guideEnergyPriceCapExplained } from '@/content/en/guides/energy-price-cap-explained';
import { GuidePageTemplate } from '@/components/GuidePageTemplate';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('guide-energy-price-cap-explained', 'en', 'uk', {
  metaTitle: guideEnergyPriceCapExplained.metaTitle,
  metaDescription: guideEnergyPriceCapExplained.metaDescription,
});

export default function EnergyPriceCapExplainedGuidePage() {
  return (
    <>
      <JsonLd
        lang="en"
        type="guide"
        pageId="guide-energy-price-cap-explained"
        slug="guides/energy-price-cap-explained"
        title={guideEnergyPriceCapExplained.h1}
        description={guideEnergyPriceCapExplained.metaDescription}
        faqs={guideEnergyPriceCapExplained.faqs}
        category="home-energy"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Energy Guides', url: '/#home-energy' },
          { name: 'Energy Price Cap Explained', url: '/guides/energy-price-cap-explained/' },
        ]}
      />
      <GuidePageTemplate
        lang="en"
        content={guideEnergyPriceCapExplained}
        categoryName="Energy Guides"
        categorySlug="home-energy"
      />
    </>
  );
}

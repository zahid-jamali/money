import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { guideHowToReadElectricityBillUk } from '@/content/en/guides/how-to-read-your-electricity-bill-uk';
import { GuidePageTemplate } from '@/components/GuidePageTemplate';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('guide-how-to-read-electricity-bill', 'en', 'uk', {
  metaTitle: guideHowToReadElectricityBillUk.metaTitle,
  metaDescription: guideHowToReadElectricityBillUk.metaDescription,
});

export default function HowToReadElectricityBillUkGuidePage() {
  return (
    <>
      <JsonLd
        lang="en"
        type="guide"
        pageId="guide-how-to-read-electricity-bill"
        slug="guides/how-to-read-your-electricity-bill-uk"
        title={guideHowToReadElectricityBillUk.h1}
        description={guideHowToReadElectricityBillUk.metaDescription}
        faqs={guideHowToReadElectricityBillUk.faqs}
        category="home-energy"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Energy Guides', url: '/#home-energy' },
          { name: 'How to Read Your Electricity Bill (UK)', url: '/guides/how-to-read-your-electricity-bill-uk/' },
        ]}
      />
      <GuidePageTemplate
        lang="en"
        content={guideHowToReadElectricityBillUk}
        categoryName="Energy Guides"
        categorySlug="home-energy"
      />
    </>
  );
}

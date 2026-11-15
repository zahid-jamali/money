import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { guideWhatIsAnIbanEn } from '@/content/en/guides/what-is-an-iban';
import { GuidePageTemplate } from '@/components/GuidePageTemplate';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('guide-what-is-iban', 'en');

export default function WhatIsAnIbanGuidePage() {
  return (
    <>
      <JsonLd
        lang="en"
        type="guide"
        pageId="guide-what-is-iban"
        slug="guides/what-is-an-iban"
        title={guideWhatIsAnIbanEn.h1}
        description={guideWhatIsAnIbanEn.metaDescription}
        faqs={guideWhatIsAnIbanEn.faqs}
        category="banking"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Banking Guides', url: '/#banking' },
          { name: 'What is an IBAN?', url: '/guides/what-is-an-iban/' },
        ]}
      />
      <GuidePageTemplate
        lang="en"
        content={guideWhatIsAnIbanEn}
        categoryName="Banking Guides"
        categorySlug="banking"
      />
    </>
  );
}

import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { guideHowToFindYourIbanEn } from '@/content/en/guides/how-to-find-your-iban';
import { GuidePageTemplate } from '@/components/GuidePageTemplate';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('guide-how-to-find-iban', 'en');

export default function HowToFindYourIbanGuidePage() {
  return (
    <>
      <JsonLd
        lang="en"
        type="guide"
        pageId="guide-how-to-find-iban"
        slug="guides/how-to-find-your-iban"
        title={guideHowToFindYourIbanEn.h1}
        description={guideHowToFindYourIbanEn.metaDescription}
        faqs={guideHowToFindYourIbanEn.faqs}
        category="banking"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Banking Guides', url: '/#banking' },
          { name: 'How to Find Your IBAN', url: '/guides/how-to-find-your-iban/' },
        ]}
      />
      <GuidePageTemplate
        lang="en"
        content={guideHowToFindYourIbanEn}
        categoryName="Banking Guides"
        categorySlug="banking"
      />
    </>
  );
}

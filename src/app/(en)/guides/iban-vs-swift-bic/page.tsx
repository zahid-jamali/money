import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { guideIbanVsSwiftBicEn } from '@/content/en/guides/iban-vs-swift-bic';
import { GuidePageTemplate } from '@/components/GuidePageTemplate';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('guide-iban-vs-bic', 'en');

export default function IbanVsSwiftBicGuidePage() {
  return (
    <>
      <JsonLd
        lang="en"
        type="guide"
        pageId="guide-iban-vs-bic"
        slug="guides/iban-vs-swift-bic"
        title={guideIbanVsSwiftBicEn.h1}
        description={guideIbanVsSwiftBicEn.metaDescription}
        faqs={guideIbanVsSwiftBicEn.faqs}
        category="banking"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Banking Guides', url: '/#banking' },
          { name: 'IBAN vs SWIFT/BIC', url: '/guides/iban-vs-swift-bic/' },
        ]}
      />
      <GuidePageTemplate
        lang="en"
        content={guideIbanVsSwiftBicEn}
        categoryName="Banking Guides"
        categorySlug="banking"
      />
    </>
  );
}

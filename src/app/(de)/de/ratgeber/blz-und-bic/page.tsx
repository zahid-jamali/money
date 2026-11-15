import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { guideDeBlzBic } from '@/content/de/ratgeber/blz-und-bic';
import { GuidePageTemplate } from '@/components/GuidePageTemplate';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('guide-de-blz-bic', 'de');

export default function BlzUndBicGuidePage() {
  return (
    <>
      <JsonLd
        lang="de"
        type="guide"
        pageId="guide-de-blz-bic"
        slug="de/ratgeber/blz-und-bic"
        title={guideDeBlzBic.h1}
        description={guideDeBlzBic.metaDescription}
        faqs={guideDeBlzBic.faqs}
        category="banking"
        breadcrumbs={[
          { name: 'Startseite', url: '/de/' },
          { name: 'Banken-Ratgeber', url: '/de/#banking' },
          { name: 'BLZ und BIC', url: '/de/ratgeber/blz-und-bic/' },
        ]}
      />
      <GuidePageTemplate
        lang="de"
        content={guideDeBlzBic}
        categoryName="Banken-Ratgeber"
        categorySlug="banking"
      />
    </>
  );
}

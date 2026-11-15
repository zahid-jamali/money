import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { guideRoPfaSauSrl } from '@/content/ro/ghiduri/pfa-sau-srl';
import { GuidePageTemplate } from '@/components/GuidePageTemplate';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('guide-ro-pfa-sau-srl', 'ro', 'ro');

export default function PfaSauSrlGuidePage() {
  return (
    <>
      <JsonLd
        lang="ro"
        region="ro"
        type="guide"
        pageId="guide-ro-pfa-sau-srl"
        slug="ro/ghiduri/pfa-sau-srl"
        title={guideRoPfaSauSrl.h1}
        description={guideRoPfaSauSrl.metaDescription}
        faqs={guideRoPfaSauSrl.faqs}
        category="salary"
        breadcrumbs={[
          { name: 'Acasă', url: '/ro/' },
          { name: 'Ghiduri', url: '/ro/#guides' },
          { name: 'PFA sau SRL', url: '/ro/ghiduri/pfa-sau-srl/' },
        ]}
      />
      <GuidePageTemplate
        lang="ro"
        content={guideRoPfaSauSrl}
        categoryName="Ghiduri Fiscale"
        categorySlug="salary"
      />
    </>
  );
}

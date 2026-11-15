import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { guideRoCumSeCalculeazaSalariulNet } from '@/content/ro/ghiduri/cum-se-calculeaza-salariul-net';
import { GuidePageTemplate } from '@/components/GuidePageTemplate';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('guide-ro-cum-se-calculeaza-salariul-net', 'ro', 'ro');

export default function CumSeCalculeazaSalariulNetGuidePage() {
  return (
    <>
      <JsonLd
        lang="ro"
        region="ro"
        type="guide"
        pageId="guide-ro-cum-se-calculeaza-salariul-net"
        slug="ro/ghiduri/cum-se-calculeaza-salariul-net"
        title={guideRoCumSeCalculeazaSalariulNet.h1}
        description={guideRoCumSeCalculeazaSalariulNet.metaDescription}
        faqs={guideRoCumSeCalculeazaSalariulNet.faqs}
        category="salary"
        breadcrumbs={[
          { name: 'Acasă', url: '/ro/' },
          { name: 'Ghiduri', url: '/ro/#guides' },
          { name: 'Cum se Calculează Salariul Net', url: '/ro/ghiduri/cum-se-calculeaza-salariul-net/' },
        ]}
      />
      <GuidePageTemplate
        lang="ro"
        content={guideRoCumSeCalculeazaSalariulNet}
        categoryName="Ghiduri Salarii"
        categorySlug="salary"
      />
    </>
  );
}

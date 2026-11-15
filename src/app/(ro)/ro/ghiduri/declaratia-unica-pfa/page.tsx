import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { guideRoDeclaratiaUnicaPfa } from '@/content/ro/ghiduri/declaratia-unica-pfa';
import { GuidePageTemplate } from '@/components/GuidePageTemplate';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('guide-ro-declaratia-unica-pfa', 'ro', 'ro');

export default function DeclaratiaUnicaPfaGuidePage() {
  return (
    <>
      <JsonLd
        lang="ro"
        region="ro"
        type="guide"
        pageId="guide-ro-declaratia-unica-pfa"
        slug="ro/ghiduri/declaratia-unica-pfa"
        title={guideRoDeclaratiaUnicaPfa.h1}
        description={guideRoDeclaratiaUnicaPfa.metaDescription}
        faqs={guideRoDeclaratiaUnicaPfa.faqs}
        category="salary"
        breadcrumbs={[
          { name: 'Acasă', url: '/ro/' },
          { name: 'Ghiduri', url: '/ro/#guides' },
          { name: 'Declarația Unică PFA', url: '/ro/ghiduri/declaratia-unica-pfa/' },
        ]}
      />
      <GuidePageTemplate
        lang="ro"
        content={guideRoDeclaratiaUnicaPfa}
        categoryName="Ghiduri Fiscale"
        categorySlug="salary"
      />
    </>
  );
}

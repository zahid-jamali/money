import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { guidePlUlgaDlaMlodych } from '@/content/pl/poradniki/ulga-dla-mlodych';
import { GuidePageTemplate } from '@/components/GuidePageTemplate';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('guide-pl-ulga-dla-mlodych', 'pl', 'pl');

export default function UlgaDlaMlodychGuidePage() {
  return (
    <>
      <JsonLd
        lang="pl"
        region="pl"
        type="guide"
        pageId="guide-pl-ulga-dla-mlodych"
        slug="pl/poradniki/ulga-dla-mlodych"
        title={guidePlUlgaDlaMlodych.h1}
        description={guidePlUlgaDlaMlodych.metaDescription}
        faqs={guidePlUlgaDlaMlodych.faqs}
        category="salary"
        breadcrumbs={[
          { name: 'Strona główna', url: '/pl/' },
          { name: 'Poradniki', url: '/pl/#guides' },
          { name: 'Ulga dla Młodych', url: '/pl/poradniki/ulga-dla-mlodych/' },
        ]}
      />
      <GuidePageTemplate
        lang="pl"
        content={guidePlUlgaDlaMlodych}
        categoryName="Poradniki Podatkowe"
        categorySlug="salary"
      />
    </>
  );
}

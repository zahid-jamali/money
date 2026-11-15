import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { guidePlB2bCzyUop } from '@/content/pl/poradniki/b2b-czy-umowa-o-prace';
import { GuidePageTemplate } from '@/components/GuidePageTemplate';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('guide-pl-b2b-czy-umowa-o-prace', 'pl', 'pl');

export default function B2bCzyUopGuidePage() {
  return (
    <>
      <JsonLd
        lang="pl"
        region="pl"
        type="guide"
        pageId="guide-pl-b2b-czy-umowa-o-prace"
        slug="pl/poradniki/b2b-czy-umowa-o-prace"
        title={guidePlB2bCzyUop.h1}
        description={guidePlB2bCzyUop.metaDescription}
        faqs={guidePlB2bCzyUop.faqs}
        category="salary"
        breadcrumbs={[
          { name: 'Strona główna', url: '/pl/' },
          { name: 'Poradniki', url: '/pl/#guides' },
          { name: 'B2B czy Umowa o Pracę', url: '/pl/poradniki/b2b-czy-umowa-o-prace/' },
        ]}
      />
      <GuidePageTemplate
        lang="pl"
        content={guidePlB2bCzyUop}
        categoryName="Poradniki Podatkowe"
        categorySlug="salary"
      />
    </>
  );
}

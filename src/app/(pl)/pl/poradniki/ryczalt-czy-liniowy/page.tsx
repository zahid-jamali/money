import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { guidePlRyczaltCzyLiniowy } from '@/content/pl/poradniki/ryczalt-czy-liniowy';
import { GuidePageTemplate } from '@/components/GuidePageTemplate';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('guide-pl-ryczalt-czy-liniowy', 'pl', 'pl');

export default function RyczaltCzyLiniowyGuidePage() {
  return (
    <>
      <JsonLd
        lang="pl"
        region="pl"
        type="guide"
        pageId="guide-pl-ryczalt-czy-liniowy"
        slug="pl/poradniki/ryczalt-czy-liniowy"
        title={guidePlRyczaltCzyLiniowy.h1}
        description={guidePlRyczaltCzyLiniowy.metaDescription}
        faqs={guidePlRyczaltCzyLiniowy.faqs}
        category="salary"
        breadcrumbs={[
          { name: 'Strona główna', url: '/pl/' },
          { name: 'Poradniki', url: '/pl/#guides' },
          { name: 'Ryczałt czy Liniowy', url: '/pl/poradniki/ryczalt-czy-liniowy/' },
        ]}
      />
      <GuidePageTemplate
        lang="pl"
        content={guidePlRyczaltCzyLiniowy}
        categoryName="Poradniki Podatkowe"
        categorySlug="salary"
      />
    </>
  );
}

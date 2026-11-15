import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { guidePlJakCzytacPasekWyplaty } from '@/content/pl/poradniki/jak-czytac-pasek-wyplaty';
import { GuidePageTemplate } from '@/components/GuidePageTemplate';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('guide-pl-jak-czytac-pasek-wyplaty', 'pl', 'pl');

export default function JakCzytacPasekWyplatyGuidePage() {
  return (
    <>
      <JsonLd
        lang="pl"
        region="pl"
        type="guide"
        pageId="guide-pl-jak-czytac-pasek-wyplaty"
        slug="pl/poradniki/jak-czytac-pasek-wyplaty"
        title={guidePlJakCzytacPasekWyplaty.h1}
        description={guidePlJakCzytacPasekWyplaty.metaDescription}
        faqs={guidePlJakCzytacPasekWyplaty.faqs}
        category="salary"
        breadcrumbs={[
          { name: 'Strona główna', url: '/pl/' },
          { name: 'Poradniki', url: '/pl/#guides' },
          { name: 'Jak Czytać Pasek Wypłaty', url: '/pl/poradniki/jak-czytac-pasek-wyplaty/' },
        ]}
      />
      <GuidePageTemplate
        lang="pl"
        content={guidePlJakCzytacPasekWyplaty}
        categoryName="Poradniki Podatkowe"
        categorySlug="salary"
      />
    </>
  );
}

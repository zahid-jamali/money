import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { guideTrSchengenVizeRehberi } from '@/content/tr/rehber/schengen-vizesi-90-180-kurali';
import { GuidePageTemplate } from '@/components/GuidePageTemplate';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('guide-tr-schengen-vize-rehberi', 'tr', 'tr');

export default function SchengenVizesi90180KuraliGuidePageTr() {
  return (
    <>
      <JsonLd
        lang="tr"
        region="tr"
        type="guide"
        pageId="guide-tr-schengen-vize-rehberi"
        slug="tr/rehber/schengen-vizesi-90-180-kurali"
        title={guideTrSchengenVizeRehberi.h1}
        description={guideTrSchengenVizeRehberi.metaDescription}
        faqs={guideTrSchengenVizeRehberi.faqs}
        category="travel"
        breadcrumbs={[
          { name: 'Ana Sayfa', url: '/tr/' },
          { name: 'Seyahat Rehberleri', url: '/tr/#travel' },
          { name: 'Schengen Vizesi 90/180 Kuralı Rehberi', url: '/tr/rehber/schengen-vizesi-90-180-kurali/' },
        ]}
      />
      <GuidePageTemplate
        lang="tr"
        content={guideTrSchengenVizeRehberi}
        categoryName="Seyahat Rehberleri"
        categorySlug="travel"
      />
    </>
  );
}

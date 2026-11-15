import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { guideTrEvlilikKidemTazminati } from '@/content/tr/rehber/evlilik-nedeniyle-kidem-tazminati';
import { GuidePageTemplate } from '@/components/GuidePageTemplate';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('guide-tr-evlilik-nedeniyle-kidem-tazminati', 'tr', 'tr');

export default function EvlilikNedeniyleKidemTazminatiPage() {
  return (
    <>
      <JsonLd
        lang="tr"
        region="tr"
        type="guide"
        pageId="guide-tr-evlilik-nedeniyle-kidem-tazminati"
        slug="tr/rehber/evlilik-nedeniyle-kidem-tazminati"
        title={guideTrEvlilikKidemTazminati.h1}
        description={guideTrEvlilikKidemTazminati.metaDescription}
        faqs={guideTrEvlilikKidemTazminati.faqs}
        category="salary"
        breadcrumbs={[
          { name: 'Ana Sayfa', url: '/tr/' },
          { name: 'Maaş & Vergi', url: '/tr/#salary' },
          { name: 'Evlilik Nedeniyle Kıdem Tazminatı', url: '/tr/rehber/evlilik-nedeniyle-kidem-tazminati/' },
        ]}
      />
      <GuidePageTemplate
        lang="tr"
        content={guideTrEvlilikKidemTazminati}
        categoryName="Maaş Rehberleri"
        categorySlug="salary"
      />
    </>
  );
}

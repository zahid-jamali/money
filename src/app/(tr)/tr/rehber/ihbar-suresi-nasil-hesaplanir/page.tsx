import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { guideTrIhbarSuresi } from '@/content/tr/rehber/ihbar-suresi-nasil-hesaplanir';
import { GuidePageTemplate } from '@/components/GuidePageTemplate';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('guide-tr-ihbar-suresi-nasil-hesaplanir', 'tr', 'tr');

export default function IhbarSuresiNasilHesaplanirPage() {
  return (
    <>
      <JsonLd
        lang="tr"
        region="tr"
        type="guide"
        pageId="guide-tr-ihbar-suresi-nasil-hesaplanir"
        slug="tr/rehber/ihbar-suresi-nasil-hesaplanir"
        title={guideTrIhbarSuresi.h1}
        description={guideTrIhbarSuresi.metaDescription}
        faqs={guideTrIhbarSuresi.faqs}
        category="salary"
        breadcrumbs={[
          { name: 'Ana Sayfa', url: '/tr/' },
          { name: 'Maaş & Vergi', url: '/tr/#salary' },
          { name: 'İhbar Süresi Nasıl Hesaplanır?', url: '/tr/rehber/ihbar-suresi-nasil-hesaplanir/' },
        ]}
      />
      <GuidePageTemplate
        lang="tr"
        content={guideTrIhbarSuresi}
        categoryName="Maaş Rehberleri"
        categorySlug="salary"
      />
    </>
  );
}

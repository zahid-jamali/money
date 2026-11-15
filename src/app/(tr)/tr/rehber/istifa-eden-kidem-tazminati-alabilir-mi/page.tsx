import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { guideTrIstifaEdenKidem } from '@/content/tr/rehber/istifa-eden-kidem-tazminati-alabilir-mi';
import { GuidePageTemplate } from '@/components/GuidePageTemplate';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('guide-tr-istifa-eden-kidem-tazminati', 'tr', 'tr');

export default function IstifaEdenKidemTazminatiAlabilirMiPage() {
  return (
    <>
      <JsonLd
        lang="tr"
        region="tr"
        type="guide"
        pageId="guide-tr-istifa-eden-kidem-tazminati"
        slug="tr/rehber/istifa-eden-kidem-tazminati-alabilir-mi"
        title={guideTrIstifaEdenKidem.h1}
        description={guideTrIstifaEdenKidem.metaDescription}
        faqs={guideTrIstifaEdenKidem.faqs}
        category="salary"
        breadcrumbs={[
          { name: 'Ana Sayfa', url: '/tr/' },
          { name: 'Maaş & Vergi', url: '/tr/#salary' },
          { name: 'İstifa Eden Kıdem Tazminatı Alabilir mi?', url: '/tr/rehber/istifa-eden-kidem-tazminati-alabilir-mi/' },
        ]}
      />
      <GuidePageTemplate
        lang="tr"
        content={guideTrIstifaEdenKidem}
        categoryName="Maaş Rehberleri"
        categorySlug="salary"
      />
    </>
  );
}

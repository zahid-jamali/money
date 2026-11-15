import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { kidemVeIhbarTr } from '@/content/tr/kidem-ve-ihbar';
import { ToolPageTemplate } from '@/components/ToolPageTemplate';
import { KidemVeIhbarTool } from '@/components/tools/tr/KidemVeIhbarTool';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('kidem-ve-ihbar-tazminati-hesaplama', 'tr', 'tr');

export default function KidemVeIhbarTazminatiHesaplamaPage() {
  return (
    <>
      <JsonLd
        lang="tr"
        region="tr"
        pageId="kidem-ve-ihbar-tazminati-hesaplama"
        type="tool"
        slug="tr/kidem-ve-ihbar-tazminati-hesaplama"
        name={kidemVeIhbarTr.h1}
        description={kidemVeIhbarTr.metaDescription}
        faqs={kidemVeIhbarTr.faqs}
        applicationCategory="FinanceApplication"
        currency="TRY"
        breadcrumbs={[
          { name: 'Ana Sayfa', url: '/tr/' },
          { name: 'Maaş & Vergi', url: '/tr/#salary' },
          { name: 'Kıdem ve İhbar Tazminatı Hesaplama', url: '/tr/kidem-ve-ihbar-tazminati-hesaplama/' },
        ]}
      />
      <ToolPageTemplate
        lang="tr"
        content={kidemVeIhbarTr}
        categoryName="Maaş & Vergi"
        categorySlug="salary"
        toolNode={<KidemVeIhbarTool />}
      />
    </>
  );
}

import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { kidemTazminatiTr } from '@/content/tr/kidem-tazminati';
import { ToolPageTemplate } from '@/components/ToolPageTemplate';
import { KidemTazminatiTool } from '@/components/tools/tr/KidemTazminatiTool';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('kidem-tazminati-hesaplama', 'tr', 'tr');

export default function KidemTazminatiHesaplamaPage() {
  return (
    <>
      <JsonLd
        lang="tr"
        region="tr"
        pageId="kidem-tazminati-hesaplama"
        type="tool"
        slug="tr/kidem-tazminati-hesaplama"
        name={kidemTazminatiTr.h1}
        description={kidemTazminatiTr.metaDescription}
        faqs={kidemTazminatiTr.faqs}
        applicationCategory="FinanceApplication"
        currency="TRY"
        breadcrumbs={[
          { name: 'Ana Sayfa', url: '/tr/' },
          { name: 'Maaş & Vergi', url: '/tr/#salary' },
          { name: 'Kıdem Tazminatı Hesaplama', url: '/tr/kidem-tazminati-hesaplama/' },
        ]}
      />
      <ToolPageTemplate
        lang="tr"
        content={kidemTazminatiTr}
        categoryName="Maaş & Vergi"
        categorySlug="salary"
        toolNode={<KidemTazminatiTool />}
      />
    </>
  );
}

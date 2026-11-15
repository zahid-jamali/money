import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { ihbarTazminatiTr } from '@/content/tr/ihbar-tazminati';
import { ToolPageTemplate } from '@/components/ToolPageTemplate';
import { IhbarTazminatiTool } from '@/components/tools/tr/IhbarTazminatiTool';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('ihbar-tazminati-hesaplama', 'tr', 'tr');

export default function IhbarTazminatiHesaplamaPage() {
  return (
    <>
      <JsonLd
        lang="tr"
        region="tr"
        pageId="ihbar-tazminati-hesaplama"
        type="tool"
        slug="tr/ihbar-tazminati-hesaplama"
        name={ihbarTazminatiTr.h1}
        description={ihbarTazminatiTr.metaDescription}
        faqs={ihbarTazminatiTr.faqs}
        applicationCategory="FinanceApplication"
        currency="TRY"
        breadcrumbs={[
          { name: 'Ana Sayfa', url: '/tr/' },
          { name: 'Maaş & Vergi', url: '/tr/#salary' },
          { name: 'İhbar Tazminatı Hesaplama', url: '/tr/ihbar-tazminati-hesaplama/' },
        ]}
      />
      <ToolPageTemplate
        lang="tr"
        content={ihbarTazminatiTr}
        categoryName="Maaş & Vergi"
        categorySlug="salary"
        toolNode={<IhbarTazminatiTool />}
      />
    </>
  );
}

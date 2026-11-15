import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { kidemTazminatiTavaniTr } from '@/content/tr/kidem-tazminati-tavani';
import { ToolPageTemplate } from '@/components/ToolPageTemplate';
import { KidemTavaniInfoTool } from '@/components/tools/tr/KidemTavaniInfoTool';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('kidem-tazminati-tavani-tr', 'tr', 'tr');

export default function KidemTazminatiTavaniPage() {
  return (
    <>
      <JsonLd
        lang="tr"
        region="tr"
        pageId="kidem-tazminati-tavani-tr"
        type="tool"
        slug="tr/kidem-tazminati-tavani"
        name={kidemTazminatiTavaniTr.h1}
        description={kidemTazminatiTavaniTr.metaDescription}
        faqs={kidemTazminatiTavaniTr.faqs}
        applicationCategory="FinanceApplication"
        currency="TRY"
        breadcrumbs={[
          { name: 'Ana Sayfa', url: '/tr/' },
          { name: 'Maaş & Vergi', url: '/tr/#salary' },
          { name: 'Kıdem Tazminatı Tavanı 2026', url: '/tr/kidem-tazminati-tavani/' },
        ]}
      />
      <ToolPageTemplate
        lang="tr"
        content={kidemTazminatiTavaniTr}
        categoryName="Maaş & Vergi"
        categorySlug="salary"
        toolNode={<KidemTavaniInfoTool />}
      />
    </>
  );
}

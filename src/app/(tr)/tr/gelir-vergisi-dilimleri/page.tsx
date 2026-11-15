import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { gelirVergisiDilimleriTr } from '@/content/tr/gelir-vergisi-dilimleri';
import { ToolPageTemplate } from '@/components/ToolPageTemplate';
import { GelirVergisiDilimleriTool } from '@/components/tools/tr/GelirVergisiDilimleriTool';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('gelir-vergisi-dilimleri-tr', 'tr', 'tr');

export default function GelirVergisiDilimleriPage() {
  return (
    <>
      <JsonLd
        lang="tr"
        region="tr"
        pageId="gelir-vergisi-dilimleri-tr"
        type="tool"
        slug="tr/gelir-vergisi-dilimleri"
        name={gelirVergisiDilimleriTr.h1}
        description={gelirVergisiDilimleriTr.metaDescription}
        faqs={gelirVergisiDilimleriTr.faqs}
        applicationCategory="FinanceApplication"
        currency="TRY"
        breadcrumbs={[
          { name: 'Ana Sayfa', url: '/tr/' },
          { name: 'Maaş & Vergi', url: '/tr/#salary' },
          { name: 'Gelir Vergisi Dilimleri 2026', url: '/tr/gelir-vergisi-dilimleri/' },
        ]}
      />
      <ToolPageTemplate
        lang="tr"
        content={gelirVergisiDilimleriTr}
        categoryName="Maaş & Vergi"
        categorySlug="salary"
        toolNode={<GelirVergisiDilimleriTool />}
      />
    </>
  );
}

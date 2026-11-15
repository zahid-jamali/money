import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { asgariUcretTr } from '@/content/tr/asgari-ucret';
import { ToolPageTemplate } from '@/components/ToolPageTemplate';
import { AsgariUcretInfoTool } from '@/components/tools/tr/AsgariUcretInfoTool';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('asgari-ucret-tr', 'tr', 'tr');

export default function AsgariUcretPage() {
  return (
    <>
      <JsonLd
        lang="tr"
        region="tr"
        pageId="asgari-ucret-tr"
        type="tool"
        slug="tr/asgari-ucret"
        name={asgariUcretTr.h1}
        description={asgariUcretTr.metaDescription}
        faqs={asgariUcretTr.faqs}
        applicationCategory="FinanceApplication"
        currency="TRY"
        breadcrumbs={[
          { name: 'Ana Sayfa', url: '/tr/' },
          { name: 'Maaş & Vergi', url: '/tr/#salary' },
          { name: 'Asgari Ücret 2026', url: '/tr/asgari-ucret/' },
        ]}
      />
      <ToolPageTemplate
        lang="tr"
        content={asgariUcretTr}
        categoryName="Maaş & Vergi"
        categorySlug="salary"
        toolNode={<AsgariUcretInfoTool />}
      />
    </>
  );
}

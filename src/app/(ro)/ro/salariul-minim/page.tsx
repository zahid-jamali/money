import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { contentRoSalariulMinim } from '@/content/ro/salariul-minim';
import { ToolPageTemplate } from '@/components/ToolPageTemplate';
import { SalariulMinimInfoTool } from '@/components/tools/ro';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('salariul-minim-ro', 'ro', 'ro');

export default function SalariulMinimRoPage() {
  return (
    <>
      <JsonLd
        lang="ro"
        region="ro"
        pageId="salariul-minim-ro"
        type="tool"
        slug="ro/salariul-minim"
        name={contentRoSalariulMinim.h1}
        description={contentRoSalariulMinim.metaDescription}
        faqs={contentRoSalariulMinim.faqs}
        applicationCategory="FinanceApplication"
        currency="RON"
        breadcrumbs={[
          { name: 'Acasă', url: '/ro/' },
          { name: 'Salarii & Taxe', url: '/ro/#salary' },
          { name: 'Salariul Minim', url: '/ro/salariul-minim/' },
        ]}
      />
      <ToolPageTemplate
        lang="ro"
        content={contentRoSalariulMinim}
        categoryName="Salarii & Taxe"
        categorySlug="salary"
        toolNode={<SalariulMinimInfoTool />}
      />
    </>
  );
}

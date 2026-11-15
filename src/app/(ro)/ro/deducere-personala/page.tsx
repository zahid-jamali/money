import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { contentRoDeducerePersonala } from '@/content/ro/deducere-personala';
import { ToolPageTemplate } from '@/components/ToolPageTemplate';
import { DeducerePersonalaInfoTool } from '@/components/tools/ro';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('deducere-personala-ro', 'ro', 'ro');

export default function DeducerePersonalaRoPage() {
  return (
    <>
      <JsonLd
        lang="ro"
        region="ro"
        pageId="deducere-personala-ro"
        type="tool"
        slug="ro/deducere-personala"
        name={contentRoDeducerePersonala.h1}
        description={contentRoDeducerePersonala.metaDescription}
        faqs={contentRoDeducerePersonala.faqs}
        applicationCategory="FinanceApplication"
        currency="RON"
        breadcrumbs={[
          { name: 'Acasă', url: '/ro/' },
          { name: 'Salarii & Taxe', url: '/ro/#salary' },
          { name: 'Deducere Personală', url: '/ro/deducere-personala/' },
        ]}
      />
      <ToolPageTemplate
        lang="ro"
        content={contentRoDeducerePersonala}
        categoryName="Salarii & Taxe"
        categorySlug="salary"
        toolNode={<DeducerePersonalaInfoTool />}
      />
    </>
  );
}

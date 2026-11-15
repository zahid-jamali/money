import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { bicCheckerDe } from '@/content/de/bic-checker';
import { ToolPageTemplate } from '@/components/ToolPageTemplate';
import { BicCheckerTool } from '@/components/tools/BicCheckerTool';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('bic-checker', 'de', undefined, bicCheckerDe);

export default function BicPruefenPageDe() {
  return (
    <>
      <JsonLd
        lang="de"
        type="tool"
        slug="de/bic-pruefen"
        name={bicCheckerDe.h1}
        description={bicCheckerDe.metaDescription}
        faqs={bicCheckerDe.faqs}
        applicationCategory="FinanceApplication"
        breadcrumbs={[
          { name: 'Startseite', url: '/de/' },
          { name: 'Banken & Konten', url: '/de/#banking' },
          { name: 'BIC Prüfer', url: '/de/bic-pruefen/' },
        ]}
      />
      <ToolPageTemplate
        lang="de"
        content={bicCheckerDe}
        categoryName="Banken & Konten"
        categorySlug="banking"
        toolNode={<BicCheckerTool lang="de" />}
      />
    </>
  );
}

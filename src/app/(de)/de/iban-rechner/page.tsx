import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { ibanRechnerDe } from '@/content/de/iban-rechner';
import { ToolPageTemplate } from '@/components/ToolPageTemplate';
import { GermanIbanCalculatorTool } from '@/components/tools/GermanIbanCalculatorTool';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('german-iban-calculator', 'de', 'de', ibanRechnerDe);

export default function GermanIbanRechnerPage() {
  return (
    <>
      <JsonLd
        lang="de"
        type="tool"
        slug="de/iban-rechner"
        name={ibanRechnerDe.h1}
        description={ibanRechnerDe.metaDescription}
        faqs={ibanRechnerDe.faqs}
        applicationCategory="FinanceApplication"
        breadcrumbs={[
          { name: 'Startseite', url: '/de/' },
          { name: 'Banken & Konten', url: '/de/#banking' },
          { name: 'IBAN Rechner', url: '/de/iban-rechner/' },
        ]}
      />
      <ToolPageTemplate
        lang="de"
        content={ibanRechnerDe}
        categoryName="Banken & Konten"
        categorySlug="banking"
        toolNode={<GermanIbanCalculatorTool lang="de" />}
      />
    </>
  );
}

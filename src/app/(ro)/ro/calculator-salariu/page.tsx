import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { contentRoCalculatorSalariu } from '@/content/ro/calculator-salariu';
import { ToolPageTemplate } from '@/components/ToolPageTemplate';
import { RomanianSalaryCalculatorTool } from '@/components/tools/ro';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('calculator-salariu-ro', 'ro', 'ro');

export default function CalculatorSalariuRoPage() {
  return (
    <>
      <JsonLd
        lang="ro"
        region="ro"
        pageId="calculator-salariu-ro"
        type="tool"
        slug="ro/calculator-salariu"
        name={contentRoCalculatorSalariu.h1}
        description={contentRoCalculatorSalariu.metaDescription}
        faqs={contentRoCalculatorSalariu.faqs}
        applicationCategory="FinanceApplication"
        currency="RON"
        breadcrumbs={[
          { name: 'Acasă', url: '/ro/' },
          { name: 'Salarii & Taxe', url: '/ro/#salary' },
          { name: 'Calculator Salariu', url: '/ro/calculator-salariu/' },
        ]}
      />
      <ToolPageTemplate
        lang="ro"
        content={contentRoCalculatorSalariu}
        categoryName="Salarii & Taxe"
        categorySlug="salary"
        toolNode={<RomanianSalaryCalculatorTool />}
      />
    </>
  );
}

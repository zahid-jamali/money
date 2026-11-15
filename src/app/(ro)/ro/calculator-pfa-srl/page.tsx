import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { contentRoCalculatorPfaSrl } from '@/content/ro/calculator-pfa-srl';
import { ToolPageTemplate } from '@/components/ToolPageTemplate';
import { PfaVsSrlCalculatorTool } from '@/components/tools/ro';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('calculator-pfa-srl-ro', 'ro', 'ro');

export default function CalculatorPfaSrlRoPage() {
  return (
    <>
      <JsonLd
        lang="ro"
        region="ro"
        pageId="calculator-pfa-srl-ro"
        type="tool"
        slug="ro/calculator-pfa-srl"
        name={contentRoCalculatorPfaSrl.h1}
        description={contentRoCalculatorPfaSrl.metaDescription}
        faqs={contentRoCalculatorPfaSrl.faqs}
        applicationCategory="FinanceApplication"
        currency="RON"
        breadcrumbs={[
          { name: 'Acasă', url: '/ro/' },
          { name: 'Salarii & Taxe', url: '/ro/#salary' },
          { name: 'Calculator PFA vs SRL', url: '/ro/calculator-pfa-srl/' },
        ]}
      />
      <ToolPageTemplate
        lang="ro"
        content={contentRoCalculatorPfaSrl}
        categoryName="Salarii & Taxe"
        categorySlug="salary"
        toolNode={<PfaVsSrlCalculatorTool />}
      />
    </>
  );
}

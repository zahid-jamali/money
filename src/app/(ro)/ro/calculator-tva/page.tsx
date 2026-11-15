import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { calculatorTvaRo } from '@/content/ro/calculator-tva';
import { ToolPageTemplate } from '@/components/ToolPageTemplate';
import { RomanianTvaCalculatorTool } from '@/components/tools/RomanianTvaCalculatorTool';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('calculator-tva-ro', 'ro', 'ro');

export default function CalculatorTvaPage() {
  return (
    <>
      <JsonLd
        lang="ro"
        region="ro"
        pageId="calculator-tva-ro"
        type="tool"
        slug="ro/calculator-tva"
        name={calculatorTvaRo.h1}
        description={calculatorTvaRo.metaDescription}
        faqs={calculatorTvaRo.faqs}
        applicationCategory="FinanceApplication"
        currency="RON"
        breadcrumbs={[
          { name: 'Acasă', url: '/ro/' },
          { name: 'Taxe & TVA', url: '/ro/#tax-vat' },
          { name: 'Calculator TVA', url: '/ro/calculator-tva/' },
        ]}
      />
      <ToolPageTemplate
        lang="ro"
        content={calculatorTvaRo}
        categoryName="Taxe & TVA"
        categorySlug="tax-vat"
        toolNode={<RomanianTvaCalculatorTool initialAmount={1000} initialType="add" />}
      />
    </>
  );
}

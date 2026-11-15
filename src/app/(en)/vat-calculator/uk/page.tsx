import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { vatCalculatorUkEn } from '@/content/en/vat-calculator-uk';
import { ToolPageTemplate } from '@/components/ToolPageTemplate';
import { UkVatCalculatorTool } from '@/components/tools/UkVatCalculatorTool';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('vat-calculator-uk', 'en', 'uk');

export default function UkVatCalculatorPage() {
  return (
    <>
      <JsonLd
        lang="en"
        region="uk"
        pageId="vat-calculator-uk"
        type="tool"
        slug="vat-calculator/uk"
        name={vatCalculatorUkEn.h1}
        description={vatCalculatorUkEn.metaDescription}
        faqs={vatCalculatorUkEn.faqs}
        applicationCategory="FinanceApplication"
        currency="GBP"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Tax & VAT', url: '/#tax-vat' },
          { name: 'UK VAT Calculator', url: '/vat-calculator/uk/' },
        ]}
      />
      <ToolPageTemplate
        lang="en"
        content={vatCalculatorUkEn}
        categoryName="Tax & VAT"
        categorySlug="tax-vat"
        toolNode={<UkVatCalculatorTool initialAmount={100} initialRate={20} initialType="add" />}
      />
    </>
  );
}

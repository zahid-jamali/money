import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { vatCalculatorEn } from '@/content/en/vat-calculator';
import { ToolPageTemplate } from '@/components/ToolPageTemplate';
import { CountryVatHubTool } from '@/components/tools/CountryVatHubTool';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('vat-calculator', 'en', 'eu');

export default function VatCalculatorPage() {
  return (
    <>
      <JsonLd
        lang="en"
        region="eu"
        pageId="vat-calculator"
        type="tool"
        slug="vat-calculator"
        name={vatCalculatorEn.h1}
        description={vatCalculatorEn.metaDescription}
        faqs={vatCalculatorEn.faqs}
        applicationCategory="FinanceApplication"
        currency="EUR"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Tax & VAT', url: '/#tax-vat' },
          { name: 'EU VAT Calculator', url: '/vat-calculator/' },
        ]}
      />
      <ToolPageTemplate
        lang="en"
        content={vatCalculatorEn}
        categoryName="Tax & VAT"
        categorySlug="tax-vat"
        toolNode={<CountryVatHubTool initialAmount={100} initialOrigin="DE" initialDestination="FR" />}
      />
    </>
  );
}

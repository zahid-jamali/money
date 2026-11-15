import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { kalkulatorVatPl } from '@/content/pl/kalkulator-vat';
import { ToolPageTemplate } from '@/components/ToolPageTemplate';
import { PolishVatCalculatorTool } from '@/components/tools/PolishVatCalculatorTool';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('kalkulator-vat-pl', 'pl', 'pl');

export default function KalkulatorVatPage() {
  return (
    <>
      <JsonLd
        lang="pl"
        region="pl"
        pageId="kalkulator-vat-pl"
        type="tool"
        slug="pl/kalkulator-vat"
        name={kalkulatorVatPl.h1}
        description={kalkulatorVatPl.metaDescription}
        faqs={kalkulatorVatPl.faqs}
        applicationCategory="FinanceApplication"
        currency="PLN"
        breadcrumbs={[
          { name: 'Start', url: '/pl/' },
          { name: 'Podatki i VAT', url: '/pl/#tax-vat' },
          { name: 'Kalkulator VAT', url: '/pl/kalkulator-vat/' },
        ]}
      />
      <ToolPageTemplate
        lang="pl"
        content={kalkulatorVatPl}
        categoryName="Podatki i VAT"
        categorySlug="tax-vat"
        toolNode={<PolishVatCalculatorTool initialAmount={100} initialRate={23} initialType="add" />}
      />
    </>
  );
}

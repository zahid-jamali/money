import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { contentPlKalkulatorWynagrodzen } from '@/content/pl/kalkulator-wynagrodzen';
import { ToolPageTemplate } from '@/components/ToolPageTemplate';
import { PolishSalaryCalculatorTool } from '@/components/tools/pl';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('kalkulator-wynagrodzen-pl', 'pl', 'pl');

export default function KalkulatorWynagrodzenPlPage() {
  return (
    <>
      <JsonLd
        lang="pl"
        region="pl"
        pageId="kalkulator-wynagrodzen-pl"
        type="tool"
        slug="pl/kalkulator-wynagrodzen"
        name={contentPlKalkulatorWynagrodzen.h1}
        description={contentPlKalkulatorWynagrodzen.metaDescription}
        faqs={contentPlKalkulatorWynagrodzen.faqs}
        applicationCategory="FinanceApplication"
        currency="PLN"
        breadcrumbs={[
          { name: 'Strona główna', url: '/pl/' },
          { name: 'Wynagrodzenia & Podatki', url: '/pl/#salary' },
          { name: 'Kalkulator Wynagrodzeń', url: '/pl/kalkulator-wynagrodzen/' },
        ]}
      />
      <ToolPageTemplate
        lang="pl"
        content={contentPlKalkulatorWynagrodzen}
        categoryName="Wynagrodzenia & Podatki"
        categorySlug="salary"
        toolNode={<PolishSalaryCalculatorTool />}
      />
    </>
  );
}

import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { contentPlKalkulatorB2b } from '@/content/pl/kalkulator-b2b';
import { ToolPageTemplate } from '@/components/ToolPageTemplate';
import { B2bVsUopCalculatorTool } from '@/components/tools/pl';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('kalkulator-b2b-pl', 'pl', 'pl');

export default function KalkulatorB2bPlPage() {
  return (
    <>
      <JsonLd
        lang="pl"
        region="pl"
        pageId="kalkulator-b2b-pl"
        type="tool"
        slug="pl/kalkulator-b2b"
        name={contentPlKalkulatorB2b.h1}
        description={contentPlKalkulatorB2b.metaDescription}
        faqs={contentPlKalkulatorB2b.faqs}
        applicationCategory="FinanceApplication"
        currency="PLN"
        breadcrumbs={[
          { name: 'Strona główna', url: '/pl/' },
          { name: 'Wynagrodzenia & Podatki', url: '/pl/#salary' },
          { name: 'Kalkulator B2B', url: '/pl/kalkulator-b2b/' },
        ]}
      />
      <ToolPageTemplate
        lang="pl"
        content={contentPlKalkulatorB2b}
        categoryName="Wynagrodzenia & Podatki"
        categorySlug="salary"
        toolNode={<B2bVsUopCalculatorTool />}
      />
    </>
  );
}

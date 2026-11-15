import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { electricityCostUkEn } from '@/content/en/electricity-cost-uk';
import { ToolPageTemplate } from '@/components/ToolPageTemplate';
import { ElectricityCostCalculatorTool } from '@/components/tools/ElectricityCostCalculatorTool';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('electricity-cost-calculator', 'en', 'uk', {
  metaTitle: electricityCostUkEn.metaTitle,
  metaDescription: electricityCostUkEn.metaDescription,
});

export default function UkElectricityCostCalculatorPage() {
  return (
    <>
      <JsonLd
        lang="en"
        region="uk"
        pageId="electricity-cost-calculator"
        type="tool"
        slug="electricity-cost-calculator/uk"
        name={electricityCostUkEn.h1}
        description={electricityCostUkEn.metaDescription}
        faqs={electricityCostUkEn.faqs}
        applicationCategory="UtilityApplication"
        currency="GBP"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Home & Energy', url: '/#home-energy' },
          { name: 'UK Electricity Cost Calculator', url: '/electricity-cost-calculator/uk/' },
        ]}
      />
      <ToolPageTemplate
        lang="en"
        content={electricityCostUkEn}
        categoryName="Home & Energy"
        categorySlug="home-energy"
        toolNode={<ElectricityCostCalculatorTool region="uk" lang="en" />}
      />
    </>
  );
}

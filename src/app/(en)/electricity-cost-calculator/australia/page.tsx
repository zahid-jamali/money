import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { electricityCostAustraliaEn } from '@/content/en/electricity-cost-australia';
import { ToolPageTemplate } from '@/components/ToolPageTemplate';
import { ElectricityCostCalculatorTool } from '@/components/tools/ElectricityCostCalculatorTool';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('electricity-cost-calculator', 'en', 'au', {
  metaTitle: electricityCostAustraliaEn.metaTitle,
  metaDescription: electricityCostAustraliaEn.metaDescription,
});

export default function AustraliaElectricityCostCalculatorPage() {
  return (
    <>
      <JsonLd
        lang="en"
        region="au"
        pageId="electricity-cost-calculator"
        type="tool"
        slug="electricity-cost-calculator/australia"
        name={electricityCostAustraliaEn.h1}
        description={electricityCostAustraliaEn.metaDescription}
        faqs={electricityCostAustraliaEn.faqs}
        applicationCategory="UtilityApplication"
        currency="AUD"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Home & Energy', url: '/#home-energy' },
          { name: 'Australia Electricity Cost Calculator', url: '/electricity-cost-calculator/australia/' },
        ]}
      />
      <ToolPageTemplate
        lang="en"
        content={electricityCostAustraliaEn}
        categoryName="Home & Energy"
        categorySlug="home-energy"
        toolNode={<ElectricityCostCalculatorTool region="australia" lang="en" />}
      />
    </>
  );
}

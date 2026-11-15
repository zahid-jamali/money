import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { fuelCostAustraliaEn } from '@/content/en/fuel-cost-australia';
import { ToolPageTemplate } from '@/components/ToolPageTemplate';
import { FuelCostCalculatorTool } from '@/components/tools/FuelCostCalculatorTool';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata(
  'fuel-cost-calculator',
  'en',
  'au',
  fuelCostAustraliaEn,
);

export default function AustraliaFuelCostCalculatorPage() {
  return (
    <>
      <JsonLd
        lang="en"
        region="au"
        pageId="fuel-cost-calculator"
        type="tool"
        slug="fuel-cost-calculator/australia"
        name={fuelCostAustraliaEn.h1}
        description={fuelCostAustraliaEn.metaDescription}
        faqs={fuelCostAustraliaEn.faqs}
        applicationCategory="TravelApplication"
        currency="AUD"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Travel & Transport', url: '/#travel' },
          { name: 'Australia Fuel Cost Calculator', url: '/fuel-cost-calculator/australia/' },
        ]}
      />
      <ToolPageTemplate
        lang="en"
        content={fuelCostAustraliaEn}
        categoryName="Travel & Transport"
        categorySlug="travel"
        toolNode={<FuelCostCalculatorTool region="australia" defaultUnit="l_100km" />}
      />
    </>
  );
}

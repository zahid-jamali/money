import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { fuelCostCanadaEn } from '@/content/en/fuel-cost-canada';
import { ToolPageTemplate } from '@/components/ToolPageTemplate';
import { FuelCostCalculatorTool } from '@/components/tools/FuelCostCalculatorTool';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata(
  'fuel-cost-calculator',
  'en',
  'ca',
  fuelCostCanadaEn,
);

export default function CanadaFuelCostCalculatorPage() {
  return (
    <>
      <JsonLd
        lang="en"
        region="ca"
        pageId="fuel-cost-calculator"
        type="tool"
        slug="fuel-cost-calculator/canada"
        name={fuelCostCanadaEn.h1}
        description={fuelCostCanadaEn.metaDescription}
        faqs={fuelCostCanadaEn.faqs}
        applicationCategory="TravelApplication"
        currency="CAD"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Travel & Transport', url: '/#travel' },
          { name: 'Canada Fuel Cost Calculator', url: '/fuel-cost-calculator/canada/' },
        ]}
      />
      <ToolPageTemplate
        lang="en"
        content={fuelCostCanadaEn}
        categoryName="Travel & Transport"
        categorySlug="travel"
        toolNode={<FuelCostCalculatorTool region="canada" defaultUnit="l_100km" />}
      />
    </>
  );
}

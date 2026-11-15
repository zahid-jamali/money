import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { fuelCostUkEn } from '@/content/en/fuel-cost-uk';
import { ToolPageTemplate } from '@/components/ToolPageTemplate';
import { FuelCostCalculatorTool } from '@/components/tools/FuelCostCalculatorTool';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata(
  'fuel-cost-calculator',
  'en',
  'uk',
  fuelCostUkEn,
);

export default function UkFuelCostCalculatorPage() {
  return (
    <>
      <JsonLd
        lang="en"
        region="uk"
        pageId="fuel-cost-calculator"
        type="tool"
        slug="fuel-cost-calculator/uk"
        name={fuelCostUkEn.h1}
        description={fuelCostUkEn.metaDescription}
        faqs={fuelCostUkEn.faqs}
        applicationCategory="TravelApplication"
        currency="GBP"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Travel & Transport', url: '/#travel' },
          { name: 'UK Fuel Cost Calculator', url: '/fuel-cost-calculator/uk/' },
        ]}
      />
      <ToolPageTemplate
        lang="en"
        content={fuelCostUkEn}
        categoryName="Travel & Transport"
        categorySlug="travel"
        toolNode={<FuelCostCalculatorTool region="uk" defaultUnit="uk_mpg" />}
      />
    </>
  );
}

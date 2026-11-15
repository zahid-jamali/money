import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { spritkostenrechnerDe } from '@/content/de/spritkostenrechner';
import { ToolPageTemplate } from '@/components/ToolPageTemplate';
import { FuelCostCalculatorTool } from '@/components/tools/FuelCostCalculatorTool';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata(
  'fuel-cost-calculator',
  'de',
  'de',
  spritkostenrechnerDe,
);

export default function SpritkostenrechnerPage() {
  return (
    <>
      <JsonLd
        lang="de"
        type="tool"
        pageId="fuel-cost-calculator"
        region="de"
        slug="de/spritkostenrechner"
        name={spritkostenrechnerDe.h1}
        description={spritkostenrechnerDe.metaDescription}
        faqs={spritkostenrechnerDe.faqs}
        applicationCategory="TravelApplication"
        currency="EUR"
        breadcrumbs={[
          { name: 'Startseite', url: '/de/' },
          { name: 'Reisen & Verkehr', url: '/de/#travel' },
          { name: 'Spritkostenrechner', url: '/de/spritkostenrechner/' },
        ]}
      />
      <ToolPageTemplate
        lang="de"
        content={spritkostenrechnerDe}
        categoryName="Reisen & Verkehr"
        categorySlug="travel"
        toolNode={<FuelCostCalculatorTool region="de" defaultUnit="l_100km" />}
      />
    </>
  );
}

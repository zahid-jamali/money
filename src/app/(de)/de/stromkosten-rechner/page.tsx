import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { stromkostenRechnerDe } from '@/content/de/stromkosten-rechner';
import { ToolPageTemplate } from '@/components/ToolPageTemplate';
import { ElectricityCostCalculatorTool } from '@/components/tools/ElectricityCostCalculatorTool';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('electricity-cost-calculator', 'de', 'de', {
  metaTitle: stromkostenRechnerDe.metaTitle,
  metaDescription: stromkostenRechnerDe.metaDescription,
});

export default function GermanStromkostenRechnerPage() {
  return (
    <>
      <JsonLd
        lang="de"
        region="de"
        pageId="electricity-cost-calculator"
        type="tool"
        slug="de/stromkosten-rechner"
        name={stromkostenRechnerDe.h1}
        description={stromkostenRechnerDe.metaDescription}
        faqs={stromkostenRechnerDe.faqs}
        applicationCategory="UtilityApplication"
        currency="EUR"
        breadcrumbs={[
          { name: 'Startseite', url: '/de/' },
          { name: 'Energie & Haushalt', url: '/de/#home-energy' },
          { name: 'Stromkostenrechner', url: '/de/stromkosten-rechner/' },
        ]}
      />
      <ToolPageTemplate
        lang="de"
        content={stromkostenRechnerDe}
        categoryName="Energie & Haushalt"
        categorySlug="home-energy"
        toolNode={<ElectricityCostCalculatorTool region="germany" lang="de" />}
      />
    </>
  );
}

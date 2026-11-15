import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { schengenCalculatorEn } from '@/content/en/schengen-calculator';
import { ToolPageTemplate } from '@/components/ToolPageTemplate';
import { SchengenCalculatorTool } from '@/components/tools/SchengenCalculatorTool';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata(
  'schengen-calculator',
  'en',
  undefined,
  schengenCalculatorEn,
);

export default function SchengenCalculatorPageEn() {
  return (
    <>
      <JsonLd
        lang="en"
        type="tool"
        pageId="schengen-calculator"
        slug="schengen-calculator"
        name={schengenCalculatorEn.h1}
        description={schengenCalculatorEn.metaDescription}
        faqs={schengenCalculatorEn.faqs}
        applicationCategory="TravelApplication"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Travel Tools', url: '/#travel' },
          { name: 'Schengen 90/180 Day Calculator', url: '/schengen-calculator/' },
        ]}
      />
      <ToolPageTemplate
        lang="en"
        content={schengenCalculatorEn}
        categoryName="Travel Tools"
        categorySlug="travel"
        toolNode={<SchengenCalculatorTool lang="en" />}
      />
    </>
  );
}

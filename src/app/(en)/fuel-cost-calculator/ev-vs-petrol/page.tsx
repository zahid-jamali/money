import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { evVsPetrolEn } from '@/content/en/ev-vs-petrol';
import { ToolPageTemplate } from '@/components/ToolPageTemplate';
import { EvVsPetrolTool } from '@/components/tools/EvVsPetrolTool';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata(
  'ev-vs-petrol',
  'en',
  undefined,
  evVsPetrolEn,
);

export default function EvVsPetrolPage() {
  return (
    <>
      <JsonLd
        lang="en"
        pageId="ev-vs-petrol"
        type="tool"
        slug="fuel-cost-calculator/ev-vs-petrol"
        name={evVsPetrolEn.h1}
        description={evVsPetrolEn.metaDescription}
        faqs={evVsPetrolEn.faqs}
        applicationCategory="TravelApplication"
        currency="GBP"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Travel & Transport', url: '/#travel' },
          { name: 'EV vs Petrol Calculator', url: '/fuel-cost-calculator/ev-vs-petrol/' },
        ]}
      />
      <ToolPageTemplate
        lang="en"
        content={evVsPetrolEn}
        categoryName="Travel & Transport"
        categorySlug="travel"
        toolNode={<EvVsPetrolTool />}
      />
    </>
  );
}

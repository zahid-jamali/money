import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { mpgConverterEn } from '@/content/en/mpg-converter';
import { ToolPageTemplate } from '@/components/ToolPageTemplate';
import { MpgConverterTool } from '@/components/tools/MpgConverterTool';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata(
  'mpg-converter',
  'en',
  undefined,
  mpgConverterEn,
);

export default function MpgConverterPage() {
  return (
    <>
      <JsonLd
        lang="en"
        pageId="mpg-converter"
        type="tool"
        slug="mpg-to-litres-per-100km"
        name={mpgConverterEn.h1}
        description={mpgConverterEn.metaDescription}
        faqs={mpgConverterEn.faqs}
        applicationCategory="TravelApplication"
        currency="GBP"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Travel & Transport', url: '/#travel' },
          { name: 'MPG to Litres/100km Converter', url: '/mpg-to-litres-per-100km/' },
        ]}
      />
      <ToolPageTemplate
        lang="en"
        content={mpgConverterEn}
        categoryName="Travel & Transport"
        categorySlug="travel"
        toolNode={<MpgConverterTool />}
      />
    </>
  );
}

import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { blzSucheDe } from '@/content/de/blz-suche';
import { ToolPageTemplate } from '@/components/ToolPageTemplate';
import { BlzSearchTool } from '@/components/tools/BlzSearchTool';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('german-blz-search', 'de', 'de', blzSucheDe);

export default function GermanBlzSuchePage() {
  return (
    <>
      <JsonLd
        lang="de"
        type="tool"
        slug="de/blz-suche"
        name={blzSucheDe.h1}
        description={blzSucheDe.metaDescription}
        faqs={blzSucheDe.faqs}
        applicationCategory="FinanceApplication"
        breadcrumbs={[
          { name: 'Startseite', url: '/de/' },
          { name: 'Banken & Konten', url: '/de/#banking' },
          { name: 'BLZ Suche', url: '/de/blz-suche/' },
        ]}
      />
      <ToolPageTemplate
        lang="de"
        content={blzSucheDe}
        categoryName="Banken & Konten"
        categorySlug="banking"
        toolNode={<BlzSearchTool lang="de" />}
      />
    </>
  );
}

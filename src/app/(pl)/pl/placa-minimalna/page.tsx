import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { contentPlPlacaMinimalna } from '@/content/pl/placa-minimalna';
import { ToolPageTemplate } from '@/components/ToolPageTemplate';
import { PlacaMinimalnaInfoTool } from '@/components/tools/pl';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('placa-minimalna-pl', 'pl', 'pl');

export default function PlacaMinimalnaPlPage() {
  return (
    <>
      <JsonLd
        lang="pl"
        region="pl"
        pageId="placa-minimalna-pl"
        type="tool"
        slug="pl/placa-minimalna"
        name={contentPlPlacaMinimalna.h1}
        description={contentPlPlacaMinimalna.metaDescription}
        faqs={contentPlPlacaMinimalna.faqs}
        applicationCategory="FinanceApplication"
        currency="PLN"
        breadcrumbs={[
          { name: 'Strona główna', url: '/pl/' },
          { name: 'Wynagrodzenia & Podatki', url: '/pl/#salary' },
          { name: 'Płaca Minimalna', url: '/pl/placa-minimalna/' },
        ]}
      />
      <ToolPageTemplate
        lang="pl"
        content={contentPlPlacaMinimalna}
        categoryName="Wynagrodzenia & Podatki"
        categorySlug="salary"
        toolNode={<PlacaMinimalnaInfoTool />}
      />
    </>
  );
}

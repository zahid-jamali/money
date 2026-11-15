import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { contentPlSkladkiZus } from '@/content/pl/skladki-zus';
import { ToolPageTemplate } from '@/components/ToolPageTemplate';
import { SkladkiZusInfoTool } from '@/components/tools/pl';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('skladki-zus-pl', 'pl', 'pl');

export default function SkladkiZusPlPage() {
  return (
    <>
      <JsonLd
        lang="pl"
        region="pl"
        pageId="skladki-zus-pl"
        type="tool"
        slug="pl/skladki-zus"
        name={contentPlSkladkiZus.h1}
        description={contentPlSkladkiZus.metaDescription}
        faqs={contentPlSkladkiZus.faqs}
        applicationCategory="FinanceApplication"
        currency="PLN"
        breadcrumbs={[
          { name: 'Strona główna', url: '/pl/' },
          { name: 'Wynagrodzenia & Podatki', url: '/pl/#salary' },
          { name: 'Składki ZUS', url: '/pl/skladki-zus/' },
        ]}
      />
      <ToolPageTemplate
        lang="pl"
        content={contentPlSkladkiZus}
        categoryName="Wynagrodzenia & Podatki"
        categorySlug="salary"
        toolNode={<SkladkiZusInfoTool />}
      />
    </>
  );
}

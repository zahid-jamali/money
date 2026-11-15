import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { contentPlProgiPodatkowe } from '@/content/pl/progi-podatkowe';
import { ToolPageTemplate } from '@/components/ToolPageTemplate';
import { ProgiPodatkoweInfoTool } from '@/components/tools/pl';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('progi-podatkowe-pl', 'pl', 'pl');

export default function ProgiPodatkowePlPage() {
  return (
    <>
      <JsonLd
        lang="pl"
        region="pl"
        pageId="progi-podatkowe-pl"
        type="tool"
        slug="pl/progi-podatkowe"
        name={contentPlProgiPodatkowe.h1}
        description={contentPlProgiPodatkowe.metaDescription}
        faqs={contentPlProgiPodatkowe.faqs}
        applicationCategory="FinanceApplication"
        currency="PLN"
        breadcrumbs={[
          { name: 'Strona główna', url: '/pl/' },
          { name: 'Wynagrodzenia & Podatki', url: '/pl/#salary' },
          { name: 'Progi Podatkowe', url: '/pl/progi-podatkowe/' },
        ]}
      />
      <ToolPageTemplate
        lang="pl"
        content={contentPlProgiPodatkowe}
        categoryName="Wynagrodzenia & Podatki"
        categorySlug="salary"
        toolNode={<ProgiPodatkoweInfoTool />}
      />
    </>
  );
}

import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { guideStromverbrauchSenkenDe } from '@/content/de/ratgeber/stromverbrauch-senken';
import { GuidePageTemplate } from '@/components/GuidePageTemplate';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('guide-de-stromverbrauch-senken', 'de', 'de', {
  metaTitle: guideStromverbrauchSenkenDe.metaTitle,
  metaDescription: guideStromverbrauchSenkenDe.metaDescription,
});

export default function GermanStromverbrauchSenkenGuidePage() {
  return (
    <>
      <JsonLd
        lang="de"
        region="de"
        type="guide"
        pageId="guide-de-stromverbrauch-senken"
        slug="de/ratgeber/stromverbrauch-senken"
        title={guideStromverbrauchSenkenDe.h1}
        description={guideStromverbrauchSenkenDe.metaDescription}
        faqs={guideStromverbrauchSenkenDe.faqs}
        category="home-energy"
        breadcrumbs={[
          { name: 'Startseite', url: '/de/' },
          { name: 'Ratgeber', url: '/de/#home-energy' },
          { name: 'Stromverbrauch senken', url: '/de/ratgeber/stromverbrauch-senken/' },
        ]}
      />
      <GuidePageTemplate
        lang="de"
        content={guideStromverbrauchSenkenDe}
        categoryName="Ratgeber Energie & Haushalt"
        categorySlug="home-energy"
      />
    </>
  );
}

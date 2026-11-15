import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { guideDeIbanAufbau } from '@/content/de/ratgeber/iban-aufbau';
import { GuidePageTemplate } from '@/components/GuidePageTemplate';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('guide-de-iban-structure', 'de');

export default function IbanAufbauGuidePage() {
  return (
    <>
      <JsonLd
        lang="de"
        type="guide"
        pageId="guide-de-iban-structure"
        slug="de/ratgeber/iban-aufbau"
        title={guideDeIbanAufbau.h1}
        description={guideDeIbanAufbau.metaDescription}
        faqs={guideDeIbanAufbau.faqs}
        category="banking"
        breadcrumbs={[
          { name: 'Startseite', url: '/de/' },
          { name: 'Banken-Ratgeber', url: '/de/#banking' },
          { name: 'IBAN Aufbau', url: '/de/ratgeber/iban-aufbau/' },
        ]}
      />
      <GuidePageTemplate
        lang="de"
        content={guideDeIbanAufbau}
        categoryName="Banken-Ratgeber"
        categorySlug="banking"
      />
    </>
  );
}

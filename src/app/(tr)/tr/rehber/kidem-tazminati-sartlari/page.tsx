import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { guideTrKidemTazminatiSartlari } from '@/content/tr/rehber/kidem-tazminati-sartlari';
import { GuidePageTemplate } from '@/components/GuidePageTemplate';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('guide-tr-kidem-tazminati-sartlari', 'tr', 'tr');

export default function KidemTazminatiSartlariPage() {
  return (
    <>
      <JsonLd
        lang="tr"
        region="tr"
        type="guide"
        pageId="guide-tr-kidem-tazminati-sartlari"
        slug="tr/rehber/kidem-tazminati-sartlari"
        title={guideTrKidemTazminatiSartlari.h1}
        description={guideTrKidemTazminatiSartlari.metaDescription}
        faqs={guideTrKidemTazminatiSartlari.faqs}
        category="salary"
        breadcrumbs={[
          { name: 'Ana Sayfa', url: '/tr/' },
          { name: 'Maaş & Vergi', url: '/tr/#salary' },
          { name: 'Kıdem Tazminatı Alma Şartları', url: '/tr/rehber/kidem-tazminati-sartlari/' },
        ]}
      />
      <GuidePageTemplate
        lang="tr"
        content={guideTrKidemTazminatiSartlari}
        categoryName="Maaş Rehberleri"
        categorySlug="salary"
      />
    </>
  );
}

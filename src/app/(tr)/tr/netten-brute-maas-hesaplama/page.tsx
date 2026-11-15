import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { nettenBruteMaasTr } from '@/content/tr/netten-brute-maas';
import { ToolPageTemplate } from '@/components/ToolPageTemplate';
import { NettenBruteMaasTool } from '@/components/tools/tr/NettenBruteMaasTool';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('netten-brute-maas-hesaplama', 'tr', 'tr');

export default function NettenBruteMaasHesaplamaPage() {
  return (
    <>
      <JsonLd
        lang="tr"
        region="tr"
        pageId="netten-brute-maas-hesaplama"
        type="tool"
        slug="tr/netten-brute-maas-hesaplama"
        name={nettenBruteMaasTr.h1}
        description={nettenBruteMaasTr.metaDescription}
        faqs={nettenBruteMaasTr.faqs}
        applicationCategory="FinanceApplication"
        currency="TRY"
        breadcrumbs={[
          { name: 'Ana Sayfa', url: '/tr/' },
          { name: 'Maaş & Vergi', url: '/tr/#salary' },
          { name: 'Netten Brüte Maaş Hesaplama', url: '/tr/netten-brute-maas-hesaplama/' },
        ]}
      />
      <ToolPageTemplate
        lang="tr"
        content={nettenBruteMaasTr}
        categoryName="Maaş & Vergi"
        categorySlug="salary"
        toolNode={<NettenBruteMaasTool />}
      />
    </>
  );
}

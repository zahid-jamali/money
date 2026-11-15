import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { bruttenNeteMaasTr } from '@/content/tr/brutten-nete-maas';
import { ToolPageTemplate } from '@/components/ToolPageTemplate';
import { BruttenNeteMaasTool } from '@/components/tools/tr/BruttenNeteMaasTool';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('brutten-nete-maas-hesaplama', 'tr', 'tr');

export default function BruttenNeteMaasHesaplamaPage() {
  return (
    <>
      <JsonLd
        lang="tr"
        region="tr"
        pageId="brutten-nete-maas-hesaplama"
        type="tool"
        slug="tr/brutten-nete-maas-hesaplama"
        name={bruttenNeteMaasTr.h1}
        description={bruttenNeteMaasTr.metaDescription}
        faqs={bruttenNeteMaasTr.faqs}
        applicationCategory="FinanceApplication"
        currency="TRY"
        breadcrumbs={[
          { name: 'Ana Sayfa', url: '/tr/' },
          { name: 'Maaş & Vergi', url: '/tr/#salary' },
          { name: 'Brütten Nete Maaş Hesaplama', url: '/tr/brutten-nete-maas-hesaplama/' },
        ]}
      />
      <ToolPageTemplate
        lang="tr"
        content={bruttenNeteMaasTr}
        categoryName="Maaş & Vergi"
        categorySlug="salary"
        toolNode={<BruttenNeteMaasTool />}
      />
    </>
  );
}

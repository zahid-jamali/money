import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { schengenGunHesaplamaTr } from '@/content/tr/schengen-gun-hesaplama';
import { ToolPageTemplate } from '@/components/ToolPageTemplate';
import { SchengenCalculatorTool } from '@/components/tools/SchengenCalculatorTool';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata(
  'schengen-calculator',
  'tr',
  'tr',
  schengenGunHesaplamaTr,
);

export default function SchengenGunHesaplamaPageTr() {
  return (
    <>
      <JsonLd
        lang="tr"
        region="tr"
        type="tool"
        pageId="schengen-calculator"
        slug="tr/schengen-gun-hesaplama"
        name={schengenGunHesaplamaTr.h1}
        description={schengenGunHesaplamaTr.metaDescription}
        faqs={schengenGunHesaplamaTr.faqs}
        applicationCategory="TravelApplication"
        breadcrumbs={[
          { name: 'Ana Sayfa', url: '/tr/' },
          { name: 'Seyahat Araçları', url: '/tr/#travel' },
          { name: 'Schengen Vize Gün Hesaplama', url: '/tr/schengen-gun-hesaplama/' },
        ]}
      />
      <ToolPageTemplate
        lang="tr"
        content={schengenGunHesaplamaTr}
        categoryName="Seyahat Araçları"
        categorySlug="travel"
        toolNode={<SchengenCalculatorTool lang="tr" />}
      />
    </>
  );
}

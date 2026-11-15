import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { kdvHesaplamaTr } from '@/content/tr/kdv-hesaplama';
import { ToolPageTemplate } from '@/components/ToolPageTemplate';
import { TurkishKdvCalculatorTool } from '@/components/tools/TurkishKdvCalculatorTool';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('kdv-hesaplama-tr', 'tr', 'tr');

export default function KdvHesaplamaPage() {
  return (
    <>
      <JsonLd
        lang="tr"
        region="tr"
        pageId="kdv-hesaplama-tr"
        type="tool"
        slug="tr/kdv-hesaplama"
        name={kdvHesaplamaTr.h1}
        description={kdvHesaplamaTr.metaDescription}
        faqs={kdvHesaplamaTr.faqs}
        applicationCategory="FinanceApplication"
        currency="TRY"
        breadcrumbs={[
          { name: 'Ana Sayfa', url: '/tr/' },
          { name: 'Vergi & KDV', url: '/tr/#tax-vat' },
          { name: 'KDV Hesaplama', url: '/tr/kdv-hesaplama/' },
        ]}
      />
      <ToolPageTemplate
        lang="tr"
        content={kdvHesaplamaTr}
        categoryName="Vergi & KDV"
        categorySlug="tax-vat"
        toolNode={<TurkishKdvCalculatorTool />}
      />
    </>
  );
}

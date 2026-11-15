import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { ibanCheckerTr } from '@/content/tr/iban-checker';
import { ToolPageTemplate } from '@/components/ToolPageTemplate';
import { IbanCheckerTool } from '@/components/tools/IbanCheckerTool';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('iban-checker', 'tr', undefined, ibanCheckerTr);

export default function IbanDogrulamaPage() {
  return (
    <>
      <JsonLd
        lang="tr"
        type="tool"
        slug="tr/iban-dogrulama"
        name={ibanCheckerTr.h1}
        description={ibanCheckerTr.metaDescription}
        faqs={ibanCheckerTr.faqs}
        applicationCategory="FinanceApplication"
        breadcrumbs={[
          { name: 'Ana Sayfa', url: '/tr/' },
          { name: 'Bankacılık', url: '/tr/#banking' },
          { name: ibanCheckerTr.h1, url: '/tr/iban-dogrulama/' },
        ]}
      />
      <ToolPageTemplate
        lang="tr"
        content={ibanCheckerTr}
        categoryName="Bankacılık"
        categorySlug="banking"
        toolNode={<IbanCheckerTool lang="tr" />}
      />
    </>
  );
}

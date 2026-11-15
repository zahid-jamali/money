import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { ibanCheckerIt } from '@/content/it/iban-checker';
import { ToolPageTemplate } from '@/components/ToolPageTemplate';
import { IbanCheckerTool } from '@/components/tools/IbanCheckerTool';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('iban-checker', 'it', undefined, ibanCheckerIt);

export default function VerificaIbanPage() {
  return (
    <>
      <JsonLd
        lang="it"
        type="tool"
        slug="it/verifica-iban"
        name={ibanCheckerIt.h1}
        description={ibanCheckerIt.metaDescription}
        faqs={ibanCheckerIt.faqs}
        applicationCategory="FinanceApplication"
        breadcrumbs={[
          { name: 'Home', url: '/it/' },
          { name: 'Banche e Conti', url: '/it/#banking' },
          { name: ibanCheckerIt.h1, url: '/it/verifica-iban/' },
        ]}
      />
      <ToolPageTemplate
        lang="it"
        content={ibanCheckerIt}
        categoryName="Banche e Conti"
        categorySlug="banking"
        toolNode={<IbanCheckerTool lang="it" />}
      />
    </>
  );
}

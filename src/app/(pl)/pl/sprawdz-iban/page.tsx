import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { ibanCheckerPl } from '@/content/pl/iban-checker';
import { ToolPageTemplate } from '@/components/ToolPageTemplate';
import { IbanCheckerTool } from '@/components/tools/IbanCheckerTool';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('iban-checker', 'pl', undefined, ibanCheckerPl);

export default function SprawdzIbanPage() {
  return (
    <>
      <JsonLd
        lang="pl"
        type="tool"
        slug="pl/sprawdz-iban"
        name={ibanCheckerPl.h1}
        description={ibanCheckerPl.metaDescription}
        faqs={ibanCheckerPl.faqs}
        applicationCategory="FinanceApplication"
        breadcrumbs={[
          { name: 'Strona główna', url: '/pl/' },
          { name: 'Bankowość', url: '/pl/#banking' },
          { name: ibanCheckerPl.h1, url: '/pl/sprawdz-iban/' },
        ]}
      />
      <ToolPageTemplate
        lang="pl"
        content={ibanCheckerPl}
        categoryName="Bankowość"
        categorySlug="banking"
        toolNode={<IbanCheckerTool lang="pl" />}
      />
    </>
  );
}

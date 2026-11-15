import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { ibanCheckerNl } from '@/content/nl/iban-checker';
import { ToolPageTemplate } from '@/components/ToolPageTemplate';
import { IbanCheckerTool } from '@/components/tools/IbanCheckerTool';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('iban-checker', 'nl', undefined, ibanCheckerNl);

export default function IbanControlerenPage() {
  return (
    <>
      <JsonLd
        lang="nl"
        type="tool"
        slug="nl/iban-controleren"
        name={ibanCheckerNl.h1}
        description={ibanCheckerNl.metaDescription}
        faqs={ibanCheckerNl.faqs}
        applicationCategory="FinanceApplication"
        breadcrumbs={[
          { name: 'Home', url: '/nl/' },
          { name: 'Bankieren', url: '/nl/#banking' },
          { name: ibanCheckerNl.h1, url: '/nl/iban-controleren/' },
        ]}
      />
      <ToolPageTemplate
        lang="nl"
        content={ibanCheckerNl}
        categoryName="Bankieren"
        categorySlug="banking"
        toolNode={<IbanCheckerTool lang="nl" />}
      />
    </>
  );
}

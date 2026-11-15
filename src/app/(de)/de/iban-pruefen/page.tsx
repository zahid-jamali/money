import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { ibanCheckerDe } from '@/content/de/iban-checker';
import { ToolPageTemplate } from '@/components/ToolPageTemplate';
import { IbanCheckerTool } from '@/components/tools/IbanCheckerTool';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('iban-checker', 'de', 'de', ibanCheckerDe);

export default function IbanPruefenPage() {
  return (
    <>
      <JsonLd
        lang="de"
        type="tool"
        slug="de/iban-pruefen"
        name={ibanCheckerDe.h1}
        description={ibanCheckerDe.metaDescription}
        faqs={ibanCheckerDe.faqs}
        applicationCategory="FinanceApplication"
        breadcrumbs={[
          { name: 'Startseite', url: '/de/' },
          { name: 'Banken & Konten', url: '/de/#banking' },
          { name: ibanCheckerDe.h1, url: '/de/iban-pruefen/' },
        ]}
      />
      <ToolPageTemplate
        lang="de"
        content={ibanCheckerDe}
        categoryName="Banken & Konten"
        categorySlug="banking"
        toolNode={<IbanCheckerTool lang="de" />}
      />
    </>
  );
}

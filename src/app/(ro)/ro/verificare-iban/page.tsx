import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { ibanCheckerRo } from '@/content/ro/iban-checker';
import { ToolPageTemplate } from '@/components/ToolPageTemplate';
import { IbanCheckerTool } from '@/components/tools/IbanCheckerTool';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('iban-checker', 'ro', undefined, ibanCheckerRo);

export default function VerificareIbanPage() {
  return (
    <>
      <JsonLd
        lang="ro"
        type="tool"
        slug="ro/verificare-iban"
        name={ibanCheckerRo.h1}
        description={ibanCheckerRo.metaDescription}
        faqs={ibanCheckerRo.faqs}
        applicationCategory="FinanceApplication"
        breadcrumbs={[
          { name: 'Acasă', url: '/ro/' },
          { name: 'Bănci & Conturi', url: '/ro/#banking' },
          { name: ibanCheckerRo.h1, url: '/ro/verificare-iban/' },
        ]}
      />
      <ToolPageTemplate
        lang="ro"
        content={ibanCheckerRo}
        categoryName="Bănci & Conturi"
        categorySlug="banking"
        toolNode={<IbanCheckerTool lang="ro" />}
      />
    </>
  );
}

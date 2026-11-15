import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { ibanCheckerEs } from '@/content/es/iban-checker';
import { ToolPageTemplate } from '@/components/ToolPageTemplate';
import { IbanCheckerTool } from '@/components/tools/IbanCheckerTool';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('iban-checker', 'es', undefined, ibanCheckerEs);

export default function ValidarIbanPage() {
  return (
    <>
      <JsonLd
        lang="es"
        type="tool"
        slug="es/validar-iban"
        name={ibanCheckerEs.h1}
        description={ibanCheckerEs.metaDescription}
        faqs={ibanCheckerEs.faqs}
        applicationCategory="FinanceApplication"
        breadcrumbs={[
          { name: 'Inicio', url: '/es/' },
          { name: 'Banca', url: '/es/#banking' },
          { name: ibanCheckerEs.h1, url: '/es/validar-iban/' },
        ]}
      />
      <ToolPageTemplate
        lang="es"
        content={ibanCheckerEs}
        categoryName="Banca"
        categorySlug="banking"
        toolNode={<IbanCheckerTool lang="es" />}
      />
    </>
  );
}

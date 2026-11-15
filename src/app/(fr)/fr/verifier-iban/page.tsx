import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { ibanCheckerFr } from '@/content/fr/iban-checker';
import { ToolPageTemplate } from '@/components/ToolPageTemplate';
import { IbanCheckerTool } from '@/components/tools/IbanCheckerTool';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('iban-checker', 'fr', undefined, ibanCheckerFr);

export default function VerifierIbanPage() {
  return (
    <>
      <JsonLd
        lang="fr"
        type="tool"
        slug="fr/verifier-iban"
        name={ibanCheckerFr.h1}
        description={ibanCheckerFr.metaDescription}
        faqs={ibanCheckerFr.faqs}
        applicationCategory="FinanceApplication"
        breadcrumbs={[
          { name: 'Accueil', url: '/fr/' },
          { name: 'Banque', url: '/fr/#banking' },
          { name: ibanCheckerFr.h1, url: '/fr/verifier-iban/' },
        ]}
      />
      <ToolPageTemplate
        lang="fr"
        content={ibanCheckerFr}
        categoryName="Banque"
        categorySlug="banking"
        toolNode={<IbanCheckerTool lang="fr" />}
      />
    </>
  );
}

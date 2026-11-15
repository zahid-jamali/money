import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { mwstRechnerDe } from '@/content/de/mwst-rechner';
import { ToolPageTemplate } from '@/components/ToolPageTemplate';
import { GermanMwstCalculatorTool } from '@/components/tools/GermanMwstCalculatorTool';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('vat-calculator', 'de', 'de');

export default function MwstRechnerPage() {
  return (
    <>
      <JsonLd
        lang="de"
        type="tool"
        pageId="vat-calculator"
        region="de"
        slug="de/mwst-rechner"
        name={mwstRechnerDe.h1}
        description={mwstRechnerDe.metaDescription}
        faqs={mwstRechnerDe.faqs}
        applicationCategory="FinanceApplication"
        currency="EUR"
        breadcrumbs={[
          { name: 'Startseite', url: '/de/' },
          { name: 'Steuern & MwSt.', url: '/de/#tax-vat' },
          { name: 'MwSt-Rechner', url: '/de/mwst-rechner/' },
        ]}
      />
      <ToolPageTemplate
        lang="de"
        content={mwstRechnerDe}
        categoryName="Steuern & MwSt."
        categorySlug="tax-vat"
        toolNode={<GermanMwstCalculatorTool />}
      />
    </>
  );
}

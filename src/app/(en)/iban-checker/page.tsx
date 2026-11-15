import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { ibanCheckerEn } from '@/content/en/iban-checker';
import { ToolPageTemplate } from '@/components/ToolPageTemplate';
import { IbanCheckerTool } from '@/components/tools/IbanCheckerTool';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('iban-checker', 'en', undefined, ibanCheckerEn);

export default function IbanCheckerPage() {
  return (
    <>
      <JsonLd
        lang="en"
        type="tool"
        slug="iban-checker"
        name={ibanCheckerEn.h1}
        description={ibanCheckerEn.metaDescription}
        faqs={ibanCheckerEn.faqs}
        applicationCategory="FinanceApplication"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Banking', url: '/#banking' },
          { name: ibanCheckerEn.h1, url: '/iban-checker/' },
        ]}
      />
      <ToolPageTemplate
        lang="en"
        content={ibanCheckerEn}
        categoryName="Banking"
        categorySlug="banking"
        toolNode={<IbanCheckerTool lang="en" />}
      />
    </>
  );
}

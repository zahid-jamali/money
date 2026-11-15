import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { bicCheckerEn } from '@/content/en/bic-checker';
import { ToolPageTemplate } from '@/components/ToolPageTemplate';
import { BicCheckerTool } from '@/components/tools/BicCheckerTool';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('bic-checker', 'en', undefined, bicCheckerEn);

export default function BicSwiftCheckerPageEn() {
  return (
    <>
      <JsonLd
        lang="en"
        type="tool"
        slug="bic-swift-checker"
        name={bicCheckerEn.h1}
        description={bicCheckerEn.metaDescription}
        faqs={bicCheckerEn.faqs}
        applicationCategory="FinanceApplication"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Banking', url: '/#banking' },
          { name: 'BIC / SWIFT Checker', url: '/bic-swift-checker/' },
        ]}
      />
      <ToolPageTemplate
        lang="en"
        content={bicCheckerEn}
        categoryName="Banking"
        categorySlug="banking"
        toolNode={<BicCheckerTool lang="en" />}
      />
    </>
  );
}

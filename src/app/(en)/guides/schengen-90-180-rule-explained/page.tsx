import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { guideSchengenRuleExplainedEn } from '@/content/en/guides/schengen-90-180-rule-explained';
import { GuidePageTemplate } from '@/components/GuidePageTemplate';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = buildMetadata('guide-schengen-rule-explained', 'en');

export default function Schengen90180RuleExplainedPage() {
  return (
    <>
      <JsonLd
        lang="en"
        type="guide"
        pageId="guide-schengen-rule-explained"
        slug="guides/schengen-90-180-rule-explained"
        title={guideSchengenRuleExplainedEn.h1}
        description={guideSchengenRuleExplainedEn.metaDescription}
        faqs={guideSchengenRuleExplainedEn.faqs}
        category="travel"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Travel Guides', url: '/#travel' },
          { name: 'Schengen 90/180 Rule Explained', url: '/guides/schengen-90-180-rule-explained/' },
        ]}
      />
      <GuidePageTemplate
        lang="en"
        content={guideSchengenRuleExplainedEn}
        categoryName="Travel Guides"
        categorySlug="travel"
      />
    </>
  );
}

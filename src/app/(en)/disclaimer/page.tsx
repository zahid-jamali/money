import React from 'react';
import { DisclaimerTemplate } from '@/components/DisclaimerTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('disclaimer', 'en', undefined, {
  metaTitle: 'Financial & Legal Disclaimer — Zetawala Money',
  metaDescription:
    'Important financial, tax, and legal disclaimer: calculations are for informational purposes and do not constitute professional advice.',
});

export default function DisclaimerPage() {
  return <DisclaimerTemplate lang="en" />;
}

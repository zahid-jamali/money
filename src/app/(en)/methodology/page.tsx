import React from 'react';
import { MethodologyTemplate } from '@/components/MethodologyTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('methodology', 'en', undefined, {
  metaTitle: 'Calculation Methodology & Official Verification Ledger',
  metaDescription:
    'Complete mathematical formulas, statutory legal sources, and valid-from dates for all Zetawala Money calculators. 100% verified against primary sources.',
});

export default function MethodologyPage() {
  return <MethodologyTemplate lang="en" />;
}

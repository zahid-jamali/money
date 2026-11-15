import React from 'react';
import { MethodologyTemplate } from '@/components/MethodologyTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('methodology', 'ro', undefined, {
  metaTitle: 'Metodologia de Calcul și Registrul Surselor Legale',
  metaDescription:
    'Formulele matematice, prevederile Codului Fiscal și actele normative utilizate de calculatoarele salariale și fiscale din România.',
});

export default function RomanianMethodologyPage() {
  return <MethodologyTemplate lang="ro" />;
}

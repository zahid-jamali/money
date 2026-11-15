import React from 'react';
import { TermsTemplate } from '@/components/TermsTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('terms', 'ro', undefined, {
  metaTitle: 'Termeni și Condiții de Utilizare | Zetawala Money',
  metaDescription:
    'Condițiile legale de accesare și utilizare a calculatoarelor gratuite de salarii și instrumentelor financiare Zetawala Money.',
});

export default function RomanianTermsPage() {
  return <TermsTemplate lang="ro" />;
}

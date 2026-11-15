import React from 'react';
import { TermsTemplate } from '@/components/TermsTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('terms', 'it', undefined, {
  metaTitle: 'Termini e Condizioni | Zetawala Money',
  metaDescription: 'Termini e condizioni d’uso dei calcolatori gratuiti di Zetawala Money.',
});

export default function ItalianTermsPage() {
  return <TermsTemplate lang="it" />;
}

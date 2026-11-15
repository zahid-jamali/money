import React from 'react';
import { TermsTemplate } from '@/components/TermsTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('terms', 'nl', undefined, {
  metaTitle: 'Algemene Voorwaarden | Zetawala Money',
  metaDescription: 'Algemene voorwaarden voor het gebruik van de gratis online tools van Zetawala Money.',
});

export default function DutchTermsPage() {
  return <TermsTemplate lang="nl" />;
}

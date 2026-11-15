import React from 'react';
import { AboutPageTemplate } from '@/components/AboutPageTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('about', 'nl', undefined, {
  metaTitle: 'Over Zetawala Money | Gratis Financiële Tools',
  metaDescription:
    'Lees meer over Zetawala Money: betrouwbare, gratis rekenhulpen en IBAN-controle voor Nederland en Europa zonder gegevensopslag.',
});

export default function DutchAboutPage() {
  return <AboutPageTemplate lang="nl" />;
}

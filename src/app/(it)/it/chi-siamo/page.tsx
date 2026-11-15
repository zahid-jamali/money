import React from 'react';
import { AboutPageTemplate } from '@/components/AboutPageTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('about', 'it', undefined, {
  metaTitle: 'Chi Siamo | Zetawala Money Calcolatori Finanziari',
  metaDescription:
    'Scoprite Zetawala Money: strumenti di verifica bancaria e calcolo finanziario gratuiti e sicuri per l’Italia e l’Europa.',
});

export default function ItalianAboutPage() {
  return <AboutPageTemplate lang="it" />;
}

import React from 'react';
import { AboutPageTemplate } from '@/components/AboutPageTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('about', 'pl', undefined, {
  metaTitle: 'O nas — Misja, Prywatność i Standardy Zetawala Money',
  metaDescription:
    'Dowiedz się więcej o serwisie Zetawala Money: bezpłatne kalkulatory płac i podatków, niezależność, prywatność i weryfikacja z ustawami Dz.U.',
});

export default function PolishAboutPage() {
  return <AboutPageTemplate lang="pl" />;
}

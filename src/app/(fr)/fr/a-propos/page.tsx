import React from 'react';
import { AboutPageTemplate } from '@/components/AboutPageTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('about', 'fr', undefined, {
  metaTitle: 'À Propos de Zetawala Money | Calculateurs Gratuits',
  metaDescription:
    'Découvrez Zetawala Money : des outils financiers et bancaires fiables, gratuits et confidentiels conçus pour la France et l’Europe.',
});

export default function FrenchAboutPage() {
  return <AboutPageTemplate lang="fr" />;
}

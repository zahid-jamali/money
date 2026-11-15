import React from 'react';
import { TermsTemplate } from '@/components/TermsTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('terms', 'fr', undefined, {
  metaTitle: 'Conditions d’Utilisation | Zetawala Money',
  metaDescription: 'Conditions d’utilisation des calculateurs gratuits de Zetawala Money.',
});

export default function FrenchTermsPage() {
  return <TermsTemplate lang="fr" />;
}

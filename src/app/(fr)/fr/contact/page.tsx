import React from 'react';
import { ContactPageTemplate } from '@/components/ContactPageTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('contact', 'fr', undefined, {
  metaTitle: 'Contactez-nous | Zetawala Money',
  metaDescription: 'Contactez l’équipe de Zetawala Money pour toute question ou retour.',
});

export default function FrenchContactPage() {
  return <ContactPageTemplate lang="fr" />;
}

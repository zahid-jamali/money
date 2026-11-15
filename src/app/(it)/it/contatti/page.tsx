import React from 'react';
import { ContactPageTemplate } from '@/components/ContactPageTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('contact', 'it', undefined, {
  metaTitle: 'Contatti | Zetawala Money',
  metaDescription: 'Contattate il team di Zetawala Money per qualsiasi informazione o segnalazione.',
});

export default function ItalianContactPage() {
  return <ContactPageTemplate lang="it" />;
}

import React from 'react';
import { ContactPageTemplate } from '@/components/ContactPageTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('contact', 'nl', undefined, {
  metaTitle: 'Contact | Zetawala Money',
  metaDescription: 'Neem contact op met het team van Zetawala Money voor vragen of feedback.',
});

export default function DutchContactPage() {
  return <ContactPageTemplate lang="nl" />;
}

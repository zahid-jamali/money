import React from 'react';
import { ContactPageTemplate } from '@/components/ContactPageTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('contact', 'ro', undefined, {
  metaTitle: 'Contact — Suport și Raportare Erori | Zetawala Money',
  metaDescription:
    'Contactați echipa Zetawala Money pentru întrebări, sugestii sau transmiterea de actualizări legislative din România.',
});

export default function RomanianContactPage() {
  return <ContactPageTemplate lang="ro" />;
}

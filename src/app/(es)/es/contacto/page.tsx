import React from 'react';
import { ContactPageTemplate } from '@/components/ContactPageTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('contact', 'es', undefined, {
  metaTitle: 'Contacto | Zetawala Money',
  metaDescription: 'Póngase en contacto con el equipo de Zetawala Money para dudas o sugerencias.',
});

export default function SpanishContactPage() {
  return <ContactPageTemplate lang="es" />;
}

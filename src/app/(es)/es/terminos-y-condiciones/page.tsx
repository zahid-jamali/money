import React from 'react';
import { TermsTemplate } from '@/components/TermsTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('terms', 'es', undefined, {
  metaTitle: 'Términos y Condiciones | Zetawala Money',
  metaDescription: 'Términos y condiciones de uso de las calculadoras gratuitas de Zetawala Money.',
});

export default function SpanishTermsPage() {
  return <TermsTemplate lang="es" />;
}

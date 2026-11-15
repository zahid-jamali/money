import React from 'react';
import { ContactPageTemplate } from '@/components/ContactPageTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('contact', 'pl', undefined, {
  metaTitle: 'Kontakt — Zgłoś Uwagi lub Błąd | Zetawala Money',
  metaDescription:
    'Skontaktuj się z zespołem Zetawala Money w sprawie pytań, sugestii lub aktualizacji przepisów prawnych.',
});

export default function PolishContactPage() {
  return <ContactPageTemplate lang="pl" />;
}

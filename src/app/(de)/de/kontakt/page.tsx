import React from 'react';
import { ContactPageTemplate } from '@/components/ContactPageTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('contact', 'de', undefined, {
  metaTitle: 'Kontakt — Anfragen & Fehler melden | Zetawala Money',
  metaDescription:
    'Treten Sie mit dem Redaktions- und Entwicklerteam von Zetawala Money für Fragen, Feedback und Korrekturen in Kontakt.',
});

export default function GermanContactPage() {
  return <ContactPageTemplate lang="de" />;
}

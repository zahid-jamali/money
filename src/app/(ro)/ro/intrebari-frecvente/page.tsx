import React from 'react';
import { FaqHubTemplate } from '@/components/FaqHubTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('faq', 'ro', undefined, {
  metaTitle: 'Întrebări Frecvente: Salariu 2026, PFA vs SRL, Cod Fiscal și TVA',
  metaDescription:
    'Răspunsuri la peste 30 de întrebări despre salariul minim de 4.050 lei, deducerea personală, CAS, CASS, dividende și Declarația Unică.',
});

export default function RomanianFaqHubPage() {
  return <FaqHubTemplate lang="ro" />;
}

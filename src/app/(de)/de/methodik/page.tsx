import React from 'react';
import { MethodologyTemplate } from '@/components/MethodologyTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('methodology', 'de', undefined, {
  metaTitle: 'Berechnungsmethodik & Quellenverzeichnis 2026',
  metaDescription:
    'Offizielle Formeln, Gesetzesquellen (UStG, Bundesbank) und Gültigkeitszeiträume aller Zetawala Money Rechner im transparenten Verzeichnis.',
});

export default function GermanMethodologyPage() {
  return <MethodologyTemplate lang="de" />;
}

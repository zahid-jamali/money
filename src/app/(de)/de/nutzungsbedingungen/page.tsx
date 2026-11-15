import React from 'react';
import { TermsTemplate } from '@/components/TermsTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('terms', 'de', undefined, {
  metaTitle: 'Nutzungsbedingungen | Zetawala Money Deutschland',
  metaDescription:
    'Nutzungsbedingungen für die kostenlose Nutzung der Online-Rechner und Ratgeber von Zetawala Money.',
});

export default function GermanTermsPage() {
  return <TermsTemplate lang="de" />;
}

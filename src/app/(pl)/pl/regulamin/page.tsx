import React from 'react';
import { TermsTemplate } from '@/components/TermsTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('terms', 'pl', undefined, {
  metaTitle: 'Regulamin Serwisu | Zetawala Money Polska',
  metaDescription:
    'Zasady korzystania z bezpłatnych kalkulatorów płacowych i narzędzi internetowych w serwisie Zetawala Money.',
});

export default function PolishTermsPage() {
  return <TermsTemplate lang="pl" />;
}

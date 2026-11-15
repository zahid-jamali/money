import React from 'react';
import { DisclaimerTemplate } from '@/components/DisclaimerTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('disclaimer', 'pl', undefined, {
  metaTitle: 'Zastrzeżenia Prawne i Podatkowe | Zetawala Money',
  metaDescription:
    'Ważna informacja: wyniki kalkulatorów mają charakter poglądowy i nie stanowią wiążącej porady doradcy podatkowego.',
});

export default function PolishDisclaimerPage() {
  return <DisclaimerTemplate lang="pl" />;
}

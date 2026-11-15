import React from 'react';
import { FaqHubTemplate } from '@/components/FaqHubTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('faq', 'pl', undefined, {
  metaTitle: 'FAQ Finansowe: Wynagrodzenia, ZUS, PIT, B2B i VAT w Polsce',
  metaDescription:
    'Odpowiedzi na ponad 30 pytań o płacę minimalną 4666 zł, kalkulator brutto netto, składki ZUS, podatki B2B i weryfikację IBAN.',
});

export default function PolishFaqHubPage() {
  return <FaqHubTemplate lang="pl" />;
}

import React from 'react';
import { PrivacyPolicyTemplate } from '@/components/PrivacyPolicyTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('privacy-policy', 'pl', undefined, {
  metaTitle: 'Polityka Prywatności | Zetawala Money Polska',
  metaDescription:
    'Zasady przetwarzania danych osobowych zgodnie z RODO, wykorzystanie plików cookies Google AdSense i brak zapisu danych na serwerze.',
});

export default function PolishPrivacyPage() {
  return <PrivacyPolicyTemplate lang="pl" />;
}

import React from 'react';
import { PrivacyPolicyTemplate } from '@/components/PrivacyPolicyTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('privacy-policy', 'it', undefined, {
  metaTitle: 'Informativa sulla Privacy | Zetawala Money',
  metaDescription: 'Tutela dei dati personali conforme al GDPR e calcoli eseguiti solo localmente nel browser.',
});

export default function ItalianPrivacyPage() {
  return <PrivacyPolicyTemplate lang="it" />;
}

import React from 'react';
import { PrivacyPolicyTemplate } from '@/components/PrivacyPolicyTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('privacy-policy', 'nl', undefined, {
  metaTitle: 'Privacybeleid | Zetawala Money',
  metaDescription: 'Gegevensbescherming conform de AVG/GDPR en lokale berekeningen zonder serveropslag.',
});

export default function DutchPrivacyPage() {
  return <PrivacyPolicyTemplate lang="nl" />;
}

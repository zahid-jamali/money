import React from 'react';
import { PrivacyPolicyTemplate } from '@/components/PrivacyPolicyTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('privacy-policy', 'ro', undefined, {
  metaTitle: 'Politica de Confidențialitate | Zetawala Money România',
  metaDescription:
    'Protecția datelor conform GDPR, utilizarea modulelor cookie Google AdSense și rularea calculelor exclusiv pe dispozitivul dumneavoastră.',
});

export default function RomanianPrivacyPage() {
  return <PrivacyPolicyTemplate lang="ro" />;
}

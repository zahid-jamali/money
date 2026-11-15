import React from 'react';
import { PrivacyPolicyTemplate } from '@/components/PrivacyPolicyTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('privacy-policy', 'de', undefined, {
  metaTitle: 'Datenschutzerklärung | Zetawala Money Deutschland',
  metaDescription:
    'Informationen zum Datenschutz nach DSGVO, Verwendung von Google AdSense Cookies und rein lokaler Ausführung der Berechnungen.',
});

export default function GermanPrivacyPage() {
  return <PrivacyPolicyTemplate lang="de" />;
}

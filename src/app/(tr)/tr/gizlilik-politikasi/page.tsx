import React from 'react';
import { PrivacyPolicyTemplate } from '@/components/PrivacyPolicyTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('privacy-policy', 'tr', undefined, {
  metaTitle: 'Gizlilik Politikası ve KVKK Metni | Zetawala Money',
  metaDescription:
    'KVKK ve GDPR uyumlu gizlilik ilkelerimiz, Google AdSense çerezleri ve hesaplamaların tarayıcıda yerel çalışma prensipleri.',
});

export default function TurkishPrivacyPage() {
  return <PrivacyPolicyTemplate lang="tr" />;
}

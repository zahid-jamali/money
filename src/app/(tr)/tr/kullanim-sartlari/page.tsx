import React from 'react';
import { TermsTemplate } from '@/components/TermsTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('terms', 'tr', undefined, {
  metaTitle: 'Kullanım Şartları | Zetawala Money Türkiye',
  metaDescription:
    'Zetawala Money ücretsiz hesaplama motorları ve bilgilendirici içeriklerinin kullanımına dair genel şartlar ve kurallar.',
});

export default function TurkishTermsPage() {
  return <TermsTemplate lang="tr" />;
}

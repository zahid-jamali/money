import React from 'react';
import { AboutPageTemplate } from '@/components/AboutPageTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('about', 'tr', undefined, {
  metaTitle: 'Hakkımızda — Zetawala Money ve Hesaplama Standartlarımız',
  metaDescription:
    'Zetawala Money hakkında bilgi edinin: Türkiye mevzuatına uygun, ücretsiz, tarafsız ve tarayıcıda çalışan güvenli hesaplama motorları.',
});

export default function TurkishAboutPage() {
  return <AboutPageTemplate lang="tr" />;
}

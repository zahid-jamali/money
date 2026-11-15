import React from 'react';
import { ContactPageTemplate } from '@/components/ContactPageTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('contact', 'tr', undefined, {
  metaTitle: 'İletişim — Hata Bildirimi ve Geri Bildirim | Zetawala Money',
  metaDescription:
    'Zetawala Money mühendislik ve içerik ekibine ulaşın: soru, öneri ve yeni mevzuat değişikliklerini bize iletin.',
});

export default function TurkishContactPage() {
  return <ContactPageTemplate lang="tr" />;
}

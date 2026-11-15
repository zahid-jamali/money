import React from 'react';
import { FaqHubTemplate } from '@/components/FaqHubTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('faq', 'tr', undefined, {
  metaTitle: 'Sıkça Sorulan Sorular: Kıdem, İhbar, Maaş ve Vergi 2026',
  metaDescription:
    'Kıdem tazminatı tavanı 59.250 TL, ihbar süreleri, brütten nete maaş, asgari ücret muafiyeti ve KDV hakkında 30+ soru ve yanıt.',
});

export default function TurkishFaqHubPage() {
  return <FaqHubTemplate lang="tr" />;
}

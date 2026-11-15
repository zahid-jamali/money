import React from 'react';
import { CookiePolicyTemplate } from '@/components/CookiePolicyTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('cookie-policy', 'tr', undefined, {
  metaTitle: 'Çerez (Cookie) Politikası | Zetawala Money Türkiye',
  metaDescription:
    'Zorunlu çerezler, çerezsiz Cloudflare analitiği ve Google AdSense reklam çerezleri hakkında detaylı bilgilendirme.',
});

export default function TurkishCookiePolicyPage() {
  return <CookiePolicyTemplate lang="tr" />;
}

import React from 'react';
import { HtmlSitemapTemplate } from '@/components/HtmlSitemapTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('sitemap', 'tr', undefined, {
  metaTitle: 'Site Haritası (HTML Sitemap) | Zetawala Money Türkiye',
  metaDescription:
    'Zetawala Money üzerindeki tüm kıdem, ihbar, maaş ve vergi hesaplama araçları ile rehberlerin alfabetik dizini.',
});

export default function TurkishSitemapPage() {
  return <HtmlSitemapTemplate lang="tr" />;
}

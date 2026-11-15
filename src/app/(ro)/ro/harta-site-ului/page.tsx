import React from 'react';
import { HtmlSitemapTemplate } from '@/components/HtmlSitemapTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('sitemap', 'ro', undefined, {
  metaTitle: 'Harta Site-ului (HTML Sitemap) | Zetawala Money România',
  metaDescription:
    'Indexul complet al calculatoarelor de salarii, PFA vs SRL, TVA și ghidurilor fiscale pentru România.',
});

export default function RomanianSitemapPage() {
  return <HtmlSitemapTemplate lang="ro" />;
}

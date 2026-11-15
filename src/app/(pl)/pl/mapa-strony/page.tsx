import React from 'react';
import { HtmlSitemapTemplate } from '@/components/HtmlSitemapTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('sitemap', 'pl', undefined, {
  metaTitle: 'Mapa Strony (HTML Sitemap) | Zetawala Money Polska',
  metaDescription:
    'Kompletny spis kalkulatorów płacowych, podatkowych i poradników dostępnych w serwisie Zetawala Money.',
});

export default function PolishSitemapPage() {
  return <HtmlSitemapTemplate lang="pl" />;
}

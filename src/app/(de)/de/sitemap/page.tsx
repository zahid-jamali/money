import React from 'react';
import { HtmlSitemapTemplate } from '@/components/HtmlSitemapTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('sitemap', 'de', undefined, {
  metaTitle: 'Seitenübersicht (HTML Sitemap) | Zetawala Money',
  metaDescription:
    'Vollständiges Verzeichnis aller Rechner, Bankleitzahlen und Ratgeber für Deutschland.',
});

export default function GermanSitemapPage() {
  return <HtmlSitemapTemplate lang="de" />;
}

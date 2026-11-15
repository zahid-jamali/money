import React from 'react';
import { HtmlSitemapTemplate } from '@/components/HtmlSitemapTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('sitemap', 'en', undefined, {
  metaTitle: 'HTML Site Map — All Pages & Financial Calculators',
  metaDescription:
    'Complete directory of all financial calculators, banking tools, energy cost estimators, and guides on Zetawala Money.',
});

export default function EnglishSitemapPage() {
  return <HtmlSitemapTemplate lang="en" />;
}

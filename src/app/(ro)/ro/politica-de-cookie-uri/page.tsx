import React from 'react';
import { CookiePolicyTemplate } from '@/components/CookiePolicyTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('cookie-policy', 'ro', undefined, {
  metaTitle: 'Politica privind Modulele Cookie | Zetawala Money',
  metaDescription:
    'Detalii despre cookie-urile utilizate: esențiale pentru securitate, analitică fără cookie-uri Cloudflare și publicitate Google AdSense.',
});

export default function RomanianCookiePolicyPage() {
  return <CookiePolicyTemplate lang="ro" />;
}

import React from 'react';
import { CookiePolicyTemplate } from '@/components/CookiePolicyTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('cookie-policy', 'pl', undefined, {
  metaTitle: 'Polityka Cookies | Zetawala Money Polska',
  metaDescription:
    'Informacje o plikach cookies: niezbędne technicznie, analityka bezciasteczkowa Cloudflare i reklamy Google AdSense.',
});

export default function PolishCookiePolicyPage() {
  return <CookiePolicyTemplate lang="pl" />;
}

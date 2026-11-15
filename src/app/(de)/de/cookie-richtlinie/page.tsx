import React from 'react';
import { CookiePolicyTemplate } from '@/components/CookiePolicyTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('cookie-policy', 'de', undefined, {
  metaTitle: 'Cookie-Richtlinie | Zetawala Money Deutschland',
  metaDescription:
    'Übersicht über notwendige Cookies, cookielose Webanalyse und Werbe-Cookies von Google AdSense.',
});

export default function GermanCookiePolicyPage() {
  return <CookiePolicyTemplate lang="de" />;
}

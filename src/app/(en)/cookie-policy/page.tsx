import React from 'react';
import { CookiePolicyTemplate } from '@/components/CookiePolicyTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('cookie-policy', 'en', undefined, {
  metaTitle: 'Cookie Policy — Transparency & Consent | Zetawala Money',
  metaDescription:
    'Information about cookies used on Zetawala Money: essential cookies, cookieless analytics, and Google AdSense advertising cookies.',
});

export default function CookiePolicyPage() {
  return <CookiePolicyTemplate lang="en" />;
}

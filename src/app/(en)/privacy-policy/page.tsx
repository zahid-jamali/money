import React from 'react';
import { PrivacyPolicyTemplate } from '@/components/PrivacyPolicyTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('privacy-policy', 'en', undefined, {
  metaTitle: 'Privacy Policy — Zetawala Money',
  metaDescription:
    'Comprehensive privacy policy covering GDPR, UK GDPR, KVKK, Google AdSense cookies, Cloudflare cookieless analytics, and 100% in-browser calculations.',
});

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyTemplate lang="en" />;
}

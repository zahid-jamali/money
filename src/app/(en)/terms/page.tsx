import React from 'react';
import { TermsTemplate } from '@/components/TermsTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('terms', 'en', undefined, {
  metaTitle: 'Terms of Use — Zetawala Money',
  metaDescription:
    'Terms and conditions governing the use of free calculation tools and financial content on Zetawala Money.',
});

export default function TermsPage() {
  return <TermsTemplate lang="en" />;
}

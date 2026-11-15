import React from 'react';
import { FaqHubTemplate } from '@/components/FaqHubTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('faq', 'en', undefined, {
  metaTitle: 'Financial FAQ Hub: Banking, VAT, Travel & Energy Questions',
  metaDescription:
    'Answers to 35+ common questions on IBANs, VAT calculations, Schengen 90/180 rules, energy price caps, fuel consumption, and take-home pay.',
});

export default function EnglishFaqHubPage() {
  return <FaqHubTemplate lang="en" />;
}

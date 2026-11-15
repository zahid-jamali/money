import React from 'react';
import { DisclaimerTemplate } from '@/components/DisclaimerTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('disclaimer', 'ro', undefined, {
  metaTitle: 'Declinarea Responsabilității | Zetawala Money România',
  metaDescription:
    'Notă importantă: rezultatele calculelor au rol orientativ și informativ, neconstituind consultanță fiscală, contabilă sau juridică.',
});

export default function RomanianDisclaimerPage() {
  return <DisclaimerTemplate lang="ro" />;
}

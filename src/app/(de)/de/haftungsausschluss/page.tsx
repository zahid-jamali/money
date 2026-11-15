import React from 'react';
import { DisclaimerTemplate } from '@/components/DisclaimerTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('disclaimer', 'de', undefined, {
  metaTitle: 'Haftungsausschluss (Disclaimer) | Zetawala Money',
  metaDescription:
    'Wichtiger Hinweis: Berechnungen dienen reinen Informationszwecken und stellen keine steuerliche oder rechtliche Beratung dar.',
});

export default function GermanDisclaimerPage() {
  return <DisclaimerTemplate lang="de" />;
}

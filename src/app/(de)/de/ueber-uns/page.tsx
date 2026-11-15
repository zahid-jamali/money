import React from 'react';
import { AboutPageTemplate } from '@/components/AboutPageTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('about', 'de', undefined, {
  metaTitle: 'Über Zetawala Money — Mission, Datenschutz & Verlässlichkeit',
  metaDescription:
    'Erfahren Sie mehr über Zetawala Money: werbefreundliche, transparente Online-Rechner für Deutschland, 100% datenschutzkonform im Browser.',
});

export default function GermanAboutPage() {
  return <AboutPageTemplate lang="de" />;
}

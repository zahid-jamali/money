import React from 'react';
import { AboutPageTemplate } from '@/components/AboutPageTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('about', 'ro', undefined, {
  metaTitle: 'Despre Noi — Misiune și Verificare | Zetawala Money',
  metaDescription:
    'Aflați povestea Zetawala Money: calculatoare de salarii și taxe gratuite, confidențialitate absolută în browser și conformitate cu Codul Fiscal.',
});

export default function RomanianAboutPage() {
  return <AboutPageTemplate lang="ro" />;
}

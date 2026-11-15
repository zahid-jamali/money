import React from 'react';
import { FaqHubTemplate } from '@/components/FaqHubTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('faq', 'de', undefined, {
  metaTitle: 'FAQ Verzeichnis: Banken, Steuern, MwSt., Strom & Reise',
  metaDescription:
    'Antworten auf über 30 häufige Fragen zu IBAN, BLZ-Suche, Mehrwertsteuer 19%, BDEW-Stromkosten und Reisekosten.',
});

export default function GermanFaqHubPage() {
  return <FaqHubTemplate lang="de" />;
}

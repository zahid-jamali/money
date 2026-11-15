import React from 'react';
import { MethodologyTemplate } from '@/components/MethodologyTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('methodology', 'tr', undefined, {
  metaTitle: 'Hesaplama Metodolojisi ve Mevzuat Kaynakları 2026',
  metaDescription:
    'Kıdem tazminatı tavanı, ihbar süreleri ve gelir vergisi hesaplama formüllerinin yasal mevzuat dayanakları ve resmi genelgeleri.',
});

export default function TurkishMethodologyPage() {
  return <MethodologyTemplate lang="tr" />;
}

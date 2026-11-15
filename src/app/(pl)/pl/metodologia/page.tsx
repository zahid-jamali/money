import React from 'react';
import { MethodologyTemplate } from '@/components/MethodologyTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('methodology', 'pl', undefined, {
  metaTitle: 'Metodologia Obliczeń i Rejestr Źródeł Prawnych 2026',
  metaDescription:
    'Zasady obliczeń wynagrodzeń, podatków i składek ZUS oparte bezpośrednio na ustawach Dz.U. i rozporządzeniach Rady Ministrów.',
});

export default function PolishMethodologyPage() {
  return <MethodologyTemplate lang="pl" />;
}

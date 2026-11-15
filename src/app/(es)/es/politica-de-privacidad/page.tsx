import React from 'react';
import { PrivacyPolicyTemplate } from '@/components/PrivacyPolicyTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('privacy-policy', 'es', undefined, {
  metaTitle: 'Política de Privacidad | Zetawala Money',
  metaDescription: 'Tratamiento de datos personales de acuerdo con el RGPD y ejecución 100% en el navegador.',
});

export default function SpanishPrivacyPage() {
  return <PrivacyPolicyTemplate lang="es" />;
}

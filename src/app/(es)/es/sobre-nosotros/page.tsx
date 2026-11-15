import React from 'react';
import { AboutPageTemplate } from '@/components/AboutPageTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('about', 'es', undefined, {
  metaTitle: 'Sobre Zetawala Money | Calculadoras Gratuitas',
  metaDescription:
    'Conozca Zetawala Money: herramientas bancarias y financieras seguras, precisas y sin almacenamiento de datos para España y la Unión Europea.',
});

export default function SpanishAboutPage() {
  return <AboutPageTemplate lang="es" />;
}

import React from 'react';
import { DisclaimerTemplate } from '@/components/DisclaimerTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('disclaimer', 'tr', undefined, {
  metaTitle: 'Yasal ve Finansal Sorumluluk Reddi | Zetawala Money',
  metaDescription:
    'Önemli uyarı: Hesaplama sonuçları bilgilendirme amaçlıdır; hukuki mütalaa, bağlayıcı bordro veya mali müşavirlik tavsiyesi niteliğinde değildir.',
});

export default function TurkishDisclaimerPage() {
  return <DisclaimerTemplate lang="tr" />;
}

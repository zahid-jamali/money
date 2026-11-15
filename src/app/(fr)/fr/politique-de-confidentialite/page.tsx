import React from 'react';
import { PrivacyPolicyTemplate } from '@/components/PrivacyPolicyTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('privacy-policy', 'fr', undefined, {
  metaTitle: 'Politique de Confidentialité | Zetawala Money',
  metaDescription: 'Protection des données conforme au RGPD et traitement local de vos calculs dans le navigateur.',
});

export default function FrenchPrivacyPage() {
  return <PrivacyPolicyTemplate lang="fr" />;
}

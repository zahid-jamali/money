import React from 'react';
import { ContactPageTemplate } from '@/components/ContactPageTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('contact', 'en', undefined, {
  metaTitle: 'Contact Zetawala Money — Support & Error Reporting',
  metaDescription:
    'Contact the editorial and engineering team at Zetawala Money for inquiries, feedback, or submitting statutory updates.',
});

export default function ContactPage() {
  return <ContactPageTemplate lang="en" />;
}

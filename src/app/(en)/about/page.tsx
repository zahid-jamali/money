import React from 'react';
import { AboutPageTemplate } from '@/components/AboutPageTemplate';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata('about', 'en', undefined, {
  metaTitle: 'About Zetawala Money — Mission, Privacy & Verification',
  metaDescription:
    'Learn about Zetawala Money, our zero-hallucination statutory verification standards, in-browser privacy architecture, and error reporting.',
});

export default function AboutPage() {
  return <AboutPageTemplate lang="en" />;
}

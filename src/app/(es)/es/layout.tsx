import type { Metadata } from 'next';
import { inter } from '@/app/fonts';
import '@/app/globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { ThirdPartyScripts } from '@/components/ThirdPartyScripts';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata('home', 'es');

export default function SpanishLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <JsonLd lang="es" type="website" slug="es" />
      </head>
      <body className="font-sans antialiased bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col min-h-screen">
        <ThirdPartyScripts />
        <Header lang="es" currentSlug="es" />
        <main className="flex-1">{children}</main>
        <Footer lang="es" />
      </body>
    </html>
  );
}

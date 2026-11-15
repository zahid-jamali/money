import type { Metadata } from 'next';
import { inter } from '@/app/fonts';
import '@/app/globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { ThirdPartyScripts } from '@/components/ThirdPartyScripts';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata('home', 'tr');

export default function TurkishLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={inter.variable}>
      <head>
        <JsonLd lang="tr" type="website" slug="tr" />
      </head>
      <body className="font-sans antialiased bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col min-h-screen">
        <ThirdPartyScripts />
        <Header lang="tr" currentSlug="tr" />
        <main className="flex-1">{children}</main>
        <Footer lang="tr" />
      </body>
    </html>
  );
}

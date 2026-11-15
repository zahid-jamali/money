import type { Metadata } from 'next';
import { inter } from '@/app/fonts';
import '@/app/globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { ThirdPartyScripts } from '@/components/ThirdPartyScripts';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata('home', 'nl');

export default function DutchLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={inter.variable}>
      <head>
        <JsonLd lang="nl" type="website" slug="nl" />
      </head>
      <body className="font-sans antialiased bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col min-h-screen">
        <ThirdPartyScripts />
        <Header lang="nl" currentSlug="nl" />
        <main className="flex-1">{children}</main>
        <Footer lang="nl" />
      </body>
    </html>
  );
}

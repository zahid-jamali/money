'use client';

import React from 'react';
import Script from 'next/script';
import { siteConfig } from '@/config/site';

export function ThirdPartyScripts() {
  const adsenseId = siteConfig.adsenseId;
  const cfToken = siteConfig.cfAnalyticsToken;
  const isProduction = process.env.NODE_ENV === 'production';
  const showAdsense = siteConfig.adProvider === 'adsense' && adsenseId;

  return (
    <>
      {/* Google AdSense (only in production with valid client ID and adProvider = 'adsense') */}
      {showAdsense && isProduction && (
        <Script
          id="google-adsense"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
      )}

      {/* Cloudflare Web Analytics (cookieless token) */}
      {cfToken && (
        <Script
          id="cloudflare-analytics"
          src="https://static.cloudflareinsights.com/beacon.min.js"
          strategy="afterInteractive"
          data-cf-beacon={`{"token": "${cfToken}"}`}
        />
      )}
    </>
  );
}

export default ThirdPartyScripts;

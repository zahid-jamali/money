'use client';

import * as React from 'react';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

declare global {
  interface Window {
    adsbygoogle?: any[];
  }
}

export type AdFormat = 'horizontal-banner' | 'rectangle' | 'vertical-banner' | 'in-feed' | 'auto';

export interface AdSlotProps {
  slotId: string;
  format?: AdFormat;
  minHeight?: number;
  className?: string;
  adClient?: string;
}

export function AdSlot({
  slotId,
  format = 'auto',
  minHeight,
  className,
  adClient,
}: AdSlotProps) {
  const isDev = process.env.NODE_ENV !== 'production';
  const provider = siteConfig.adProvider;
  const client = adClient || siteConfig.adsenseId;
  const adRef = React.useRef<HTMLModElement | null>(null);
  const pushedRef = React.useRef<boolean>(false);

  const defaultHeights: Record<AdFormat, number> = {
    'horizontal-banner': 90,
    rectangle: 250,
    'vertical-banner': 600,
    'in-feed': 120,
    auto: 100,
  };

  const calculatedMinHeight = minHeight ?? defaultHeights[format];

  React.useEffect(() => {
    if (provider !== 'adsense' || !client || isDev) {
      return;
    }

    if (!pushedRef.current && adRef.current) {
      try {
        if (typeof window !== 'undefined') {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          pushedRef.current = true;
        }
      } catch (err) {
        console.warn('AdSense push error:', err);
      }
    }
  }, [provider, client, isDev]);

  if (provider === 'none') {
    return null;
  }

  return (
    <aside
      id={`ad-container-${slotId}`}
      aria-label="Advertisement"
      style={{ minHeight: `${calculatedMinHeight}px` }}
      className={cn(
        'w-full flex items-center justify-center overflow-hidden transition-all my-6 max-w-full',
        isDev &&
          'rounded-xl border border-dashed border-slate-300 bg-slate-50/70 p-4 text-center dark:border-slate-700 dark:bg-slate-800/40',
        className,
      )}
    >
      {isDev ? (
        <div className="flex flex-col items-center justify-center space-y-1 select-none text-slate-400 dark:text-slate-500">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 border border-slate-200 dark:border-slate-700 rounded px-1.5 py-0.5">
            Ad Placeholder ({provider.toUpperCase()})
          </span>
          <span className="text-xs font-mono font-medium text-slate-600 dark:text-slate-400">
            Slot: {slotId} • {format} • {calculatedMinHeight}px
          </span>
          <span className="text-[11px] text-slate-400">
            Reserved container prevents Core Web Vitals CLS
          </span>
        </div>
      ) : provider === 'adsense' && client ? (
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{ display: 'block', width: '100%', minHeight: `${calculatedMinHeight}px` }}
          data-ad-client={client}
          data-ad-slot={slotId}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      ) : (
        <div id={`ad-wrapper-${slotId}`} className="w-full h-full flex justify-center items-center" />
      )}
    </aside>
  );
}

export default AdSlot;

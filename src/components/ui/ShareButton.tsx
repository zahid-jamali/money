'use client';

import * as React from 'react';
import { Share2, Check } from 'lucide-react';
import { Button, type ButtonProps } from './Button';
import { cn } from '@/lib/utils';

export interface ShareButtonProps extends Omit<ButtonProps, 'onClick'> {
  title?: string;
  text?: string;
  url?: string;
  label?: string;
  copiedFeedback?: string;
  timeout?: number;
}

export function ShareButton({
  title = 'Zetawala Money Calculator',
  text,
  url,
  label = 'Share',
  copiedFeedback = 'Link copied!',
  variant = 'outline',
  size = 'sm',
  className,
  timeout = 2000,
  ...props
}: ShareButtonProps) {
  const [copied, setCopied] = React.useState(false);

  const handleShare = async () => {
    const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');

    if (typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
      try {
        await navigator.share({
          title,
          text: text || title,
          url: shareUrl,
        });
        return;
      } catch (err: any) {
        // User aborted share sheet or cancelled
        if (err.name === 'AbortError') return;
      }
    }

    // Fallback: Copy link to clipboard
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareUrl);
      } else {
        const input = document.createElement('input');
        input.value = shareUrl;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), timeout);
    } catch {
      // Failed silently
    }
  };

  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      onClick={handleShare}
      leftIcon={
        copied ? (
          <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
        ) : (
          <Share2 className="h-4 w-4 text-slate-500 dark:text-slate-400" />
        )
      }
      className={cn(
        copied &&
          'border-emerald-300 text-emerald-700 bg-emerald-50 dark:border-emerald-800 dark:text-emerald-300 dark:bg-emerald-950/40',
        className,
      )}
      {...props}
    >
      <span aria-live="polite">{copied ? copiedFeedback : label}</span>
    </Button>
  );
}

'use client';

import * as React from 'react';
import { Copy, Check } from 'lucide-react';
import { Button, type ButtonProps } from './Button';
import { cn } from '@/lib/utils';

export interface CopyButtonProps extends Omit<ButtonProps, 'onClick'> {
  text: string | (() => string);
  label?: string;
  copiedLabel?: string;
  onCopySuccess?: () => void;
  onCopyError?: (err: unknown) => void;
  timeout?: number;
}

export function CopyButton({
  text,
  label = 'Copy',
  copiedLabel = 'Copied!',
  variant = 'outline',
  size = 'sm',
  className,
  onCopySuccess,
  onCopyError,
  timeout = 2000,
  ...props
}: CopyButtonProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      const textToCopy = typeof text === 'function' ? text() : text;
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(textToCopy);
      } else {
        // Fallback for older browsers or insecure contexts
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      onCopySuccess?.();
      setTimeout(() => setCopied(false), timeout);
    } catch (err) {
      onCopyError?.(err);
    }
  };

  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      onClick={handleCopy}
      aria-label={copied ? copiedLabel : label}
      leftIcon={
        copied ? (
          <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
        ) : (
          <Copy className="h-4 w-4 text-slate-500 dark:text-slate-400" />
        )
      }
      className={cn(
        copied &&
          'border-emerald-300 text-emerald-700 bg-emerald-50 dark:border-emerald-800 dark:text-emerald-300 dark:bg-emerald-950/40',
        className,
      )}
      {...props}
    >
      <span aria-live="polite">{copied ? copiedLabel : label}</span>
    </Button>
  );
}

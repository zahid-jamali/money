'use client';

import * as React from 'react';
import { Printer } from 'lucide-react';
import { Button, type ButtonProps } from './Button';

export interface PrintButtonProps extends Omit<ButtonProps, 'onClick'> {
  label?: string;
}

export function PrintButton({
  label = 'Print',
  variant = 'outline',
  size = 'sm',
  className,
  ...props
}: PrintButtonProps) {
  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      onClick={handlePrint}
      leftIcon={<Printer className="h-4 w-4 text-slate-500 dark:text-slate-400" />}
      aria-label="Print this calculation or page"
      className={className}
      {...props}
    >
      {label}
    </Button>
  );
}

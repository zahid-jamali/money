'use client';

import * as React from 'react';
import { Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface DateInputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
> {
  id: string;
  label: React.ReactNode;
  value: string;
  onChange: (value: string) => void;
  min?: string;
  max?: string;
  error?: string;
  helperText?: string;
  containerClassName?: string;
}

export const DateInput = React.forwardRef<HTMLInputElement, DateInputProps>(
  (
    {
      id,
      label,
      value,
      onChange,
      min,
      max,
      error,
      helperText,
      className,
      containerClassName,
      disabled,
      required,
      ...props
    },
    ref,
  ) => {
    const helperId = helperText ? `${id}-helper` : undefined;
    const errorId = error ? `${id}-error` : undefined;
    const describedBy = [errorId, helperId].filter(Boolean).join(' ') || undefined;

    return (
      <div className={cn('flex flex-col space-y-1.5 w-full', containerClassName)}>
        <label htmlFor={id} className="text-sm font-semibold text-slate-800 dark:text-slate-200">
          {label}
          {required && (
            <span className="text-rose-500 ml-1" aria-hidden="true">
              *
            </span>
          )}
        </label>

        <div className="relative rounded-lg shadow-sm">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
            aria-hidden="true"
          >
            <Calendar className="h-4 w-4 text-slate-400" />
          </div>

          <input
            ref={ref}
            id={id}
            type="date"
            value={value}
            min={min}
            max={max}
            onChange={(e) => onChange(e.target.value)}
            disabled={disabled}
            required={required}
            aria-invalid={!!error}
            aria-describedby={describedBy}
            className={cn(
              'block w-full rounded-lg border bg-white py-2.5 pl-10 pr-3 text-slate-900 text-base sm:text-sm font-medium',
              'focus:outline-none focus:ring-2 focus:ring-offset-1 transition-colors',
              'dark:bg-slate-900 dark:text-slate-100',
              error
                ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-500'
                : 'border-slate-300 focus:border-primary-500 focus:ring-primary-500 dark:border-slate-700',
              disabled && 'bg-slate-100 text-slate-500 cursor-not-allowed dark:bg-slate-800',
              className,
            )}
            {...props}
          />
        </div>

        {error ? (
          <p
            id={errorId}
            className="text-xs font-medium text-rose-600 dark:text-rose-400"
            role="alert"
          >
            {error}
          </p>
        ) : helperText ? (
          <p id={helperId} className="text-xs text-slate-500 dark:text-slate-400">
            {helperText}
          </p>
        ) : null}
      </div>
    );
  },
);

DateInput.displayName = 'DateInput';

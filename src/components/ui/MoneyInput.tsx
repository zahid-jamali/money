'use client';

import * as React from 'react';
import { parseLocaleNumber } from '@/lib/formatters';
import { cn } from '@/lib/utils';

export interface MoneyInputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
> {
  id: string;
  label: React.ReactNode;
  value: number | string;
  onChange: (value: number, raw: string) => void;
  currencySymbol?: string;
  currencyCode?: string;
  error?: string;
  helperText?: string;
  containerClassName?: string;
}

export const MoneyInput = React.forwardRef<HTMLInputElement, MoneyInputProps>(
  (
    {
      id,
      label,
      value,
      onChange,
      currencySymbol = '£',
      currencyCode,
      error,
      helperText,
      className,
      containerClassName,
      placeholder = '0.00',
      disabled,
      required,
      onFocus,
      onBlur,
      ...props
    },
    ref,
  ) => {
    // Keep local string state to allow natural decimal typing (e.g. "12," or "12.")
    const [displayValue, setDisplayValue] = React.useState<string>(() => {
      if (value === undefined || value === null || value === '') return '';
      return String(value);
    });
    const [isFocused, setIsFocused] = React.useState(false);

    // Sync from outside prop if changed while not focused
    React.useEffect(() => {
      if (!isFocused) {
        if (value === undefined || value === null || value === '') {
          setDisplayValue('');
        } else {
          setDisplayValue(String(value));
        }
      }
    }, [value, isFocused]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value;
      // Allow numbers, commas, dots, minus
      const sanitized = raw.replace(/[^0-9.,\-]/g, '');
      setDisplayValue(sanitized);

      const parsed = parseLocaleNumber(sanitized);
      onChange(parsed, sanitized);
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      // Clean up display on blur if valid
      if (displayValue.trim() !== '') {
        const parsed = parseLocaleNumber(displayValue);
        setDisplayValue(parsed === 0 && displayValue.trim() === '' ? '' : String(parsed));
      }
      onBlur?.(e);
    };

    const helperId = helperText ? `${id}-helper` : undefined;
    const errorId = error ? `${id}-error` : undefined;
    const describedBy = [errorId, helperId].filter(Boolean).join(' ') || undefined;

    return (
      <div className={cn('flex flex-col space-y-1.5 w-full', containerClassName)}>
        <div className="flex items-center justify-between">
          <label htmlFor={id} className="text-sm font-semibold text-slate-800 dark:text-slate-200">
            {label}
            {required && (
              <span className="text-rose-500 ml-1" aria-hidden="true">
                *
              </span>
            )}
          </label>
          {currencyCode && (
            <span className="text-xs font-mono font-medium text-slate-400 uppercase">
              {currencyCode}
            </span>
          )}
        </div>

        <div className="relative rounded-lg shadow-sm">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5"
            aria-hidden="true"
          >
            <span className="text-base font-semibold text-slate-500 dark:text-slate-400 select-none">
              {currencySymbol}
            </span>
          </div>
          <input
            ref={ref}
            id={id}
            type="text"
            inputMode="decimal"
            value={displayValue}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={disabled}
            required={required}
            aria-invalid={!!error}
            aria-describedby={describedBy}
            placeholder={placeholder}
            className={cn(
              'block w-full rounded-lg border bg-white py-2.5 pl-8 pr-3 text-slate-900 text-base sm:text-sm',
              'placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-offset-1 transition-colors',
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

MoneyInput.displayName = 'MoneyInput';

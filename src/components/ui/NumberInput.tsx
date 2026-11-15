'use client';

import * as React from 'react';
import { Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface NumberInputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
> {
  id: string;
  label?: React.ReactNode;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
  prefix?: string;
  error?: string;
  helperText?: string;
  showStepper?: boolean;
  containerClassName?: string;
}

export const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      id,
      label,
      value,
      onChange,
      min = 0,
      max,
      step = 1,
      unit,
      prefix,
      error,
      helperText,
      showStepper = true,
      containerClassName,
      className,
      disabled,
      required,
      ...props
    },
    ref,
  ) => {
    const handleStep = (direction: 1 | -1) => {
      if (disabled) return;
      const current = typeof value === 'number' && !Number.isNaN(value) ? value : min;
      const nextVal = current + direction * step;
      // Precision handling e.g. floating point steps
      const decimals = step.toString().split('.')[1]?.length || 0;
      const rounded = Number(nextVal.toFixed(decimals));

      if (min !== undefined && rounded < min) return;
      if (max !== undefined && rounded > max) return;
      onChange(rounded);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const parsed = parseFloat(e.target.value);
      if (Number.isNaN(parsed)) {
        onChange(min ?? 0);
      } else {
        onChange(parsed);
      }
    };

    const helperId = helperText ? `${id}-helper` : undefined;
    const errorId = error ? `${id}-error` : undefined;
    const describedBy = [errorId, helperId].filter(Boolean).join(' ') || undefined;

    const canDecrement = !disabled && (min === undefined || value > min);
    const canIncrement = !disabled && (max === undefined || value < max);

    return (
      <div className={cn('flex flex-col space-y-1.5 w-full', containerClassName)}>
        {label && (
          <div className="flex items-center justify-between">
            <label
              htmlFor={id}
              className="text-sm font-semibold text-slate-800 dark:text-slate-200"
            >
              {label}
              {required && (
                <span className="text-rose-500 ml-1" aria-hidden="true">
                  *
                </span>
              )}
            </label>
            {unit && <span className="text-xs font-medium text-slate-400">{unit}</span>}
          </div>
        )}

        <div className="relative flex items-center">
          {showStepper && (
            <button
              type="button"
              disabled={!canDecrement}
              onClick={() => handleStep(-1)}
              aria-label="Decrease value"
              className={cn(
                'absolute left-1 z-10 flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 bg-slate-50 text-slate-600 transition-colors',
                'hover:bg-slate-100 hover:text-slate-900 active:bg-slate-200',
                'focus:outline-none focus:ring-2 focus:ring-primary-500',
                'disabled:opacity-40 disabled:cursor-not-allowed dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700',
              )}
            >
              <Minus className="h-3.5 w-3.5" />
            </button>
          )}

          {prefix && !showStepper && (
            <span className="pointer-events-none absolute left-3 text-sm text-slate-400 select-none">
              {prefix}
            </span>
          )}

          <input
            ref={ref}
            id={id}
            type="number"
            value={Number.isNaN(value) ? '' : value}
            onChange={handleInputChange}
            min={min}
            max={max}
            step={step}
            disabled={disabled}
            required={required}
            aria-invalid={!!error}
            aria-describedby={describedBy}
            className={cn(
              'block w-full rounded-lg border bg-white py-2.5 text-center text-slate-900 text-base sm:text-sm font-medium',
              'focus:outline-none focus:ring-2 focus:ring-offset-1 transition-colors',
              'dark:bg-slate-900 dark:text-slate-100',
              showStepper ? 'px-11' : prefix ? 'pl-8 pr-3' : 'px-3',
              error
                ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-500'
                : 'border-slate-300 focus:border-primary-500 focus:ring-primary-500 dark:border-slate-700',
              disabled && 'bg-slate-100 text-slate-500 cursor-not-allowed dark:bg-slate-800',
              className,
            )}
            {...props}
          />

          {showStepper && (
            <button
              type="button"
              disabled={!canIncrement}
              onClick={() => handleStep(1)}
              aria-label="Increase value"
              className={cn(
                'absolute right-1 z-10 flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 bg-slate-50 text-slate-600 transition-colors',
                'hover:bg-slate-100 hover:text-slate-900 active:bg-slate-200',
                'focus:outline-none focus:ring-2 focus:ring-primary-500',
                'disabled:opacity-40 disabled:cursor-not-allowed dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700',
              )}
            >
              <Plus className="h-3.5 w-3.5" />
            </button>
          )}
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

NumberInput.displayName = 'NumberInput';

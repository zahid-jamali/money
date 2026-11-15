'use client';

import * as React from 'react';
import { Check, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface CheckboxProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: React.ReactNode;
  description?: React.ReactNode;
  tooltip?: string;
  error?: string;
  containerClassName?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      id,
      checked,
      onChange,
      label,
      description,
      tooltip,
      error,
      className,
      containerClassName,
      disabled,
      ...props
    },
    ref,
  ) => {
    const [showTooltip, setShowTooltip] = React.useState(false);
    const descriptionId = description ? `${id}-desc` : undefined;
    const tooltipId = tooltip ? `${id}-tooltip` : undefined;
    const errorId = error ? `${id}-error` : undefined;
    const describedBy = [errorId, descriptionId, tooltipId].filter(Boolean).join(' ') || undefined;

    return (
      <div className={cn('flex flex-col space-y-1', containerClassName)}>
        <div className="flex items-start">
          <div className="flex h-5 items-center">
            <div className="relative flex items-center justify-center">
              <input
                ref={ref}
                id={id}
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                disabled={disabled}
                aria-invalid={!!error}
                aria-describedby={describedBy}
                className="peer sr-only"
                {...props}
              />
              <div
                onClick={() => !disabled && onChange(!checked)}
                className={cn(
                  'h-5 w-5 rounded border transition-colors flex items-center justify-center cursor-pointer',
                  'peer-focus-visible:ring-2 peer-focus-visible:ring-primary-500 peer-focus-visible:ring-offset-2',
                  checked
                    ? 'border-primary-600 bg-primary-600 text-white dark:border-primary-500 dark:bg-primary-500'
                    : 'border-slate-300 bg-white hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900',
                  disabled && 'opacity-50 cursor-not-allowed bg-slate-100 dark:bg-slate-800',
                  error && 'border-rose-400',
                  className,
                )}
              >
                {checked && <Check className="h-3.5 w-3.5 stroke-[3]" />}
              </div>
            </div>
          </div>

          <div className="ml-3 text-sm flex-1">
            <div className="flex items-center gap-1.5">
              <label
                htmlFor={id}
                className={cn(
                  'font-medium text-slate-800 dark:text-slate-200 select-none cursor-pointer',
                  disabled && 'opacity-60 cursor-not-allowed',
                )}
              >
                {label}
              </label>

              {tooltip && (
                <div className="relative inline-flex items-center">
                  <button
                    type="button"
                    aria-describedby={tooltipId}
                    aria-label="More information"
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                    onFocus={() => setShowTooltip(true)}
                    onBlur={() => setShowTooltip(false)}
                    className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 focus:outline-none focus:ring-1 focus:ring-primary-500 rounded-full"
                  >
                    <HelpCircle className="h-3.5 w-3.5" />
                  </button>

                  {showTooltip && (
                    <div
                      id={tooltipId}
                      role="tooltip"
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 z-50 w-56 rounded-md bg-slate-900 p-2 text-xs text-white shadow-lg dark:bg-slate-100 dark:text-slate-900 pointer-events-none"
                    >
                      {tooltip}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-900 dark:border-t-slate-100" />
                    </div>
                  )}
                </div>
              )}
            </div>

            {description && (
              <p id={descriptionId} className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {description}
              </p>
            )}

            {error && (
              <p
                id={errorId}
                className="text-xs font-medium text-rose-600 dark:text-rose-400 mt-1"
                role="alert"
              >
                {error}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  },
);

Checkbox.displayName = 'Checkbox';

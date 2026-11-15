'use client';

import * as React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
  group?: string;
}

export interface SelectProps extends Omit<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  'onChange'
> {
  id: string;
  label?: React.ReactNode;
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  helperText?: string;
  containerClassName?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      id,
      label,
      options,
      value,
      onChange,
      placeholder,
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

    // Group options if group property is present
    const hasGroups = options.some((opt) => !!opt.group);
    const groups = React.useMemo(() => {
      if (!hasGroups) return null;
      const map = new Map<string, SelectOption[]>();
      options.forEach((opt) => {
        const grp = opt.group || '';
        if (!map.has(grp)) map.set(grp, []);
        map.get(grp)!.push(opt);
      });
      return map;
    }, [options, hasGroups]);

    return (
      <div className={cn('flex flex-col space-y-1.5 w-full', containerClassName)}>
        {label && (
          <label htmlFor={id} className="text-sm font-semibold text-slate-800 dark:text-slate-200">
            {label}
            {required && (
              <span className="text-rose-500 ml-1" aria-hidden="true">
                *
              </span>
            )}
          </label>
        )}

        <div className="relative rounded-lg shadow-sm">
          <select
            ref={ref}
            id={id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            disabled={disabled}
            required={required}
            aria-invalid={!!error}
            aria-describedby={describedBy}
            className={cn(
              'block w-full appearance-none rounded-lg border bg-white py-2.5 pl-3 pr-10 text-slate-900 text-base sm:text-sm font-medium transition-colors',
              'focus:outline-none focus:ring-2 focus:ring-offset-1',
              'dark:bg-slate-900 dark:text-slate-100',
              error
                ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-500'
                : 'border-slate-300 focus:border-primary-500 focus:ring-primary-500 dark:border-slate-700',
              disabled && 'bg-slate-100 text-slate-500 cursor-not-allowed dark:bg-slate-800',
              className,
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}

            {hasGroups && groups
              ? Array.from(groups.entries()).map(([groupName, groupOpts]) =>
                  groupName ? (
                    <optgroup key={groupName} label={groupName}>
                      {groupOpts.map((opt) => (
                        <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                          {opt.label}
                        </option>
                      ))}
                    </optgroup>
                  ) : (
                    groupOpts.map((opt) => (
                      <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                        {opt.label}
                      </option>
                    ))
                  ),
                )
              : options.map((opt) => (
                  <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                    {opt.label}
                  </option>
                ))}
          </select>

          <div
            className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
            aria-hidden="true"
          >
            <ChevronDown className="h-4 w-4 text-slate-400" />
          </div>
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

Select.displayName = 'Select';

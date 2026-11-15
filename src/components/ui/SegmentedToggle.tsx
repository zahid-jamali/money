'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface SegmentedToggleOption<T extends string = string> {
  value: T;
  label: string;
  icon?: React.ReactNode;
  badge?: string;
  disabled?: boolean;
}

export interface SegmentedToggleProps<T extends string = string> {
  id?: string;
  label?: string;
  options: SegmentedToggleOption<T>[];
  value: T;
  onChange: (value: T) => void;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
}

export function SegmentedToggle<T extends string = string>({
  id,
  label,
  options,
  value,
  onChange,
  size = 'md',
  fullWidth = true,
  className,
}: SegmentedToggleProps<T>) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent, currentIndex: number) => {
    let nextIndex = currentIndex;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      nextIndex = (currentIndex + 1) % options.length;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      nextIndex = (currentIndex - 1 + options.length) % options.length;
    } else {
      return;
    }

    const nextOption = options[nextIndex];
    if (nextOption && !nextOption.disabled) {
      onChange(nextOption.value);
      // Focus corresponding button
      const buttons = containerRef.current?.querySelectorAll<HTMLButtonElement>('[role="radio"]');
      buttons?.[nextIndex]?.focus();
    }
  };

  const sizeStyles = {
    sm: 'p-0.5 text-xs h-8',
    md: 'p-1 text-sm h-10',
    lg: 'p-1.5 text-base h-12',
  };

  const itemPadding = {
    sm: 'px-2.5 py-1',
    md: 'px-3.5 py-1.5',
    lg: 'px-5 py-2',
  };

  return (
    <div className={cn('flex flex-col space-y-1.5', fullWidth && 'w-full')}>
      {label && (
        <label
          id={id ? `${id}-label` : undefined}
          className="text-sm font-semibold text-slate-800 dark:text-slate-200"
        >
          {label}
        </label>
      )}

      <div
        ref={containerRef}
        role="radiogroup"
        aria-labelledby={id && label ? `${id}-label` : undefined}
        aria-label={!label ? 'Select an option' : undefined}
        className={cn(
          'inline-flex items-center rounded-lg bg-slate-100 dark:bg-slate-800 select-none border border-slate-200 dark:border-slate-700',
          sizeStyles[size],
          fullWidth && 'w-full grid',
          fullWidth && `grid-cols-${options.length}`,
          className,
        )}
        style={
          fullWidth
            ? { gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))` }
            : undefined
        }
      >
        {options.map((option, index) => {
          const isSelected = value === option.value;

          return (
            <button
              key={option.value}
              type="button"
              role="radio"
              aria-checked={isSelected}
              tabIndex={isSelected ? 0 : -1}
              disabled={option.disabled}
              onClick={() => !option.disabled && onChange(option.value)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={cn(
                'inline-flex items-center justify-center font-medium rounded-md transition-all whitespace-nowrap',
                itemPadding[size],
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-1',
                isSelected
                  ? 'bg-white text-slate-900 shadow-sm font-semibold dark:bg-slate-900 dark:text-slate-50'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100',
                option.disabled && 'opacity-40 cursor-not-allowed',
              )}
            >
              {option.icon && <span className="mr-2 inline-flex shrink-0">{option.icon}</span>}
              <span>{option.label}</span>
              {option.badge && (
                <span
                  className={cn(
                    'ml-1.5 px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide',
                    isSelected
                      ? 'bg-primary-100 text-primary-800 dark:bg-primary-950 dark:text-primary-300'
                      : 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300',
                  )}
                >
                  {option.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

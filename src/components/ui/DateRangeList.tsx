'use client';

import * as React from 'react';
import { Plus, Trash2, CalendarRange } from 'lucide-react';
import { Button } from './Button';
import { DateInput } from './DateInput';
import { cn } from '@/lib/utils';

export interface DateRangeItem {
  id: string;
  startDate: string;
  endDate: string;
  label?: string;
}

export interface DateRangeListProps {
  id?: string;
  title?: string;
  description?: string;
  ranges: DateRangeItem[];
  onChange: (ranges: DateRangeItem[]) => void;
  minDate?: string;
  maxDate?: string;
  addLabel?: string;
  maxRanges?: number;
  startDateLabel?: string;
  endDateLabel?: string;
  className?: string;
}

export function DateRangeList({
  id = 'date-range-list',
  title = 'Date Periods',
  description,
  ranges,
  onChange,
  minDate,
  maxDate,
  addLabel = 'Add Period',
  maxRanges = 20,
  startDateLabel = 'Start Date',
  endDateLabel = 'End Date',
  className,
}: DateRangeListProps) {
  const handleAdd = () => {
    if (ranges.length >= maxRanges) return;
    const newId = `range-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
    const today = new Date().toISOString().split('T')[0];
    onChange([...ranges, { id: newId, startDate: today, endDate: today }]);
  };

  const handleRemove = (idToRemove: string) => {
    onChange(ranges.filter((r) => r.id !== idToRemove));
  };

  const handleUpdate = (
    idToUpdate: string,
    field: 'startDate' | 'endDate' | 'label',
    val: string,
  ) => {
    onChange(
      ranges.map((r) => {
        if (r.id !== idToUpdate) return r;
        return { ...r, [field]: val };
      }),
    );
  };

  return (
    <div className={cn('space-y-4 w-full', className)}>
      <div className="flex items-center justify-between">
        <div>
          {title && (
            <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <CalendarRange className="h-4 w-4 text-primary-600" aria-hidden="true" />
              {title}
            </h4>
          )}
          {description && (
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{description}</p>
          )}
        </div>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={handleAdd}
          disabled={ranges.length >= maxRanges}
          leftIcon={<Plus className="h-3.5 w-3.5" />}
        >
          {addLabel}
        </Button>
      </div>

      {ranges.length === 0 ? (
        <div className="rounded-lg border border-dashed border-slate-300 p-6 text-center text-slate-500 dark:border-slate-700 dark:text-slate-400">
          <p className="text-sm">No periods added yet.</p>
          <button
            type="button"
            onClick={handleAdd}
            className="mt-2 text-xs font-semibold text-primary-600 hover:text-primary-700 underline focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            Click to add your first date range
          </button>
        </div>
      ) : (
        <div className="space-y-3" role="list" aria-label={title}>
          {ranges.map((range, index) => {
            const isInvalidRange =
              range.startDate && range.endDate && range.startDate > range.endDate;

            return (
              <div
                key={range.id}
                role="listitem"
                className={cn(
                  'rounded-lg border p-3.5 bg-slate-50/50 dark:bg-slate-800/40 transition-colors',
                  isInvalidRange
                    ? 'border-rose-300 dark:border-rose-900/50'
                    : 'border-slate-200 dark:border-slate-700',
                )}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Period {index + 1}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleRemove(range.id)}
                    aria-label={`Remove period ${index + 1}`}
                    className="p-1 text-slate-400 hover:text-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 rounded transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <DateInput
                    id={`${id}-${range.id}-start`}
                    label={startDateLabel}
                    value={range.startDate}
                    min={minDate}
                    max={range.endDate || maxDate}
                    onChange={(val) => handleUpdate(range.id, 'startDate', val)}
                  />
                  <DateInput
                    id={`${id}-${range.id}-end`}
                    label={endDateLabel}
                    value={range.endDate}
                    min={range.startDate || minDate}
                    max={maxDate}
                    error={
                      isInvalidRange ? 'End date cannot be earlier than start date' : undefined
                    }
                    onChange={(val) => handleUpdate(range.id, 'endDate', val)}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

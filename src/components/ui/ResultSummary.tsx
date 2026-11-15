import * as React from 'react';
import { ExternalLink, Info, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface BreakdownItem {
  label: string;
  value: string | number;
  formula?: string;
  citation?: {
    label: string;
    url?: string;
  };
  isTotal?: boolean;
  note?: string;
}

export interface ResultSummaryBadge {
  label: string;
  variant?: 'primary' | 'success' | 'warning' | 'neutral';
}

export interface ResultSummaryProps {
  headlineLabel: string;
  headlineValue: string;
  subheadline?: string;
  badge?: ResultSummaryBadge;
  breakdown?: BreakdownItem[];
  actions?: React.ReactNode;
  notes?: string;
  className?: string;
}

export function ResultSummary({
  headlineLabel,
  headlineValue,
  subheadline,
  badge,
  breakdown = [],
  actions,
  notes,
  className,
}: ResultSummaryProps) {
  const badgeStyles: Record<NonNullable<ResultSummaryBadge['variant']>, string> = {
    primary:
      'bg-primary-50 text-primary-700 border-primary-200 dark:bg-primary-950/60 dark:text-primary-300 dark:border-primary-800',
    success:
      'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800',
    warning:
      'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800',
    neutral:
      'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700',
  };

  return (
    <div
      className={cn(
        'rounded-2xl border border-primary-200/80 bg-gradient-to-b from-white to-primary-50/20 p-6 shadow-sm',
        'dark:border-primary-900/50 dark:from-slate-900 dark:to-primary-950/20 dark:bg-slate-900',
        className,
      )}
    >
      {/* Top Banner / Badge */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Calculation Result
        </span>
        {badge && (
          <span
            className={cn(
              'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold border',
              badgeStyles[badge.variant || 'primary'],
            )}
          >
            <CheckCircle2 className="h-3 w-3" aria-hidden="true" />
            {badge.label}
          </span>
        )}
      </div>

      {/* Prominent Headline Number with aria-live */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="pb-6 border-b border-slate-100 dark:border-slate-800"
      >
        <p className="text-sm font-medium text-slate-600 dark:text-slate-300">{headlineLabel}</p>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white tabular-nums">
            {headlineValue}
          </span>
        </div>
        {subheadline && (
          <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400">{subheadline}</p>
        )}
      </div>

      {/* Breakdown Table with Formula & Legal Citation */}
      {breakdown.length > 0 && (
        <div className="mt-5 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Detailed Breakdown
            </h4>
            <span className="text-[11px] text-slate-400 dark:text-slate-500">
              Formula & Citation
            </span>
          </div>

          <div className="overflow-x-auto rounded-lg border border-slate-200/80 bg-white dark:border-slate-800 dark:bg-slate-900/60">
            <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800 text-left text-sm">
              <thead className="bg-slate-50 dark:bg-slate-800/50 text-xs font-medium text-slate-500 dark:text-slate-400">
                <tr>
                  <th scope="col" className="px-4 py-2.5">
                    Component
                  </th>
                  <th scope="col" className="px-4 py-2.5">
                    Basis / Formula
                  </th>
                  <th scope="col" className="px-4 py-2.5">
                    Legal Reference
                  </th>
                  <th scope="col" className="px-4 py-2.5 text-right">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {breakdown.map((row, idx) => (
                  <tr
                    key={idx}
                    className={cn(
                      'transition-colors',
                      row.isTotal
                        ? 'bg-primary-50/40 dark:bg-primary-950/30 font-bold text-slate-900 dark:text-white'
                        : 'hover:bg-slate-50/60 dark:hover:bg-slate-800/40 text-slate-700 dark:text-slate-300',
                    )}
                  >
                    <td className="px-4 py-3 align-top">
                      <div className="font-medium text-slate-900 dark:text-slate-100">
                        {row.label}
                      </div>
                      {row.note && (
                        <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          {row.note}
                        </div>
                      )}
                    </td>

                    <td className="px-4 py-3 align-top font-mono text-xs text-slate-500 dark:text-slate-400">
                      {row.formula ? (
                        <code className="rounded bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 font-mono text-xs text-slate-700 dark:text-slate-300">
                          {row.formula}
                        </code>
                      ) : (
                        <span className="text-slate-400">—</span>
                      )}
                    </td>

                    <td className="px-4 py-3 align-top text-xs">
                      {row.citation ? (
                        row.citation.url ? (
                          <a
                            href={row.citation.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 font-medium text-primary-600 hover:text-primary-700 underline dark:text-primary-400 dark:hover:text-primary-300"
                          >
                            <span>{row.citation.label}</span>
                            <ExternalLink className="h-3 w-3 shrink-0" aria-hidden="true" />
                          </a>
                        ) : (
                          <span className="font-medium text-slate-600 dark:text-slate-400">
                            {row.citation.label}
                          </span>
                        )
                      ) : (
                        <span className="text-slate-400">—</span>
                      )}
                    </td>

                    <td className="px-4 py-3 align-top text-right font-semibold tabular-nums text-slate-900 dark:text-slate-50">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Optional Footnote / Notes */}
      {notes && (
        <div className="mt-4 flex items-start gap-2 rounded-lg bg-slate-50 dark:bg-slate-800/50 p-3 text-xs text-slate-600 dark:text-slate-400">
          <Info className="h-4 w-4 shrink-0 text-slate-400 mt-0.5" />
          <p>{notes}</p>
        </div>
      )}

      {/* Action Buttons Row */}
      {actions && (
        <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-end gap-2">
          {actions}
        </div>
      )}
    </div>
  );
}

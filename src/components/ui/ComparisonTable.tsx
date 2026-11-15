import * as React from 'react';
import { Award, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ComparisonScenario {
  id: string;
  title: string;
  subtitle?: string;
  isWinner?: boolean;
  winnerBadge?: string;
  metrics: Record<string, React.ReactNode>;
}

export interface ComparisonMetric {
  key: string;
  label: string;
  tooltip?: string;
  description?: string;
  highlightDifference?: boolean;
}

export interface ComparisonTableProps {
  title?: string;
  description?: string;
  scenarios: ComparisonScenario[];
  metrics: ComparisonMetric[];
  className?: string;
}

export function ComparisonTable({
  title,
  description,
  scenarios,
  metrics,
  className,
}: ComparisonTableProps) {
  return (
    <div className={cn('space-y-4 w-full', className)}>
      {(title || description) && (
        <div>
          {title && (
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">{title}</h3>
          )}
          {description && (
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{description}</p>
          )}
        </div>
      )}

      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 shadow-sm">
        <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800 text-left text-sm">
          <thead>
            <tr className="divide-x divide-slate-200 dark:divide-slate-800">
              <th
                scope="col"
                className="w-1/3 bg-slate-50 dark:bg-slate-800/60 p-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400"
              >
                Comparison Metric
              </th>

              {scenarios.map((scenario) => {
                const isWinner = !!scenario.isWinner;
                return (
                  <th
                    key={scenario.id}
                    scope="col"
                    className={cn(
                      'p-4 align-top transition-colors',
                      isWinner
                        ? 'bg-primary-50/50 dark:bg-primary-950/30'
                        : 'bg-white dark:bg-slate-900',
                    )}
                  >
                    <div className="flex flex-col space-y-1">
                      {isWinner && (
                        <div className="inline-flex items-center gap-1 self-start rounded-full bg-primary-100 px-2.5 py-0.5 text-[11px] font-bold text-primary-800 dark:bg-primary-900 dark:text-primary-200">
                          <Award className="h-3 w-3" />
                          <span>{scenario.winnerBadge || 'Best Option'}</span>
                        </div>
                      )}
                      <span className="text-base font-bold text-slate-900 dark:text-slate-100">
                        {scenario.title}
                      </span>
                      {scenario.subtitle && (
                        <span className="text-xs font-normal text-slate-500 dark:text-slate-400">
                          {scenario.subtitle}
                        </span>
                      )}
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
            {metrics.map((metric) => (
              <tr
                key={metric.key}
                className="divide-x divide-slate-200 dark:divide-slate-800 hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors"
              >
                <th
                  scope="row"
                  className="bg-slate-50/50 dark:bg-slate-800/30 p-4 align-middle text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  <div className="flex items-center gap-1.5">
                    <span>{metric.label}</span>
                    {metric.tooltip && (
                      <span
                        title={metric.tooltip}
                        className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 cursor-help"
                      >
                        <HelpCircle className="h-3.5 w-3.5" />
                      </span>
                    )}
                  </div>
                  {metric.description && (
                    <p className="text-xs font-normal text-slate-500 dark:text-slate-400 mt-0.5">
                      {metric.description}
                    </p>
                  )}
                </th>

                {scenarios.map((scenario) => {
                  const val = scenario.metrics[metric.key];
                  const isWinner = !!scenario.isWinner;

                  return (
                    <td
                      key={scenario.id}
                      className={cn(
                        'p-4 align-middle font-medium tabular-nums text-slate-900 dark:text-slate-100',
                        isWinner &&
                          'bg-primary-50/20 dark:bg-primary-950/10 font-semibold text-primary-950 dark:text-primary-100',
                      )}
                    >
                      {val ?? '—'}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

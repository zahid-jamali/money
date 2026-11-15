import * as React from 'react';
import Link from 'next/link';
import { ArrowRight, Calculator } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface RelatedToolItem {
  title: string;
  description: string;
  href: string;
  category?: 'banking' | 'tax-vat' | 'salary' | 'travel' | 'home-energy' | string;
  badge?: string;
  icon?: React.ReactNode;
}

export interface RelatedToolsProps {
  title?: string;
  description?: string;
  tools: RelatedToolItem[];
  columns?: 2 | 3;
  className?: string;
}

export function RelatedTools({
  title = 'Related Financial Tools & Calculators',
  description,
  tools,
  columns = 3,
  className,
}: RelatedToolsProps) {
  const categoryStyles: Record<string, string> = {
    'tax-vat':
      'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/60 dark:text-indigo-300 dark:border-indigo-800',
    banking:
      'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800',
    salary:
      'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800',
    travel:
      'bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/60 dark:text-sky-300 dark:border-sky-800',
    'home-energy':
      'bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-300 dark:border-teal-800',
  };

  const getCategoryClass = (cat?: string) => {
    if (!cat)
      return 'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300';
    return (
      categoryStyles[cat] ||
      'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300'
    );
  };

  if (!tools || tools.length === 0) return null;

  return (
    <section className={cn('space-y-4 w-full', className)}>
      {(title || description) && (
        <div>
          {title && (
            <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{description}</p>
          )}
        </div>
      )}

      <div
        className={cn(
          'grid grid-cols-1 gap-4',
          columns === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3',
        )}
      >
        {tools.map((tool, idx) => (
          <Link
            key={idx}
            href={tool.href}
            className={cn(
              'group relative flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 transition-all duration-200',
              'hover:border-primary-400 hover:shadow-md hover:-translate-y-0.5',
              'dark:border-slate-800 dark:bg-slate-900 dark:hover:border-primary-500',
            )}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-50 text-primary-600 dark:bg-primary-950 dark:text-primary-400 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  {tool.icon || <Calculator className="h-5 w-5" />}
                </div>

                {tool.category && (
                  <span
                    className={cn(
                      'px-2 py-0.5 rounded-full text-[11px] font-semibold border uppercase tracking-wide',
                      getCategoryClass(tool.category),
                    )}
                  >
                    {tool.badge || tool.category}
                  </span>
                )}
              </div>

              <h4 className="text-base font-bold text-slate-900 group-hover:text-primary-600 transition-colors dark:text-slate-100 dark:group-hover:text-primary-400">
                {tool.title}
              </h4>

              <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                {tool.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center text-xs font-semibold text-primary-600 group-hover:text-primary-700 dark:text-primary-400">
              <span>Open Calculator</span>
              <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

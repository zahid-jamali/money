'use client';

import * as React from 'react';
import { List } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface TocItem {
  id: string;
  title: string;
  level?: 2 | 3;
}

export interface TableOfContentsProps {
  items: TocItem[];
  title?: string;
  className?: string;
}

export function TableOfContents({
  items,
  title = 'Table of Contents',
  className,
}: TableOfContentsProps) {
  const [activeId, setActiveId] = React.useState<string>('');

  React.useEffect(() => {
    if (typeof window === 'undefined' || items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '0px 0px -70% 0px',
        threshold: 0.1,
      },
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [items]);

  if (!items || items.length === 0) return null;

  return (
    <nav
      aria-label="Table of contents"
      className={cn(
        'rounded-xl border border-slate-200 bg-slate-50/50 p-4 dark:border-slate-800 dark:bg-slate-900/50',
        className,
      )}
    >
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-200/60 dark:border-slate-800">
        <List className="h-4 w-4 text-primary-600" aria-hidden="true" />
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
          {title}
        </h4>
      </div>

      <ul className="space-y-1.5 text-sm">
        {items.map((item) => {
          const isActive = activeId === item.id;
          const isH3 = item.level === 3;

          return (
            <li
              key={item.id}
              className={cn(
                'transition-all',
                isH3 ? 'pl-4 border-l-2 border-slate-200 dark:border-slate-700' : 'pl-0',
              )}
            >
              <a
                href={`#${item.id}`}
                className={cn(
                  'block py-1 text-xs leading-relaxed transition-colors hover:text-primary-600 dark:hover:text-primary-400',
                  isActive
                    ? 'font-bold text-primary-600 dark:text-primary-400'
                    : 'text-slate-600 dark:text-slate-400',
                )}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

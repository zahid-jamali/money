import * as React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  homeHref?: string;
  homeLabel?: string;
  showHomeIcon?: boolean;
  includeSchema?: boolean;
  className?: string;
}

export function Breadcrumbs({
  items,
  homeHref = '/',
  homeLabel = 'Home',
  showHomeIcon = true,
  includeSchema = true,
  className,
}: BreadcrumbsProps) {
  // Construct Schema.org BreadcrumbList
  const allBreadcrumbList = [{ label: homeLabel, href: homeHref }, ...items];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allBreadcrumbList.map((crumb, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: crumb.label,
      ...(crumb.href ? { item: crumb.href } : {}),
    })),
  };

  return (
    <>
      {includeSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}

      <nav
        aria-label="Breadcrumb"
        className={cn(
          'flex items-center text-xs sm:text-sm text-slate-500 dark:text-slate-400',
          className,
        )}
      >
        <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {/* Home Link */}
          <li className="inline-flex items-center">
            <Link
              href={homeHref}
              className="inline-flex items-center gap-1 hover:text-slate-900 dark:hover:text-slate-200 transition-colors focus:outline-none focus:ring-1 focus:ring-primary-500 rounded"
            >
              {showHomeIcon && <Home className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />}
              <span>{homeLabel}</span>
            </Link>
          </li>

          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={index} className="inline-flex items-center gap-1.5 sm:gap-2">
                <ChevronRight className="h-3.5 w-3.5 text-slate-400 shrink-0" aria-hidden="true" />

                {isLast || !item.href ? (
                  <span
                    aria-current={isLast ? 'page' : undefined}
                    className={cn(
                      'font-medium truncate max-w-[200px] sm:max-w-xs',
                      isLast
                        ? 'text-slate-900 dark:text-slate-100 font-semibold'
                        : 'text-slate-500 dark:text-slate-400',
                    )}
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors truncate max-w-[150px] sm:max-w-xs focus:outline-none focus:ring-1 focus:ring-primary-500 rounded"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

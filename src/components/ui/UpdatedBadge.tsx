import * as React from 'react';
import { ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface UpdatedBadgeProps {
  date: string | Date;
  label?: string;
  verifiedBy?: string;
  locale?: string;
  className?: string;
}

export function UpdatedBadge({
  date,
  label = 'Last checked:',
  verifiedBy,
  locale = 'en-GB',
  className,
}: UpdatedBadgeProps) {
  const formattedDate = React.useMemo(() => {
    try {
      const d = typeof date === 'string' ? new Date(date) : date;
      if (Number.isNaN(d.getTime())) return String(date);
      return new Intl.DateTimeFormat(locale, {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }).format(d);
    } catch {
      return String(date);
    }
  }, [date, locale]);

  return (
    <div
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border border-emerald-200/80 bg-emerald-50/70 px-3 py-1 text-xs font-medium text-emerald-800 shadow-sm',
        'dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-300',
        className,
      )}
    >
      <ShieldCheck
        className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 shrink-0"
        aria-hidden="true"
      />
      <span>
        <strong className="font-semibold">{label}</strong>{' '}
        <time dateTime={typeof date === 'string' ? date : date.toISOString()}>{formattedDate}</time>
      </span>
      {verifiedBy && (
        <>
          <span className="text-emerald-400 dark:text-emerald-600 select-none">•</span>
          <span className="text-emerald-700 dark:text-emerald-400">{verifiedBy}</span>
        </>
      )}
    </div>
  );
}

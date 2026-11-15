import * as React from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface FaqItem {
  question: string;
  answer: React.ReactNode;
  id?: string;
  defaultOpen?: boolean;
}

export interface FaqAccordionProps {
  items: FaqItem[];
  title?: string;
  description?: string;
  includeSchema?: boolean;
  className?: string;
}

export function FaqAccordion({
  items,
  title,
  description,
  includeSchema = true,
  className,
}: FaqAccordionProps) {
  // Construct FAQPage JSON-LD schema markup
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => {
      // In case answer is a React component or string, get plain text for schema if possible
      const plainAnswer =
        typeof item.answer === 'string'
          ? item.answer
          : `See detailed answer on page for: ${item.question}`;

      return {
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: plainAnswer,
        },
      };
    }),
  };

  return (
    <div className={cn('space-y-4 w-full', className)}>
      {includeSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}

      {(title || description) && (
        <div className="mb-4">
          {title && (
            <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-primary-600" aria-hidden="true" />
              {title}
            </h3>
          )}
          {description && (
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{description}</p>
          )}
        </div>
      )}

      <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white dark:divide-slate-800 dark:border-slate-800 dark:bg-slate-900 shadow-sm">
        {items.map((item, index) => {
          const itemId = item.id || `faq-${index}`;

          return (
            <details
              key={itemId}
              id={itemId}
              open={item.defaultOpen}
              className="group transition-colors"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between p-5 text-left font-semibold text-slate-900 hover:text-primary-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-xl transition-colors dark:text-slate-100 dark:hover:text-primary-400 [&::-webkit-details-marker]:hidden">
                <span className="text-base pr-4">{item.question}</span>
                <span className="ml-2 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 transition-transform duration-200 group-open:rotate-180 dark:bg-slate-800">
                  <ChevronDown className="h-4 w-4 text-slate-500 dark:text-slate-400" />
                </span>
              </summary>

              <div className="px-5 pb-5 pt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300 border-t border-slate-100/80 dark:border-slate-800/60 mt-1">
                {item.answer}
              </div>
            </details>
          );
        })}
      </div>
    </div>
  );
}

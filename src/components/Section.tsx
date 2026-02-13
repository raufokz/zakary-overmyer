import { cn } from '@/utils/cn';
import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export function Section({ id, title, subtitle, children, className, dark = false }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-20 px-4 sm:px-6 lg:px-8',
        dark ? 'bg-slate-925' : 'bg-slate-900',
        className
      )}
    >
      <div className="max-w-6xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
            <div className="mt-6 w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full" />
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/utils/cn';

interface SkillBarProps {
  name: string;
  level: number;
  delay?: number;
}

export function SkillBar({ name, level, delay = 0 }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), delay);
          observer.unobserve(element);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [level, delay]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-slate-200 font-medium text-sm">{name}</span>
        <span className="text-slate-500 text-xs font-mono">{level}%</span>
      </div>
      <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden backdrop-blur-sm">
        <div
          className={cn(
            'h-full rounded-full transition-all duration-1000 ease-out',
            'bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400',
            'shadow-[0_0_10px_rgba(59,130,246,0.5)]'
          )}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

import React from 'react';

interface StatsProps {
  className?: string;
}

export const Stats: React.FC<StatsProps> = ({ className = '' }) => {
  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '20+', label: 'Projects Delivered' },
    { value: '100%', label: 'Passion for Building' },
  ];

  return (
    <div
      className={`flex flex-wrap items-center gap-6 sm:gap-10 pt-8 border-t border-slate-200/80 ${className}`}
    >
      {stats.map((stat, idx) => (
        <React.Fragment key={stat.label}>
          <div className="flex flex-col">
            <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
              {stat.value}
            </span>
            <span className="text-xs sm:text-sm font-medium text-slate-500 uppercase tracking-wide mt-1">
              {stat.label}
            </span>
          </div>
          {idx < stats.length - 1 && (
            <div className="hidden sm:block h-10 w-px bg-slate-200/90 self-center" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Stats;

import React from 'react';

interface FloatingCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  className?: string;
  delay?: number;
}

export const FloatingCard: React.FC<FloatingCardProps> = ({
  icon,
  title,
  subtitle,
  className = '',
}) => {
  return (
    <div
      style={{
        background: 'rgba(255, 255, 255, 0.78)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(139, 92, 246, 0.14)',
        boxShadow: '0 15px 35px rgba(76, 29, 149, 0.08)',
      }}
      className={`rounded-2xl p-3.5 sm:p-4 flex items-center space-x-3.5 ${className}`}
    >
      <div className="w-10 h-10 rounded-xl bg-purple-50/90 border border-purple-100 flex items-center justify-center flex-shrink-0 text-purple-600 shadow-sm">
        {icon}
      </div>
      <div>
        <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
          {title}
        </h4>
        {subtitle && (
          <p className="text-[11px] font-medium text-slate-600 leading-tight mt-0.5">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default FloatingCard;

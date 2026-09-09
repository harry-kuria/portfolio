import React from 'react';

interface TechCardProps {
  className?: string;
}

export const TechCard: React.FC<TechCardProps> = ({ className = '' }) => {
  return (
    <div
      style={{
        background: 'rgba(255, 255, 255, 0.78)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(139, 92, 246, 0.14)',
        boxShadow: '0 15px 35px rgba(76, 29, 149, 0.08)',
      }}
      className={`rounded-2xl sm:rounded-3xl px-5 py-4 ${className}`}
    >
      <div className="flex items-center space-x-4 sm:space-x-5 mb-2.5">
        {/* Go Item */}
        <div className="flex items-center space-x-1.5">
          <div className="flex items-center font-black text-[13px] tracking-tighter text-[#00ACD7] leading-none select-none">
            <svg className="w-5 h-3.5 mr-0.5" viewBox="0 0 24 14" fill="currentColor">
              <path d="M0 2h7v2H0V2zm2 4h6v2H2V6zm3 4h4v2H5v-2z" opacity="0.85" />
              <path d="M12 0c-3.3 0-6 2.7-6 6s2.7 6 6 6c1.9 0 3.6-.9 4.7-2.3l-1.8-1.4c-.7.9-1.8 1.5-2.9 1.5-2.2 0-4-1.8-4-4s1.8-4 4-4c1.6 0 3 1 3.6 2.4h-3.6v2.2h6.2C18 2.8 15.3 0 12 0z" />
            </svg>
            <span className="text-slate-900 font-bold text-sm ml-0.5">Go</span>
          </div>
        </div>

        {/* React Item */}
        <div className="flex items-center space-x-1.5">
          <svg className="w-4 h-4 text-[#00D8FF] animate-spin" style={{ animationDuration: '12s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(0 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
          </svg>
          <span className="font-bold text-slate-900 text-sm">React</span>
        </div>

        {/* Kotlin Item */}
        <div className="flex items-center space-x-1.5">
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
            <defs>
              <linearGradient id="kotlinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7F52FF" />
                <stop offset="50%" stopColor="#C711E1" />
                <stop offset="100%" stopColor="#E4485D" />
              </linearGradient>
            </defs>
            <path d="M24 24H0V0h24L12 12z" fill="url(#kotlinGrad)" />
          </svg>
          <span className="font-bold text-slate-900 text-sm">Kotlin</span>
        </div>
      </div>

      {/* Categories Row */}
      <div className="flex items-center justify-between text-[11px] font-medium text-slate-500 pt-2 border-t border-slate-200/60">
        <span>Backend</span>
        <span className="text-slate-300">•</span>
        <span>Web</span>
        <span className="text-slate-300">•</span>
        <span>Mobile</span>
      </div>
    </div>
  );
};

export default TechCard;

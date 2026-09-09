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
        {/* Kotlin Item */}
        <div className="flex items-center space-x-1.5">
          <svg className="w-4 h-4" viewBox="0 0 24 24">
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

        {/* Compose Item */}
        <div className="flex items-center space-x-1.5">
          <svg className="w-4 h-4 text-[#3DDC84]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-1.0003s.4482-1.0003 1.0003-1.0003c.5511 0 .9993.4486.9993 1.0003.001 1.0003-.4492 1.0003-1.0003 1.0003m-11.046 0c-.5511 0-.9993-.4486-.9993-1.0003s.4482-1.0003 1.0003-1.0003c.5511 0 .9993.4486.9993 1.0003 0 1.0003-.4482 1.0003-1.0003 1.0003m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.411 13.8553 8.125 12 8.125s-3.5902.286-5.1368.8247L4.8409 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396" />
          </svg>
          <span className="font-bold text-slate-900 text-sm">Compose</span>
        </div>
      </div>

      {/* Categories Row */}
      <div className="flex items-center justify-between text-[11px] font-medium text-slate-500 pt-2 border-t border-slate-200/60">
        <span>Mobile</span>
        <span className="text-slate-300">•</span>
        <span>Go Backend</span>
        <span className="text-slate-300">•</span>
        <span>Distributed</span>
      </div>
    </div>
  );
};

export default TechCard;

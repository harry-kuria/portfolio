import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Layers, Lightbulb, ShieldCheck } from 'lucide-react';
import { IMAGES } from '../constants';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 sm:py-28 lg:py-36 bg-white overflow-hidden border-t border-purple-100/50">
      {/* Ambient background studio lighting */}
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-purple-100/35 rounded-full blur-[140px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[480px] h-[480px] bg-violet-100/30 rounded-full blur-[130px] -z-10 pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* UPPER-RIGHT EDITORIAL SIGNATURE */}
        <div className="flex justify-end mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-right select-none pointer-events-none"
          >
            <p className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.18em] text-[#64748B] leading-[1.3]">
              ENGINEERED
            </p>
            <p className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.18em] text-[#64748B] leading-[1.3]">
              WITH <span className="text-[#8B5CF6]">PURPOSE</span>
            </p>
            <div className="w-[45px] h-[2px] bg-[#8B5CF6] rounded-full ml-auto mt-2.5" />
          </motion.div>
        </div>

        {/* TWO-COLUMN EDITORIAL COMPOSITION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-start">
          {/* ========================================================= */}
          {/* DESKTOP LEFT COLUMN (40-42% WIDTH) - EDITORIAL PORTRAIT */}
          {/* ========================================================= */}
          <div className="hidden lg:block lg:col-span-5 relative sticky top-24">
            <div className="relative w-full max-w-[440px] xl:max-w-[480px] mx-auto">
              {/* Studio ambient lavender/purple radial glow behind image extending outside frame */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[140%] -z-10 pointer-events-none">
                <div
                  className="w-full h-full rounded-full blur-[85px] opacity-85"
                  style={{
                    background:
                      'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.22) 0%, rgba(196, 181, 253, 0.14) 40%, rgba(221, 214, 254, 0.08) 60%, transparent 72%)',
                  }}
                />
              </div>

              {/* VERTICAL EDITORIAL TYPOGRAPHY ON FAR LEFT */}
              <div className="flex flex-col justify-between absolute -left-11 xl:-left-12 inset-y-10 select-none pointer-events-none z-20">
                <div className="[writing-mode:vertical-rl] rotate-180 text-[10px] font-bold uppercase tracking-[0.26em] text-[#94A3B8]">
                  HARRISON KURIA
                </div>
                <div className="[writing-mode:vertical-rl] rotate-180 text-[9px] font-extrabold uppercase tracking-[0.24em] text-[#8B5CF6]/75 mt-8">
                  SOFTWARE DEVELOPER
                </div>
              </div>

              {/* MAIN EDITORIAL PORTRAIT FRAME */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{
                  borderRadius: '32px',
                  border: '1px solid rgba(139, 92, 246, 0.12)',
                  boxShadow: '0 30px 80px rgba(76, 29, 149, 0.12)',
                }}
                className="relative z-10 w-full overflow-hidden bg-slate-950 flex flex-col justify-end group"
              >
                <img
                  src={IMAGES.about}
                  alt="Harrison Kuria - Seated Editorial Portrait"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[750px] xl:h-[820px] object-cover object-[center_25%] select-none hover:scale-[1.012] transition-transform duration-700"
                />

                {/* Subtle soft edge gradient transition at the very bottom edge */}
                <div className="absolute bottom-0 inset-x-0 h-28 pointer-events-none bg-gradient-to-t from-slate-950/35 via-slate-950/10 to-transparent" />

                {/* BOTTOM-LEFT EDITORIAL TYPOGRAPHY: BUILD SOLVE IMPROVE REPEAT */}
                <div className="absolute bottom-5 left-5 z-20 select-none pointer-events-none">
                  <div className="flex flex-col space-y-0.5 text-left">
                    <span className="text-[10px] font-black uppercase tracking-[0.24em] text-[#C084FC] drop-shadow-sm">
                      BUILD
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/80 drop-shadow-sm">
                      SOLVE
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/80 drop-shadow-sm">
                      IMPROVE
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-[0.24em] text-[#C084FC] drop-shadow-sm">
                      REPEAT
                    </span>
                  </div>
                  <div className="w-6 h-[1.5px] bg-[#A855F7] rounded-full mt-1.5" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN (58-60% WIDTH ON DESKTOP) */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* 1. ABOUT EYEBROW */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center self-start mb-4"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#8B5CF6] mr-2.5 shadow-sm shadow-purple-500/40" />
              <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#7C3AED]">
                ABOUT ME
              </span>
            </motion.div>

            {/* 2. MAIN ABOUT HEADLINE */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-black text-slate-950 leading-[1.05] tracking-[-0.03em] mb-6 font-sans overflow-visible pb-2"
            >
              <span className="block text-slate-950">
                Building technology
              </span>
              <span className="block mt-1 sm:mt-1.5 overflow-visible">
                <span
                  className="inline-block relative overflow-visible"
                  style={{
                    filter: 'drop-shadow(0 2px 4px rgba(124, 58, 237, 0.08))',
                    paddingBottom: '0.22em',
                    marginBottom: '-0.22em',
                  }}
                >
                  <span
                    className="hero-highlight-gradient"
                    style={{
                      paddingBottom: '0.24em',
                      marginBottom: '-0.24em',
                      paddingRight: '0.08em',
                      display: 'inline-block',
                      overflow: 'visible',
                    }}
                  >
                    for a better tomorrow.
                  </span>
                </span>
              </span>
            </motion.h2>

            {/* 3. INTRODUCTION BODY COPY */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#475569] text-base sm:text-[17px] lg:text-[18px] leading-[1.6] font-normal mb-8 max-w-[640px]"
            >
              <p className="mb-4">
                Hi, I'm Harrison Kuria — a software developer passionate about building{' '}
                <span className="text-purple-700 font-semibold">scalable backend systems</span>,{' '}
                <span className="text-purple-700 font-semibold">modern web applications</span>, and{' '}
                <span className="text-purple-700 font-semibold">native mobile experiences</span>.
              </p>
              <p>
                I enjoy turning ideas into real products, solving meaningful problems, and creating seamless
                experiences that make a positive impact. I'm constantly learning, exploring new technologies,
                and looking for better ways to build.
              </p>
            </motion.div>

            {/* 4. MOBILE PHOTO (RENDERED EXCLUSIVELY ON MOBILE / TABLET IN STRICT SEQUENCE) */}
            <div className="block lg:hidden w-full mb-10">
              <div className="relative max-w-[420px] sm:max-w-[460px] mx-auto">
                {/* Ambient glow behind mobile photograph */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[130%] -z-10 pointer-events-none">
                  <div
                    className="w-full h-full rounded-full blur-[65px] opacity-80"
                    style={{
                      background:
                        'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.22) 0%, rgba(196, 181, 253, 0.14) 40%, transparent 72%)',
                    }}
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  style={{
                    borderRadius: '32px',
                    border: '1px solid rgba(139, 92, 246, 0.12)',
                    boxShadow: '0 25px 60px rgba(76, 29, 149, 0.10)',
                  }}
                  className="relative z-10 w-full overflow-hidden bg-slate-950"
                >
                  <img
                    src={IMAGES.about}
                    alt="Harrison Kuria - Seated Editorial Portrait"
                    className="w-full h-[520px] sm:h-[600px] object-cover object-[center_24%] select-none"
                  />

                  {/* Very subtle soft edge gradient at bottom edge */}
                  <div className="absolute bottom-0 inset-x-0 h-24 pointer-events-none bg-gradient-to-t from-slate-950/35 via-slate-950/10 to-transparent" />

                  {/* Bottom-left mobile editorial badge */}
                  <div className="absolute bottom-4 left-4 z-20 select-none pointer-events-none">
                    <div className="flex flex-col space-y-0.5 text-left">
                      <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#C084FC]">
                        BUILD
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/80">
                        SOLVE
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/80">
                        IMPROVE
                      </span>
                      <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#C084FC]">
                        REPEAT
                      </span>
                    </div>
                    <div className="w-6 h-[1.5px] bg-[#A855F7] rounded-full mt-1.5" />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* 5. TECHNOLOGY CARDS */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-9"
            >
              {/* Card 1: Go · Backend */}
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.65)',
                  backdropFilter: 'blur(18px)',
                  WebkitBackdropFilter: 'blur(18px)',
                  border: '1px solid rgba(139, 92, 246, 0.12)',
                  boxShadow: '0 6px 18px rgba(76, 29, 149, 0.04)',
                }}
                className="rounded-xl px-3.5 py-3 transition-all duration-300 hover:border-purple-300 hover:-translate-y-0.5"
              >
                <div className="flex items-center space-x-1.5 mb-1">
                  <div className="flex items-center font-black text-[13px] tracking-tighter text-[#00ACD7] leading-none select-none">
                    <svg className="w-4 h-3 mr-1" viewBox="0 0 24 14" fill="currentColor">
                      <path d="M0 2h7v2H0V2zm2 4h6v2H2V6zm3 4h4v2H5v-2z" opacity="0.85" />
                      <path d="M12 0c-3.3 0-6 2.7-6 6s2.7 6 6 6c1.9 0 3.6-.9 4.7-2.3l-1.8-1.4c-.7.9-1.8 1.5-2.9 1.5-2.2 0-4-1.8-4-4s1.8-4 4-4c1.6 0 3 1 3.6 2.4h-3.6v2.2h6.2C18 2.8 15.3 0 12 0z" />
                    </svg>
                    <span className="text-slate-900 font-bold text-[13px]">Go</span>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400">· Backend</span>
                </div>
                <p className="text-[11.5px] text-slate-500 font-medium">Scalable systems</p>
              </div>

              {/* Card 2: React · Web */}
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.65)',
                  backdropFilter: 'blur(18px)',
                  WebkitBackdropFilter: 'blur(18px)',
                  border: '1px solid rgba(139, 92, 246, 0.12)',
                  boxShadow: '0 6px 18px rgba(76, 29, 149, 0.04)',
                }}
                className="rounded-xl px-3.5 py-3 transition-all duration-300 hover:border-purple-300 hover:-translate-y-0.5"
              >
                <div className="flex items-center space-x-1.5 mb-1">
                  <svg className="w-3.5 h-3.5 text-[#00D8FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(0 12 12)" />
                    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
                    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
                    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                  </svg>
                  <span className="font-bold text-slate-900 text-[13px]">React</span>
                  <span className="text-[11px] font-semibold text-slate-400">· Web</span>
                </div>
                <p className="text-[11.5px] text-slate-500 font-medium">Modern experiences</p>
              </div>

              {/* Card 3: Kotlin · Mobile */}
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.65)',
                  backdropFilter: 'blur(18px)',
                  WebkitBackdropFilter: 'blur(18px)',
                  border: '1px solid rgba(139, 92, 246, 0.12)',
                  boxShadow: '0 6px 18px rgba(76, 29, 149, 0.04)',
                }}
                className="rounded-xl px-3.5 py-3 transition-all duration-300 hover:border-purple-300 hover:-translate-y-0.5"
              >
                <div className="flex items-center space-x-1.5 mb-1">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="aboutKotlinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#7F52FF" />
                        <stop offset="50%" stopColor="#C711E1" />
                        <stop offset="100%" stopColor="#E4485D" />
                      </linearGradient>
                    </defs>
                    <path d="M24 24H0V0h24L12 12z" fill="url(#aboutKotlinGrad)" />
                  </svg>
                  <span className="font-bold text-slate-900 text-[13px]">Kotlin</span>
                  <span className="text-[11px] font-semibold text-slate-400">· Mobile</span>
                </div>
                <p className="text-[11.5px] text-slate-500 font-medium">Native performance</p>
              </div>
            </motion.div>

            {/* 6. VALUES / ENGINEERING PRINCIPLES (EDITORIAL TIMELINE) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative pl-6 border-l-2 border-purple-200/60 space-y-6 mb-10 max-w-[620px]"
            >
              {/* Principle 1 */}
              <div className="relative group">
                <span className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#8B5CF6] group-hover:bg-[#8B5CF6] transition-colors" />
                <h4 className="text-xs sm:text-sm font-black uppercase tracking-[0.16em] text-slate-900 mb-1 flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-[#8B5CF6]" />
                  SYSTEMS THINKING
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed font-normal">
                  I design scalable, reliable systems with a long-term view.
                </p>
              </div>

              {/* Principle 2 */}
              <div className="relative group">
                <span className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#8B5CF6] group-hover:bg-[#8B5CF6] transition-colors" />
                <h4 className="text-xs sm:text-sm font-black uppercase tracking-[0.16em] text-slate-900 mb-1 flex items-center gap-2">
                  <Lightbulb className="w-3.5 h-3.5 text-[#8B5CF6]" />
                  PRODUCT MINDSET
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed font-normal">
                  I focus on real user needs and business impact.
                </p>
              </div>

              {/* Principle 3 */}
              <div className="relative group">
                <span className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#8B5CF6] group-hover:bg-[#8B5CF6] transition-colors" />
                <h4 className="text-xs sm:text-sm font-black uppercase tracking-[0.16em] text-slate-900 mb-1 flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#8B5CF6]" />
                  CLEAN ENGINEERING
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed font-normal">
                  I write maintainable, efficient code that stands the test of time.
                </p>
              </div>
            </motion.div>

            {/* 7. CALL TO ACTION & AVAILABILITY */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 sm:gap-6"
            >
              {/* Primary CTA Button */}
              <a
                href="#contact"
                className="group px-7 py-3.5 rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-violet-600 text-white font-semibold text-base shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/35 hover:-translate-y-0.5 active:scale-95 transition-all flex items-center justify-center space-x-2"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary CTA Button */}
              <a
                href="#projects"
                className="px-7 py-3.5 rounded-full bg-white text-purple-700 font-semibold text-base border border-purple-200/90 shadow-sm hover:shadow-md hover:bg-purple-50/50 hover:border-purple-300 hover:-translate-y-0.5 active:scale-95 transition-all flex items-center justify-center"
              >
                View My Work
              </a>

              {/* Availability Indicator */}
              <div className="flex items-center space-x-2 text-slate-600 text-sm font-medium py-1">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span>Available for opportunities</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

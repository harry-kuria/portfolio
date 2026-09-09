import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Send, BarChart3 } from 'lucide-react';
import { IMAGES } from '../constants';
import TechCard from './TechCard';
import FloatingCard from './FloatingCard';
import Stats from './Stats';

export const Hero: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setImageLoaded(true);
    }
  }, []);

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center pt-24 pb-16 lg:pt-28 lg:pb-20 overflow-hidden bg-white">
      {/* ================================================== */}
      {/* ATMOSPHERIC BACKGROUND GRADIENTS & GLOWS */}
      {/* ================================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        {/* Subtle lavender atmosphere across the hero */}
        <div
          className="absolute top-[-5%] right-[-5%] w-[65vw] h-[65vw] max-w-[850px] max-h-[850px] rounded-full blur-[140px] opacity-40"
          style={{
            background: 'radial-gradient(circle at 60% 40%, rgba(233, 213, 255, 0.70) 0%, rgba(216, 180, 254, 0.35) 45%, transparent 75%)',
          }}
        />

        {/* Soft lavender/purple ambient glow */}
        <div
          className="absolute top-[25%] right-[10%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] rounded-full blur-[130px] opacity-35"
          style={{
            background: 'radial-gradient(circle, rgba(221, 214, 254, 0.60) 0%, rgba(192, 132, 252, 0.20) 50%, transparent 75%)',
          }}
        />

        {/* Delicate ambient lavender highlight on left side */}
        <div
          className="absolute top-[15%] left-[-10%] w-[45vw] h-[45vw] max-w-[550px] max-h-[550px] rounded-full blur-[140px] opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(243, 232, 255, 0.75) 0%, rgba(233, 213, 255, 0.35) 50%, transparent 80%)',
          }}
        />
      </div>

      {/* ================================================== */}
      {/* MAIN CONTAINER (TWO-COLUMN DESKTOP COMPOSITION) */}
      {/* ================================================== */}
      <div className="w-full relative z-10 pl-[5vw] pr-6 sm:pr-8 lg:pr-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* ============================================== */}
          {/* LEFT COLUMN (52-55% WIDTH) */}
          {/* ============================================== */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left pt-2 lg:pt-0 max-w-[680px]">
            {/* EYEBROW PILL */}
            <div className="inline-flex items-center self-start px-4 py-1.5 rounded-full bg-purple-50/80 border border-purple-200/60 shadow-sm shadow-purple-500/5 mb-5">
              <span className="relative flex h-2 w-2 mr-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600" />
              </span>
              <span className="text-purple-800 text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase font-sans">
                Building experiences through lines of code
              </span>
            </div>

            {/* MAIN HEADLINE */}
            <h1 className="text-[40px] sm:text-[50px] md:text-[58px] lg:text-[64px] xl:text-[72px] font-black text-slate-950 leading-[1.08] tracking-[-0.035em] mb-4 font-sans">
              <span className="block whitespace-nowrap">
                I create{' '}
                <span className="hero-highlight-word">
                  <span className="hero-highlight-gradient">seamless</span>
                </span>
              </span>
              <span className="block whitespace-nowrap">
                experiences that
              </span>
              <span className="block whitespace-nowrap">
                leave a{' '}
                <span className="hero-highlight-word">
                  <span className="hero-highlight-gradient">lasting</span>
                </span>
              </span>
              <span className="block whitespace-nowrap">
                impression.
              </span>
            </h1>

            {/* SUBHEADLINE */}
            <div className="text-xl sm:text-2xl lg:text-[26px] font-extrabold tracking-tight mb-4 flex flex-wrap items-center gap-x-2 font-sans">
              <span className="text-slate-900 font-bold">from</span>
              <span className="text-[#0284C7] font-extrabold">Backend</span>
              <span className="text-slate-400 font-medium">to</span>
              <span className="text-purple-600 font-extrabold">Frontend</span>
              <span className="text-slate-400 font-medium">to</span>
              <span className="text-violet-700 font-extrabold">Mobile</span>
            </div>

            {/* DESCRIPTION */}
            <p className="text-slate-500 text-base sm:text-lg leading-relaxed max-w-[600px] font-normal mb-6 font-sans">
              I design and build modern, scalable applications that solve real problems and create meaningful impact.
            </p>

            {/* CTA AREA */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-7">
              {/* Primary Button */}
              <a
                href="#projects"
                className="group px-7 py-3.5 rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-violet-600 text-white font-semibold text-base shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/35 hover:-translate-y-0.5 active:scale-95 transition-all flex items-center justify-center space-x-2.5"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary Button */}
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-full bg-white/90 backdrop-blur-sm text-purple-700 font-semibold text-base border border-purple-200/90 shadow-sm hover:shadow-md hover:bg-purple-50/50 hover:border-purple-300 hover:-translate-y-0.5 active:scale-95 transition-all flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4 text-purple-600" />
                <span>Let's Connect</span>
              </a>

              {/* Status Indicator */}
              <div className="flex items-center space-x-2 pl-2 sm:pl-3 py-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-slate-600 font-medium text-sm sm:text-base">
                  Available for opportunities
                </span>
              </div>
            </div>

            {/* STATS SECTION (DESKTOP: POSITIONED ON LEFT COLUMN) */}
            <div className="hidden lg:block">
              <Stats className="max-w-[600px]" />
            </div>
          </div>

          {/* ============================================== */}
          {/* RIGHT COLUMN (42-46% VIEWPORT - PORTRAIT & CARDS) */}
          {/* ============================================== */}
          <div className="lg:col-span-5 relative flex flex-col items-center lg:items-end mt-10 lg:mt-0">
            <div className="relative w-full max-w-[430px] sm:max-w-[470px] lg:max-w-[500px] xl:max-w-[540px] flex justify-center items-end">
              {/* Large soft purple/lavender glow BEHIND the photograph extending beyond frame */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] -z-10 pointer-events-none">
                <div
                  className="w-full h-full rounded-full blur-[90px] opacity-80"
                  style={{
                    background:
                      'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.28) 0%, rgba(196, 181, 253, 0.18) 35%, rgba(255, 255, 255, 0) 72%)',
                  }}
                />
              </div>

              {/* MAIN PORTRAIT CONTAINER - 36px rounded rectangular editorial presentation */}
              <div
                style={{
                  borderRadius: '36px',
                  border: '1px solid rgba(139, 92, 246, 0.12)',
                  boxShadow: '0 30px 80px rgba(76, 29, 149, 0.12)',
                }}
                className="relative z-10 w-full overflow-hidden bg-[#FAF9FF]"
              >
                <img
                  ref={imgRef}
                  src={IMAGES.hero}
                  alt="Harrison Thiong'o Kuria"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  onLoad={() => setImageLoaded(true)}
                  className={`w-full h-[440px] sm:h-[490px] lg:h-[600px] xl:h-[650px] object-cover object-[center_top] select-none hover:scale-[1.01] transition-all duration-200 ease-out ${
                    imageLoaded ? 'opacity-100 filter-none' : 'opacity-0 blur-[2px]'
                  }`}
                />

                {/* Subtle gradient edge transition on left boundary: WHITE -> VERY LIGHT LAVENDER -> PHOTO */}
                <div
                  className="absolute inset-y-0 left-0 w-16 sm:w-24 lg:w-28 pointer-events-none z-10"
                  style={{
                    background:
                      'linear-gradient(to right, rgba(255, 255, 255, 0.45) 0%, rgba(245, 243, 255, 0.22) 40%, rgba(237, 233, 254, 0.08) 70%, transparent 100%)',
                  }}
                />

                {/* Subtle bottom edge grounding shadow */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/40 via-slate-950/10 to-transparent pointer-events-none" />
              </div>

              {/* FLOATING TECHNOLOGY CARD (UPPER-RIGHT) */}
              <div className="absolute -top-3 right-1 sm:-top-5 sm:-right-4 lg:-right-6 z-20 animate-float-slow scale-[0.88] sm:scale-95 lg:scale-100 origin-top-right">
                <TechCard className="w-[270px] sm:w-[300px]" />
              </div>

              {/* FLOATING CARD #2 (LOWER-LEFT - TURNING IDEAS INTO REAL PRODUCTS) */}
              <div className="absolute bottom-12 sm:bottom-16 -left-2 sm:-left-5 lg:-left-7 z-20 animate-float-delayed scale-[0.88] sm:scale-95 lg:scale-100 origin-bottom-left">
                <FloatingCard
                  icon={<BarChart3 className="w-5 h-5 text-purple-600" />}
                  title="Turning ideas"
                  subtitle="into real products"
                />
              </div>

              {/* EDITORIAL ACCENT (LOWER-RIGHT) */}
              <div className="absolute -bottom-10 sm:-bottom-11 right-2 sm:right-3 text-right z-20 select-none pointer-events-none">
                <div className="w-[50px] h-[2px] bg-[#8B5CF6] rounded-full ml-auto mt-3 sm:mt-3.5" />
              </div>
            </div>

            {/* STATS SECTION (MOBILE: STACKED NATURALLY AFTER PORTRAIT & CARDS) */}
            <div className="block lg:hidden w-full mt-14 sm:mt-16">
              <Stats className="max-w-[600px] mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

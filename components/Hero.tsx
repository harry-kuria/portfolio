import React from 'react';
import { Github, Linkedin, Mail, ArrowRight, Terminal, Cpu } from 'lucide-react';
import { PERSONAL_INFO, IMAGES } from '../constants';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-slate-950">
      {/* Background Orbs */}
      <div className="absolute top-[10%] right-[-5%] w-[40vw] h-[40vw] bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[30vw] h-[30vw] bg-cyan-600/10 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-8 tracking-widest uppercase"
            >
              <span className="relative flex h-2 w-2 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Building experiences through lines of code
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight"
            >
              I Create seamless experiences that leave a lasting impression
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-400 leading-[1.3] mb-8 tracking-tight"
            >
              from <span className="text-[#00D9FF] drop-shadow-[0_0_20px_rgba(0,217,255,0.9)]">Backend</span> to <span className="text-[#61DAFB] drop-shadow-[0_0_20px_rgba(97,218,251,0.9)]">Frontend</span> to <span className="text-[#A855F7] drop-shadow-[0_0_20px_rgba(168,85,247,0.9)]">Mobile</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl md:text-2xl text-slate-400 mb-10 leading-relaxed font-medium max-w-2xl"
            >
              Hey there👋 I'm <span className="text-white font-bold">{PERSONAL_INFO.firstName}</span>, a Software Engineer specialized in <span className="text-blue-400">Go Backend</span> systems, <span className="text-cyan-400">Mobile Architectures</span>, and high-end <span className="text-white">React JS</span> web interfaces.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center space-y-5 sm:space-y-0 sm:space-x-6"
            >
              <a href="#projects" className="w-full sm:w-auto px-10 py-5 bg-white text-slate-950 rounded-2xl font-black shadow-2xl shadow-white/5 hover:bg-blue-500 hover:text-white hover:translate-y-[-4px] transition-all flex items-center justify-center group active:scale-95">
                Explore Work
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>


              <div className="flex items-center space-x-5 pt-4 sm:pt-0">
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-900/50 border border-white/5 rounded-2xl text-slate-400 hover:text-white hover:border-white/20 transition-all hover:bg-slate-800">
                  <Github className="w-7 h-7" />
                </a>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-900/50 border border-white/5 rounded-2xl text-slate-400 hover:text-white hover:border-white/20 transition-all hover:bg-slate-800">
                  <Linkedin className="w-7 h-7" />
                </a>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-[300px] h-[400px] sm:w-[400px] sm:h-[520px] animate-float"
            >
              {/* Image Frame with Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-[2.5rem] opacity-30 blur-2xl"></div>
              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-3xl bg-slate-900">
                <img
                  src={IMAGES.hero}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                />
              </div>

              {/* Status Floating Cards */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -bottom-8 -left-8 glass-card p-5 rounded-[2rem] shadow-2xl flex items-center space-x-4 border-white/10"
              >
                <div className="bg-blue-500/20 p-3 rounded-2xl">
                  <Terminal className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-black uppercase tracking-widest">Experience</p>
                  <p className="text-white font-bold text-xl">5+ Years</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="absolute top-10 -right-8 glass-card p-4 rounded-2xl shadow-2xl border-white/10 hidden sm:block"
              >
                <div className="flex items-center space-x-2">
                  <Cpu className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm font-bold text-slate-300">Go / React / Kotlin</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

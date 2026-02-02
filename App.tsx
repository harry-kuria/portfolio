
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { IMAGES, PERSONAL_INFO } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-blue-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        
        {/* Tech Marquee / Quick Stats */}
        <section className="bg-slate-900/30 border-y border-white/5 py-16">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              <div className="text-center group">
                <p className="text-5xl font-black text-white mb-2 group-hover:text-blue-500 transition-colors">5+</p>
                <p className="text-slate-500 text-xs font-black uppercase tracking-[0.2em]">Years Code</p>
              </div>
              <div className="text-center group">
                <p className="text-5xl font-black text-white mb-2 group-hover:text-cyan-500 transition-colors">25+</p>
                <p className="text-slate-500 text-xs font-black uppercase tracking-[0.2em]">Live Apps</p>
              </div>
              <div className="text-center group">
                <p className="text-5xl font-black text-white mb-2 group-hover:text-blue-500 transition-colors">200k+</p>
                <p className="text-slate-500 text-xs font-black uppercase tracking-[0.2em]">Users Served</p>
              </div>
              <div className="text-center group">
                <p className="text-5xl font-black text-white mb-2 group-hover:text-cyan-500 transition-colors">∞</p>
                <p className="text-slate-500 text-xs font-black uppercase tracking-[0.2em]">Scalability</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 bg-slate-950 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
              <div className="lg:col-span-5 relative">
                <div className="relative z-10 rounded-[3.5rem] overflow-hidden border border-white/10 shadow-3xl">
                   <img 
                    src={IMAGES.about} 
                    alt="Harrison Professional" 
                    className="w-full object-cover aspect-[4/5]"
                   />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl"></div>
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-cyan-600/10 rounded-full blur-2xl"></div>
              </div>
              
              <div className="lg:col-span-7">
                <h2 className="text-blue-500 font-black uppercase tracking-widest text-sm mb-6 italic">Background</h2>
                <h3 className="text-5xl md:text-6xl font-black text-white mb-10 leading-[1.1]">
                  Solving at <span className="text-gradient">Scale</span>. <br />
                  Architecting for <span className="text-gradient">Performance</span>.
                </h3>
                <p className="text-slate-400 text-xl leading-relaxed mb-10 font-medium">
                  Based in Nairobi, I am a software engineer focused on building 
                  high-throughput backend ecosystems and sleek, native mobile experiences. 
                  Whether it's a Go-based microservice or a React-powered dashboard, 
                  I prioritize code clarity, system resilience, and user delight.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="glass-card p-8 rounded-3xl border border-white/5 hover:bg-white/5 transition-colors">
                    <p className="text-white font-black text-lg mb-2">Education</p>
                    <p className="text-slate-500 font-medium">BSc. Information Technology, <br />Karatina University</p>
                  </div>
                  <div className="glass-card p-8 rounded-3xl border border-white/5 hover:bg-white/5 transition-colors">
                    <p className="text-white font-black text-lg mb-2">Philosophy</p>
                    <p className="text-slate-500 font-medium italic">"Simplicity is the ultimate sophistication in systems design."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <footer className="py-12 border-t border-white/5 bg-slate-950 text-center">
        <p className="text-slate-700 font-mono text-xs uppercase tracking-[0.5em]">Built with Passion & React</p>
      </footer>
    </div>
  );
};

export default App;

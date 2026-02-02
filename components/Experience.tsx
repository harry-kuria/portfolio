
import React from 'react';
import { EXPERIENCES } from '../constants';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 bg-slate-950">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="mb-20 text-center">
          <h2 className="text-cyan-500 font-black uppercase tracking-widest text-sm mb-4">The Journey</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white italic">Career Timeline.</h3>
        </div>

        <div className="space-y-16">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="group relative pl-12 border-l border-white/10 hover:border-blue-500 transition-all duration-500">
              {/* Timeline Indicator */}
              <div className="absolute -left-[5px] top-0 w-[10px] h-[10px] rounded-full bg-slate-950 border-2 border-slate-700 group-hover:bg-blue-500 group-hover:border-blue-400 group-hover:scale-150 transition-all"></div>
              
              <div className="mb-4 flex flex-wrap items-center gap-4">
                <span className="px-4 py-1 bg-blue-500/10 text-blue-400 text-xs font-black rounded-full uppercase tracking-tighter border border-blue-500/20">
                  {exp.type}
                </span>
                <span className="text-slate-500 text-sm font-bold flex items-center bg-slate-900/50 px-3 py-1 rounded-lg border border-white/5">
                  <Calendar className="w-4 h-4 mr-2" /> {exp.period}
                </span>
              </div>

              <h4 className="text-3xl font-black text-white group-hover:text-blue-400 transition-colors">{exp.role}</h4>
              <div className="flex items-center text-slate-300 font-bold mb-6 mt-2">
                <Briefcase className="w-5 h-5 mr-2 text-blue-500" />
                {exp.company}
                <span className="mx-4 text-slate-700 hidden sm:inline">|</span>
                <MapPin className="w-5 h-5 mr-1 text-slate-500" />
                <span className="text-slate-500 font-medium hidden sm:inline">{exp.location}</span>
              </div>

              <div className="glass-card p-8 rounded-[2rem] border border-white/5 group-hover:border-white/10 transition-all">
                <ul className="space-y-4">
                  {exp.description.map((item, iIdx) => (
                    <li key={iIdx} className="text-slate-400 leading-relaxed flex items-start text-lg">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

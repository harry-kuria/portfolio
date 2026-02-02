
import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Code, Smartphone, Zap, ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24">
          <div className="mb-8 md:mb-0">
            <h2 className="text-blue-500 font-black uppercase tracking-widest text-sm mb-4">Works</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white">Selected Projects.</h3>
          </div>
          <p className="max-w-sm text-slate-400 font-medium text-lg leading-relaxed">
            Architecting solutions from Go backends to fluid React frontends and Native Android SDKs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="group glass-card rounded-[3rem] overflow-hidden border border-white/5 hover:border-white/20 hover:translate-y-[-8px] transition-all duration-700">
              <div className="p-10">
                <div className="flex justify-between items-start mb-10">
                  <div className="w-16 h-16 bg-slate-900 border border-white/5 text-blue-500 rounded-3xl flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                    {project.tags.includes('Android') ? <Smartphone className="w-8 h-8" /> : <Zap className="w-8 h-8" />}
                  </div>
                  {project.link ? (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-4 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-blue-600 transition-all"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  ) : (
                    <div className="p-4 rounded-full bg-white/5 text-slate-600">
                      <Code className="w-6 h-6" />
                    </div>
                  )}
                </div>

                <h4 className="text-3xl font-black text-white mb-4 group-hover:text-blue-400 transition-colors flex items-center">
                  {project.title}
                  <ArrowUpRight className="ml-2 w-6 h-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </h4>
                <p className="text-slate-400 mb-8 text-lg font-medium leading-relaxed">{project.description}</p>
                
                <div className="space-y-4 mb-10">
                  {project.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start text-slate-500 font-medium">
                      <div className="w-2 h-2 bg-slate-700 rounded-full mt-2.5 mr-4 flex-shrink-0 group-hover:bg-blue-500 transition-colors"></div>
                      {detail}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-5 py-2 bg-slate-900 text-slate-400 text-xs font-black rounded-xl border border-white/5 group-hover:border-blue-500/30 group-hover:text-blue-400 transition-all uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

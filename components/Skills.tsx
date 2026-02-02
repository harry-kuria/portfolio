
import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../constants';
import { 
  Code2, 
  Smartphone, 
  Server, 
  Cloud,
  Check,
  Terminal,
  Cpu
} from 'lucide-react';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const getIcon = (category: string) => {
    switch (category) {
      case "Backend Engineering":
        return <Server className="w-6 h-6" />;
      case "Mobile Systems":
        return <Smartphone className="w-6 h-6" />;
      case "Modern Web":
        return <Code2 className="w-6 h-6" />;
      case "DevOps & Cloud":
        return <Cloud className="w-6 h-6" />;
      default:
        return <Terminal className="w-6 h-6" />;
    }
  };

  return (
    <section id="skills" className="py-32 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        <div className="mb-20">
          <h2 className="text-blue-500 font-black uppercase tracking-widest text-sm mb-4">Core Competencies</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white">Technical Ecosystem.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES?.map((cat, idx) => (
            <div 
              key={cat.category || idx} 
              onClick={() => setActiveCategory(activeCategory === cat.category ? null : cat.category)}
              className={`group glass-card p-10 rounded-[2.5rem] border transition-all duration-500 cursor-pointer ${
                activeCategory === cat.category 
                ? 'border-blue-500 bg-blue-500/5 shadow-2xl shadow-blue-500/10' 
                : 'border-white/5 hover:border-blue-500/30'
              }`}
            >
              <div className={`w-16 h-16 rounded-3xl flex items-center justify-center mb-10 transition-all duration-500 ${
                activeCategory === cat.category
                ? 'bg-blue-500 text-white scale-110'
                : 'bg-slate-900 border border-white/5 text-blue-500 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white'
              }`}>
                {getIcon(cat.category)}
              </div>
              <h4 className="text-2xl font-bold text-white mb-8">{cat.category}</h4>
              <ul className="space-y-4">
                {cat.skills?.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center text-slate-400 font-medium group/item">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center mr-4 transition-colors ${
                      activeCategory === cat.category
                      ? 'bg-blue-500/20 border-blue-500/50'
                      : 'bg-slate-900 border border-white/5 group-hover/item:border-blue-500'
                    }`}>
                      <Check className={`w-3 h-3 ${activeCategory === cat.category ? 'text-blue-400' : 'text-blue-500'}`} />
                    </span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {activeCategory && (
          <div className="mt-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="p-8 rounded-3xl bg-blue-500/5 border border-blue-500/20 flex items-center space-x-4">
              <div className="bg-blue-500 p-3 rounded-2xl">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white font-bold">Deep Dive into {activeCategory}</p>
                <p className="text-slate-400">Experience building production-grade solutions in this domain since 2019.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;

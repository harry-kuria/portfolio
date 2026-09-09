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

export const Skills: React.FC = () => {
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
    <section id="skills" className="py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="mb-16">
          <span className="text-purple-600 font-black uppercase tracking-[0.2em] text-xs mb-3 block">
            Core Competencies
          </span>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Technical Ecosystem.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES?.map((cat, idx) => {
            const isActive = activeCategory === cat.category;
            return (
              <div 
                key={cat.category || idx} 
                onClick={() => setActiveCategory(isActive ? null : cat.category)}
                className={`group glass-card-light p-8 rounded-3xl border transition-all duration-300 cursor-pointer ${
                  isActive 
                    ? 'border-purple-500 bg-purple-50/40 shadow-xl shadow-purple-500/10' 
                    : 'border-purple-100/90 bg-white/80 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-500/5'
                }`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all duration-300 ${
                  isActive
                    ? 'bg-purple-600 text-white scale-105 shadow-md shadow-purple-500/25'
                    : 'bg-purple-50 text-purple-600 border border-purple-100 group-hover:scale-105 group-hover:bg-purple-600 group-hover:text-white'
                }`}>
                  {getIcon(cat.category)}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-6">{cat.category}</h4>
                <ul className="space-y-3.5">
                  {cat.skills?.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-center text-slate-600 font-medium text-sm group/item">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 flex-shrink-0 transition-colors ${
                        isActive
                          ? 'bg-purple-200/80 text-purple-700'
                          : 'bg-purple-50 border border-purple-200/60 text-purple-600 group-hover/item:bg-purple-600 group-hover/item:text-white'
                      }`}>
                        <Check className="w-3 h-3" />
                      </span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {activeCategory && (
          <div className="mt-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="p-6 rounded-2xl bg-purple-50/60 border border-purple-200/80 flex items-center space-x-4 shadow-sm">
              <div className="bg-purple-600 p-3 rounded-xl shadow-md shadow-purple-500/20">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-slate-900 font-bold text-sm sm:text-base">Deep Dive into {activeCategory}</p>
                <p className="text-slate-600 text-xs sm:text-sm">Experience building production-grade solutions in this domain since 2019.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;

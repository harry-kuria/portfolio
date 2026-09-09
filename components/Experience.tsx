import React from 'react';
import { EXPERIENCES } from '../constants';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-28 bg-[#FAF9FF] border-t border-purple-100/60">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="text-purple-600 font-black uppercase tracking-[0.2em] text-xs mb-3 block">
            The Journey
          </span>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Career Timeline.
          </h3>
        </motion.div>

        <div className="space-y-14">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative pl-10 sm:pl-12 border-l-2 border-purple-200/80 hover:border-purple-500 transition-all duration-300"
            >
              {/* Timeline Indicator */}
              <div className="absolute -left-[7px] top-0 w-3 h-3 rounded-full bg-white border-2 border-purple-600 group-hover:bg-purple-600 group-hover:scale-125 transition-all shadow-sm" />

              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1 bg-purple-100/70 text-purple-700 text-xs font-bold rounded-full uppercase tracking-wider border border-purple-200/70">
                  {exp.type}
                </span>
                <span className="text-slate-500 text-xs sm:text-sm font-semibold flex items-center bg-white px-3 py-1 rounded-lg border border-purple-100 shadow-xs">
                  <Calendar className="w-3.5 h-3.5 mr-1.5 text-purple-600" /> {exp.period}
                </span>
              </div>

              <h4 className="text-2xl sm:text-3xl font-black text-slate-900 group-hover:text-purple-700 transition-colors">
                {exp.role}
              </h4>
              <div className="flex items-center text-slate-700 font-bold mb-6 mt-1 text-sm sm:text-base">
                <Briefcase className="w-4 h-4 mr-2 text-purple-600" />
                {exp.company}
                <span className="mx-3 text-slate-300 hidden sm:inline">|</span>
                <MapPin className="w-4 h-4 mr-1 text-slate-400" />
                <span className="text-slate-500 font-medium hidden sm:inline">{exp.location}</span>
              </div>

              <div className="glass-card-light p-6 sm:p-8 rounded-3xl bg-white/95 border border-purple-100/90 shadow-md shadow-purple-500/5 group-hover:shadow-lg transition-all">
                <ul className="space-y-3.5">
                  {exp.description.map((item, iIdx) => (
                    <li key={iIdx} className="text-slate-600 leading-relaxed flex items-start text-base">
                      <span className="inline-block w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

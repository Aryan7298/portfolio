import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight, ChevronDown, CheckCircle2, TrendingUp } from 'lucide-react';
import resumeData from '../data/resume.json';
import { cn } from '../lib/utils';

export const Experience: React.FC = () => {
  const { experience } = resumeData;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-16">
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="w-8 h-[1px] bg-blue-500" />
            <span className="text-xs font-mono tracking-widest text-blue-500 uppercase">Career Journey</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tighter text-white font-display"
          >
            Professional <span className="text-white/40 italic">Experience</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full md:w-80 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
        >
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp size={16} className="text-green-400" />
            <span className="text-xs font-mono tracking-widest text-white/60 uppercase">Impact Highlights</span>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="mt-1 p-1 rounded-full bg-green-400/10 text-green-400">
                <CheckCircle2 size={12} />
              </div>
              <p className="text-xs text-white/80 leading-relaxed">
                Reduced post-deployment issues by <span className="text-green-400 font-bold">30%</span> through rigorous cross-browser testing.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 p-1 rounded-full bg-blue-400/10 text-blue-400">
                <CheckCircle2 size={12} />
              </div>
              <p className="text-xs text-white/80 leading-relaxed">
                Boosted user engagement by <span className="text-blue-400 font-bold">15%</span> with dynamic React components.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="space-y-6">
        {experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={cn(
              "group relative rounded-3xl border transition-all duration-500 overflow-hidden",
              expandedIndex === index 
                ? "bg-white/10 border-white/20 shadow-2xl shadow-blue-500/10" 
                : "bg-white/5 border-white/5 hover:border-white/10"
            )}
          >
            <button
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              className="w-full p-8 text-left flex items-start justify-between gap-6"
            >
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-mono tracking-widest uppercase border border-blue-500/20">
                    {exp.role}
                  </span>
                  <span className="text-xs text-white/40 font-mono tracking-widest uppercase">
                    {exp.dates}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white font-display mb-2">
                  {exp.company}
                </h3>
                <div className="flex items-center gap-4 text-white/40 text-sm">
                  {exp.location && (
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} /> {exp.location}
                    </span>
                  )}
                </div>
              </div>
              <div className={cn(
                "p-3 rounded-full border border-white/10 bg-white/5 transition-transform duration-300",
                expandedIndex === index ? "rotate-180" : ""
              )}>
                <ChevronDown size={20} className="text-white/60" />
              </div>
            </button>

            <AnimatePresence>
              {expandedIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <div className="px-8 pb-8 pt-2 border-t border-white/5">
                    {exp.bullets.length > 0 ? (
                      <ul className="space-y-4 mb-8">
                        {exp.bullets.map((bullet, bIndex) => (
                          <motion.li
                            key={bIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + bIndex * 0.05 }}
                            className="flex items-start gap-4 text-white/70 leading-relaxed"
                          >
                            <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            {bullet}
                          </motion.li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-white/40 italic mb-8">Executive member contributing to various initiatives.</p>
                    )}

                    {exp.metrics && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {exp.metrics.map((metric, mIndex) => (
                          <div key={mIndex} className="p-4 rounded-2xl bg-white/5 border border-white/5">
                            <div className="text-2xl font-bold text-white font-display mb-1">{metric.value}</div>
                            <div className="text-[10px] text-white/40 uppercase tracking-widest leading-tight">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

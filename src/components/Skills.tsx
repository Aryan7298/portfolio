import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Terminal, Cpu, Layers, BarChart3 } from 'lucide-react';
import resumeData from '../data/resume.json';

const iconMap: Record<string, any> = {
  'Core': Terminal,
  'Web Development': Layers,
  'Computer Science': Cpu,
  'Data': BarChart3,
};

export const Skills: React.FC = () => {
  const { skills } = resumeData;

  return (
    <section id="skills" className="py-24 px-6 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="w-8 h-[1px] bg-purple-500" />
            <span className="text-xs font-mono tracking-widest text-purple-500 uppercase">Expertise</span>
            <span className="w-8 h-[1px] bg-purple-500" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tighter text-white font-display"
          >
            Technical <span className="text-white/40 italic">Arsenal</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => {
            const Icon = iconMap[skillGroup.category] || Code2;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-md hover:border-purple-500/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white font-display mb-4 uppercase tracking-widest">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, sIndex) => (
                    <span
                      key={sIndex}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs text-white/60 hover:text-white hover:bg-white/10 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

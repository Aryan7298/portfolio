import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Trophy, Award, Star, Zap } from 'lucide-react';
import resumeData from '../data/resume.json';

export const Responsibility: React.FC = () => {
  const { responsibility } = resumeData;

  return (
    <section id="responsibility" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-16">
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="w-8 h-[1px] bg-green-500" />
            <span className="text-xs font-mono tracking-widest text-green-500 uppercase">Leadership</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tighter text-white font-display"
          >
            Position of <span className="text-white/40 italic">Responsibility</span>
          </motion.h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {responsibility.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-10 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-md hover:border-green-500/30 transition-all duration-500 group"
          >
            <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center mb-8 text-green-400 group-hover:scale-110 transition-transform">
              {index === 0 ? <Shield size={32} /> : index === 1 ? <Users size={32} /> : <Zap size={32} />}
            </div>
            
            <h3 className="text-2xl font-bold text-white font-display mb-2 uppercase tracking-widest leading-tight">
              {item.role}
            </h3>
            
            <p className="text-sm text-white/40 font-mono tracking-widest uppercase mb-6">
              {item.organization}
            </p>

            <ul className="space-y-4">
              {item.bullets.map((bullet, bIndex) => (
                <li key={bIndex} className="flex items-start gap-4 text-white/60 text-xs leading-relaxed">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-green-500 shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

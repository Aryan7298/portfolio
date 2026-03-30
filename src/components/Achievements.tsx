import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, ExternalLink } from 'lucide-react';
import resumeData from '../data/resume.json';

export const Achievements: React.FC = () => {
  const { achievements } = resumeData;

  return (
    <section id="achievements" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-4"
        >
          <span className="w-8 h-[1px] bg-yellow-500" />
          <span className="text-xs font-mono tracking-widest text-yellow-500 uppercase">Recognition</span>
          <span className="w-8 h-[1px] bg-yellow-500" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold tracking-tighter text-white font-display"
        >
          Honors & <span className="text-white/40 italic">Awards</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="p-10 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-md hover:border-yellow-500/30 transition-all duration-500 group"
          >
            <div className="w-16 h-16 rounded-2xl bg-yellow-500/10 flex items-center justify-center mb-8 text-yellow-400 group-hover:scale-110 transition-transform">
              <Trophy size={32} />
            </div>
            
            <h3 className="text-2xl font-bold text-white font-display mb-4 uppercase tracking-widest leading-tight">
              {achievement.title}
            </h3>
            
            <p className="text-sm text-white/40 font-mono tracking-widest uppercase mb-6">
              {achievement.context}
            </p>
            
            <div className="flex items-center gap-2 text-yellow-400/60 text-xs font-medium group-hover:text-yellow-400 transition-colors">
              <Star size={14} />
              <span>Prestigious Recognition</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

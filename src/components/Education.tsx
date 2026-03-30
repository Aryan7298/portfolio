import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import resumeData from '../data/resume.json';

export const Education: React.FC = () => {
  const { education } = resumeData;

  return (
    <section id="education" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="w-8 h-[1px] bg-pink-500" />
            <span className="text-xs font-mono tracking-widest text-pink-500 uppercase">Academic Path</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tighter text-white font-display"
          >
            Education <span className="text-white/40 italic">History</span>
          </motion.h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative p-10 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-md hover:border-pink-500/20 transition-all duration-500 overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 text-pink-500/10 group-hover:text-pink-500/20 transition-colors">
              <GraduationCap size={120} />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 rounded-full bg-pink-500/10 text-pink-400 text-[10px] font-mono tracking-widest uppercase border border-pink-500/20">
                  {edu.dates}
                </span>
                {edu.gpa && (
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-mono tracking-widest uppercase border border-blue-500/20">
                    GPA: {edu.gpa}
                  </span>
                )}
                {edu.percentage && (
                  <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-[10px] font-mono tracking-widest uppercase border border-green-500/20">
                    {edu.percentage}
                  </span>
                )}
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white font-display mb-4 leading-tight">
                {edu.institution}
              </h3>
              
              <p className="text-lg text-white/60 font-light mb-6">
                {edu.degree}
              </p>
              
              {edu.coursework && (
                <div className="mb-6">
                  <div className="text-[10px] text-white/20 uppercase tracking-widest mb-3">Relevant Coursework</div>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, cIndex) => (
                      <span key={cIndex} className="px-2 py-1 rounded-lg bg-white/5 border border-white/5 text-[10px] text-white/40">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="flex items-center gap-4 text-white/40 text-sm">
                <span className="flex items-center gap-2">
                  <MapPin size={16} /> Delhi, India
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

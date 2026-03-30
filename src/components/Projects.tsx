import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2, Rocket, Globe } from 'lucide-react';
import resumeData from '../data/resume.json';

export const Projects: React.FC = () => {
  const { projects } = resumeData;

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-4"
        >
          <span className="w-8 h-[1px] bg-blue-500" />
          <span className="text-xs font-mono tracking-widest text-blue-500 uppercase">Portfolio</span>
          <span className="w-8 h-[1px] bg-blue-500" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold tracking-tighter text-white font-display"
        >
          Featured <span className="text-white/40 italic">Projects</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative p-8 md:p-12 rounded-[2.5rem] border border-white/5 bg-white/5 backdrop-blur-md hover:border-blue-500/20 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 text-blue-500/5 group-hover:text-blue-500/10 transition-colors">
              <Rocket size={180} />
            </div>

            <div className="relative z-10">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech, tIndex) => (
                  <span
                    key={tIndex}
                    className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-mono tracking-widest uppercase border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-white font-display mb-6 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>

              <ul className="space-y-4 mb-8">
                {project.bullets.map((bullet, bIndex) => (
                  <li key={bIndex} className="flex items-start gap-4 text-white/60 text-sm leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-6">
                <button className="flex items-center gap-2 text-xs font-mono tracking-widest text-white/40 hover:text-white transition-colors uppercase">
                  <Github size={16} /> Source Code
                </button>
                <button className="flex items-center gap-2 text-xs font-mono tracking-widest text-white/40 hover:text-white transition-colors uppercase">
                  <Globe size={16} /> Live Demo
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

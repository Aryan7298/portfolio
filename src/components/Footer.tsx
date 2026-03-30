import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp, Code2 } from 'lucide-react';
import resumeData from '../data/resume.json';

export const Footer: React.FC = () => {
  const { basics } = resumeData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-24 px-6 border-t border-white/5 bg-black/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-16">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold tracking-tighter text-white font-display mb-8"
            >
              Let's <span className="text-white/40 italic">Connect</span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="max-w-md text-lg text-white/60 font-light leading-relaxed mb-8"
            >
              Actively seeking Software Development Engineer roles to contribute to impactful, large-scale products.
            </motion.p>
            <div className="flex items-center gap-6">
              <a href="https://www.linkedin.com/in/aryan-shokeen09" target="_blank" rel="noreferrer" className="p-4 rounded-full border border-white/10 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-all">
                <Linkedin size={24} />
              </a>
              <a href="https://leetcode.com/u/aryan-shokeen09" target="_blank" rel="noreferrer" className="p-4 rounded-full border border-white/10 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-all">
                <Code2 size={24} />
              </a>
              <a href="mailto:aaryanshokeen09@gmail.com" className="p-4 rounded-full border border-white/10 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-all">
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-end gap-8">
            <button
              onClick={scrollToTop}
              className="p-6 rounded-full border border-white/10 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-all group"
            >
              <ArrowUp size={32} className="group-hover:-translate-y-1 transition-transform" />
            </button>
            <div className="text-right">
              <div className="text-xs font-mono tracking-widest text-white/20 uppercase mb-2">Designed & Built by</div>
              <div className="text-xl font-bold text-white font-display uppercase tracking-widest leading-tight">
                {basics.name}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-[10px] font-mono tracking-widest text-white/20 uppercase">
            © 2026 {basics.name}. All Rights Reserved.
          </div>
          <div className="flex items-center gap-8">
            <a href="#home" className="text-[10px] font-mono tracking-widest text-white/20 hover:text-white transition-colors uppercase">Home</a>
            <a href="#experience" className="text-[10px] font-mono tracking-widest text-white/20 hover:text-white transition-colors uppercase">Experience</a>
            <a href="#skills" className="text-[10px] font-mono tracking-widest text-white/20 hover:text-white transition-colors uppercase">Skills</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

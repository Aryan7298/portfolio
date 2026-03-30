import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, ChevronDown } from 'lucide-react';
import resumeData from '../data/resume.json';

export const Hero: React.FC = () => {
  const { basics } = resumeData;

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-mono tracking-widest text-white/60 uppercase">Available for SDE Roles</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.4, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white font-display mb-8 leading-[0.9]"
        >
          {basics.name.split(' ')[0]}<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            {basics.name.split(' ')[1]}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.6 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 font-light leading-relaxed mb-12"
        >
          {basics.summary.split('. ')[0]}. {basics.summary.split('. ')[1]}.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#experience"
            className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Experience <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <button
            onClick={() => window.print()}
            className="group px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full backdrop-blur-md transition-all hover:bg-white/10 hover:scale-105 active:scale-95"
          >
            <span className="flex items-center gap-2">
              Download Resume <Download size={18} className="group-hover:translate-y-1 transition-transform" />
            </span>
          </button>
        </motion.div>

        {/* Top 3 Impact Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto"
        >
          {[
            { label: 'Bugs Resolved', value: '50+', sub: 'Critical issues fixed' },
            { label: 'User Engagement', value: '15%', sub: 'Increase in activity' },
            { label: 'Post-deployment', value: '30%', sub: 'Reduction in issues' },
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm text-center">
              <div className="text-2xl font-bold text-white font-display mb-1">{item.value}</div>
              <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">{item.label}</div>
              <div className="text-[8px] text-white/20 uppercase tracking-tighter">{item.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>


      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono tracking-widest text-white/20 uppercase">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-white/20" />
        </motion.div>
      </motion.div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] -z-10" />
    </section>
  );
};

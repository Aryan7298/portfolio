import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, Code2 } from 'lucide-react';
import { cn } from '../lib/utils';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Leadership', href: '#responsibility' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Awards', href: '#achievements' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 1.8 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-black/20 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold tracking-tighter text-white font-display">
          AS<span className="text-blue-500">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-white/60 hover:text-white transition-colors uppercase tracking-widest"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="https://www.linkedin.com/in/aryan-shokeen09" target="_blank" rel="noreferrer" className="p-2 text-white/60 hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="https://leetcode.com/u/aryan-shokeen09" target="_blank" rel="noreferrer" className="p-2 text-white/60 hover:text-white transition-colors">
            <Code2 size={20} />
          </a>
          <a href="mailto:aaryanshokeen09@gmail.com" className="p-2 text-white/60 hover:text-white transition-colors">
            <Mail size={20} />
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium text-white/80 hover:text-white transition-colors uppercase tracking-widest"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-6 pt-4 border-t border-white/10">
                <a href="https://www.linkedin.com/in/aryan-shokeen09" target="_blank" rel="noreferrer" className="text-white/60">
                  <Linkedin size={24} />
                </a>
                <a href="https://leetcode.com/u/aryan-shokeen09" target="_blank" rel="noreferrer" className="text-white/60">
                  <Code2 size={24} />
                </a>
                <a href="mailto:aaryanshokeen09@gmail.com" className="text-white/60">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

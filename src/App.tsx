import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SplashScreen } from './components/SplashScreen';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Responsibility } from './components/Responsibility';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Achievements } from './components/Achievements';
import { Footer } from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling while loading
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isLoading]);

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white selection:bg-blue-500/30 selection:text-blue-200">
      <AnimatePresence mode="wait">
        {isLoading && (
          <SplashScreen key="splash" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-0"
        >
          <AnimatedBackground />
          <Navbar />
          
          <main>
            <Hero />
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="relative"
            >
              <Projects />
              <Experience />
              <Responsibility />
              <Skills />
              <Education />
              <Achievements />
            </motion.div>
          </main>

          <Footer />

          {/* Sticky Progress Indicator */}
          <motion.div 
            className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 3 }}
          >
            {['home', 'projects', 'experience', 'responsibility', 'skills', 'education', 'achievements'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="group relative flex items-center justify-end"
              >
                <span className="absolute right-6 opacity-0 group-hover:opacity-100 transition-all text-[10px] font-mono tracking-widest uppercase text-white/40">
                  {section}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-blue-500 transition-all group-hover:scale-150" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}


import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, FileText, Sparkles, ChevronRight } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { HeroCanvas } from '../canvas/HeroCanvas';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-neon-pink/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-900/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10 my-auto">
        {/* Left Column Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 flex flex-col items-start space-y-6"
        >
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neon-pink/10 border border-neon-pink/30 text-neon-pink text-xs font-mono tracking-widest uppercase shadow-[0_0_15px_rgba(255,46,147,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-neon-pink animate-pulse" />
            <span>{PERSONAL_INFO.role}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-heading font-extrabold tracking-tight leading-[1.1] text-white">
            HI, I'M <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-100 to-neon-pink text-glow">
              {PERSONAL_INFO.name.toUpperCase()}.
            </span>
          </h1>

          {/* Positioning Lead */}
          <p className="text-lg sm:text-xl font-semibold text-gray-200 border-l-2 border-neon-pink pl-4 py-1 leading-relaxed">
            {PERSONAL_INFO.primaryPositioning}
          </p>

          {/* Supporting Paragraph */}
          <p className="text-sm sm:text-base text-gray-400 max-w-xl leading-relaxed">
            {PERSONAL_INFO.heroParagraph}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-mono font-bold tracking-widest text-white uppercase bg-neon-pink rounded-xl shadow-[0_0_25px_#FF2E93] hover:shadow-[0_0_35px_#FF2E93] hover:bg-neon-deep transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>VIEW MY WORK</span>
              <ChevronRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#resume"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-mono font-semibold tracking-widest text-gray-200 uppercase bg-white/5 hover:bg-white/10 border border-white/10 hover:border-neon-pink/50 rounded-xl transition-all duration-300 hover:text-white"
            >
              <FileText className="w-4 h-4 text-neon-pink" />
              <span>DOWNLOAD RESUME</span>
            </a>
          </div>

          {/* Quick Social Links */}
          <div className="flex items-center gap-5 pt-4 text-gray-400 border-t border-white/10 w-full max-w-md">
            <span className="text-xs font-mono uppercase text-gray-500">CONNECT:</span>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-neon-pink/20 hover:text-neon-pink border border-white/5 hover:border-neon-pink/40 transition-all"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-neon-pink/20 hover:text-neon-pink border border-white/5 hover:border-neon-pink/40 transition-all"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg bg-white/5 hover:bg-neon-pink/20 hover:text-neon-pink border border-white/5 hover:border-neon-pink/40 transition-all"
              title="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: 3D Experience Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="lg:col-span-5 h-[380px] sm:h-[480px] lg:h-[550px] w-full flex items-center justify-center relative"
        >
          <HeroCanvas />
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[11px] font-mono tracking-widest text-gray-400 uppercase">
          SCROLL TO EXPLORE
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4 text-neon-pink" />
        </motion.div>
      </motion.div>
    </section>
  );
};

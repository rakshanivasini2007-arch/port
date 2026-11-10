import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Target, Sparkles, UserCheck, Terminal, MapPin } from 'lucide-react';
import { PERSONAL_INFO, ABOUT_CARDS } from '../../data/portfolioData';

export const AboutSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-neon-pink" />;
      case 'Target':
        return <Target className="w-5 h-5 text-neon-pink" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-neon-pink" />;
      default:
        return <UserCheck className="w-5 h-5 text-neon-pink" />;
    }
  };

  return (
    <section id="about" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs font-mono tracking-widest text-neon-pink uppercase mb-2">
          // WHO I AM
        </span>
        <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
          A LITTLE ABOUT ME<span className="text-neon-pink">.</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-neon-pink to-transparent mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Abstract Futuristic Developer Avatar Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative w-full max-w-md p-8 rounded-3xl glass-panel border border-glass-pink-border shadow-[0_15px_40px_rgba(0,0,0,0.5),0_0_20px_rgba(255,46,147,0.15)] group overflow-hidden">
            {/* Ambient Inner Glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-neon-pink/20 rounded-full blur-3xl group-hover:bg-neon-pink/30 transition-all duration-500" />
            
            {/* Digital Identity Symbol */}
            <div className="flex flex-col items-center text-center space-y-4 relative z-10">
              <div className="relative w-28 h-28 rounded-2xl bg-dark-800 border-2 border-neon-pink/40 flex items-center justify-center shadow-[0_0_25px_rgba(255,46,147,0.25)] group-hover:scale-105 group-hover:border-neon-pink transition-all duration-500">
                <Terminal className="w-12 h-12 text-neon-pink animate-pulse" />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-neon-pink rounded-full border-2 border-dark-900 flex items-center justify-center">
                  <span className="w-2 h-2 bg-white rounded-full animate-ping" />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-heading font-bold text-white tracking-wide">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-xs font-mono text-neon-pink tracking-widest uppercase mt-1">
                  {PERSONAL_INFO.role}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                <MapPin className="w-3.5 h-3.5 text-neon-pink" />
                <span>{PERSONAL_INFO.location}</span>
              </div>

              {/* Status Indicator */}
              <div className="w-full pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-400">
                <span>STATUS:</span>
                <span className="text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  Building & Practicing
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Grounded Bio & Key Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="space-y-4">
            <p className="text-base md:text-lg text-gray-200 leading-relaxed font-medium">
              {PERSONAL_INFO.aboutParagraph1}
            </p>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
              {PERSONAL_INFO.aboutParagraph2}
            </p>
          </div>

          {/* 3 Summary Glass Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            {ABOUT_CARDS.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                className="p-5 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-neon-pink/10 border border-neon-pink/30 flex items-center justify-center">
                  {getIcon(card.icon)}
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-neon-pink uppercase">
                    {card.title}
                  </span>
                  <p className="text-xs font-bold text-white mt-1 leading-snug">
                    {card.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

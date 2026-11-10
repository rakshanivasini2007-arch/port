import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Cpu, Compass, Globe2, HeartHandshake } from 'lucide-react';
import { BUILDING_EDGE_PILLARS, SOFT_SKILLS, LANGUAGES } from '../../data/portfolioData';

export const BuildingEdgeSection: React.FC = () => {
  const getPillarIcon = (code: string) => {
    switch (code) {
      case 'CODE':
        return <Code className="w-5 h-5 text-neon-pink" />;
      case 'THINK':
        return <Brain className="w-5 h-5 text-neon-pink" />;
      case 'BUILD':
        return <Cpu className="w-5 h-5 text-neon-pink" />;
      default:
        return <Compass className="w-5 h-5 text-neon-pink" />;
    }
  };

  return (
    <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-pink/10 rounded-full blur-[140px] pointer-events-none" />

      {/* 1. CURRENTLY BUILDING MY EDGE */}
      <div className="mb-20">
        <div className="flex flex-col items-center text-center mb-14">
          <span className="text-xs font-mono tracking-widest text-neon-pink uppercase mb-2">
            // STUDENT EVOLUTION
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            CURRENTLY BUILDING MY EDGE<span className="text-neon-pink">.</span>
          </h2>
          <p className="text-sm md:text-base text-gray-400 mt-3 max-w-xl">
            A dedicated student systematically growing across core technical pillars.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-neon-pink to-transparent mt-4 rounded-full" />
        </div>

        {/* 4 Pillars Grid with Animated Connection Bar */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {BUILDING_EDGE_PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.code}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl glass-panel border border-glass-border glass-panel-hover flex flex-col justify-between space-y-4 relative group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-neon-pink tracking-widest bg-neon-pink/10 px-3 py-1 rounded-full border border-neon-pink/30">
                  {pillar.code}
                </span>
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-neon-pink transition-colors">
                  {getPillarIcon(pillar.code)}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-neon-pink transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed font-sans">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom Glowing Pulse Accent */}
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-neon-pink w-1/3 group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 2. BEYOND CODE (SOFT SKILLS) & LANGUAGES */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 p-8 rounded-3xl glass-panel border border-glass-border space-y-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-neon-pink/10 border border-neon-pink/30 flex items-center justify-center">
              <HeartHandshake className="w-5 h-5 text-neon-pink" />
            </div>
            <div>
              <span className="text-xs font-mono text-neon-pink uppercase tracking-widest">
                INTERPERSONAL & ADAPTABILITY
              </span>
              <h3 className="text-xl font-heading font-bold text-white">
                BEYOND CODE<span className="text-neon-pink">.</span>
              </h3>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {SOFT_SKILLS.map((skill) => (
              <div
                key={skill}
                className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-gray-200 hover:border-neon-pink/40 hover:text-white hover:bg-neon-pink/10 transition-all flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-neon-pink" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 p-8 rounded-3xl glass-panel border border-glass-border space-y-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-neon-pink/10 border border-neon-pink/30 flex items-center justify-center">
              <Globe2 className="w-5 h-5 text-neon-pink" />
            </div>
            <div>
              <span className="text-xs font-mono text-neon-pink uppercase tracking-widest">
                COMMUNICATION
              </span>
              <h3 className="text-xl font-heading font-bold text-white">
                LANGUAGES<span className="text-neon-pink">.</span>
              </h3>
            </div>
          </div>

          <div className="space-y-3 pt-1">
            {LANGUAGES.map((lang) => (
              <div
                key={lang.name}
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 text-xs font-mono"
              >
                <span className="font-bold text-white">{lang.name}</span>
                <span className="text-neon-light">{lang.note}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

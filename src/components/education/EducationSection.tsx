import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award, Sparkles } from 'lucide-react';
import { EDUCATION_LIST } from '../../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-pink/10 border border-neon-pink/30 text-neon-pink text-xs font-mono tracking-widest uppercase mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ACADEMIC BACKGROUND</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
          EDUCATION<span className="text-neon-pink">.</span>
        </h2>
        <p className="text-sm md:text-base text-gray-400 mt-3 max-w-xl">
          Academic foundation in Information Technology and higher secondary education.
        </p>
        <div className="w-16 h-1 bg-gradient-to-r from-neon-pink to-transparent mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {EDUCATION_LIST.map((edu, idx) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="p-8 rounded-3xl glass-panel border border-glass-pink-border glass-panel-hover flex flex-col justify-between space-y-6 relative group overflow-hidden"
          >
            {/* Ambient Corner Glow */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-neon-pink/10 rounded-full blur-2xl group-hover:bg-neon-pink/20 transition-colors" />

            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 text-[10px] font-mono font-bold tracking-widest rounded-full uppercase ${
                  edu.type === 'CURRENT'
                    ? 'bg-neon-pink/20 text-neon-pink border border-neon-pink/40 shadow-[0_0_10px_rgba(255,46,147,0.3)]'
                    : 'bg-white/5 text-gray-400 border border-white/10'
                }`}>
                  {edu.type}
                </span>
                <div className="flex items-center gap-1.5 text-xs font-mono text-gray-400">
                  <Calendar className="w-3.5 h-3.5 text-neon-pink" />
                  <span>{edu.year}</span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-neon-pink transition-colors">
                  {edu.institution}
                </h3>
                <p className="text-sm font-semibold text-gray-200 mt-2">
                  {edu.degree}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-gray-400 pt-4 border-t border-white/10 relative z-10">
              <MapPin className="w-3.5 h-3.5 text-neon-pink" />
              <span>{edu.location}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

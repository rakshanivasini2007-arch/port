import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Building2, CheckCircle2, Sparkles } from 'lucide-react';
import { EXPERIENCES } from '../../data/portfolioData';
import { TechNodeCanvas } from './TechNodeCanvas';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-pink/10 border border-neon-pink/30 text-neon-pink text-xs font-mono tracking-widest uppercase mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>INDUSTRY EXPOSURE</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
          EXPERIENCE<span className="text-neon-pink">.</span>
        </h2>
        <p className="text-sm md:text-base text-gray-400 mt-3 max-w-xl">
          Practical application of software development and database principles.
        </p>
        <div className="w-16 h-1 bg-gradient-to-r from-neon-pink to-transparent mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Timeline Item Card */}
        <div className="lg:col-span-7 relative border-l-2 border-neon-pink/40 pl-6 sm:pl-8 space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative group"
            >
              {/* Glowing Timeline Node Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-dark-900 border-2 border-neon-pink shadow-[0_0_15px_#FF2E93] group-hover:scale-125 transition-transform">
                <div className="w-2 h-2 m-auto mt-1 rounded-full bg-white animate-pulse" />
              </div>

              <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-glass-pink-border glass-panel-hover space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                  <div>
                    <span className="text-xs font-mono text-neon-pink tracking-widest uppercase">
                      {exp.role}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-gray-400" />
                      <span>{exp.company}</span>
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300">
                    <Calendar className="w-3.5 h-3.5 text-neon-pink" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  {exp.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-neon-pink shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Side: 3D Tech Node Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 h-[320px] sm:h-[400px] flex items-center justify-center rounded-3xl glass-panel border border-white/10 p-6 relative overflow-hidden"
        >
          <TechNodeCanvas />
          <div className="absolute bottom-4 left-6 right-6 text-center text-[10px] font-mono text-gray-400 uppercase tracking-widest bg-dark-900/80 py-1.5 px-3 rounded-full border border-white/5 backdrop-blur-sm">
            AI / PYTHON / DATABASE WORKFLOW NETWORK
          </div>
        </motion.div>
      </div>
    </section>
  );
};

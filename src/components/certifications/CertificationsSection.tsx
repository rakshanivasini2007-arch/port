import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import { CERTIFICATIONS } from '../../data/portfolioData';

export const CertificationsSection: React.FC = () => {
  return (
    <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <span className="text-xs font-mono tracking-widest text-neon-pink uppercase mb-2">
          // VALIDATED KNOWLEDGE
        </span>
        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white tracking-tight">
          CERTIFICATIONS<span className="text-neon-pink">.</span>
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-neon-pink to-transparent mt-3 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {CERTIFICATIONS.map((cert, idx) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-6 rounded-2xl glass-panel border border-glass-border glass-panel-hover flex flex-col justify-between space-y-4 group"
          >
            <div className="flex items-start justify-between">
              <div className="w-10 h-10 rounded-xl bg-neon-pink/10 border border-neon-pink/30 flex items-center justify-center group-hover:border-neon-pink transition-colors">
                <Award className="w-5 h-5 text-neon-pink" />
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-neon-light">
                {cert.year}
              </span>
            </div>

            <div>
              <h3 className="text-base font-bold text-white group-hover:text-neon-pink transition-colors leading-snug">
                {cert.title}
              </h3>
              <p className="text-xs font-mono text-gray-400 mt-2 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-neon-pink" />
                <span>Issuer: {cert.issuer}</span>
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

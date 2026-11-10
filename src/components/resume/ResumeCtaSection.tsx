import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Eye, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const ResumeCtaSection: React.FC = () => {
  const handleViewResume = () => {
    // Open resume in a new tab or trigger display
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section id="resume" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative rounded-3xl glass-panel border border-neon-pink/40 p-10 sm:p-16 text-center space-y-8 shadow-[0_20px_60px_rgba(0,0,0,0.7),0_0_30px_rgba(255,46,147,0.2)] overflow-hidden"
      >
        {/* Background Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,46,147,0.15)_0%,transparent_70%)] pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neon-pink/10 border border-neon-pink/30 text-neon-pink text-xs font-mono tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>FULL RESUME SPECIFICATION</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight max-w-3xl mx-auto">
          CURIOUS ABOUT THE DETAILS<span className="text-neon-pink text-glow">?</span>
        </h2>

        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-sans">
          Explore my resume for a closer look at my education, experience, projects and technical skills.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-mono font-bold tracking-widest text-white uppercase bg-neon-pink hover:bg-neon-deep rounded-xl shadow-[0_0_25px_#FF2E93] hover:shadow-[0_0_35px_#FF2E93] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Eye className="w-4 h-4" />
            <span>VIEW RESUME</span>
          </a>

          <a
            href="/resume.pdf"
            download="Rakshanivasini_AG_Resume.pdf"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-mono font-bold tracking-widest text-gray-200 uppercase bg-white/5 hover:bg-white/10 border border-white/10 hover:border-neon-pink/50 rounded-xl transition-all duration-300 hover:text-white"
          >
            <Download className="w-4 h-4 text-neon-pink" />
            <span>DOWNLOAD RESUME</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

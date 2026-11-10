import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/10 bg-dark-950/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side Branding */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
          <a href="#" className="text-2xl font-heading font-extrabold tracking-wider text-white">
            {PERSONAL_INFO.shortName}<span className="text-neon-pink text-glow">.</span>
          </a>
          <p className="text-xs font-mono text-gray-400">
            {PERSONAL_INFO.role} • Developer • Problem Solver
          </p>
        </div>

        {/* Center Social Links */}
        <div className="flex items-center gap-4">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white/5 hover:bg-neon-pink/20 hover:text-neon-pink border border-white/10 hover:border-neon-pink/40 text-gray-300 transition-all"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white/5 hover:bg-neon-pink/20 hover:text-neon-pink border border-white/10 hover:border-neon-pink/40 text-gray-300 transition-all"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-2.5 rounded-full bg-white/5 hover:bg-neon-pink/20 hover:text-neon-pink border border-white/10 hover:border-neon-pink/40 text-gray-300 transition-all"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right Side Copyright with Pulsing Pink Dot */}
        <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
          <span>© 2026 {PERSONAL_INFO.name}</span>
          <span className="w-2 h-2 rounded-full bg-neon-pink shadow-[0_0_8px_#FF2E93] animate-pulse" />
        </div>
      </div>
    </footer>
  );
};

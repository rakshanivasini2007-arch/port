import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ExternalLink, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const GithubSection: React.FC = () => {
  // Generate an abstract developer activity matrix grid (52 weeks x 7 days simulated activity tiles)
  const activityTiles = React.useMemo(() => {
    const tiles = [];
    const totalTiles = 70;
    for (let i = 0; i < totalTiles; i++) {
      const rand = Math.random();
      let intensity = 'bg-white/5';
      if (rand > 0.75) intensity = 'bg-neon-pink/40';
      else if (rand > 0.5) intensity = 'bg-neon-pink/80 shadow-[0_0_8px_#FF2E93]';
      else if (rand > 0.3) intensity = 'bg-neon-pink/20';
      tiles.push(intensity);
    }
    return tiles;
  }, []);

  return (
    <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
        {/* GitHub Developer Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 p-8 sm:p-10 rounded-3xl glass-panel border border-glass-pink-border flex flex-col justify-between space-y-6 relative overflow-hidden group"
        >
          <div className="space-y-3 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-pink/10 border border-neon-pink/30 text-neon-pink text-xs font-mono tracking-widest uppercase">
              <Github className="w-3.5 h-3.5" />
              <span>GITHUB PROFILE</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight leading-tight">
              CODE IS WHERE IDEAS BECOME REAL<span className="text-neon-pink">.</span>
            </h3>

            <p className="text-xs sm:text-sm font-mono text-gray-400">
              {PERSONAL_INFO.githubDisplay}
            </p>
          </div>

          {/* Abstract Activity Visualization Matrix */}
          <div className="space-y-2 relative z-10">
            <div className="flex items-center justify-between text-[10px] font-mono text-gray-500 uppercase">
              <span>DEVELOPMENT ACTIVITY</span>
              <span>CONTINUOUS PRACTICE</span>
            </div>
            <div className="grid grid-cols-14 gap-1.5 p-3 rounded-2xl bg-dark-950/70 border border-white/5">
              {activityTiles.map((tileClass, idx) => (
                <div
                  key={idx}
                  className={`w-full aspect-square rounded-sm ${tileClass} transition-colors hover:scale-125`}
                  title="Code Activity"
                />
              ))}
            </div>
          </div>

          {/* CTA Action */}
          <div className="pt-2 relative z-10">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-mono font-bold tracking-widest text-white uppercase bg-white/5 hover:bg-neon-pink border border-white/10 hover:border-neon-pink rounded-xl shadow-[0_0_20px_rgba(255,46,147,0.2)] transition-all duration-300"
            >
              <Github className="w-4 h-4" />
              <span>EXPLORE GITHUB REPOSITORIES</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

        {/* LinkedIn Professional Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 p-8 sm:p-10 rounded-3xl glass-panel border border-glass-border flex flex-col justify-between space-y-6 relative overflow-hidden group"
        >
          <div className="space-y-4 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-neon-pink/10 border border-neon-pink/30 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Linkedin className="w-6 h-6 text-neon-pink" />
            </div>

            <div>
              <span className="text-xs font-mono text-neon-pink uppercase tracking-widest">
                PROFESSIONAL NETWORK
              </span>
              <h3 className="text-2xl font-heading font-extrabold text-white mt-1">
                LET'S CONNECT<span className="text-neon-pink">.</span>
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
              Connect with me on LinkedIn to follow my software engineering journey, academic developments, and future opportunities.
            </p>

            <p className="text-xs font-mono text-neon-light">
              {PERSONAL_INFO.linkedinDisplay}
            </p>
          </div>

          <div className="pt-2 relative z-10">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-mono font-bold tracking-widest text-white uppercase bg-neon-pink/20 hover:bg-neon-pink border border-neon-pink/50 hover:border-neon-pink rounded-xl shadow-[0_0_20px_rgba(255,46,147,0.3)] transition-all duration-300"
            >
              <Linkedin className="w-4 h-4" />
              <span>CONNECT ON LINKEDIN</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

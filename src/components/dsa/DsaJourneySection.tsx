import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code2, Layers, Cpu, Compass } from 'lucide-react';
import { DSA_NODES } from '../../data/portfolioData';

export const DsaJourneySection: React.FC = () => {
  const getNodeIcon = (label: string) => {
    switch (label) {
      case 'Arrays':
        return <Layers className="w-5 h-5 text-neon-pink" />;
      case 'Strings':
        return <Code2 className="w-5 h-5 text-neon-pink" />;
      case 'Algorithms':
        return <Cpu className="w-5 h-5 text-neon-pink" />;
      default:
        return <Compass className="w-5 h-5 text-neon-pink" />;
    }
  };

  return (
    <section id="dsa" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-pink/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs font-mono tracking-widest text-neon-pink uppercase mb-2">
          // ALGORITHMIC THINKING
        </span>
        <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
          THE PROBLEM-SOLVING JOURNEY<span className="text-neon-pink">.</span>
        </h2>
        <p className="text-sm md:text-base text-gray-400 mt-3 max-w-xl">
          Strengthening my understanding of Data Structures & Algorithms, OOP, and problem solving through consistent practice.
        </p>
        <div className="w-16 h-1 bg-gradient-to-r from-neon-pink to-transparent mt-4 rounded-full" />
      </div>

      {/* Futuristic Circular Orbital Node Visualization */}
      <div className="relative max-w-4xl mx-auto py-12 flex flex-col items-center justify-center">
        {/* Glowing Center Node */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-20 w-36 h-36 rounded-full bg-dark-850 border-2 border-neon-pink flex flex-col items-center justify-center shadow-[0_0_40px_rgba(255,46,147,0.4)] group"
        >
          <Brain className="w-10 h-10 text-neon-pink animate-pulse" />
          <span className="text-base font-heading font-bold text-white mt-1">DSA</span>
          <span className="text-[9px] font-mono text-neon-light uppercase tracking-widest">
            CORE NODE
          </span>

          {/* Pulse Outer Ring */}
          <div className="absolute -inset-3 rounded-full border border-neon-pink/30 animate-ping pointer-events-none" style={{ animationDuration: '3s' }} />
        </motion.div>

        {/* Outer Orbit Line */}
        <div className="absolute inset-0 m-auto w-72 sm:w-[460px] h-72 sm:h-[460px] rounded-full border border-dashed border-neon-pink/25 animate-spin-slow pointer-events-none" />

        {/* 4 Connected Orbital Satellite Nodes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-16 relative z-10">
          {DSA_NODES.map((node, idx) => (
            <motion.div
              key={node.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col items-center text-center space-y-3 relative group"
            >
              {/* Connector Glow Line */}
              <div className="w-8 h-[2px] bg-gradient-to-r from-neon-pink to-transparent mb-1 rounded-full group-hover:w-16 transition-all duration-300" />
              
              <div className="w-12 h-12 rounded-xl bg-neon-pink/10 border border-neon-pink/30 flex items-center justify-center group-hover:scale-110 group-hover:border-neon-pink transition-all">
                {getNodeIcon(node.label)}
              </div>

              <h3 className="text-lg font-bold text-white group-hover:text-neon-pink transition-colors">
                {node.label}
              </h3>

              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                {node.description}
              </p>

              <div className="pt-2">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-neon-pink">
                  ACTIVE PRACTICE
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning Status Banner */}
        <div className="mt-12 inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-dark-800 border border-neon-pink/30 text-xs font-mono text-gray-300 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-neon-pink animate-ping" />
          <span>LEARNING & PRACTICE IN PROGRESS • CONSTANT LOGIC BUILDING</span>
        </div>
      </div>
    </section>
  );
};

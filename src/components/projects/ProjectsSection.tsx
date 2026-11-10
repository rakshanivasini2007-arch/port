import React from 'react';
import { PROJECTS } from '../../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { Sparkles } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-pink/10 border border-neon-pink/30 text-neon-pink text-xs font-mono tracking-widest uppercase mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>PORTFOLIO WORK</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
          SELECTED PROJECTS<span className="text-neon-pink">.</span>
        </h2>
        <p className="text-sm md:text-base text-gray-400 mt-3 max-w-xl">
          Building practical solutions through code.
        </p>
        <div className="w-16 h-1 bg-gradient-to-r from-neon-pink to-transparent mt-4 rounded-full" />
      </div>

      <div className="space-y-12">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

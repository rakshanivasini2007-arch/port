import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, CheckCircle2 } from 'lucide-react';
import { Project } from '../../data/portfolioData';
import { ProjectVisualCanvas } from '../canvas/ProjectVisualCanvas';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rY = ((mouseX - width / 2) / (width / 2)) * 8;
    const rX = -((mouseY - height / 2) / (height / 2)) * 8;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: rotateX,
        rotateY: rotateY,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
      className="relative rounded-3xl glass-panel border border-glass-pink-border p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] group overflow-hidden transition-all duration-300"
    >
      {/* Background Pink Glow */}
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-neon-pink/15 rounded-full blur-[100px] pointer-events-none group-hover:bg-neon-pink/25 transition-all duration-500" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Left Side Details */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-4">
            <span className="text-3xl font-heading font-extrabold text-neon-pink text-glow">
              {project.number}
            </span>
            <div className="h-4 w-[1px] bg-white/20" />
            <span className="text-xs font-mono tracking-widest text-gray-400 uppercase">
              {project.subtitle}
            </span>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-wide group-hover:text-neon-pink transition-colors">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-300 mt-2 leading-relaxed font-sans">
              {project.description}
            </p>
          </div>

          {/* Highlights bullet points from resume */}
          <div className="space-y-2.5 pt-2">
            {project.highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-neon-pink shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.techTags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-[11px] font-mono tracking-wider rounded-lg bg-white/5 border border-white/10 text-neon-light"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 text-xs font-mono font-bold tracking-widest text-white uppercase bg-neon-pink hover:bg-neon-deep rounded-xl shadow-[0_0_20px_#FF2E93] hover:shadow-[0_0_30px_#FF2E93] transition-all duration-300"
            >
              <Github className="w-4 h-4" />
              <span>VIEW ON GITHUB</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Right Side Interactive 3D Visual */}
        <div className="lg:col-span-5 flex items-center justify-center min-h-[260px] bg-dark-900/60 rounded-2xl border border-white/5 p-4 relative overflow-hidden group-hover:border-neon-pink/40 transition-colors">
          <ProjectVisualCanvas />
          <div className="absolute bottom-2 right-3 text-[9px] font-mono text-gray-500 uppercase tracking-widest">
            3D FINANCIAL DASHBOARD VISUAL
          </div>
        </div>
      </div>
    </motion.div>
  );
};

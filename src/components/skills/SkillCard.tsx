import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Cpu, Database, Wrench } from 'lucide-react';

interface SkillCardProps {
  name: string;
  description?: string;
  category: string;
  index: number;
}

export const SkillCard: React.FC<SkillCardProps> = ({ name, description, category, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Programming Languages':
        return <Code className="w-4 h-4 text-neon-pink" />;
      case 'Web Technologies':
        return <Globe className="w-4 h-4 text-neon-pink" />;
      case 'Core Concepts':
        return <Cpu className="w-4 h-4 text-neon-pink" />;
      case 'Database':
        return <Database className="w-4 h-4 text-neon-pink" />;
      default:
        return <Wrench className="w-4 h-4 text-neon-pink" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative p-5 rounded-2xl glass-panel border border-glass-border overflow-hidden transition-all duration-300 group cursor-default"
      style={{
        boxShadow: isHovered
          ? '0 10px 30px rgba(0,0,0,0.5), 0 0 20px rgba(255,46,147,0.2)'
          : '0 4px 20px rgba(0,0,0,0.3)',
        transform: isHovered ? 'translateY(-3px)' : 'none',
      }}
    >
      {/* Interactive Cursor Spotlight Glow */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px opacity-100 transition-opacity duration-300 rounded-2xl"
          style={{
            background: `radial-gradient(250px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,46,147,0.18), transparent 80%)`,
          }}
        />
      )}

      <div className="relative z-10 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-neon-pink/10 border border-neon-pink/30 flex items-center justify-center group-hover:border-neon-pink transition-colors">
            {getCategoryIcon(category)}
          </div>
          <div>
            <h4 className="text-base font-bold text-white group-hover:text-neon-pink transition-colors">
              {name}
            </h4>
            <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
              {category}
            </span>
          </div>
        </div>
      </div>

      {description && (
        <p className="mt-3 text-xs text-gray-400 leading-relaxed font-sans relative z-10">
          {description}
        </p>
      )}
    </motion.div>
  );
};

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../../data/portfolioData';
import { SkillCard } from './SkillCard';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = ['ALL', ...SKILL_CATEGORIES.map(c => c.category)];

  const allSkills = SKILL_CATEGORIES.flatMap(cat =>
    cat.skills.map(skill => ({ ...skill, category: cat.category }))
  );

  const filteredSkills = selectedCategory === 'ALL'
    ? allSkills
    : allSkills.filter(s => s.category === selectedCategory);

  return (
    <section id="skills" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-pink/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-pink/10 border border-neon-pink/30 text-neon-pink text-xs font-mono tracking-widest uppercase mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>TECHNICAL CAPABILITIES</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
          TECH STACK<span className="text-neon-pink">.</span>
        </h2>
        <p className="text-sm md:text-base text-gray-400 mt-3 max-w-lg">
          Tools and technologies I'm actively building with.
        </p>
        <div className="w-16 h-1 bg-gradient-to-r from-neon-pink to-transparent mt-4 rounded-full" />
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 text-xs font-mono tracking-wider rounded-xl transition-all duration-300 border ${
              selectedCategory === cat
                ? 'bg-neon-pink text-white border-neon-pink shadow-[0_0_15px_#FF2E93]'
                : 'bg-white/5 text-gray-400 border-white/10 hover:text-white hover:bg-white/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skill Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill, idx) => (
          <SkillCard
            key={skill.name}
            name={skill.name}
            description={skill.description}
            category={skill.category}
            index={idx}
          />
        ))}
      </div>

      {/* Authenticity Guarantee Note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-12 p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center gap-2 text-xs font-mono text-gray-400 max-w-xl mx-auto text-center"
      >
        <CheckCircle2 className="w-4 h-4 text-neon-pink shrink-0" />
        <span>Grounded strictly in active academic and project experience.</span>
      </motion.div>
    </section>
  );
};

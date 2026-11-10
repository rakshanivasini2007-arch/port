import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

const NAV_LINKS = [
  { name: 'ABOUT', href: '#about' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'DSA', href: '#dsa' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'EDUCATION', href: '#education' },
  { name: 'CONTACT', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 pt-4 md:pt-6 transition-all duration-300 pointer-events-none">
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto flex items-center justify-between transition-all duration-500 rounded-full border glass-panel ${
            isScrolled
              ? 'w-[95%] max-w-5xl py-2.5 px-6 bg-dark-900/80 border-glass-pink-border shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_15px_rgba(255,46,147,0.15)] backdrop-blur-md'
              : 'w-[95%] max-w-6xl py-3.5 px-8 bg-dark-850/60 border-glass-border shadow-glass'
          }`}
        >
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 text-xl font-heading font-extrabold tracking-wider text-white group"
          >
            <div className="w-8 h-8 rounded-full bg-neon-pink/10 border border-neon-pink/30 flex items-center justify-center group-hover:border-neon-pink transition-colors">
              <Code2 className="w-4 h-4 text-neon-pink" />
            </div>
            <span>
              {PERSONAL_INFO.shortName}<span className="text-neon-pink group-hover:text-glow transition-all">.</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3 py-1.5 text-xs font-mono tracking-wider transition-all duration-300 rounded-full ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 rounded-full bg-neon-pink/15 border border-neon-pink/40 shadow-[0_0_12px_rgba(255,46,147,0.3)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </div>

          {/* Quick Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              className="relative inline-flex items-center justify-center px-4 py-1.5 text-xs font-mono tracking-wider text-white font-medium bg-neon-pink/20 hover:bg-neon-pink/30 border border-neon-pink/50 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(255,46,147,0.25)] hover:shadow-[0_0_25px_rgba(255,46,147,0.5)] hover:border-neon-pink"
            >
              LET'S TALK
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white rounded-full bg-white/5 border border-white/10 hover:border-neon-pink/40 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-neon-pink" /> : <Menu className="w-5 h-5" />}
          </button>
        </motion.nav>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-20 z-30 lg:hidden p-6 rounded-2xl bg-dark-900/95 border border-neon-pink/30 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          >
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2.5 px-4 text-sm font-mono text-gray-300 hover:text-white hover:bg-neon-pink/10 rounded-lg border border-transparent hover:border-neon-pink/30 transition-all"
                >
                  <span>{link.name}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-neon-pink opacity-60" />
                </a>
              ))}
              <div className="pt-2 border-t border-white/10 mt-2">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center py-3 text-xs font-mono font-bold tracking-widest text-white bg-neon-pink hover:bg-neon-deep rounded-xl shadow-[0_0_20px_#FF2E93] transition-all"
                >
                  CONTACT RAKSHA
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

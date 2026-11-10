import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 600);
          }, 300);
          return 100;
        }
        const increment = Math.floor(Math.random() * 25) + 15;
        return Math.min(prev + increment, 100);
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#060608] text-white select-none"
        >
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,46,147,0.12)_0%,transparent_60%)] pointer-events-none" />

          <div className="relative flex flex-col items-center space-y-6 max-w-sm w-full px-6">
            {/* Logo */}
            <motion.h1
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="text-4xl md:text-5xl font-heading font-extrabold tracking-wider"
            >
              RAKSHA<span className="text-neon-pink text-glow">.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.2 }}
              className="text-xs font-mono tracking-widest text-gray-400 uppercase"
            >
              INITIALIZING EXPERIENCE...
            </motion.p>

            {/* Pink Progress Line */}
            <div className="w-full h-[2px] bg-gray-900 overflow-hidden relative rounded-full">
              <motion.div
                className="h-full bg-gradient-to-r from-neon-pink to-neon-light shadow-[0_0_12px_#FF2E93]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            {/* Percentage Indicator */}
            <div className="flex justify-between w-full text-[10px] font-mono text-gray-500">
              <span>B.TECH IT PORTFOLIO</span>
              <span>{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

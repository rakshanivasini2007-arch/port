import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only activate on desktop devices
    if (window.innerWidth < 1024) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive =
          target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.closest('button') !== null ||
          target.closest('a') !== null ||
          target.classList.contains('interactive') ||
          target.closest('.interactive') !== null;

        setIsHovered(isInteractive);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden lg:block overflow-hidden">
      {/* Outer Ring */}
      <motion.div
        className={`absolute rounded-full border border-neon-pink transition-colors duration-200 ${
          isHovered
            ? 'bg-neon-pink/15 border-neon-pink shadow-[0_0_20px_#FF2E93]'
            : 'border-neon-pink/50 shadow-[0_0_8px_rgba(255,46,147,0.3)]'
        }`}
        animate={{
          x: position.x - (isHovered ? 24 : 14),
          y: position.y - (isHovered ? 24 : 14),
          width: isHovered ? 48 : 28,
          height: isHovered ? 48 : 28,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 350,
          mass: 0.5,
        }}
      />

      {/* Inner Dot */}
      <motion.div
        className="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_10px_#FFFFFF]"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: isHovered ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 40,
          stiffness: 500,
          mass: 0.1,
        }}
      />
    </div>
  );
};

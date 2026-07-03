import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Position coordinates of mouse
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring physics config
  const springConfig = { damping: 28, stiffness: 220, mass: 0.6 };
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Disable on touch screens (mobiles/tablets)
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    setIsVisible(true);
    document.body.classList.add('custom-cursor-active');

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('.interactive-item') ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA';
      
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Target Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-accent-cyan rounded-full pointer-events-none z-50 mix-blend-difference hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicking ? 0.6 : isHovered ? 1.5 : 1,
        }}
      />
      {/* Smooth Outer Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 w-9 h-9 border border-accent-blue rounded-full pointer-events-none z-50 hidden md:block"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicking ? 0.75 : isHovered ? 1.7 : 1,
          borderColor: isHovered ? '#00F2FE' : '#4FACFE',
          backgroundColor: isHovered ? 'rgba(0, 242, 254, 0.08)' : 'rgba(79, 172, 254, 0)',
        }}
      />
    </>
  );
};

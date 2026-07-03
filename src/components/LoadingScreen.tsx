import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState('Initializing experience...');

  useEffect(() => {
    const messages = [
      'Initializing experience...',
      'Loading digital assets...',
      'Mapping database architectures...',
      'Optimizing responsive components...',
      'Connecting to Tech Dome...',
      'Establishing secure networks...',
      'Welcome!',
    ];

    let messageIndex = 0;
    const msgInterval = setInterval(() => {
      if (messageIndex < messages.length - 1) {
        messageIndex++;
        setMessage(messages[messageIndex]);
      }
    }, 400);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          clearInterval(msgInterval);
          setTimeout(() => {
            onComplete();
          }, 400);
          return 100;
        }
        const step = prev > 80 ? 4 : prev > 50 ? 3 : 2;
        return Math.min(prev + step, 100);
      });
    }, 30);

    return () => {
      clearInterval(interval);
      clearInterval(msgInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0A0E1A] text-white"
      exit={{ 
        opacity: 0, 
        scale: 0.95, 
        transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } 
      }}
    >
      <div className="relative flex flex-col items-center max-w-sm w-full px-6">
        {/* Glowing aura */}
        <div className="absolute w-72 h-72 rounded-full bg-accent-blue/5 blur-3xl" />
        
        {/* Large display progress counter */}
        <motion.h1 
          className="text-7xl md:text-8xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-cyan"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {progress}%
        </motion.h1>

        {/* Custom Progress Bar */}
        <div className="mt-8 w-full h-[2px] bg-slate-800 rounded-full overflow-hidden relative">
          <motion.div 
            className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-accent-blue to-accent-cyan"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Loading details log */}
        <div className="mt-4 flex items-center justify-between w-full text-[10px] text-slate-500 font-mono uppercase tracking-widest">
          <span>PORTFOLIO_SYSTEMS // VER_2.0</span>
          <span>SYS_BOOT_OK</span>
        </div>

        {/* Status updates */}
        <AnimatePresence mode="wait">
          <motion.p
            key={message}
            className="mt-6 text-xs text-slate-400 font-mono tracking-wider h-6 text-center"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15 }}
          >
            {message}
          </motion.p>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

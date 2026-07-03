import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-xl border border-slate-200 dark:border-dark-border bg-white/50 dark:bg-dark-card/50 backdrop-blur-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none relative overflow-hidden group w-10 h-10 flex items-center justify-center"
      aria-label="Toggle Theme"
    >
      <motion.div
        initial={false}
        animate={{ 
          rotate: theme === 'dark' ? 90 : 0, 
          scale: theme === 'dark' ? 0 : 1,
          opacity: theme === 'dark' ? 0 : 1
        }}
        transition={{ duration: 0.3 }}
        className="text-[#FF8C00] absolute"
      >
        <FiSun className="w-5 h-5" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{ 
          rotate: theme === 'dark' ? 0 : -90, 
          scale: theme === 'dark' ? 1 : 0,
          opacity: theme === 'dark' ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="text-accent-cyan absolute"
      >
        <FiMoon className="w-5 h-5" />
      </motion.div>
    </button>
  );
};

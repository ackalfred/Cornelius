import React, { useEffect, useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const triggerCvConfetti = () => {
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.8 }
    });
    confetti({
      particleCount: 50,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.8 }
    });
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Tech Dome', id: 'tech-dome' },
    { label: 'Certificates', id: 'certifications' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Dynamic scroll spy logic
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'py-4 glass-nav shadow-lg' 
          : 'py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <button 
          onClick={() => scrollTo('home')}
          className="flex items-center gap-2.5 focus:outline-none group"
        >
          <div className="w-9 h-9 rounded-full overflow-hidden border border-slate-200 dark:border-dark-border group-hover:border-accent-cyan transition-all shadow-sm shrink-0">
            <img src="/logo.jpg" alt="Cornelius Logo" className="w-full h-full object-cover" />
          </div>
          <span className="text-xl font-display font-black text-slate-800 dark:text-white group-hover:text-accent-blue dark:group-hover:text-accent-cyan transition-colors">
            Cornelius
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium tracking-wide transition-all duration-200 relative focus:outline-none ${
                activeSection === item.id
                  ? 'text-accent-blue dark:text-accent-cyan font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-accent-blue to-accent-cyan"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Action Items */}
        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          <a
            href="/Agbemabiase_Cornelius_CV.pdf"
            download
            onClick={triggerCvConfetti}
            className="px-5 py-2.5 bg-gradient-to-r from-accent-blue to-accent-cyan hover:brightness-110 text-white rounded-xl text-sm font-semibold tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-accent-blue/20"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Header Menu Toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-dark-border bg-white/50 dark:bg-dark-card/50 text-slate-700 dark:text-slate-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden absolute top-full left-0 right-0 glass-nav border-t border-slate-200 dark:border-dark-border overflow-hidden"
          >
            <div className="flex flex-col gap-2 p-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`py-3 px-4 rounded-xl text-left text-sm font-medium tracking-wide transition-all ${
                    activeSection === item.id
                      ? 'bg-slate-100 dark:bg-dark-card text-accent-blue dark:text-accent-cyan font-bold border-l-2 border-accent-cyan'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-dark-card/30'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="h-[1px] bg-slate-200 dark:bg-dark-border/50 my-2" />
              <a
                href="/Agbemabiase_Cornelius_CV.pdf"
                download
                onClick={triggerCvConfetti}
                className="w-full text-center py-3 bg-gradient-to-r from-accent-blue to-accent-cyan text-white rounded-xl text-sm font-semibold tracking-wider transition-all duration-300 shadow-md"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

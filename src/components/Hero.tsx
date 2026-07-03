import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FiMail, FiArrowDown } from 'react-icons/fi';
import confetti from 'canvas-confetti';

const roles = [
  "Software Engineer",
  "Full Stack Developer",
  "IT Support Specialist",
  "Database Engineer",
  "Founder of Tech Dome Academy",
  "Youth Development Practitioner",
  "Digital Skills Trainer",
  "Graphic Designer",
  "UI/UX Designer",
  "Technology Educator"
];

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

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

  useEffect(() => {
    let timer: number;
    const fullText = roles[roleIndex];

    const type = () => {
      if (isDeleting) {
        setCurrentText(prev => prev.slice(0, -1));
        timer = window.setTimeout(type, 30);
      } else {
        setCurrentText(fullText.slice(0, currentText.length + 1));
        timer = window.setTimeout(type, 70);
      }

      if (!isDeleting && currentText === fullText) {
        timer = window.setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setRoleIndex(prev => (prev + 1) % roles.length);
      }
    };

    timer = window.setTimeout(type, 100);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-slate-50 dark:bg-[#0A0E1A]">
      
      {/* Dynamic Animated Glow Backdrops */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/10 dark:bg-accent-blue/5 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan/10 dark:bg-accent-cyan/5 rounded-full blur-3xl animate-pulse-slow animate-delay-200 pointer-events-none" />
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#0ea5e9_0.5px,transparent_0.5px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-10 dark:opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        
        {/* Text Area */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left items-center lg:items-start order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 dark:border-dark-border bg-white/50 dark:bg-dark-card/30 backdrop-blur-md text-xs font-semibold tracking-wider text-accent-blue dark:text-accent-cyan"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan"></span>
            </span>
            AVAILABLE FOR PROJECTS
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-black leading-none"
          >
            Agbemabiase <br className="hidden md:block"/>
            <span className="text-gradient">Alfred Kofi Cornelius</span>
          </motion.h1>

          {/* Typing Animation Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-10 text-xl md:text-2xl font-mono text-slate-600 dark:text-slate-300 font-medium flex items-center justify-center lg:justify-start"
          >
            <span>{currentText}</span>
            <span className="inline-block w-1.5 h-6 bg-accent-cyan ml-1 animate-pulse-slow">|</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed"
          >
            A passionate Software Engineer, community leader, and founder of Tech Dome Academy. I bridge the digital divide by building premium systems and mentoring youth in technology.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-2"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-accent-blue to-accent-cyan hover:brightness-110 text-white rounded-xl font-semibold tracking-wide transition-all shadow-lg shadow-accent-blue/15 hover:shadow-accent-blue/25 text-sm"
            >
              View Projects
            </button>
            <a
              href="/Agbemabiase_Cornelius_CV.pdf"
              download
              onClick={triggerCvConfetti}
              className="w-full sm:w-auto px-8 py-3.5 bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border hover:bg-slate-50 dark:hover:bg-[#1B2538] text-slate-800 dark:text-slate-200 rounded-xl font-semibold tracking-wide transition-all text-center text-sm shadow-sm"
            >
              Download CV
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto px-8 py-3.5 bg-transparent hover:bg-slate-100 dark:hover:bg-dark-card/30 text-slate-700 dark:text-slate-300 rounded-xl font-semibold tracking-wide transition-all text-sm"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-4 mt-4"
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-accent-blue transition-colors" aria-label="GitHub"><FaGithub className="w-5 h-5" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-accent-blue transition-colors" aria-label="LinkedIn"><FaLinkedin className="w-5 h-5" /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-accent-blue transition-colors" aria-label="Facebook"><FaFacebook className="w-5 h-5" /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-accent-blue transition-colors" aria-label="Instagram"><FaInstagram className="w-5 h-5" /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-accent-blue transition-colors" aria-label="Twitter"><FaTwitter className="w-5 h-5" /></a>
            <a href="mailto:ackjunioralfred@gmail.com" className="p-2 text-slate-400 hover:text-accent-blue transition-colors" aria-label="Email"><FiMail className="w-5 h-5" /></a>
          </motion.div>
        </div>

        {/* Profile Image Area */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-64 h-80 sm:w-80 sm:h-[400px] lg:w-[384px] lg:h-[480px]"
          >
            {/* Spinning decorative glowing rings */}
            <div className="absolute inset-0 rounded-3xl border-2 border-dashed border-accent-blue/30 dark:border-accent-blue/20 animate-spin-slow pointer-events-none" />
            <div className="absolute inset-4 rounded-2xl bg-gradient-to-tr from-accent-blue via-accent-cyan to-accent-cyan opacity-20 dark:opacity-10 blur-xl pointer-events-none" />
            
            {/* Professional Portrait */}
            <div className="absolute inset-3 rounded-2xl overflow-hidden border border-slate-200 dark:border-dark-border bg-slate-100 dark:bg-dark-card shadow-2xl group cursor-pointer">
              <img
                src="/CEO.jpeg"
                alt="Agbemabiase Alfred Kofi Cornelius"
                className="w-full h-full object-cover object-top grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
            </div>
            
            {/* Overlay statistics badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 px-4 py-2.5 rounded-xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xl flex items-center gap-2"
            >
              <div className="text-2xl">🌍</div>
              <div>
                <p className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase font-mono leading-none">COMMUNITY FOUNDER</p>
                <p className="text-xs font-bold text-slate-800 dark:text-white mt-1 leading-none">Tech Dome Academy</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>

      {/* Bounce scroll down button */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block">
        <button
          onClick={() => scrollToSection('about')}
          className="p-2.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-dark-card/30 text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors"
          aria-label="Scroll down"
        >
          <FiArrowDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

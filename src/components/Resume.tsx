import React from 'react';
import { FiDownload, FiFileText } from 'react-icons/fi';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

export const Resume: React.FC = () => {
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

  return (
    <section id="resume" className="relative py-24 bg-white dark:bg-[#070B14] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono tracking-widest text-accent-blue dark:text-accent-cyan font-bold uppercase mb-2"
          >
            Curriculum Vitae
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-black text-slate-800 dark:text-white"
          >
            Professional Resume / CV
          </motion.h3>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full mt-4" />
        </div>

        {/* Embed Frame Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-4xl rounded-3xl bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border/40 p-4 shadow-2xl overflow-hidden flex flex-col items-center"
        >
          {/* Top Control Bar */}
          <div className="flex items-center justify-between w-full pb-4 border-b border-slate-200 dark:border-dark-border/50 mb-4 px-2">
            <span className="text-xs font-mono text-slate-400 font-bold flex items-center gap-1.5 uppercase">
              <FiFileText /> Agbemabiase_Cornelius_CV.pdf
            </span>
            
            <a
              href="/Agbemabiase_Cornelius_CV.pdf"
              download
              onClick={triggerCvConfetti}
              className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-accent-blue to-accent-cyan hover:brightness-110 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md"
            >
              <FiDownload className="w-3.5 h-3.5" />
              Download CV
            </a>
          </div>

          {/* Responsive Viewer Container */}
          <div className="w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-dark-card flex flex-col justify-center items-center">
            
            {/* Desktop and Tablet PDF Viewer */}
            <div className="hidden md:block w-full h-[650px]">
              <iframe
                src="/Agbemabiase_Cornelius_CV.pdf"
                width="100%"
                height="100%"
                title="Agbemabiase Alfred Kofi Cornelius CV"
                className="border-none"
              />
            </div>

            {/* Mobile Fallback Card */}
            <div className="md:hidden flex flex-col items-center text-center p-8 bg-slate-50 dark:bg-dark-card w-full">
              <div className="w-16 h-16 rounded-2xl bg-rose-100 dark:bg-rose-950/20 text-rose-500 dark:text-rose-400 flex items-center justify-center mb-4">
                <FiFileText className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-display font-bold text-slate-800 dark:text-white mb-2">
                Curriculum Vitae Preview
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs leading-relaxed mb-6">
                Direct in-browser PDF viewing is limited on smaller mobile screens. Tap below to read or download the complete CV.
              </p>
              <div className="flex flex-col gap-3 w-full">
                <a
                  href="/Agbemabiase_Cornelius_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-gradient-to-r from-accent-blue to-accent-cyan text-white font-bold rounded-xl text-sm shadow-md flex items-center justify-center gap-2"
                >
                  <FiFileText className="w-4 h-4" />
                  View CV in New Tab
                </a>
                <a
                  href="/Agbemabiase_Cornelius_CV.pdf"
                  download
                  onClick={triggerCvConfetti}
                  className="w-full py-3 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold rounded-xl text-sm transition-colors flex items-center justify-center gap-2"
                >
                  <FiDownload className="w-4 h-4" />
                  Download Offline PDF
                </a>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

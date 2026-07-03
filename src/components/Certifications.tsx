import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiAward, FiExternalLink, FiX, FiDownload } from 'react-icons/fi';

interface Certificate {
  title: string;
  issuer: string;
  file: string;
  category: 'dev-it' | 'ai' | 'design-biz' | 'skills';
}

const certificationsData: Certificate[] = [
  {
    title: "Honours Diploma in IT (Software Engineering)",
    issuer: "OpenLabs NIIT Ghana",
    file: "NIIT Cert.pdf",
    category: "dev-it"
  },
  {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn Learning",
    file: "CertificateOfCompletion_Career Essentials in Generative AI by Microsoft and LinkedIn.pdf",
    category: "ai"
  },
  {
    title: "AWS Course Completion Certificate",
    issuer: "Amazon Web Services",
    file: "AWS Course Completion Certificate.pdf",
    category: "dev-it"
  },
  {
    title: "Fundamentals of Starting and Running a Business",
    issuer: "YALI Network",
    file: "YALI Network Online Course Certificate.pdf",
    category: "design-biz"
  },
  {
    title: "Excel Macros Certificate",
    issuer: "Simplilearn",
    file: "Excel Macros Cert Simpli Learn.pdf",
    category: "dev-it"
  },
  {
    title: "HTML Course Certificate",
    issuer: "SoloLearn",
    file: "HTML SOLO LEARN.pdf",
    category: "dev-it"
  },
  {
    title: "Introduction to Artificial Intelligence",
    issuer: "LinkedIn Learning",
    file: "CertificateOfCompletion_Introduction to Artificial Intelligence.pdf",
    category: "ai"
  },
  {
    title: "What is Generative AI",
    issuer: "LinkedIn Learning",
    file: "CertificateOfCompletion_What Is Generative AI.pdf",
    category: "ai"
  },
  {
    title: "Ethics in the Age of Generative AI",
    issuer: "LinkedIn Learning",
    file: "CertificateOfCompletion_Ethics in the Age of Generative AI.pdf",
    category: "ai"
  },
  {
    title: "Programming Foundations: Beyond the Fundamentals",
    issuer: "LinkedIn Learning",
    file: "CertificateOfCompletion_Programming Foundations Beyond the Fundamentals.pdf",
    category: "dev-it"
  },
  {
    title: "What is Graphic Design",
    issuer: "LinkedIn Learning",
    file: "CertificateOfCompletion_What is Graphic Design.pdf",
    category: "design-biz"
  },
  {
    title: "Graphic Design Careers: First Steps",
    issuer: "LinkedIn Learning",
    file: "CertificateOfCompletion_Graphic Design Careers First Steps.pdf",
    category: "design-biz"
  },
  {
    title: "Critical Thinking for Better Judgment & Decision-Making",
    issuer: "LinkedIn Learning",
    file: "CertificateOfCompletion_Critical Thinking for Better Judgment and DecisionMaking.pdf",
    category: "skills"
  },
  {
    title: "National Service Certificate (NSS)",
    issuer: "Ga West Municipal Assembly / NSS",
    file: "Digital_Certificate_NSSGII7401823.pdf",
    category: "dev-it"
  }
];

export const Certifications: React.FC = () => {
  const [activeCat, setActiveCat] = useState<'all' | Certificate['category']>('all');
  const [search, setSearch] = useState('');
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);

  const categories = [
    { id: 'all', label: 'All Certs' },
    { id: 'dev-it', label: 'Software & IT' },
    { id: 'ai', label: 'Artificial Intelligence' },
    { id: 'design-biz', label: 'Design & Business' },
    { id: 'skills', label: 'Core Skills' },
  ];

  const filteredCerts = certificationsData.filter((cert) => {
    const matchesTab = activeCat === 'all' || cert.category === activeCat;
    const matchesSearch = cert.title.toLowerCase().includes(search.toLowerCase()) || 
                          cert.issuer.toLowerCase().includes(search.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <section id="certifications" className="relative py-24 bg-white dark:bg-[#070B14] overflow-hidden">
      
      {/* Glow overlays */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-accent-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono tracking-widest text-accent-blue dark:text-accent-cyan font-bold uppercase mb-2"
          >
            Verified Credentials
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-black text-slate-800 dark:text-white"
          >
            Certifications & Coursework
          </motion.h3>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full mt-4" />
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-10">
          
          <div className="flex flex-wrap gap-2 justify-center p-1.5 rounded-2xl bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border w-full md:w-auto shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCat(cat.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeCat === cat.id
                    ? 'bg-gradient-to-r from-accent-blue to-accent-cyan text-white shadow-md'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search credentials..."
              className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border focus:border-accent-cyan dark:focus:border-accent-cyan rounded-2xl text-sm focus:outline-none transition-all shadow-sm"
            />
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
          </div>

        </div>

        {/* Badges Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert) => (
              <motion.div
                key={cert.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-dark-card border border-slate-200/60 dark:border-dark-border/40 hover:border-accent-cyan/30 dark:hover:border-accent-cyan/20 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group shadow-sm"
              >
                <div className="flex gap-4 items-start">
                  <div className="p-3.5 bg-gradient-to-tr from-accent-blue/10 to-accent-cyan/10 border border-accent-blue/20 dark:border-dark-border rounded-xl text-accent-blue dark:text-accent-cyan group-hover:scale-110 transition-transform duration-300">
                    <FiAward className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="text-base font-display font-bold text-slate-800 dark:text-white group-hover:text-accent-blue dark:group-hover:text-accent-cyan transition-colors leading-snug">
                      {cert.title}
                    </h5>
                    <p className="text-xs font-semibold text-slate-400 mt-1 uppercase font-mono tracking-wider">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200/50 dark:border-dark-border/50 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase">
                    {cert.category.replace('-', ' // ')}
                  </span>
                  
                  <button
                    onClick={() => setActiveCert(cert)}
                    className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 hover:text-accent-blue dark:hover:text-accent-cyan font-bold uppercase transition-colors focus:outline-none"
                  >
                    View PDF
                    <FiExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredCerts.length === 0 && (
          <div className="text-center py-12 text-slate-400 font-mono text-sm">
            NO CREDENTIALS MATCHING "{search.toUpperCase()}"
          </div>
        )}

      </div>

      {/* Lightbox / Modal Iframe PDF Viewer */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 md:p-6"
            onClick={() => setActiveCert(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-full max-w-5xl h-[85vh] rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header / Controls */}
              <div className="flex items-center justify-between w-full p-4 border-b border-slate-800 bg-[#070B14] text-white">
                <div className="flex flex-col">
                  <h4 className="text-sm font-bold leading-tight font-display">{activeCert.title}</h4>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mt-0.5">{activeCert.issuer}</span>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={`/certificates/${activeCert.file}`}
                    download
                    className="p-2.5 bg-slate-800 hover:bg-accent-blue rounded-xl text-white transition-colors"
                    title="Download PDF"
                  >
                    <FiDownload className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => setActiveCert(null)}
                    className="p-2.5 bg-slate-800 hover:bg-rose-600 rounded-xl text-white transition-colors focus:outline-none"
                    title="Close"
                  >
                    <FiX className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* PDF frame container */}
              <div className="flex-grow w-full bg-white dark:bg-dark-card relative flex flex-col justify-center items-center">
                
                {/* Desktop/Tablet Viewer */}
                <div className="hidden md:block w-full h-full">
                  <iframe
                    src={`/certificates/${activeCert.file}`}
                    width="100%"
                    height="100%"
                    title={activeCert.title}
                    className="border-none"
                  />
                </div>

                {/* Mobile Fallback Card */}
                <div className="md:hidden flex flex-col items-center text-center p-8 bg-slate-900 text-white w-full h-full justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-accent-blue/10 border border-accent-blue/20 text-accent-blue dark:text-accent-cyan flex items-center justify-center mb-4">
                    <FiAward className="w-8 h-8" />
                  </div>
                  <h4 className="text-base font-display font-bold mb-2 max-w-xs">
                    {activeCert.title}
                  </h4>
                  <p className="text-xs text-slate-400 max-w-xs leading-relaxed mb-6 font-mono uppercase tracking-wider">
                    {activeCert.issuer}
                  </p>
                  <div className="flex flex-col gap-3 w-full max-w-xs">
                    <a
                      href={`/certificates/${activeCert.file}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 bg-gradient-to-r from-accent-blue to-accent-cyan text-white font-bold rounded-xl text-sm shadow-md flex items-center justify-center gap-2"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      View Certificate PDF
                    </a>
                    <a
                      href={`/certificates/${activeCert.file}`}
                      download
                      className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold rounded-xl text-sm transition-colors flex items-center justify-center gap-2 border border-slate-700"
                    >
                      <FiDownload className="w-4 h-4" />
                      Download PDF
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

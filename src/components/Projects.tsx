import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder, FiFileText } from 'react-icons/fi';

interface Project {
  title: string;
  description: string;
  tech: string[];
  category: 'engineering' | 'database' | 'mobile-ai' | 'design-cms';
  github?: string;
  demo?: string;
  caseStudy?: boolean;
  bgGradient: string;
}

const projectsData: Project[] = [
  {
    title: "Christian Match Ghana",
    description: "A secure, privacy-focused match-making platform designed for the Christian community in Ghana. Features automated user vetting, custom compatibility questionnaires, and secure chat APIs.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "Firebase"],
    category: "engineering",
    github: "https://github.com",
    demo: "https://example.com",
    caseStudy: true,
    bgGradient: "from-[#FF5E62] to-[#FF9966]"
  },
  {
    title: "Tech Dome Academy Website",
    description: "The digital portal for Tech Dome Academy. Incorporates class registration systems, course curriculum displays, automated enrollment tracking, and community support channels.",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Node.js", "PostgreSQL"],
    category: "engineering",
    github: "https://github.com",
    demo: "https://example.com",
    caseStudy: true,
    bgGradient: "from-accent-blue via-accent-cyan to-accent-cyan"
  },
  {
    title: "Municipal Assembly Projects",
    description: "Administered data structures and local auditing systems for the Ga West Municipal Assembly. Optimized SQL architectures, user authentication flows, and software deployment pipelines.",
    tech: ["SQL", "Database Administration", "JavaScript", "HTML5", "CSS3"],
    category: "database",
    github: "https://github.com",
    caseStudy: true,
    bgGradient: "from-[#4776E6] to-[#8E54E9]"
  },
  {
    title: "AI Applications",
    description: "Tailored productivity tools utilizing Generative AI and prompt engineering principles. Includes an educational AI assistant that assists students in mastering basic programming concepts.",
    tech: ["Python", "OpenAI API", "React", "Prompt Engineering", "Vite"],
    category: "mobile-ai",
    github: "https://github.com",
    demo: "https://example.com",
    bgGradient: "from-[#00F2FE] to-[#4FACFE]"
  },
  {
    title: "WordPress Websites",
    description: "A collection of highly responsive corporate and blog sites designed using custom WordPress themes. Optimized for search engines (SEO), security, and fast loading performance.",
    tech: ["WordPress", "SEO", "Elementor", "PHP", "MySQL", "CSS"],
    category: "design-cms",
    demo: "https://example.com",
    bgGradient: "from-[#11998e] to-[#38ef7d]"
  },
  {
    title: "Graphic Design Portfolio",
    description: "Brand identities, promotional brochures, banners, magazines, and social media flyers designed using professional graphic design suites for local businesses and organizations.",
    tech: ["Photoshop", "Illustrator", "Canva", "Print Layouts"],
    category: "design-cms",
    demo: "https://example.com",
    bgGradient: "from-[#fc466b] to-[#3f5efb]"
  },
  {
    title: "Android Projects",
    description: "Mobile applications built in Android Studio focusing on regional civic challenges, such as interactive school schedules, public announcements, and educational resources.",
    tech: ["Android Studio", "Java", "Figma", "Mobile UI Design"],
    category: "mobile-ai",
    github: "https://github.com",
    bgGradient: "from-[#F3904F] to-[#3B4371]"
  }
];

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | Project['category']>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'engineering', label: 'Software Eng' },
    { id: 'database', label: 'Databases' },
    { id: 'mobile-ai', label: 'Mobile & AI' },
    { id: 'design-cms', label: 'WordPress & Design' },
  ];

  const filteredProjects = projectsData.filter(
    (proj) => activeFilter === 'all' || proj.category === activeFilter
  );

  return (
    <section id="projects" className="relative py-24 bg-white dark:bg-[#070B14] overflow-hidden">
      
      {/* Background gradients */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono tracking-widest text-accent-blue dark:text-accent-cyan font-bold uppercase mb-2"
          >
            My Creations
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-black text-slate-800 dark:text-white"
          >
            Featured Projects & Portfolio
          </motion.h3>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full mt-4" />

          {/* Filtering navigation */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border w-fit shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id as any)}
                className={`px-4 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === cat.id
                    ? 'bg-gradient-to-r from-accent-blue to-accent-cyan text-white shadow-md'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                key={proj.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl border border-slate-200/60 dark:border-dark-border/40 bg-slate-50 dark:bg-dark-card overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300 group shadow-sm h-full"
              >
                {/* Visual mockup representation header */}
                <div className={`h-48 bg-gradient-to-tr ${proj.bgGradient} relative flex items-center justify-center p-6 transition-all duration-500 overflow-hidden`}>
                  
                  {/* Decorative glowing shapes */}
                  <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
                  <div className="absolute w-40 h-40 rounded-full bg-white/10 blur-xl translate-x-12 translate-y-12 group-hover:translate-x-16 transition-all duration-500" />
                  
                  {/* Floating folder emblem */}
                  <FiFolder className="w-16 h-16 text-white/40 drop-shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" />
                  
                  {/* Category badge */}
                  <span className="absolute top-4 left-4 bg-white/20 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {proj.category.replace('-', ' ')}
                  </span>
                </div>

                {/* Body details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-display font-bold text-slate-800 dark:text-white group-hover:text-accent-blue dark:group-hover:text-accent-cyan transition-colors mb-2">
                      {proj.title}
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                      {proj.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech list */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {proj.tech.map((t) => (
                        <span 
                          key={t}
                          className="text-[10px] font-semibold font-mono bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-3 pt-4 border-t border-slate-200/50 dark:border-dark-border/50 text-sm">
                      {proj.github && (
                        <a 
                          href={proj.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-accent-blue dark:hover:text-accent-cyan font-semibold transition-colors"
                        >
                          <FiGithub className="w-4 h-4" />
                          Code
                        </a>
                      )}
                      {proj.demo && (
                        <a 
                          href={proj.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-accent-blue dark:hover:text-accent-cyan font-semibold transition-colors"
                        >
                          <FiExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                      {proj.caseStudy && (
                        <button 
                          className="flex items-center gap-1.5 ml-auto text-xs text-accent-blue dark:text-accent-cyan border border-accent-blue/20 dark:border-accent-cyan/20 bg-accent-blue/5 dark:bg-accent-cyan/5 hover:bg-accent-blue/10 dark:hover:bg-accent-cyan/10 px-2.5 py-1 rounded-lg font-bold tracking-wide transition-all"
                        >
                          <FiFileText className="w-3.5 h-3.5" />
                          Case Study
                        </button>
                      )}
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

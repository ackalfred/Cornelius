import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiClock, FiArrowRight, FiSearch } from 'react-icons/fi';

interface Article {
  title: string;
  summary: string;
  category: 'programming' | 'ai' | 'technology' | 'leadership' | 'faith' | 'tutorials' | 'community';
  date: string;
  readTime: string;
  image: string;
}

const blogArticles: Article[] = [
  {
    title: "Bridging the Digital Divide: Tech Dome Academy's Mission",
    summary: "Reflecting on my journey starting a non-profit in Ghana, our impact numbers, and the vision of teaching children basic coding and AI productivity.",
    category: "community",
    date: "Jun 24, 2026",
    readTime: "5 min read",
    image: "from-accent-blue/20 to-accent-cyan/20"
  },
  {
    title: "Understanding SQL Database Optimization and Scaling",
    summary: "A developer guide on indexing strategies, query performance optimization, database backups, and recovery plans for high-scaling web apps.",
    category: "programming",
    date: "May 12, 2026",
    readTime: "8 min read",
    image: "from-[#4776E6]/20 to-[#8E54E9]/20"
  },
  {
    title: "Integrating AI in Education: Preparing for the Future of Work",
    summary: "How prompt engineering and generative AI tools can help students speed up learning, while promoting critical thinking in modern school complexes.",
    category: "ai",
    date: "Apr 05, 2026",
    readTime: "6 min read",
    image: "from-[#00F2FE]/20 to-[#4FACFE]/20"
  },
  {
    title: "Leading with Purpose: Values, Pedagogy, and Code",
    summary: "How faith, moral education, and technical discipline guide my path as a software engineer and founder, shaping how I teach and manage teams.",
    category: "leadership",
    date: "Mar 18, 2026",
    readTime: "4 min read",
    image: "from-[#fc466b]/20 to-[#3f5efb]/20"
  },
  {
    title: "Step-by-Step: Creating a Glassmorphic Navigation in React",
    summary: "A practical developer tutorial on using Tailwind CSS and Framer Motion to build an interactive, blurred, premium header navigation component.",
    category: "tutorials",
    date: "Feb 09, 2026",
    readTime: "7 min read",
    image: "from-[#11998e]/20 to-[#38ef7d]/20"
  }
];

export const Blog: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | Article['category']>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'programming', label: 'Programming' },
    { id: 'ai', label: 'AI' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'tutorials', label: 'Tutorials' },
    { id: 'community', label: 'Community' },
  ];

  const filteredArticles = blogArticles.filter((art) => {
    const matchesTab = activeTab === 'all' || art.category === activeTab;
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          art.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <section id="blog" className="relative py-24 bg-slate-50 dark:bg-[#0A0E1A] overflow-hidden">
      
      {/* Background gradients */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-accent-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono tracking-widest text-accent-blue dark:text-accent-cyan font-bold uppercase mb-2"
          >
            My Thoughts
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-black text-slate-800 dark:text-white"
          >
            Articles & Technology Insights
          </motion.h3>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full mt-4" />
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-10">
          
          <div className="flex flex-wrap gap-2 justify-center p-1.5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border w-full md:w-auto shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === cat.id
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-11 pr-4 py-3 bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border focus:border-accent-cyan dark:focus:border-accent-cyan rounded-2xl text-sm focus:outline-none transition-all shadow-sm"
            />
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
          </div>

        </div>

        {/* Articles Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredArticles.map((art) => (
              <motion.div
                key={art.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="rounded-2xl border border-slate-200/60 dark:border-dark-border/40 bg-white dark:bg-dark-card overflow-hidden flex flex-col justify-between hover:shadow-2xl transition-all duration-300 group shadow-sm h-full"
              >
                <div>
                  {/* Visual mockup banner */}
                  <div className={`h-40 bg-gradient-to-tr ${art.image} relative overflow-hidden flex items-center justify-center`}>
                    <div className="absolute inset-0 bg-black/5 mix-blend-overlay" />
                    <span className="text-[10px] font-mono tracking-widest font-extrabold uppercase px-3 py-1 bg-white/40 dark:bg-black/30 backdrop-blur-md rounded-full border border-white/20 dark:border-black/20 text-slate-800 dark:text-white">
                      {art.category}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-slate-400 font-mono mb-3">
                      <span>{art.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1"><FiClock /> {art.readTime}</span>
                    </div>

                    <h4 className="text-lg font-display font-bold text-slate-800 dark:text-white group-hover:text-accent-blue dark:group-hover:text-accent-cyan transition-colors mb-2 leading-snug">
                      {art.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {art.summary}
                    </p>
                  </div>
                </div>

                {/* Card Action footer */}
                <div className="px-6 pb-6 pt-4 border-t border-slate-200/50 dark:border-dark-border/50">
                  <button className="flex items-center gap-1 text-xs font-bold text-accent-blue dark:text-accent-cyan uppercase tracking-wider group-hover:gap-2 transition-all">
                    Read Article <FiArrowRight />
                  </button>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12 text-slate-400 font-mono text-sm">
            NO ARTICLES MATCHING "{searchQuery.toUpperCase()}"
          </div>
        )}

      </div>
    </section>
  );
};

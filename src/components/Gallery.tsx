import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryItem {
  title: string;
  tag: 'speaking' | 'workshops' | 'volunteering' | 'classroom' | 'hackathons';
  description: string;
  gradient: string;
}

const galleryData: GalleryItem[] = [
  {
    title: "Inspiring Youth in Technology",
    tag: "speaking",
    description: "Panel speaking engagement at local tech bootcamps, sharing tips for junior engineers in Ghana.",
    gradient: "from-[#FF9966] to-[#FF5E62]"
  },
  {
    title: "AI Productivity Workshops",
    tag: "workshops",
    description: "Teaching prompt engineering and generative AI productivity frameworks to local youths.",
    gradient: "from-[#4FACFE] to-[#00F2FE]"
  },
  {
    title: "Volunteering at Love Alister",
    tag: "volunteering",
    description: "Supporting community feeding exercises and distributing supplies to underserved children.",
    gradient: "from-[#8E54E9] to-[#4776E6]"
  },
  {
    title: "Classroom Coding Sessions",
    tag: "classroom",
    description: "Introducing elementary children to HTML, CSS, and basic block coding structures at Divine Dominion.",
    gradient: "from-[#38EF7D] to-[#11998E]"
  },
  {
    title: "Ga West Tech Hackathon",
    tag: "hackathons",
    description: "Collaborated with regional developers to build file management tools for Ga West Assembly.",
    gradient: "from-[#3B4371] to-[#F3904F]"
  },
  {
    title: "Tech Dome Career Seminars",
    tag: "workshops",
    description: "Conducting mentoring calls, CV reviews, and sharing portfolio setup instructions with students.",
    gradient: "from-[#FAD961] to-[#F76B1C]"
  }
];

export const Gallery: React.FC = () => {
  const [activeTag, setActiveTag] = useState<'all' | GalleryItem['tag']>('all');

  const tags = [
    { id: 'all', label: 'All Media' },
    { id: 'speaking', label: 'Speaking' },
    { id: 'workshops', label: 'Workshops' },
    { id: 'volunteering', label: 'Volunteering' },
    { id: 'classroom', label: 'Classroom' },
    { id: 'hackathons', label: 'Hackathons' },
  ];

  const filteredItems = galleryData.filter(
    (item) => activeTag === 'all' || item.tag === activeTag
  );

  return (
    <section id="gallery" className="relative py-24 bg-white dark:bg-[#070B14] overflow-hidden">
      
      {/* Background elements */}
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
            Moments
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-black text-slate-800 dark:text-white"
          >
            Social Outreach & Gallery
          </motion.h3>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full mt-4" />

          {/* Filtering */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border w-fit shadow-sm">
            {tags.map((tag) => (
              <button
                key={tag.id}
                onClick={() => setActiveTag(tag.id as any)}
                className={`px-4 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeTag === tag.id
                    ? 'bg-gradient-to-r from-accent-blue to-accent-cyan text-white shadow-md'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white'
                }`}
              >
                {tag.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative h-64 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm group cursor-pointer"
              >
                {/* Gradient background with overlay */}
                <div className={`absolute inset-0 bg-gradient-to-tr ${item.gradient} transition-transform duration-700 group-hover:scale-110`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 transition-opacity duration-300" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-10">
                  <span className="text-[9px] font-mono tracking-widest font-extrabold uppercase px-2.5 py-1 bg-white/20 backdrop-blur-md rounded-full border border-white/20 w-fit mb-3">
                    {item.tag}
                  </span>
                  <h4 className="text-xl font-display font-bold leading-tight group-hover:text-accent-cyan transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-white/70 leading-relaxed mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-16 overflow-hidden">
                    {item.description}
                  </p>
                </div>

                {/* Subtle light streak reflection */}
                <div className="absolute inset-0 w-1/2 h-full bg-white/5 skew-x-[-20deg] translate-x-[-150%] group-hover:translate-x-[250%] transition-transform duration-1000 ease-out" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiCpu, FiFeather } from 'react-icons/fi';
import { FaWindows, FaMicrosoft, FaJava, FaPython } from 'react-icons/fa';
import { DiPhotoshop, DiIllustrator } from 'react-icons/di';
import { 
  SiHtml5, SiCss, SiJavascript, SiReact, SiTailwindcss, SiVite, 
  SiNodedotjs, SiExpress, SiPostgresql, SiFigma, SiWordpress, SiGit, SiGithub, 
  SiLinux, SiApple, SiCplusplus, SiFirebase
} from 'react-icons/si';

interface Skill {
  name: string;
  category: 'programming' | 'backend' | 'database' | 'design' | 'cms' | 'ai' | 'other';
  icon: React.ReactNode;
  level: string; // 'Expert' | 'Advanced' | 'Intermediate'
}

const skillsData: Skill[] = [
  // Programming
  { name: 'HTML5', category: 'programming', icon: <SiHtml5 className="text-[#E34F26]" />, level: 'Expert' },
  { name: 'CSS3', category: 'programming', icon: <SiCss className="text-[#1572B6]" />, level: 'Expert' },
  { name: 'JavaScript', category: 'programming', icon: <SiJavascript className="text-[#F7DF1E]" />, level: 'Advanced' },
  { name: 'React', category: 'programming', icon: <SiReact className="text-[#61DAFB]" />, level: 'Advanced' },
  { name: 'Tailwind CSS', category: 'programming', icon: <SiTailwindcss className="text-[#06B6D4]" />, level: 'Expert' },
  { name: 'Vite', category: 'programming', icon: <SiVite className="text-[#646CFF]" />, level: 'Advanced' },
  { name: 'Java', category: 'programming', icon: <FaJava className="text-[#5382a1]" />, level: 'Advanced' },
  { name: 'Python', category: 'programming', icon: <FaPython className="text-[#3776AB]" />, level: 'Advanced' },
  { name: 'C++', category: 'programming', icon: <SiCplusplus className="text-[#00599C]" />, level: 'Advanced' },
  
  // Backend
  { name: 'Node.js', category: 'backend', icon: <SiNodedotjs className="text-[#339933]" />, level: 'Advanced' },
  { name: 'Express', category: 'backend', icon: <SiExpress className="text-[#000000] dark:text-[#FFFFFF]" />, level: 'Advanced' },
  
  // Database
  { name: 'SQL', category: 'database', icon: <SiPostgresql className="text-[#4169E1]" />, level: 'Expert' },
  { name: 'DB Administration', category: 'database', icon: <SiPostgresql className="text-[#336791]" />, level: 'Expert' },
  { name: 'Firebase', category: 'database', icon: <SiFirebase className="text-[#FFCA28]" />, level: 'Advanced' },
  
  // Design
  { name: 'Figma', category: 'design', icon: <SiFigma className="text-[#F24E1E]" />, level: 'Expert' },
  { name: 'Photoshop', category: 'design', icon: <DiPhotoshop className="text-[#31A8FF]" />, level: 'Advanced' },
  { name: 'Illustrator', category: 'design', icon: <DiIllustrator className="text-[#FF9A00]" />, level: 'Advanced' },
  { name: 'Canva', category: 'design', icon: <FiFeather className="text-[#00C4CC]" />, level: 'Expert' },
  
  // CMS
  { name: 'WordPress', category: 'cms', icon: <SiWordpress className="text-[#21759B]" />, level: 'Expert' },
  
  // AI
  { name: 'Prompt Engineering', category: 'ai', icon: <span>✨</span>, level: 'Expert' },
  { name: 'Generative AI', category: 'ai', icon: <span>🤖</span>, level: 'Advanced' },
  { name: 'AI Productivity Tools', category: 'ai', icon: <span>⚡</span>, level: 'Expert' },
  
  // Other
  { name: 'Git', category: 'other', icon: <SiGit className="text-[#F05032]" />, level: 'Advanced' },
  { name: 'GitHub', category: 'other', icon: <SiGithub className="text-[#181717] dark:text-[#FFFFFF]" />, level: 'Advanced' },
  { name: 'Microsoft Office', category: 'other', icon: <FaMicrosoft className="text-[#D83B01]" />, level: 'Expert' },
  { name: 'Linux', category: 'other', icon: <SiLinux className="text-[#FCC624]" />, level: 'Advanced' },
  { name: 'Windows', category: 'other', icon: <FaWindows className="text-[#0078D6]" />, level: 'Expert' },
  { name: 'macOS', category: 'other', icon: <SiApple className="text-[#000000] dark:text-[#FFFFFF]" />, level: 'Advanced' },
  { name: 'Computer Hardware', category: 'other', icon: <FiCpu className="text-[#A2703F]" />, level: 'Expert' }
];

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | Skill['category']>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'programming', label: 'Programming' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'design', label: 'Design' },
    { id: 'cms', label: 'CMS' },
    { id: 'ai', label: 'AI' },
    { id: 'other', label: 'Other' },
  ];

  const filteredSkills = skillsData.filter((skill) => {
    const matchesTab = activeTab === 'all' || skill.category === activeTab;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <section id="skills" className="relative py-24 bg-slate-50 dark:bg-[#0A0E1A] overflow-hidden">
      
      {/* Decors */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono tracking-widest text-accent-blue dark:text-accent-cyan font-bold uppercase mb-2"
          >
            My Toolbox
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-black text-slate-800 dark:text-white"
          >
            Technical Competencies & Skills
          </motion.h3>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full mt-4" />
        </div>

        {/* Filter and Search Bar Container */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-10">
          
          {/* Tabs */}
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

          {/* Search */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills..."
              className="w-full pl-11 pr-4 py-3 bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border focus:border-accent-cyan dark:focus:border-accent-cyan rounded-2xl text-sm focus:outline-none transition-all shadow-sm"
            />
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
          </div>

        </div>

        {/* Grid Skills Display */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/60 dark:border-dark-border/40 hover:border-accent-cyan/30 dark:hover:border-accent-cyan/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group shadow-sm relative overflow-hidden h-36"
              >
                {/* Accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-blue to-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon wrapper */}
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 w-fit">
                  {skill.icon}
                </div>

                {/* Info */}
                <div>
                  <h4 className="text-sm font-bold text-slate-800 dark:text-white leading-tight">
                    {skill.name}
                  </h4>
                  <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-slate-400 dark:text-slate-500 mt-1 block">
                    {skill.level}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search State */}
        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-slate-400 dark:text-slate-500 font-mono text-sm">
            NO SKILLS MATCHING "{searchQuery.toUpperCase()}"
          </div>
        )}

      </div>
    </section>
  );
};

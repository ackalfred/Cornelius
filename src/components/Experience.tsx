import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiArrowRight, FiBookOpen } from 'react-icons/fi';

interface Job {
  id: number;
  role: string;
  company: string;
  period: string;
  type: 'tech' | 'education';
  responsibilities: string[];
}

const experiences: Job[] = [
  {
    id: 1,
    role: "National Service Personnel",
    company: "Ga West Municipal Assembly",
    period: "Nov. 2023 – Oct. 2024",
    type: "tech",
    responsibilities: [
      "Software installation and maintenance across municipal departments.",
      "Administered regional databases, ensuring data integrity and accessibility.",
      "Secured organizational information and implemented cybersecurity best practices.",
      "Audited security controls to protect civic data infrastructure.",
      "Managed and updated the official Municipal Assembly Website."
    ]
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "Strong Redeemer Technologies",
    period: "2020 – 2023",
    type: "tech",
    responsibilities: [
      "Developed, tested, and maintained critical software systems.",
      "Integrated backend databases and optimized overall system speed and scalability.",
      "Created visual designs, advertisements, banners, and layout materials.",
      "Ensured seamless cross-platform integration between disparate software solutions.",
      "Collaborated with data scientists, senior systems architects, and development teams."
    ]
  },
  {
    id: 3,
    role: "Junior Database Engineer",
    company: "Ga West Municipal Assembly",
    period: "2020 (6 Months)",
    type: "tech",
    responsibilities: [
      "Administered local databases, managing security, integrity, and user accessibility.",
      "Maintained data extraction, transformation, and loading (ETL) workflows.",
      "Monitored database performance and carried out SQL query tuning.",
      "Created and executed comprehensive database backup and recovery plans.",
      "Provided tech support and database troubleshooting to municipal staff."
    ]
  },
  {
    id: 4,
    role: "Class Teacher",
    company: "Rev. Theotina School Complex",
    period: "2018 – 2019",
    type: "education",
    responsibilities: [
      "Taught Mathematics and Religious & Moral Education to school students.",
      "Fostered community building, positive behavior, and moral character in class.",
      "Designed interactive lesson plans to improve student engagement."
    ]
  },
  {
    id: 5,
    role: "Assistant Head Teacher",
    company: "Divine Dominion School Complex",
    period: "2016 – 2017",
    type: "education",
    responsibilities: [
      "Managed day-to-day administrative tasks as Assistant Head Teacher.",
      "Taught Mathematics and Integrated Science with a focus on logical thinking.",
      "Supervised teaching staff and organized extracurricular school programs."
    ]
  }
];

export const Experience: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'tech' | 'education'>('all');
  const [expandedJob, setExpandedJob] = useState<number | null>(experiences[0].id);

  const filteredExp = experiences.filter(job => filter === 'all' || job.type === filter);

  return (
    <section id="experience" className="relative py-24 bg-slate-50 dark:bg-[#0A0E1A] overflow-hidden">
      
      {/* Background patterns */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-accent-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono tracking-widest text-accent-blue dark:text-accent-cyan font-bold uppercase mb-2"
          >
            Professional Path
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-black text-slate-800 dark:text-white"
          >
            My Professional Journey
          </motion.h3>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full mt-4" />

          {/* Filtering buttons */}
          <div className="flex items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border w-fit shadow-sm">
            {(['all', 'tech', 'education'] as const).map((t) => (
              <button
                key={t}
                onClick={() => {
                  setFilter(t);
                  // Auto-expand first item in newly filtered list
                  const matches = experiences.filter(job => t === 'all' || job.type === t);
                  if (matches.length > 0) setExpandedJob(matches[0].id);
                }}
                className={`px-4 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  filter === t
                    ? 'bg-gradient-to-r from-accent-blue to-accent-cyan text-white shadow-md'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline container */}
        <div className="relative border-l-2 border-slate-200 dark:border-dark-border ml-4 md:ml-32 pl-8 md:pl-12 flex flex-col gap-12">
          
          <AnimatePresence mode="popLayout">
            {filteredExp.map((job, index) => {
              const isExpanded = expandedJob === job.id;
              
              return (
                <motion.div
                  key={job.id}
                  layout
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="relative group cursor-pointer"
                  onClick={() => setExpandedJob(isExpanded ? null : job.id)}
                >
                  {/* Outer side timeline metadata */}
                  <div className="absolute top-1/2 -translate-y-1/2 -left-8 md:-left-44 hidden md:flex flex-col items-end text-right w-28">
                    <span className="text-xs font-mono font-bold text-accent-blue dark:text-accent-cyan flex items-center gap-1.5">
                      <FiCalendar />
                      {job.period.split(' ')[0]}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono tracking-widest mt-1 uppercase">
                      {job.type}
                    </span>
                  </div>

                  {/* Bullet Node Icon on Line */}
                  <div className={`absolute top-6 -left-[41px] md:-left-[57px] w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    isExpanded 
                      ? 'bg-gradient-to-r from-accent-blue to-accent-cyan border-transparent text-white' 
                      : 'bg-white dark:bg-dark-bg border-slate-300 dark:border-slate-800 text-slate-500 group-hover:border-accent-cyan'
                  }`}>
                    {job.type === 'tech' ? <FiBriefcase className="w-3 h-3" /> : <FiBookOpen className="w-3 h-3" />}
                  </div>

                  {/* Card content */}
                  <div className={`p-6 rounded-2xl border transition-all duration-300 ${
                    isExpanded 
                      ? 'glass-card shadow-lg ring-1 ring-accent-cyan/10' 
                      : 'bg-white/60 dark:bg-dark-card/40 border-slate-200/60 dark:border-dark-border/40 hover:bg-white dark:hover:bg-dark-card hover:border-slate-300 dark:hover:border-slate-800'
                  }`}>
                    {/* Compact View */}
                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
                      <div>
                        <h4 className="text-lg font-display font-bold text-slate-800 dark:text-white group-hover:text-accent-blue dark:group-hover:text-accent-cyan transition-colors">
                          {job.role}
                        </h4>
                        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">
                          {job.company}
                        </p>
                      </div>
                      
                      {/* Mobile timeline date */}
                      <span className="md:hidden text-xs font-mono text-accent-blue dark:text-accent-cyan flex items-center gap-1">
                        <FiCalendar />
                        {job.period}
                      </span>
                    </div>

                    {/* Expandable Responsibility Area */}
                    <motion.div
                      initial={false}
                      animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
                      className="overflow-hidden mt-4"
                      transition={{ duration: 0.3 }}
                    >
                      <div className="h-[1px] bg-slate-200 dark:bg-dark-border/50 mb-4" />
                      <ul className="flex flex-col gap-2">
                        {job.responsibilities.map((resp, i) => (
                          <li key={i} className="flex gap-2.5 items-start text-sm text-slate-600 dark:text-slate-300">
                            <FiArrowRight className="w-3.5 h-3.5 mt-1 text-accent-cyan shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

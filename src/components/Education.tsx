import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiAward, FiBook } from 'react-icons/fi';
import { FaGraduationCap } from 'react-icons/fa';

interface EduMilestone {
  degree: string;
  major: string;
  school: string;
  period: string;
  details?: string;
  icon: 'cap' | 'diploma' | 'cert' | 'school';
}

const educationData: EduMilestone[] = [
  {
    degree: "Bachelor of Science",
    major: "Information Technology",
    school: "Ghana Communication Technology University",
    period: "Current",
    details: "Focusing on enterprise computing, software architectures, advanced data management, and systems design.",
    icon: "cap"
  },
  {
    degree: "Honours Diploma",
    major: "Software Engineering",
    school: "OpenLabs NIIT Ghana",
    period: "2022 – 2023",
    details: "Intensive training in data structure concepts, full-stack technologies, databases, and software dev methodologies.",
    icon: "diploma"
  },
  {
    degree: "Diploma Certificate",
    major: "Graphic Designing",
    school: "GTB Print Media",
    period: "2017 Oct. – 2018 Mar.",
    details: "Practical studies in print media production, typography, color theory, and professional design software suites.",
    icon: "cert"
  },
  {
    degree: "WASSCE",
    major: "General Science",
    school: "St. Paul's Senior High School",
    period: "2013 – 2016",
    details: "Integrated sciences, elective physics, chemistry, biology, and advanced mathematics curriculum.",
    icon: "school"
  },
  {
    degree: "BECE",
    major: "Basic Education",
    school: "Saint Joseph R/C J.H.S",
    period: "2010 – 2013",
    details: "Basic education curriculum completion under the Ga West Municipal district in Amasaman.",
    icon: "school"
  }
];

export const Education: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'cap': return <FaGraduationCap className="w-6 h-6 text-accent-cyan" />;
      case 'diploma': return <FiAward className="w-6 h-6 text-accent-blue" />;
      case 'cert': return <FiBookOpen className="w-6 h-6 text-accent-cyan" />;
      default: return <FiBook className="w-6 h-6 text-slate-400" />;
    }
  };

  return (
    <section id="education" className="relative py-24 bg-white dark:bg-[#070B14] overflow-hidden">
      
      {/* Glow overlays */}
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
            Academic Foundation
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-black text-slate-800 dark:text-white"
          >
            Education & Academic Credentials
          </motion.h3>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full mt-4" />
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-dark-card border border-slate-200/60 dark:border-dark-border/40 hover:border-accent-cyan/30 dark:hover:border-accent-cyan/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group h-full shadow-sm"
            >
              <div>
                {/* Header Icon & Duration */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl group-hover:scale-110 transition-transform duration-300 w-12 h-12 flex items-center justify-center">
                    {getIcon(edu.icon)}
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 bg-white dark:bg-dark-card/50">
                    {edu.period}
                  </span>
                </div>

                {/* Major/degree */}
                <h4 className="text-sm font-bold tracking-wider text-accent-blue dark:text-accent-cyan font-mono uppercase mb-1">
                  {edu.degree}
                </h4>
                <h5 className="text-lg font-display font-bold text-slate-800 dark:text-white mb-2 leading-tight">
                  {edu.major}
                </h5>
                <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-4 leading-tight">
                  {edu.school}
                </p>
              </div>

              {/* Details explanation */}
              {edu.details && (
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-200 dark:border-dark-border/50 pt-4">
                  {edu.details}
                </p>
              )}

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

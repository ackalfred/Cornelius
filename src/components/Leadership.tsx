import React from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiSettings, FiUsers, FiBookOpen } from 'react-icons/fi';

interface LeadershipRole {
  role: string;
  scope: string;
  description: string;
  icon: React.ReactNode;
}

const leadershipRoles: LeadershipRole[] = [
  {
    role: "Founder & Executive Director",
    scope: "Tech Dome Academy",
    description: "Sets the strategic vision, structures the curriculum, builds local community partnerships, and manages fundraising pipelines for the non-profit organization.",
    icon: <FiTrendingUp className="text-accent-cyan" />
  },
  {
    role: "Software Engineer & Architect",
    scope: "Strong Redeemer Technologies",
    description: "Led development structures, integrated database logic, and guided junior engineers through clean-coding practices, code reviews, and API deployments.",
    icon: <FiSettings className="text-accent-blue" />
  },
  {
    role: "Technology Mentor & Educator",
    scope: "Tech Dome & School Complexes",
    description: "Mentors young software enthusiasts, teaches advanced programming concepts, and maps out educational paths to transition students from classrooms to workplaces.",
    icon: <FiBookOpen className="text-amber-500" />
  },
  {
    role: "Community Leader & Organizer",
    scope: "Ga West Municipality & Volunteer Orgs",
    description: "Coordinates civic cleanup exercises, handles IT support for regional structures, and guides youth panels to resolve local educational challenges.",
    icon: <FiUsers className="text-[#FF5E62]" />
  }
];

export const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="relative py-24 bg-white dark:bg-[#070B14] overflow-hidden">
      
      {/* Decors */}
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
            Guiding Others
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-black text-slate-800 dark:text-white"
          >
            Leadership Roles & Guidance
          </motion.h3>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full mt-4" />
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leadershipRoles.map((lead, index) => (
            <motion.div
              key={lead.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-dark-card border border-slate-200/60 dark:border-dark-border/40 hover:border-accent-cyan/30 dark:hover:border-accent-cyan/20 hover:shadow-xl transition-all duration-300 flex items-start gap-4 shadow-sm group"
            >
              <div className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-850 rounded-xl text-xl w-12 h-12 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                {lead.icon}
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-wider font-bold text-accent-blue dark:text-accent-cyan uppercase">
                  {lead.scope}
                </span>
                <h4 className="text-lg font-display font-bold text-slate-800 dark:text-white mt-1 group-hover:text-accent-blue dark:group-hover:text-accent-cyan transition-colors">
                  {lead.role}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-2.5">
                  {lead.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

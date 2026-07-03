import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiHeart, FiBookOpen } from 'react-icons/fi';
import { FaTrashRestore } from 'react-icons/fa';

interface ImpactCard {
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  icon: React.ReactNode;
}

const impactItems: ImpactCard[] = [
  {
    title: "Love Alister Foundation Feeding Program",
    description: "Volunteered in local feeding programs to distribute nutritious meals and support resources to underprivileged children and families in Accra.",
    metric: "500+",
    metricLabel: "Meals Served",
    icon: <FiHeart className="text-[#FF5E62]" />
  },
  {
    title: "Community Clean-up Exercises",
    description: "Participated in and coordinated local environmental cleanup campaigns to restore public spaces and improve municipal sanitation in Amasaman.",
    metric: "15+",
    metricLabel: "Cleanup Events",
    icon: <FaTrashRestore className="text-emerald-500" />
  },
  {
    title: "Youth Mentorship",
    description: "Conducted weekly mentoring sessions for junior developers, high schoolers, and local youth, aligning faith, values, and engineering goals.",
    metric: "120+",
    metricLabel: "Youth Mentored",
    icon: <FiUsers className="text-accent-blue" />
  },
  {
    title: "Digital Literacy Outreach",
    description: "Hosted computer basic bootcamps, typing practices, and internet usage courses for kids and adults in underserved neighborhoods.",
    metric: "30+",
    metricLabel: "Free Workshops",
    icon: <FiBookOpen className="text-accent-cyan" />
  }
];

export const Community: React.FC = () => {
  return (
    <section id="community" className="relative py-24 bg-slate-50 dark:bg-[#0A0E1A] overflow-hidden">
      
      {/* Background Decors */}
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
            Social Impact
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-black text-slate-800 dark:text-white"
          >
            Community Impact & Voluntarism
          </motion.h3>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full mt-4" />
        </div>

        {/* Impact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {impactItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="p-8 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/60 dark:border-dark-border/40 hover:border-accent-cyan/30 dark:hover:border-accent-cyan/20 hover:shadow-2xl transition-all duration-300 shadow-sm flex flex-col md:flex-row gap-6 items-center md:items-start group"
            >
              {/* Left Column: Icon & Statistic badge */}
              <div className="flex flex-col items-center shrink-0">
                <div className="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl group-hover:scale-110 transition-transform duration-300 text-3xl w-14 h-14 flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="mt-4 text-center">
                  <h4 className="text-3xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-cyan">
                    {item.metric}
                  </h4>
                  <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider font-mono mt-0.5 whitespace-nowrap">
                    {item.metricLabel}
                  </p>
                </div>
              </div>

              {/* Right Column: Title and details description */}
              <div className="flex-1 text-center md:text-left flex flex-col justify-center">
                <h4 className="text-lg font-display font-bold text-slate-800 dark:text-white group-hover:text-accent-blue dark:group-hover:text-accent-cyan transition-colors mb-2 leading-tight">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Large visual callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-accent-blue/5 to-accent-cyan/5 border border-accent-blue/10 dark:border-dark-border text-center text-sm font-semibold max-w-3xl mx-auto text-slate-700 dark:text-slate-300"
        >
          ✨ "Bridging the digital divide in Ghana is not just about teaching skills; it's about raising leaders, fostering collaboration, and showing that through dedication and faith, positive change is possible."
        </motion.div>

      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  const stats = [
    { value: "5+", label: "Years in IT & Design" },
    { value: "15+", label: "Professional Certs" },
    { value: "1000+", label: "Students Empowered" },
    { value: "20+", label: "Completed Projects" },
  ];

  return (
    <section id="about" className="relative py-24 bg-white dark:bg-[#070B14] overflow-hidden">
      
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-accent-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono tracking-widest text-accent-blue dark:text-accent-cyan font-bold uppercase mb-2"
          >
            My Story
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-black text-slate-800 dark:text-white"
          >
            Crafting Code, Shaping Futures
          </motion.h3>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full mt-4" />
        </div>

        {/* Section Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Story Telling Column */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6 text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed"
          >
            <p>
              My journey into technology began with a profound curiosity about how things are built and a desire to make a difference. As a <strong className="text-slate-800 dark:text-white font-semibold">Software Engineer</strong> from Ghana, my career has been shaped by a diverse range of disciplines, including IT support, database administration, web development, UI/UX design, graphic design, and digital transformation. 
            </p>
            <p>
              Having completed my Honours Diploma in Software Engineering from <strong className="text-slate-800 dark:text-white font-semibold">OpenLabs NIIT Ghana</strong> and currently pursuing my Bachelor of Science in Information Technology at the <strong className="text-slate-800 dark:text-white font-semibold">Ghana Communication Technology University</strong>, I have cultivated a strong foundation in building highly scalable, modern digital solutions.
            </p>
            <p>
              But for me, technology is more than just writing clean lines of code. It is an instrument of empowerment. My years spent teaching mathematics, science, and moral education at institutions like Divine Dominion and Rev. Theotina complexes instilled in me a deep commitment to education.
            </p>
            <p>
              This dual passion for software development and education led me to establish <strong className="text-slate-800 dark:text-white font-semibold">Tech Dome Academy</strong>, a non-profit dedicated to bridging the digital divide in Ghana. Through this academy, we equip young people in underserved communities with crucial tech skills, providing them with mentorship and launching pathways for them in the digital economy.
            </p>
          </motion.div>

          {/* Stats Grid Column */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-dark-card border border-slate-200/60 dark:border-dark-border/40 hover:border-accent-cyan/30 dark:hover:border-accent-cyan/20 transition-all duration-300 group flex flex-col items-center text-center justify-center shadow-sm"
              >
                <span className="text-3xl sm:text-4xl font-display font-black text-transparent bg-clip-text bg-gradient-to-tr from-accent-blue to-accent-cyan group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 mt-2 font-sans tracking-wide">
                  {stat.label}
                </span>
              </motion.div>
            ))}
            
            {/* Focus Card (Full Width in column grid) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="col-span-2 p-6 rounded-2xl bg-gradient-to-r from-accent-blue/5 to-accent-cyan/5 border border-accent-blue/10 dark:border-dark-border flex flex-col md:flex-row gap-4 items-center justify-center text-center md:text-left"
            >
              <div className="text-3xl">💡</div>
              <div>
                <h4 className="text-sm font-bold text-slate-800 dark:text-white leading-tight">My Core Philosophy</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm">
                  "Faith, leadership, and code: building software with purpose and mentoring the next generation of builders."
                </p>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

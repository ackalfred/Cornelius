import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiUsers, FiAward, FiArrowRight, FiBookOpen } from 'react-icons/fi';

interface Program {
  title: string;
  description: string;
  icon: string;
}

const programs: Program[] = [
  { title: "Digital Literacy", description: "Providing fundamental computer usage guidelines, safety tips, typing speeds, and digital operations systems.", icon: "💻" },
  { title: "Programming", description: "Hands-on coding in HTML, CSS, JavaScript, and introducing kids to modern web application frameworks.", icon: "⚙️" },
  { title: "Artificial Intelligence", description: "Unlocking productivity using Prompt Engineering, AI tools, and demonstrating modern automated workflows.", icon: "🤖" },
  { title: "Graphic Design", description: "Unleashing creative skills using Adobe Photoshop, Illustrator, Canva, and teaching visual layouts.", icon: "🎨" },
  { title: "Web Development", description: "Creating responsive web pages, understanding web hosting, domains, and custom WordPress templates.", icon: "🌐" },
  { title: "Mentorship & Outreach", description: "Empowering underserved youths with career guidance, resume reviews, and volunteer community projects.", icon: "🤝" }
];

export const TechDome: React.FC = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="tech-dome" className="relative py-24 bg-slate-50 dark:bg-[#0A0E1A] overflow-hidden">
      
      {/* Background Glowing Domes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-cyan/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Grid: Description + Impact Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Text Description */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-slate-600 dark:text-slate-300">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-card/30 backdrop-blur-md text-xs font-semibold tracking-wider text-accent-blue dark:text-accent-cyan w-fit"
            >
              NON-PROFIT ORGANIZATION
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-display font-black text-slate-800 dark:text-white leading-tight"
            >
              Empowering Youth Through <br/>
              <span className="text-gradient">Tech Dome Academy</span>
            </motion.h3>

            <div className="w-12 h-1 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full" />

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-lg leading-relaxed mt-2"
            >
              Founded and directed by <strong className="text-slate-800 dark:text-white">Agbemabiase Alfred Kofi Cornelius</strong>, Tech Dome Academy is on a mission to bridge the digital divide in Ghana. We believe that digital literacy and technical training are fundamental rights that unlock endless possibilities.
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border/40 shadow-sm">
                <h4 className="text-sm font-bold text-slate-800 dark:text-white mb-2 uppercase tracking-wide flex items-center gap-2">
                  <span className="text-accent-blue">🎯</span> Mission
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  To equip young people in underserved communities with practical digital skills like coding, AI literacy, and graphic design to prepare them for the future of work.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border/40 shadow-sm">
                <h4 className="text-sm font-bold text-slate-800 dark:text-white mb-2 uppercase tracking-wide flex items-center gap-2">
                  <span className="text-accent-cyan">👁️</span> Vision
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  To build a technologically advanced generation in Ghana by delivering high-quality tech education, resources, mentorship, and career paths.
                </p>
              </div>
            </div>
          </div>

          {/* Core Stats Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 p-8 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/10 rounded-full blur-2xl pointer-events-none" />
            
            <h4 className="text-lg font-display font-bold text-slate-800 dark:text-white mb-6 uppercase tracking-wider">
              Academy Impact Status
            </h4>

            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-center">
                <div className="p-3 bg-accent-blue/10 rounded-xl text-accent-blue"><FiUsers className="w-6 h-6" /></div>
                <div>
                  <h5 className="text-2xl font-display font-black text-slate-800 dark:text-white">1,000+</h5>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Students Trained</p>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="p-3 bg-accent-cyan/10 rounded-xl text-accent-cyan"><FiBookOpen className="w-6 h-6" /></div>
                <div>
                  <h5 className="text-2xl font-display font-black text-slate-800 dark:text-white">6+</h5>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Training Modules</p>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="p-3 bg-amber-500/10 rounded-xl text-amber-500"><FiAward className="w-6 h-6" /></div>
                <div>
                  <h5 className="text-2xl font-display font-black text-slate-800 dark:text-white">100%</h5>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Free Sponsorship</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs leading-relaxed text-slate-500">
              ⚡ <strong>Active Program:</strong> Weekly code workshops taking place at local community complexes in Accra.
            </div>
          </motion.div>

        </div>

        {/* Training Programs Grid */}
        <div className="mb-20">
          <div className="flex flex-col items-center mb-12">
            <h4 className="text-2xl font-display font-black text-slate-800 dark:text-white text-center">
              Our Educational Programs
            </h4>
            <p className="text-sm text-slate-400 mt-2 text-center max-w-md">
              Bridging the gap between conceptual understanding and practical technology expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((prog, index) => (
              <motion.div
                key={prog.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/60 dark:border-dark-border/40 hover:border-accent-cyan/30 dark:hover:border-accent-cyan/20 hover:shadow-xl transition-all duration-300 group shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl block mb-4 group-hover:scale-110 transition-transform duration-300 w-fit">{prog.icon}</span>
                  <h5 className="text-lg font-display font-bold text-slate-800 dark:text-white mb-2">{prog.title}</h5>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">{prog.description}</p>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-bold text-accent-blue dark:text-accent-cyan uppercase tracking-wider group-hover:gap-2 transition-all cursor-pointer">
                  Learn more <FiArrowRight />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Support Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-accent-blue/10 to-accent-cyan/10 border border-accent-blue/20 dark:border-dark-border flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="text-center lg:text-left">
            <h4 className="text-2xl sm:text-3xl font-display font-black text-slate-800 dark:text-white flex items-center justify-center lg:justify-start gap-2">
              Join Our Mission <FiHeart className="text-accent-orange fill-accent-orange/20 animate-pulse" />
            </h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-xl">
              Partner with Tech Dome Academy to support free education, sponsor computing infrastructure, or join as a teaching volunteer.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-accent-blue to-accent-cyan hover:brightness-110 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md"
            >
              Support the Academy
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto px-6 py-3 bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border text-slate-800 dark:text-slate-200 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-slate-50 dark:hover:bg-slate-900 transition-all shadow-sm"
            >
              Partner With Us
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto px-6 py-3 bg-transparent hover:bg-slate-200/50 dark:hover:bg-dark-card/30 text-slate-600 dark:text-slate-300 rounded-xl text-xs font-bold uppercase tracking-wider transition-all"
            >
              Become a Volunteer
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

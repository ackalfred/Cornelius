import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaTwitter, FaArrowUp } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { asset } from '../utils/assets';

export const Footer: React.FC = () => {
  const [visitorCount, setVisitorCount] = useState(1480);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    // Basic local storage simulation of real visits
    const count = localStorage.getItem('visitor_count');
    if (count) {
      const newCount = parseInt(count) + 1;
      localStorage.setItem('visitor_count', newCount.toString());
      setVisitorCount(newCount);
    } else {
      const initialCount = Math.floor(Math.random() * 200) + 2420;
      localStorage.setItem('visitor_count', initialCount.toString());
      setVisitorCount(initialCount);
    }
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#070B14] text-slate-400 py-16 overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        
        {/* Profile Info */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-display font-black text-white flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full overflow-hidden border border-slate-800 shadow-sm shrink-0">
              <img src={asset('logo.jpg')} alt="Cornelius Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-white">Cornelius</span>
          </h2>
          <p className="text-sm leading-relaxed">
            Building premium digital experiences, leading tech communities, and empowering the next generation in Ghana.
          </p>
          {/* Visitor Counter */}
          <div className="flex items-center gap-2 mt-2 bg-slate-900 border border-slate-800 rounded-xl px-4 py-2 w-fit">
            <div className="w-2.5 h-2.5 rounded-full bg-accent-cyan animate-pulse-slow" />
            <span className="text-xs font-mono tracking-wider text-slate-300">
              VISITORS: <strong className="text-white">{visitorCount.toLocaleString()}</strong>
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Quick Links</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">About Me</a></li>
            <li><a href="#experience" className="hover:text-white transition-colors">Experience</a></li>
            <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
            <li><a href="#tech-dome" className="hover:text-white transition-colors">Tech Dome Academy</a></li>
          </ul>
        </div>

        {/* Social Handles */}
        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Connect</h3>
          <div className="flex flex-wrap gap-2.5 mb-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 border border-slate-800 hover:border-accent-cyan hover:text-white rounded-xl transition-all duration-300 text-slate-300" aria-label="GitHub"><FaGithub className="w-5 h-5" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 border border-slate-800 hover:border-accent-cyan hover:text-white rounded-xl transition-all duration-300 text-slate-300" aria-label="LinkedIn"><FaLinkedin className="w-5 h-5" /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 border border-slate-800 hover:border-accent-cyan hover:text-white rounded-xl transition-all duration-300 text-slate-300" aria-label="Facebook"><FaFacebook className="w-5 h-5" /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 border border-slate-800 hover:border-accent-cyan hover:text-white rounded-xl transition-all duration-300 text-slate-300" aria-label="Instagram"><FaInstagram className="w-5 h-5" /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 border border-slate-800 hover:border-accent-cyan hover:text-white rounded-xl transition-all duration-300 text-slate-300" aria-label="Twitter"><FaTwitter className="w-5 h-5" /></a>
            <a href="mailto:ackjunioralfred@gmail.com" className="p-3 bg-slate-900 border border-slate-800 hover:border-accent-cyan hover:text-white rounded-xl transition-all duration-300 text-slate-300" aria-label="Email"><FiMail className="w-5 h-5" /></a>
          </div>
          <p className="text-xs text-slate-500 font-mono">Amasaman, Accra, Ghana</p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Newsletter</h3>
          <p className="text-sm leading-relaxed mb-4">Stay updated with articles, tech tutorials, and community initiatives.</p>
          <form onSubmit={handleSubscribe} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-accent-cyan flex-1 w-full"
            />
            <button
              type="submit"
              className="px-4 py-2.5 bg-gradient-to-r from-accent-blue to-accent-cyan hover:brightness-110 text-white rounded-xl text-sm font-semibold"
            >
              Join
            </button>
          </form>
          {subscribed && (
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs text-accent-cyan mt-2 font-mono"
            >
              Subscribed successfully!
            </motion.p>
          )}
        </div>

      </div>

      {/* Copyright & Back to Top */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 text-sm">
        <p>© {new Date().getFullYear()} Agbemabiase Cornelius. All rights reserved.</p>
        
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-white rounded-xl transition-all duration-300 font-medium group"
        >
          Back to top
          <FaArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

      {/* Dark background grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />
    </footer>
  );
};

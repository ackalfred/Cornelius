import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);
  const [simulated, setSimulated] = useState(false);

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

    // If EmailJS env credentials are not configured, simulate sending to verify layout success state
    if (!serviceId || !templateId || !publicKey) {
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
        setSimulated(true);
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00F2FE', '#4FACFE', '#FFD700']
        });
        setFormData({ user_name: '', user_email: '', user_phone: '', subject: '', message: '' });
        setTimeout(() => {
          setSuccess(null);
          setSimulated(false);
        }, 6000);
      }, 1500);
      return;
    }

    if (formRef.current) {
      emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
        .then(() => {
          setLoading(false);
          setSuccess(true);
          setSimulated(false);
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#00F2FE', '#4FACFE', '#FFD700']
          });
          setFormData({ user_name: '', user_email: '', user_phone: '', subject: '', message: '' });
          setTimeout(() => setSuccess(null), 5000);
        }, (error) => {
          console.error('EmailJS error:', error);
          setLoading(false);
          setSuccess(false);
          setTimeout(() => setSuccess(null), 5000);
        });
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-slate-50 dark:bg-[#0A0E1A] overflow-hidden">
      
      {/* Glow shapes */}
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
            Get In Touch
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-black text-slate-800 dark:text-white"
          >
            Contact Information & Form
          </motion.h3>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Info Side Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h4 className="text-2xl font-display font-bold text-slate-800 dark:text-white">
              Let's build something meaningful.
            </h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
              I am open to discussions about software engineering contracts, IT consulting, community projects, or speaking engagements. Let me know how I can assist you.
            </p>

            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border/40 shadow-sm">
                <div className="p-3 bg-accent-blue/10 rounded-xl text-accent-blue"><FiMapPin className="w-5 h-5" /></div>
                <div>
                  <h5 className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold">Location</h5>
                  <p className="text-sm font-bold text-slate-800 dark:text-white mt-0.5">Amasaman, Accra, Ghana</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border/40 shadow-sm">
                <div className="p-3 bg-accent-cyan/10 rounded-xl text-accent-cyan"><FiPhone className="w-5 h-5" /></div>
                <div>
                  <h5 className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold">Phone Number</h5>
                  <p className="text-sm font-bold text-slate-800 dark:text-white mt-0.5">+233 247071846</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border/40 shadow-sm">
                <div className="p-3 bg-amber-500/10 rounded-xl text-amber-500"><FiMail className="w-5 h-5" /></div>
                <div>
                  <h5 className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold">Email Address</h5>
                  <p className="text-sm font-bold text-slate-800 dark:text-white mt-0.5">ackjunioralfred@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side Column */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 p-8 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-2xl relative"
          >
            <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-5">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="user_name" className="text-xs font-mono font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase">Your Name</label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-850 rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:border-accent-cyan"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="user_email" className="text-xs font-mono font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase">Your Email</label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-850 rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:border-accent-cyan"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="user_phone" className="text-xs font-mono font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase">Phone (Optional)</label>
                  <input
                    type="tel"
                    id="user_phone"
                    name="user_phone"
                    value={formData.user_phone}
                    onChange={handleChange}
                    placeholder="+233..."
                    className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-850 rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:border-accent-cyan"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-xs font-mono font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Inquiry"
                    className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-850 rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:border-accent-cyan"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-mono font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project or inquiry..."
                  className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-850 rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:border-accent-cyan resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-2 w-full py-4 rounded-xl bg-gradient-to-r from-accent-blue to-accent-cyan hover:brightness-110 disabled:opacity-50 text-white font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md shadow-accent-blue/15"
              >
                {loading ? 'Sending Message...' : 'Send Message'}
                <FiSend className="w-4 h-4" />
              </button>

              {/* Status Alert Overlay */}
              {success !== null && (
                <div className={`mt-4 p-4 rounded-xl border text-xs font-mono text-center leading-normal ${
                  success 
                    ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500' 
                    : 'bg-rose-500/10 border-rose-500/20 text-rose-500'
                }`}>
                  {success 
                    ? `Message sent successfully! ${simulated ? '(Simulation Mode // Ready for Env config)' : ''}`
                    : 'An error occurred while sending the message. Please check EmailJS settings.'}
                </div>
              )}

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

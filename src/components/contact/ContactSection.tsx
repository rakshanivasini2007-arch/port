import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Github, Linkedin, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setStatusMessage('Please fill in all required fields.');
      return;
    }

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setStatusMessage('Thank you for reaching out! Your message draft has been recorded.');
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-pink/10 border border-neon-pink/30 text-neon-pink text-xs font-mono tracking-widest uppercase mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>GET IN TOUCH</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
          LET'S BUILD SOMETHING<span className="text-neon-pink">.</span>
        </h2>
        <p className="text-sm md:text-base text-gray-400 mt-3 max-w-xl">
          Have an idea, opportunity or project in mind? Let's connect.
        </p>
        <div className="w-16 h-1 bg-gradient-to-r from-neon-pink to-transparent mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
        {/* Left Side Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-8"
        >
          <div className="p-8 rounded-3xl glass-panel border border-glass-border space-y-6">
            <h3 className="text-xl font-bold text-white tracking-wide">
              CONTACT INFORMATION
            </h3>

            <div className="space-y-4">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/5 border border-white/5 hover:border-neon-pink/40 hover:bg-neon-pink/10 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-neon-pink/10 border border-neon-pink/30 flex items-center justify-center group-hover:border-neon-pink transition-colors">
                  <Mail className="w-5 h-5 text-neon-pink" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block">
                    EMAIL
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-neon-pink transition-colors">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/5 border border-white/5 hover:border-neon-pink/40 hover:bg-neon-pink/10 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-neon-pink/10 border border-neon-pink/30 flex items-center justify-center group-hover:border-neon-pink transition-colors">
                  <Phone className="w-5 h-5 text-neon-pink" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block">
                    PHONE
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-neon-pink transition-colors">
                    {PERSONAL_INFO.phone}
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/5 border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-neon-pink/10 border border-neon-pink/30 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-neon-pink" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block">
                    LOCATION
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="pt-4 border-t border-white/10 flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-neon-pink/20 border border-white/10 hover:border-neon-pink/40 text-xs font-mono text-gray-300 hover:text-white transition-all"
              >
                <Github className="w-4 h-4 text-neon-pink" />
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-neon-pink/20 border border-white/10 hover:border-neon-pink/40 text-xs font-mono text-gray-300 hover:text-white transition-all"
              >
                <Linkedin className="w-4 h-4 text-neon-pink" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side Glass Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 p-8 sm:p-10 rounded-3xl glass-panel border border-glass-pink-border shadow-[0_20px_50px_rgba(0,0,0,0.5)] space-y-6"
        >
          <h3 className="text-xl font-bold text-white tracking-wide">
            SEND A DIRECT MESSAGE
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-xs font-mono text-gray-300 uppercase mb-2">
                YOUR NAME *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Raksha Nivasini"
                className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-neon-pink focus:ring-1 focus:ring-neon-pink transition-all font-sans text-sm"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-mono text-gray-300 uppercase mb-2">
                YOUR EMAIL ADDRESS *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-neon-pink focus:ring-1 focus:ring-neon-pink transition-all font-sans text-sm"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-mono text-gray-300 uppercase mb-2">
                MESSAGE *
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project, idea or opportunity..."
                className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-neon-pink focus:ring-1 focus:ring-neon-pink transition-all font-sans text-sm resize-none"
              />
            </div>

            {status === 'error' && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-300 text-xs font-mono">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                <span>{statusMessage}</span>
              </div>
            )}

            {status === 'success' && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs font-mono">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>{statusMessage}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 text-xs font-mono font-bold tracking-widest text-white uppercase bg-neon-pink hover:bg-neon-deep rounded-xl shadow-[0_0_20px_#FF2E93] hover:shadow-[0_0_30px_#FF2E93] transition-all duration-300 disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              <span>{status === 'submitting' ? 'SENDING...' : 'SEND MESSAGE'}</span>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

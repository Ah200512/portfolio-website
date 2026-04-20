import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, CheckCircle } from 'lucide-react';

const Github = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const Linkedin = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Instagram = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);
import { useClickSound } from '../hooks/useSounds';
import TiltCard from './TiltCard';

export default function Contact() {
  const playClick = useClickSound();
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    playClick();
    // Build mailto
    const mailto = `mailto:adithyaaudi2005@gmail.com?subject=Portfolio Inquiry from ${encodeURIComponent(formState.name)}&body=${encodeURIComponent(formState.message)}%0A%0AFrom: ${encodeURIComponent(formState.email)}`;
    window.open(mailto, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const socials = [
    { href: 'https://www.linkedin.com/in/adityaharish05/', icon: <Linkedin size={22} />, label: 'LinkedIn',  color: '#d4af37' },
    { href: 'https://github.com/Ah200512',                 icon: <Github size={22} />,   label: 'GitHub',    color: '#d4af37' },
    { href: 'https://www.instagram.com/adithya_harish05/', icon: <Instagram size={22} />, label: 'Instagram', color: '#d4af37' },
  ];

  return (
    <section id="contact" className="py-28 relative z-10">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--primary)' }}>
            Get In Touch
          </p>
          <h2
            className="text-4xl md:text-6xl font-black leading-tight mb-5"
            style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-primary)' }}
          >
            Let's Build Something{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #ffd700, #b8860b)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Meaningful.
            </span>
          </h2>
          <div className="section-line mx-auto mb-6" />
          <p className="max-w-xl mx-auto text-lg" style={{ color: 'var(--text-secondary)' }}>
            Whether it's a startup idea, open-source collaboration, or a full-time opportunity — my inbox is always open.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <TiltCard
            gradientBorder
            intensity={5}
            glowColor="rgba(212, 175, 55, 0.25)"
            className="rounded-3xl overflow-hidden relative"
            style={{ background: 'var(--surface)' }}
          >
            {/* Corner orbs */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2 pointer-events-none"
              style={{ background: 'var(--primary)' }} />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-15 -translate-x-1/2 translate-y-1/2 pointer-events-none"
              style={{ background: 'var(--accent)' }} />

            <div className="p-8 md:p-12 relative z-10 grid md:grid-cols-2 gap-12">

              {/* Contact Info */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Reach Out</h3>

                <a
                  href="mailto:adithyaaudi2005@gmail.com"
                  onClick={playClick}
                  className="flex items-center gap-4 group p-4 rounded-2xl border transition-all"
                  style={{
                    background: 'var(--surface-2)',
                    borderColor: 'var(--border)',
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ background: 'rgba(139,92,246,0.15)', color: 'var(--primary)' }}
                  >
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs mb-0.5" style={{ color: 'var(--text-muted)' }}>Email</p>
                    <p className="font-semibold text-sm truncate" style={{ color: 'var(--text-primary)' }}>
                      adithyaaudi2005@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+919791681451"
                  onClick={playClick}
                  className="flex items-center gap-4 group p-4 rounded-2xl border transition-all"
                  style={{
                    background: 'var(--surface-2)',
                    borderColor: 'var(--border)',
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ background: 'rgba(96,165,250,0.15)', color: 'var(--accent)' }}
                  >
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs mb-0.5" style={{ color: 'var(--text-muted)' }}>Phone</p>
                    <p className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>+91 9791681451</p>
                  </div>
                </a>

                {/* Social icons */}
                <div>
                  <p className="text-sm mb-4 font-medium" style={{ color: 'var(--text-muted)' }}>Find me on</p>
                  <div className="flex gap-3">
                    {socials.map(({ href, icon, label, color }) => (
                      <motion.a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={playClick}
                        whileHover={{ scale: 1.12, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-14 h-14 rounded-2xl flex items-center justify-center border transition-all"
                        style={{
                          background: `${color}12`,
                          borderColor: 'var(--border)',
                          color,
                        }}
                        title={label}
                      >
                        {icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formState.name}
                    onChange={e => setFormState(s => ({ ...s, name: e.target.value }))}
                    className="form-input"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    value={formState.email}
                    onChange={e => setFormState(s => ({ ...s, email: e.target.value }))}
                    className="form-input"
                  />
                </div>
                <div>
                  <textarea
                    rows={5}
                    required
                    placeholder="Your Message..."
                    value={formState.message}
                    onChange={e => setFormState(s => ({ ...s, message: e.target.value }))}
                    className="form-input resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-base transition-all"
                  style={{
                    background: submitted
                      ? '#00ff00'
                      : 'var(--primary)',
                    color: 'var(--bg)',
                    boxShadow: '0 10px 30px rgba(255, 255, 255, 0.2)',
                  }}
                >
                  {submitted ? (
                    <><CheckCircle size={18} /> Message Sent!</>
                  ) : (
                    <><Send size={18} /> Send Message</>
                  )}
                </motion.button>
              </form>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}

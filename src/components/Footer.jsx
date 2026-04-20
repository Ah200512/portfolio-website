import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Mail } from 'lucide-react';

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
import { useClickSound } from '../hooks/useSounds';

export default function Footer() {
  const playClick = useClickSound();

  const scrollToTop = () => {
    playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="border-t py-12 relative z-10 backdrop-blur-xl"
      style={{
        borderColor: 'var(--border)',
        background: 'var(--glass-bg)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Brand */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              onClick={playClick}
              className="text-xl font-black tracking-tight flex items-center gap-2 mb-2"
              style={{ color: 'var(--text-primary)' }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs mr-2"
                style={{
                  background: 'linear-gradient(135deg, #b8860b, #ffd700)',
                  color: '#000',
                  fontFamily: 'Space Grotesk, sans-serif'
                }}
              >
                AH
              </div>
              Adithya <span style={{ color: 'var(--primary)' }}>Harish</span>
            </a>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              © {new Date().getFullYear()} Adithya Harish. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            {[
              { href: 'https://github.com/Ah200512',               label: 'GitHub',    icon: <Github size={16} /> },
              { href: 'https://www.linkedin.com/in/adityaharish05/', label: 'LinkedIn', icon: <Linkedin size={16} /> },
              { href: 'mailto:adithyaaudi2005@gmail.com',           label: 'Email',     icon: <Mail size={16} /> },
            ].map(({ href, label, icon }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                onClick={playClick}
                whileHover={{ scale: 1.1, y: -2 }}
                className="flex items-center gap-1.5 text-sm transition-colors"
                style={{ color: 'var(--text-muted)' }}
              >
                {icon} {label}
              </motion.a>
            ))}
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-11 h-11 rounded-full flex items-center justify-center border transition-all"
            style={{
              background: 'var(--surface)',
              borderColor: 'var(--border)',
              color: 'var(--text-muted)',
            }}
            title="Back to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>

        {/* Bottom tagline */}
        <div className="text-center mt-8 pt-8" style={{ borderTop: '1px solid var(--border)' }}>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            Crafted with ❤️ using React · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}

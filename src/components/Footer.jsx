import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
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
        <div className="flex flex-col items-center gap-6">
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

          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Adithya Harish. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

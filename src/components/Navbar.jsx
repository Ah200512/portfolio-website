import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useClickSound } from '../hooks/useSounds';

const navLinks = [
  { name: 'Home',       href: '#home' },
  { name: 'About',      href: '#about' },
  { name: 'Skills',     href: '#skills' },
  { name: 'Projects',   href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact',    href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled]         = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection]   = useState('home');
  const { isDark, setIsDark }               = useTheme();
  const playClick = useClickSound();

  // Scroll listener → glass + active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleThemeToggle = () => {
    playClick();
    setIsDark(prev => !prev);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3 glass border-b shadow-lg'
          : 'py-5 bg-transparent'
      }`}
      style={{
        borderColor: isScrolled ? 'var(--border)' : 'transparent',
        boxShadow: isScrolled ? '0 4px 30px rgba(0,0,0,0.15)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          className="text-xl font-black tracking-tight flex items-center gap-2"
          style={{ color: 'var(--text-primary)' }}
          whileHover={{ scale: 1.03 }}
          onClick={playClick}
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs mr-2 transition-transform group-hover:scale-110"
            style={{
              background: 'linear-gradient(135deg, #b8860b, #ffd700)',
              color: '#000',
              fontFamily: 'Space Grotesk, sans-serif'
            }}
          >
            AH
          </div>
          Adithya <span style={{ color: 'var(--primary)' }}>Harish</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive  = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={playClick}
                className={`text-sm font-medium relative transition-colors duration-200 ${
                  isActive ? 'nav-link-active' : ''
                }`}
                style={{ color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)' }}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                    style={{ background: 'var(--primary)' }}
                  />
                )}
              </a>
            );
          })}

          {/* Theme Toggle */}
          <motion.button
            onClick={handleThemeToggle}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-9 h-9 rounded-full flex items-center justify-center border transition-all"
            style={{
              background: 'var(--surface-2)',
              borderColor: 'var(--border)',
              color: 'var(--text-secondary)',
            }}
            title="Toggle theme"
          >
            <AnimatePresence mode="wait">
              {isDark ? (
                <motion.span key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Sun size={16} />
                </motion.span>
              ) : (
                <motion.span key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Moon size={16} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          <motion.a
            href="/resume_adithya_harish.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClick}
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="px-5 py-2 text-sm font-bold text-white rounded-full transition-all animate-pulse-glow"
            style={{
              background: 'var(--primary)',
            }}
          >
            Resume
          </motion.a>
        </div>

        {/* Mobile: theme + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <button onClick={handleThemeToggle} className="text-gray-400 hover:text-white">
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="transition-colors"
            style={{ color: 'var(--text-secondary)' }}
            onClick={() => { setIsMobileMenuOpen(!isMobileMenuOpen); playClick(); }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            className="glass border-b md:hidden overflow-hidden"
            style={{ borderColor: 'var(--border)' }}
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => { setIsMobileMenuOpen(false); playClick(); }}
                  className="text-lg font-medium transition-colors"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/resume_adithya_harish.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => { setIsMobileMenuOpen(false); playClick(); }}
                className="inline-block mt-2 px-6 py-3 text-center font-bold text-white rounded-xl"
                style={{ background: 'var(--primary)' }}
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

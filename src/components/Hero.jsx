import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Download } from 'lucide-react';

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
import TiltCard from './TiltCard';

export default function Hero() {
  const playClick = useClickSound();
  const containerRef = useRef(null);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
    >
      {/* Static grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Center glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
          style={{ background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)' }}
        />
      </div>

      <div
        className="max-w-7xl mx-auto px-6 relative z-10 w-full"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left Column ── */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border backdrop-blur-md mb-8"
              style={{
                background: 'rgba(212, 175, 55, 0.1)',
                borderColor: 'rgba(212, 175, 0, 0.3)',
              }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase italic" style={{ color: 'var(--primary-light)' }}>
                Gen AI & Full-Stack Developer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-6xl md:text-8xl font-black leading-[1.1] mb-8"
              style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-primary)' }}
            >
              Building <span style={{ color: 'var(--primary)' }}>Intelligent</span> Systems.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl leading-relaxed mb-10 max-w-lg"
              style={{ color: 'var(--text-secondary)' }}
            >
              Crafting high-performance digital experiences with a focus on 
              scalable architecture and seamless AI integration.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-5 mb-12"
            >
              <motion.a
                href="#projects"
                onClick={playClick}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-2 px-7 py-3.5 text-white font-bold rounded-full transition-all"
                style={{
                  background: 'var(--primary)',
                  boxShadow: '0 10px 40px rgba(212, 175, 55, 0.5)',
                }}
              >
                View Projects
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </motion.a>

              <motion.a
                href="#contact"
                onClick={playClick}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-2 px-7 py-3.5 rounded-full border transition-all"
                style={{
                  background: 'var(--surface)',
                  borderColor: 'var(--border)',
                  color: 'var(--text-primary)',
                }}
              >
                Let's Talk
                <Mail size={18} />
              </motion.a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-6"
            >
              {[
                { href: 'https://github.com/Ah200512', icon: <Github /> },
                { href: 'https://www.linkedin.com/in/adityaharish05/', icon: <Linkedin /> },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClick}
                  className="transition-all hover:scale-110"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {social.icon}
                </a>
              ))}
              <div className="h-px w-12 bg-white/10" />
              <button
                className="text-xs font-bold tracking-[0.2em] uppercase transition-colors hover:text-white"
                style={{ color: 'var(--text-muted)' }}
              >
                Scroll to explore
              </button>
            </motion.div>
          </div>

          {/* ── Right Column ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Bento-style identity card */}
            <TiltCard
              className="p-8 rounded-[2rem] border-2 shadow-2xl overflow-hidden relative"
              style={{
                background: 'rgba(15, 15, 15, 0.9)',
                borderColor: 'var(--border)',
                maxWidth: '430px',
                marginLeft: 'auto',
              }}
            >
              {/* Background accent orbs */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px] pointer-events-none opacity-40"
                style={{ background: 'var(--primary)' }}
              />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full blur-[80px] pointer-events-none opacity-20"
                style={{ background: 'rgba(139,92,246,0.3)' }}
              />

              {/* Identity Header */}
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center font-black text-2xl shadow-lg border-2 border-white/10"
                  style={{
                    background: 'linear-gradient(135deg, #b8860b, #ffd700)',
                    color: '#000',
                    fontFamily: 'Space Grotesk, sans-serif',
                    boxShadow: '0 0 30px rgba(212, 175, 55, 0.3)'
                  }}
                >
                  AH
                </div>
                <div>
                  <h3 className="text-xl font-black" style={{ color: 'var(--text-primary)' }}>Adithya Harish</h3>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>SRM University</p>
                </div>
              </div>

              {/* Quick stats / Chips */}
              <div className="space-y-4">
                {[
                  { label: 'Frontend Craft', desc: 'React · Tailwind · Framer Motion', icon: '⚛️' },
                  { label: 'Gen AI Engineering', desc: 'LLMs · RAG · LangChain · Groq', icon: '🤖' },
                  { label: 'Full-Stack Scope', desc: 'Python · SQL · WebSockets', icon: '🚀' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl flex items-center gap-4 border transition-all hover:bg-white/5"
                    style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'var(--border)' }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-lg shadow-inner">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>{item.label}</h4>
                      <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Status */}
              <div
                className="mt-6 p-3 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(212, 175, 55, 0.08)', border: '1px solid rgba(212, 175, 55, 0.2)' }}
              >
                <span className="text-xs font-semibold text-yellow-500 uppercase tracking-widest">🟢 Open to Work</span>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

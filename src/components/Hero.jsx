import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
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
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border backdrop-blur-md mb-8"
              style={{
                background: 'rgba(212, 175, 55, 0.1)',
                borderColor: 'rgba(212, 175, 0, 0.3)',
              }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                Available for Opportunities
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] mb-6"
              style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-primary)' }}
            >
              Hi, I'm{' '}
              <span
                className="block"
                style={{
                  background: 'linear-gradient(135deg, var(--primary-light) 0%, var(--accent) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Adithya Harish
              </span>
            </motion.h1>

            {/* Typing effect */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl font-semibold mb-6 h-10"
              style={{ color: 'var(--primary-light)' }}
            >
              <TypeAnimation
                sequence={[
                  'Full Stack Developer', 2200,
                  'Gen AI Developer', 2200,
                  'LLM Specialist', 2000,
                  'Problem Solver', 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg mb-10 max-w-lg leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              I craft sleek, high-performance interfaces powered by modern code and Generative AI —
              blending product thinking with scalable engineering for real-world impact.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 mb-12"
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
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#contact"
                onClick={playClick}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3.5 font-semibold rounded-full border transition-all backdrop-blur-md"
                style={{
                  color: 'var(--text-primary)',
                  borderColor: 'var(--border-hover)',
                  background: 'var(--glass-bg)',
                }}
              >
                Contact Me
              </motion.a>
              <motion.a
                href="/resume_adithya_harish.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-5 py-3.5 font-medium rounded-full border transition-all"
                style={{
                  color: 'var(--text-secondary)',
                  borderColor: 'var(--border)',
                  background: 'var(--surface-2)',
                }}
              >
                <Download size={16} />
                Resume
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-5"
            >
              {[
                { href: 'https://github.com/Ah200512', icon: <Github size={20} />, label: 'GitHub' },
                { href: 'https://www.linkedin.com/in/adityaharish05/', icon: <Linkedin size={20} />, label: 'LinkedIn' },
                { href: 'mailto:adithyaaudi2005@gmail.com', icon: <Mail size={20} />, label: 'Email' },
              ].map(({ href, icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  onClick={playClick}
                  whileHover={{ scale: 1.15, y: -3 }}
                  className="w-11 h-11 rounded-full flex items-center justify-center border transition-all"
                  style={{
                    color: 'var(--text-secondary)',
                    borderColor: 'var(--border)',
                    background: 'var(--surface-2)',
                  }}
                  title={label}
                >
                  {icon}
                </motion.a>
              ))}
              <span className="text-sm ml-2" style={{ color: 'var(--text-muted)' }}>
                Let's connect 👋
              </span>
            </motion.div>
          </div>

          {/* ── Right Column: Identity card ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
            className="relative lg:h-[580px] flex items-center justify-center"
          >
            {/* Ambient glow */}
            <div
              className="absolute inset-0 rounded-full blur-3xl opacity-30 animate-float-slow"
              style={{ background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)' }}
            />

            <TiltCard
              gradientBorder
              intensity={12}
              glowColor="rgba(139,92,246,0.3)"
              className="relative w-full max-w-sm rounded-2xl p-8"
              style={{
                background: 'var(--glass-bg)',
                backdropFilter: 'blur(20px)',
              }}
            >
              {/* Corner decoration */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"
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

              {/* Stat cards */}
              <div className="space-y-3">
                {[
                  {
                    icon: '⚛️',
                    color: '#60a5fa',
                    bg: 'rgba(96,165,250,0.1)',
                    title: 'Frontend Craft',
                    sub: 'React · Tailwind · Framer Motion',
                  },
                  {
                    icon: '🤖',
                    color: '#a78bfa',
                    bg: 'rgba(167,139,250,0.1)',
                    title: 'Gen AI Engineering',
                    sub: 'LLMs · RAG · LangChain · Groq',
                  },
                  {
                    icon: '🚀',
                    color: '#34d399',
                    bg: 'rgba(52,211,153,0.1)',
                    title: 'Full-Stack Scope',
                    sub: 'Python · SQL · WebSockets',
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.15 }}
                    whileHover={{ x: 4, scale: 1.01 }}
                    className="p-3.5 rounded-xl flex items-center gap-4 cursor-pointer"
                    style={{
                      background: 'var(--surface-2)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0"
                      style={{ background: item.bg }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                        {item.title}
                      </p>
                      <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{item.sub}</p>
                    </div>
                  </motion.div>
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

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border-2 flex items-start justify-center pt-1.5"
            style={{ borderColor: 'var(--border-hover)' }}
          >
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: 'var(--primary)' }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

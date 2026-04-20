import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { useClickSound } from '../hooks/useSounds';
import TiltCard from './TiltCard';

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

// --- Typewriter Component ---
const Typewriter = ({ strings, delay = 150, pause = 2000 }) => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentFullText = strings[currentStringIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(currentFullText.substring(0, currentText.length - 1));
      }, delay / 2);
    } else {
      timer = setTimeout(() => {
        setCurrentText(currentFullText.substring(0, currentText.length + 1));
      }, delay);
    }

    if (!isDeleting && currentText === currentFullText) {
      setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentStringIndex((prev) => (prev + 1) % strings.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentStringIndex, strings, delay, pause]);

  return (
    <span className="relative">
      {currentText}
      <span className="ml-1 w-1 h-10 md:h-14 bg-primary inline-block animate-pulse align-middle" style={{ background: 'var(--primary)', width: '3px' }} />
    </span>
  );
};

export default function Hero() {
  const playClick = useClickSound();
  const roles = [
    'GenAI Developer',
    'AI Engineer',
    'Full Stack Developer',
    'Software Engineer',
    'Problem Solver'
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* --- Left Column --- */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <h2 className="text-2xl md:text-3xl font-black mb-2" style={{ color: 'var(--text-primary)', fontFamily: 'Space Grotesk, sans-serif' }}>
                Hi There,
              </h2>
              <h1 className="text-4xl md:text-6xl font-black mb-6" style={{ color: 'var(--text-primary)', fontFamily: 'Space Grotesk, sans-serif' }}>
                I'm Adithya <span style={{ 
                  background: 'linear-gradient(135deg, #ffd700, #b8860b)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>Harish</span>
              </h1>

              <div className="text-xl md:text-3xl font-bold min-h-[50px]" style={{ color: 'var(--text-primary)' }}>
                I Am Into <span style={{ color: 'var(--primary)' }}>
                  <Typewriter strings={roles} />
                </span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl leading-relaxed mb-10 max-w-lg mt-8"
              style={{ color: 'var(--text-secondary)' }}
            >
              Crafting <span style={{ color: '#60a5fa' }}>high-performance</span> digital experiences with a focus on 
              <span style={{ color: '#a78bfa' }}> scalable architecture</span> and seamless 
              <span style={{ color: '#34d399' }}> AI integration</span>.
            </motion.p>

            {/* Icons & Buttons */}
            <div className="flex flex-wrap gap-5 mb-12">
              <motion.a
                href="#projects"
                onClick={playClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 font-bold rounded-full transition-all"
                style={{ background: '#ffffff', color: '#000000', boxShadow: '0 10px 40px rgba(255, 255, 255, 0.2)' }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                onClick={playClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 font-bold rounded-full border transition-all"
                style={{ background: 'var(--surface)', borderColor: 'var(--border)', color: '#ffffff' }}
              >
                Contact Me
              </motion.a>
            </div>

            <div className="flex items-center gap-6">
              <a href="https://github.com/Ah200512" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github size={28} />
              </a>
              <a href="https://www.linkedin.com/in/adityaharish05/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={28} />
              </a>
              <div className="h-px w-12 bg-white/10" />
              <span className="text-xs font-bold tracking-widest uppercase text-gray-500">Scroll to explore</span>
            </div>
          </div>

          {/* --- Right Column (Bento Card) --- */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="hidden lg:block"
          >
            <TiltCard className="p-8 rounded-[2.5rem] border shadow-2xl relative overflow-hidden" 
              style={{ background: 'rgba(15,15,15,0.9)', borderColor: 'var(--border)' }}>
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full" style={{ background: 'var(--primary)', opacity: 0.2 }} />
              
              <div className="flex items-center gap-5 mb-10">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center font-black text-2xl"
                  style={{ background: 'linear-gradient(135deg, #b8860b, #ffd700)', color: '#000' }}>
                  AH
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">Adithya Harish</h3>
                  <p className="text-sm text-gray-500">GenAI Developer</p>
                </div>
              </div>

              <div className="space-y-5">
                {[
                  { label: 'Core AI', desc: 'LLMs · RAG · LangChain', icon: '🤖' },
                  { label: 'Full Stack', desc: 'React · Python · SQL', icon: '🚀' },
                  { label: 'Real-time', desc: 'WebSockets · OpenCV', icon: '⚡' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 transition-colors hover:bg-white/10">
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{item.label}</h4>
                      <p className="text-xs text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-3 text-center rounded-xl bg-primary/10 border border-primary/20">
                <span className="text-xs font-bold text-yellow-500 uppercase tracking-widest">Open to Work</span>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

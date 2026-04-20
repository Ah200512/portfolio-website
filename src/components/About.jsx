import React from 'react';
import { motion } from 'framer-motion';
import TiltCard from './TiltCard';

const traits = [
  { icon: '🧠', label: 'Problem Solver',   desc: 'First principles thinking' },
  { icon: '⚙️', label: 'System Designer',  desc: 'Scalable architecture' },
  { icon: '🚀', label: 'Builder Mindset',  desc: 'Ship fast, iterate faster' },
  { icon: '✨', label: 'UI/UX Obsessed',   desc: 'Pixel-perfect experiences' },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemFade = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function About() {
  return (
    <section id="about" className="py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--primary)' }}>
            About Me
          </p>
          <h2
            className="text-4xl md:text-6xl font-black leading-tight mb-5"
            style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-primary)' }}
          >
            The Mindset
          </h2>
          <div className="section-line mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {[
              <>
                I'm driven by deep curiosity and relentless ambition. As a developer at the intersection of{' '}
                <strong style={{ color: 'var(--text-primary)' }}>user-centric design</strong> and{' '}
                <strong style={{ color: 'var(--text-primary)' }}>Generative AI</strong>, I create products that feel
                intuitive, seamless, and intelligent.
              </>,
              <>
                My approach isn't just about writing code — it's about solving{' '}
                <strong style={{ color: 'var(--text-primary)' }}>real problems</strong>. From low-latency WebSockets to
                complex LLM pipelines, I focus on the entire lifecycle from day one.
              </>,
              <>
                I thrive where engineering meets product vision — where ambitious ideas transform into{' '}
                <strong style={{ color: 'var(--text-primary)' }}>immersive, impactful digital experiences</strong>.
              </>,
            ].map((text, i) => (
              <motion.p key={i} variants={itemFade} className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {text}
              </motion.p>
            ))}

            {/* Highlight pills */}
            <motion.div variants={itemFade} className="flex flex-wrap gap-2 pt-4">
              {['Python', 'Java', 'SQL', 'React', 'AI/ML', 'LangChain', 'Groq', 'WebSockets'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm font-medium rounded-lg border transition-all hover:scale-105 skill-tag"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Trait cards grid – each with 3D tilt */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 gap-5"
          >
            {traits.map((item, idx) => (
              <motion.div key={idx} variants={itemFade}>
                <TiltCard
                  intensity={10}
                  glowColor="rgba(139,92,246,0.25)"
                  className="p-6 rounded-2xl h-full card-shine"
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h4 className="font-bold mb-1" style={{ color: 'var(--text-primary)' }}>{item.label}</h4>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

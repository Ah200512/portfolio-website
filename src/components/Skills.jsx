import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Programming & DSA',
    emoji: '💻',
    color: '#d4af37',
    skills: [
      { name: 'DSA',             level: 85 },
      { name: 'Python',          level: 90 },
      { name: 'C / C++',         level: 80 },
      { name: 'Java / JS',       level: 85 },
    ],
  },
  {
    title: 'Development',
    emoji: '🎨',
    color: '#d4af37',
    skills: [
      { name: 'React.js',      level: 88 },
      { name: 'Tailwind CSS',  level: 92 },
      { name: 'Frontend Eng',  level: 90 },
      { name: 'WebSockets',    level: 78 },
    ],
  },
  {
    title: 'AI & Machine Learning',
    emoji: '🤖',
    color: '#d4af37',
    skills: [
      { name: 'Generative AI', level: 92 },
      { name: 'LLM Pipelines', level: 88 },
      { name: 'ML Foundations',level: 75 },
      { name: 'LangChain',     level: 85 },
    ],
  },
  {
    title: 'Tools & Systems',
    emoji: '⚙️',
    color: '#d4af37',
    skills: [
      { name: 'Git / GitHub',    level: 90 },
      { name: 'System Design',   level: 78 },
      { name: 'RAG Architecture',level: 82 },
      { name: 'Deployment',      level: 75 },
    ],
  },
];

function AnimatedBar({ level, color }) {
  return (
    <div className="w-full h-1.5 rounded-full mt-1" style={{ background: 'var(--surface-2)' }}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
        className="h-full rounded-full"
        style={{ background: `linear-gradient(90deg, ${color}, ${color}99)` }}
      />
    </div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <section id="skills" className="py-28 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--primary)' }}>
            Technical Skills
          </p>
          <h2
            className="text-4xl md:text-6xl font-black leading-tight mb-5"
            style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-primary)' }}
          >
            Core Arsenal
          </h2>
          <div className="section-line mx-auto mb-6" />
          <p className="max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            A comprehensive toolkit for building scalable, high-performance, intelligent applications.
          </p>
        </motion.div>

        {/* Skill category cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              onClick={() => setActiveCategory(activeCategory === idx ? null : idx)}
              className="p-6 rounded-2xl border transition-all duration-300 card-shine overflow-hidden relative"
              style={{
                background: activeCategory === idx
                  ? `${cat.color}10`
                  : 'var(--surface)',
                borderColor: activeCategory === idx ? `${cat.color}50` : 'var(--border)',
                boxShadow: activeCategory === idx ? `0 0 20px ${cat.color}20` : 'none',
                cursor: 'pointer',
              }}
            >
              {/* Top bar */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                style={{ background: `linear-gradient(90deg, ${cat.color}, transparent)` }}
              />

              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                  style={{ background: `${cat.color}18` }}
                >
                  {cat.emoji}
                </div>
                <h3 className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>{cat.title}</h3>
              </div>

              <div className="space-y-4">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between items-center">
                      <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{skill.name}</span>
                      <span className="text-xs font-semibold" style={{ color: cat.color }}>{skill.level}%</span>
                    </div>
                    <AnimatedBar level={skill.level} color={cat.color} />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating skill bubbles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 flex flex-wrap justify-center gap-3"
        >
          {['DSA', 'Python', 'C', 'C++', 'Java', 'JavaScript', 'ML', 'AI', 'React', 'Git', 'SQL', 'LLMs', 'LangChain', 'RAG'].map((tag, i) => (
            <motion.span
              key={tag}
              whileHover={{ scale: 1.1, y: -2 }}
              className="px-4 py-2 rounded-full text-sm font-medium border transition-all skill-tag"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';

const Github = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);
import TiltCard from './TiltCard';
import { useClickSound } from '../hooks/useSounds';

const projects = [
  {
    title: 'EchoLens',
    description:
      'A real-time communication and accessibility platform integrating video/audio streaming with AI features: speech transcription, object detection (computer vision), and AI-generated feedback loops.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'WebSockets', 'Groq API', 'Clerk', 'OpenCV'],
    category: 'AI',
    featured: true,
    status: '🏆 Flagship',
    emoji: '👁️',
    color: '#d4af37',
    links: { demo: '#', github: 'https://github.com/Ah200512' },
  },
  {
    title: 'Chat with SQL',
    description:
      'Natural language to SQL query engine. Ask questions in plain English and get instant database insights — powered by Groq LLM and Streamlit.',
    tech: ['Python', 'Groq API', 'Streamlit', 'SQLite', 'LangChain'],
    category: 'AI',
    featured: false,
    emoji: '🗄️',
    color: '#d4af37',
    links: { github: 'https://github.com/Ah200512' },
  },
  {
    title: 'PDF RAG Chatbot',
    description:
      'Upload any PDF and have a full conversation with it. Built with Retrieval-Augmented Generation (RAG) for accurate, context-aware answers grounded in your documents.',
    tech: ['Python', 'LangChain', 'FAISS', 'Groq API', 'Streamlit'],
    category: 'AI',
    featured: false,
    emoji: '📄',
    color: '#d4af37',
    links: { github: 'https://github.com/Ah200512' },
  },
  {
    title: 'AI Search Engine',
    description:
      'An intelligent search engine that uses AI tools and agents to gather, synthesize, and present information in real time — beyond simple keyword matching.',
    tech: ['Python', 'LangChain Agents', 'Groq', 'Tavily API', 'Streamlit'],
    category: 'AI',
    featured: false,
    emoji: '🔍',
    color: '#d4af37',
    links: { github: 'https://github.com/Ah200512' },
  },
  {
    title: 'Decentralized Voting System',
    description:
      'A blockchain-based voting platform demonstrating trust, transparency, and security for digital elections with smart contract governance.',
    tech: ['Blockchain', 'Smart Contracts', 'Web3', 'Solidity', 'React'],
    category: 'Web3',
    featured: false,
    emoji: '🗳️',
    color: '#d4af37',
    links: { github: 'https://github.com/Ah200512' },
  },
  {
    title: 'D-Bucks',
    description:
      'Real-time decibel monitoring using IoT sensors, stores noise readings on-chain, and rewards participants with tokenized incentives for quiet behavior.',
    tech: ['IoT', 'Web3', 'Blockchain', 'Real-time Data', 'Tokenomics'],
    category: 'Web3',
    featured: false,
    emoji: '🔊',
    color: '#d4af37',
    links: { github: 'https://github.com/Ah200512' },
  },
];

const categories = ['All', 'AI', 'Web3'];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [hovered, setHovered] = useState(null);
  const playClick = useClickSound();

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--primary)' }}>
            Portfolio
          </p>
          <h2
            className="text-4xl md:text-6xl font-black leading-tight mb-5"
            style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-primary)' }}
          >
            Featured Work
          </h2>
          <div className="section-line mb-6" />
          <p className="max-w-2xl text-lg" style={{ color: 'var(--text-secondary)' }}>
            A selection of projects that showcase my ability to blend modern UI with intelligent backend systems.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex gap-3 mb-12 flex-wrap"
        >
          {categories.map(cat => (
            <motion.button
              key={cat}
              onClick={() => { setFilter(cat); playClick(); }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-5 py-2 rounded-full text-sm font-semibold border transition-all"
              style={{
                background:   filter === cat ? 'linear-gradient(135deg, var(--primary), var(--accent))' : 'var(--surface)',
                color:        filter === cat ? '#ffffff' : 'var(--text-secondary)',
                borderColor:  filter === cat ? 'transparent' : 'var(--border)',
              }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Project grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.88 }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
              >
                <TiltCard
                  gradientBorder={project.featured}
                  intensity={8}
                  glowColor={`${project.color}30`}
                  className="h-full rounded-2xl card-shine overflow-hidden flex flex-col"
                  style={{
                    background: 'var(--surface)',
                    border: project.featured ? undefined : '1px solid var(--border)',
                  }}
                  onMouseEnter={() => setHovered(project.title)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Top color bar */}
                  <div
                    className="h-1 w-full"
                    style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}44)` }}
                  />

                  <div className="p-6 flex flex-col flex-1">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span
                          className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                          style={{ background: `${project.color}18` }}
                        >
                          {project.emoji}
                        </span>
                        <div>
                          <h3 className="font-bold text-base" style={{ color: 'var(--text-primary)' }}>
                            {project.title}
                          </h3>
                          {project.status && (
                            <span
                              className="text-xs font-semibold px-2 py-0.5 rounded-full"
                              style={{ background: `${project.color}20`, color: project.color }}
                            >
                              {project.status}
                            </span>
                          )}
                        </div>
                      </div>
                      <span
                        className="text-xs px-2 py-1 rounded-full font-medium"
                        style={{ background: 'var(--surface-2)', color: 'var(--text-muted)' }}
                      >
                        {project.category}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: 'var(--text-secondary)' }}>
                      {project.description}
                    </p>

                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map(t => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-xs rounded-lg border transition-colors"
                          style={{
                            background: 'var(--surface-2)',
                            borderColor: 'var(--border)',
                            color: 'var(--text-muted)',
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action links */}
                    <div className="flex gap-3 mt-auto">
                      {project.links.demo && project.links.demo !== '#' && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={playClick}
                          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
                          style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}aa)` }}
                        >
                          <ExternalLink size={14} /> Demo
                        </a>
                      )}
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={playClick}
                        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-semibold border transition-all hover:border-primary/50"
                        style={{
                          color: 'var(--text-secondary)',
                          borderColor: 'var(--border)',
                          background: 'var(--surface-2)',
                        }}
                      >
                        <Github size={14} /> Code
                      </a>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View all on GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mt-14"
        >
          <a
            href="https://github.com/Ah200512"
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClick}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold border transition-all hover:scale-105"
            style={{
              color: 'var(--text-secondary)',
              borderColor: 'var(--border)',
              background: 'var(--surface)',
            }}
          >
            <Github size={18} /> View all on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}

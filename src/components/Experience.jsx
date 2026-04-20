import React from 'react';
import { motion } from 'framer-motion';
import TiltCard from './TiltCard';

const experiences = [
  {
    type: 'work',
    label: 'Internship',
    title: 'Software Developer Intern',
    org: 'AES Technologies',
    color: '#d4af37',
    points: [
      'Built comprehensive front-end components using HTML, CSS, JavaScript, and React.js.',
      'Focused on responsive, user-friendly, and accessible interface design.',
      'Gained solid exposure to DSA, System Design, and SDLC best practices.',
      'Developed skill in front-end/back-end integration for scalable web applications.',
    ],
  },
  {
    type: 'volunteer',
    label: 'Volunteering',
    title: 'Educational Support',
    org: 'The Sevashram Trust',
    color: '#d4af37',
    points: [
      'Helped children with their studies and educational development.',
      'Fostered growth and learning within an underprivileged community.',
    ],
  },
];

const achievements = [
  {
    icon: '🎓',
    title: 'B.Tech Computer Science',
    desc: 'SRM University — Specialization in AI & Data Science.',
    color: '#d4af37',
  },
  {
    icon: '⚡',
    title: 'Gen AI Certification',
    desc: 'Completed advanced certification in Generative AI and LLM Engineering.',
    color: '#d4af37',
  },
];

const interests = ['Swimming', 'Badminton', 'Reading', 'Music', 'Painting', 'Photography', 'Video Games'];

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--primary)' }}>
            Background
          </p>
          <h2
            className="text-4xl md:text-6xl font-black leading-tight mb-5"
            style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-primary)' }}
          >
            Journey
          </h2>
          <div className="section-line" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* ── Timeline: Experience ── */}
          <div>
            <h3 className="text-xl font-bold mb-10 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
              <span style={{ color: 'var(--primary)' }}>💼</span> Experience
            </h3>
            <div className="relative pl-10" style={{ borderLeft: '2px solid var(--border)' }}>
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="relative mb-16"
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute -left-[48px] top-2 w-5 h-5 rounded-full border-2 flex items-center justify-center timeline-dot"
                    style={{
                      background: 'var(--bg)',
                      borderColor: exp.color,
                    }}
                  >
                    <div className="w-2 h-2 rounded-full" style={{ background: exp.color }} />
                  </div>

                  <TiltCard
                    intensity={6}
                    glowColor={`${exp.color}25`}
                    className="p-6 rounded-2xl card-shine"
                    style={{
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    <span
                      className="text-xs font-bold tracking-widest uppercase mb-2 block"
                      style={{ color: exp.color }}
                    >
                      {exp.label}
                    </span>
                    <h4 className="text-lg font-bold mb-0.5" style={{ color: 'var(--text-primary)' }}>
                      {exp.title}
                    </h4>
                    <p className="text-sm mb-4 font-medium" style={{ color: 'var(--text-muted)' }}>
                      {exp.org}
                    </p>
                    <ul className="space-y-2">
                      {exp.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                          <span style={{ color: exp.color, marginTop: 2 }}>▹</span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Right: Achievements + Education ── */}
          <div>
            <h3 className="text-xl font-bold mb-10 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
              <span style={{ color: 'var(--primary)' }}>🏆</span> Achievements & Education
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {achievements.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <TiltCard
                    intensity={8}
                    glowColor={`${item.color}25`}
                    className="p-5 rounded-2xl h-full card-shine"
                    style={{
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-3"
                      style={{ background: `${item.color}18` }}
                    >
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-sm mb-1" style={{ color: 'var(--text-primary)' }}>{item.title}</h4>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                  </TiltCard>
                </motion.div>
              ))}
            </div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 rounded-2xl"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
            >
              <h4 className="font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                <span>❤️</span> Beyond Code
              </h4>
              <div className="flex flex-wrap gap-2">
                {interests.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="px-3 py-1.5 rounded-full text-sm border skill-tag"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

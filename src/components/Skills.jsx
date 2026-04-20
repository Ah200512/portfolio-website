import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Backend & Full-Stack",
    skills: ["Python", "SQL", "WebSockets", "Node.js Conceptually", "Database Design"]
  },
  {
    title: "AI & Modern Tech",
    skills: ["Generative AI", "LLM Integration", "Groq API", "RAG Concepts", "AI Prompting"]
  },
  {
    title: "Tools & Methodologies",
    skills: ["Git", "SDLC", "Agile", "System Design", "UI/UX Prototyping"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Core Arsenal</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit designed for building scalable, high-performance, and intelligent web applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all group hover:-translate-y-1 block"
            >
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-sm text-gray-300 group-hover:border-primary/30 group-hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">The Mindset</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-gray-400 text-lg leading-relaxed"
          >
            <p>
              I am driven by a deep curiosity for how things work and a relentless ambition to build what's next. As a developer positioned at the intersection of <strong className="text-white">user-centric design</strong> and <strong className="text-white">Generative AI</strong>, I aim to create products that feel intuitive, seamless, and intelligent.
            </p>
            <p>
              My approach isn't just about writing code; it's about solving real problems. Whether setting up low-latency WebSockets or orchestrating complex LLM pipelines, I focus on the entire software lifecycle and scalability from day one.
            </p>
            <p>
              I thrive in environments that challenge the status quo – places where engineering meets product vision, and where ambitious ideas transform into immersive, impactful digital experiences.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { label: 'Problem Solving', icon: '🧠' },
              { label: 'System Design', icon: '⚙️' },
              { label: 'Scalable Apps', icon: '🚀' },
              { label: 'UI/UX Oriented', icon: '✨' }
            ].map((item, idx) => (
              <div key={idx} className="glass p-6 rounded-2xl border border-white/5 hover:border-white/20 hover:bg-white/[0.02] transition-colors group">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform origin-left">{item.icon}</div>
                <h4 className="text-white font-medium">{item.label}</h4>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

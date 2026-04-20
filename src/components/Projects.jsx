import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

const Github = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const projects = [
  {
    title: "EchoLens",
    featured: true,
    description: "A real-time communication and accessibility platform that integrates video and audio streaming with AI-powered features. Includes real-time speech transcription, object detection using computer vision, and AI-generated feedback.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "WebSockets", "Groq API", "Clerk", "Computer Vision"],
    status: "Flagship Product",
    links: { demo: "#", github: "#" }
  },
  {
    title: "Decentralized Voting System",
    featured: false,
    description: "A blockchain-based project demonstrating problem solving, trust, transparency, and technical exploration for secure digital voting.",
    tech: ["Blockchain", "Smart Contracts", "Web3", "Frontend UI"],
    links: { github: "#" }
  },
  {
    title: "D-Bucks",
    featured: false,
    description: "Tracks real-time decibel levels using IoT sensors or mobile devices, stores readings on blockchain, and rewards participants with tokens.",
    tech: ["Web3", "IoT Integration", "Real-time Data", "Tokenomics"],
    links: { github: "#" }
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured Work</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl text-lg">
            A selection of projects that showcase my ability to blend modern UI frameworks with intelligent, scalable backend systems.
          </p>
        </motion.div>

        <div className="space-y-12 block">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`glass rounded-2xl overflow-hidden border transition-all p-8 relative group ${project.featured ? 'border-primary/30 shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:border-primary/50' : 'border-white/10 hover:border-white/20 flex flex-col md:flex-row justify-between items-start gap-8'}`}
            >
              {project.featured && (
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10 group-hover:bg-primary/20 transition-all duration-500"></div>
              )}

              <div className="flex-1 w-full">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className={`font-bold text-white ${project.featured ? 'text-3xl' : 'text-2xl'}`}>
                    {project.title}
                  </h3>
                  {project.status && (
                    <span className="px-3 py-1 rounded bg-primary/20 border border-primary/30 text-xs font-semibold text-primary">
                      {project.status}
                    </span>
                  )}
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed text-lg">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>


              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

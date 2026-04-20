import React from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Journey</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Experience Column */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
              <span className="text-primary">💼</span> Experience
            </h3>
            <div className="relative pl-8 border-l border-white/10 space-y-12 block">
              
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                </div>
                <div className="glass p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-colors">
                  <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2 block">Internship</span>
                  <h4 className="text-xl font-bold text-white mb-1">Software Developer</h4>
                  <p className="text-gray-400 font-medium mb-4">AES Technologies India Pvt Limited</p>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start gap-2">
                       <span className="text-primary mt-1">▹</span>
                       Built comprehensive front-end components using HTML, CSS, JavaScript, and React.js.
                    </li>
                    <li className="flex items-start gap-2">
                       <span className="text-primary mt-1">▹</span>
                       Focused on driving responsive, user-friendly, and accessible interfaces.
                    </li>
                    <li className="flex items-start gap-2">
                       <span className="text-primary mt-1">▹</span>
                       Gained solid exposure to core SDE concepts: DSA, System Design, and SDLC best practices.
                    </li>
                    <li className="flex items-start gap-2">
                       <span className="text-primary mt-1">▹</span>
                       Developed an understanding of robust front-end and back-end integration for scalable web applications.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Volunteering as part of experience timeline */}
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-background border-2 border-accent flex items-center justify-center"></div>
                <div className="glass p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-colors">
                  <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-2 block">Volunteering</span>
                  <h4 className="text-xl font-bold text-white mb-1">Educational Support</h4>
                  <p className="text-gray-400 font-medium mb-4">The Sevashram Trust</p>
                  <p className="text-gray-400">
                    Helping children with their studies and providing educational support, fostering growth and learning within the community.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Other Column */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
              <span className="text-primary">🎓</span> Education & Profile
            </h3>
            <div className="space-y-6">
              
              <div className="glass p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-colors">
                <h4 className="text-xl font-bold text-white mb-1">B.Tech in Computer Science</h4>
                <p className="text-gray-400">SRM University • India</p>
              </div>

              <div className="glass p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-colors">
                <h4 className="text-xl font-bold text-white mb-4">Interests & Beyond Code</h4>
                <div className="flex flex-wrap gap-2">
                  {["Swimming", "Badminton", "Reading", "Music", "Painting", "Photography", "Video Games"].map((item, i) => (
                    <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/5 py-12 relative z-10 bg-background/50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="text-center md:text-left">
          <a href="#home" className="text-xl font-bold tracking-tight text-white group flex items-center gap-1 mb-2">
            Adithya <span className="text-primary group-hover:text-accent transition-colors">Harish</span>
          </a>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Adithya Harish. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://github.com/Ah200512" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/adityaharish05/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">LinkedIn</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">Resume</a>
        </div>

        <button 
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
        >
          <ArrowUp size={20} />
        </button>

      </div>
    </footer>
  );
}

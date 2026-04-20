import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorLight from './components/CursorLight';
import ParticleBackground from './components/ParticleBackground';
import PageLoader from './components/PageLoader';
import { ThemeProvider } from './context/ThemeContext';
import Lenis from 'lenis';

function App() {
  useEffect(() => {
    // Scroll animations removed as requested
  }, []);

  return (
    <ThemeProvider>
      <PageLoader />
      <CursorLight />

      <div className="relative min-h-screen overflow-x-hidden transition-colors duration-500"
        style={{ color: 'var(--text-primary)' }}>

        {/* Particle canvas layer */}
        <ParticleBackground />

        {/* Ambient background orbs - Handcrafted Gold palette */}
        <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[160px] mix-blend-screen pointer-events-none animate-blob"
          style={{ background: 'rgba(212, 175, 55, 0.12)' }} />
        <div className="fixed top-[20%] right-[-10%] w-[30%] h-[50%] rounded-full blur-[160px] mix-blend-screen pointer-events-none animate-blob"
          style={{ background: 'rgba(184, 134, 11, 0.1)', animationDelay: '2s' }} />
        <div className="fixed bottom-[-20%] left-[20%] w-[50%] h-[40%] rounded-full blur-[140px] mix-blend-screen pointer-events-none animate-blob"
          style={{ background: 'rgba(212, 175, 55, 0.08)', animationDelay: '4s' }} />

        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

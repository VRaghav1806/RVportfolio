import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import CodingProfiles from './components/CodingProfiles';
import Contact from './components/Contact';

import TechOrbit from './components/TechOrbit';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 100) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-background min-h-screen text-slate-100 selection:bg-primary/30">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-grid pointer-events-none opacity-20"></div>
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 via-transparent to-accent/5 pointer-events-none"></div>
      
      <Navbar activeSection={activeSection} />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Experience />
        <CodingProfiles />
        <Contact />
      </main>


      
      <footer className="py-12 border-t border-white/5 text-center text-slate-500 glass">
        <p>© {new Date().getFullYear()} Raghav V. Built with React & Framer Motion.</p>
      </footer>
    </div>
  );
}

export default App;

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github } from './Brands';
import { Mail, FileText, ChevronDown } from 'lucide-react';
import TechOrbit from './TechOrbit';

const Intro = () => {
  return (
    <section id="intro" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse"></div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6 backdrop-blur-sm"
          >
            🚀 Available for new opportunities
          </motion.div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="text-gradient">Raghav V</span>
            <br />
            <span className="text-4xl lg:text-5xl">AI & Full Stack Developer</span>
          </h1>
          
          <p className="text-xl text-slate-400 mb-8 max-w-xl leading-relaxed">
            Building <span className="text-white font-semibold">intelligent systems</span>, 
            scalable web applications, and AI-powered solutions. 
            Passionate about Artificial Intelligence, Cybersecurity, and Full Stack Development.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a href="#projects" className="btn-primary flex items-center gap-2">
              View Projects
            </a>
            <a href="https://ik.imagekit.io/Raghav1806/resume.pdf" className="btn-secondary flex items-center gap-2">
              <FileText size={20} />
              Resume
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-400 hover:text-primary transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="text-slate-400 hover:text-primary transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-slate-400 hover:text-primary transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative hidden lg:block"
        >
          <TechOrbit />
          {/* Central AI Icon or Profile Image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center backdrop-blur-3xl border border-white/10 shadow-[0_0_50px_rgba(0,229,255,0.2)]">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-full"
            ></motion.div>
             <div className="text-center p-8">
               <span className="text-6xl">🤖</span>
               <div className="mt-4 text-xs font-mono text-primary animate-pulse">SYSTEM ONLINE</div>
             </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Intro;

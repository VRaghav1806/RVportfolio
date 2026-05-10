import React from 'react';
import { motion } from 'framer-motion';

const techStack = [
  { name: 'React', icon: '⚛️', color: '#61DAFB' },
  { name: 'Python', icon: '🐍', color: '#3776AB' },
  { name: 'AI', icon: '🧠', color: '#00E5FF' },
  { name: 'MongoDB', icon: '🍃', color: '#47A248' },
  { name: 'NodeJS', icon: '🟢', color: '#339933' },
];

const TechOrbit = () => {
  return (
    <div className="relative w-[500px] h-[500px] flex items-center justify-center">
      {techStack.map((tech, index) => {
        const angle = (index / techStack.length) * 2 * Math.PI;
        const radius = 200;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <motion.div
            key={tech.name}
            className="absolute w-16 h-16 rounded-2xl glass flex items-center justify-center text-3xl shadow-lg cursor-pointer"
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{ 
              x, 
              y, 
              opacity: 1,
              rotate: [0, 360]
            }}
            transition={{ 
              x: { duration: 1, delay: index * 0.1 },
              y: { duration: 1, delay: index * 0.1 },
              rotate: { duration: 20, repeat: Infinity, ease: "linear" }
            }}
            whileHover={{ scale: 1.2, border: `1px solid ${tech.color}` }}
          >
            <span>{tech.icon}</span>
            <div className="absolute -bottom-8 text-[10px] font-mono text-slate-400 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              {tech.name}
            </div>
          </motion.div>
        );
      })}
      
      {/* Outer Rotating Ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute w-[450px] h-[450px] border border-white/5 rounded-full"
      ></motion.div>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute w-[350px] h-[350px] border border-white/5 rounded-full"
      ></motion.div>
    </div>
  );
};

export default TechOrbit;

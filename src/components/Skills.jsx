import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['C', 'C++', 'Java', 'JavaScript', 'HTML', 'CSS'],
    color: 'from-blue-500 to-cyan-400'
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['ReactJS', 'NodeJS', 'ExpressJS', 'TailwindCSS'],
    color: 'from-purple-500 to-indigo-400'
  },
  {
    title: 'AI / Data',
    skills: ['Machine Learning', 'Data Analysis', 'AI Automation'],
    color: 'from-emerald-500 to-teal-400'
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'SQL'],
    color: 'from-orange-500 to-yellow-400'
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Postman', 'Vercel', 'Render'],
    color: 'from-pink-500 to-rose-400'
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-black/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Technical <span className="text-primary">Skills</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive set of tools and technologies I use to build intelligent and scalable solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 glass-card group"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className={`w-2 h-6 rounded-full bg-gradient-to-b ${category.color}`}></span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-sm font-medium hover:border-primary/50 hover:text-primary transition-all duration-300"
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
};

export default Skills;

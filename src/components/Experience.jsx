import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Machine Learning Intern',
    company: 'Future Interns',
    period: 'Completed',
    location: 'Remote',
    description: 'Gained hands-on experience in building, training, and evaluating ML models for real-world applications. Worked on predictive modeling and data preprocessing tasks.',
    icon: <Briefcase className="text-primary" />
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-black/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Professional <span className="text-primary">Experience</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            My journey in the tech industry through internships and roles.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-12 border-l border-white/10 last:pb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(0,229,255,0.8)]"></div>
              
              <div className="glass-card p-8 ml-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex flex-col text-sm text-slate-500 md:items-end">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      {exp.location}
                    </div>
                  </div>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

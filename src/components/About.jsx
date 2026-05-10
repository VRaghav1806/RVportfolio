import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, Trophy, Briefcase, Rocket } from 'lucide-react';

const stats = [
  { label: 'LeetCode Problems', value: 223, suffix: '+', icon: <Target className="text-primary" /> },
  { label: 'SkillRack Problems', value: 880, suffix: '+', icon: <Lightbulb className="text-accent" /> },
  { label: 'Major Projects', value: 4, suffix: '+', icon: <Trophy className="text-yellow-500" /> },
  { label: 'Hackathon Achievements', value: 4, suffix: '+', icon: <Users className="text-green-500" /> },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-8">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                I'm <span className="text-white font-semibold">Raghav V</span>, a passionate Computer Science student specializing in Artificial Intelligence and Data Science at Sri Eshwar College of Engineering.
              </p>
              <p>
                I enjoy building AI-powered applications, full stack web platforms, and cybersecurity solutions that solve real-world problems. My interests include Machine Learning, MERN Stack Development, Automation, and Intelligent Systems.
              </p>
              <p>
                I actively participate in hackathons and coding competitions, where I collaborate with teams to transform innovative ideas into functional products. I also continuously improve my problem-solving skills through platforms like LeetCode and SkillRack.
              </p>
            </div>

            <div className="mt-10 p-6 glass-card border-primary/20">
              <p className="italic text-slate-300">
                "Turning ideas into intelligent solutions through code and creativity."
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 glass-card text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold mb-2 text-white">
                  {stat.value}{stat.suffix}
                </h3>
                <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="col-span-2 p-8 glass-card flex items-center justify-between border-accent/20"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold">1 ML Internship</h4>
                  <p className="text-slate-500 text-sm">Future Interns</p>
                </div>
              </div>
              <Rocket className="text-accent animate-bounce" size={32} />
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;

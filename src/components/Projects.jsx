import React from 'react';
import { motion } from 'framer-motion';
import { Github } from './Brands';
import { ExternalLink, Shield, Database, Layout, PieChart } from 'lucide-react';

const IK_BASE = 'https://ik.imagekit.io/Raghav1806';

const projects = [
  {
    id: 1,
    title: 'CyberShield AI',
    subtitle: 'AI-Powered Cybersecurity Platform',
    description: 'CyberShield AI is an advanced cybersecurity platform designed to detect phishing attacks, malware, and network intrusions using machine learning and real-time threat analysis.',
    image: `${IK_BASE}/project1.png`,
    stack: ['Python', 'Machine Learning', 'React', 'Node.js'],
    features: [
      'Real-time threat detection',
      'Phishing and malware analysis',
      'AI-driven anomaly detection',
      'Security dashboard and analytics',
      'Automated alert system'
    ],
    github: 'https://github.com/VRaghav1806/cybershield.git',
    demo: '#',
    icon: <Shield className="text-primary" />
  },
  {
    id: 2,
    title: 'Loan-Agent',
    subtitle: 'MERN Stack Financial Platform',
    description: 'Loan-Agent is a MERN stack web application that simplifies loan processing by connecting users with loan agents through a streamlined digital platform.',
    image: `${IK_BASE}/project2.png`,
    stack: ['MongoDB', 'Express', 'React', 'Node.js'],
    features: [
      'User authentication',
      'Loan application system',
      'Agent dashboard',
      'Status tracking',
      'Admin management panel'
    ],
    github: 'https://github.com/VRaghav1806/loan_agent.git',
    demo: 'https://loan-agent-omega.vercel.app/',
    icon: <Database className="text-accent" />
  },
  {
    id: 3,
    title: 'UIDAI Aadhaar Analyst',
    subtitle: 'Data-Driven Identity Analytics',
    description: 'A data-driven analytics project developed for the UIDAI Data Hackathon focused on extracting insights from large-scale identity datasets using machine learning.',
    image: `${IK_BASE}/project3.png`,
    stack: ['Python', 'Pandas', 'Scikit-Learn', 'Matplotlib'],
    features: [
      'Data visualization',
      'Predictive analytics',
      'Identity data processing',
      'Insight generation',
      'Secure analytics workflows'
    ],
    github: 'https://github.com/VRaghav1806/UIDAI-Data-Hackathon.git',
    demo: 'https://uidai-data-hackathon.vercel.app/',
    icon: <PieChart className="text-green-400" />
  }
];

const Projects = () => {
  const handleImageError = (e) => {
    const currentSrc = e.target.src;
    const baseUrl = currentSrc.split('?')[0];

    // Simple fallback chain for projects
    if (baseUrl.includes('.png')) {
      e.target.src = baseUrl.replace('.png', '.jpg');
    } else if (baseUrl.includes('.jpg')) {
      e.target.src = baseUrl.replace('.jpg', '.jpeg');
    } else {
      e.target.src = 'https://placehold.co/1280x720/0B0F19/00E5FF?text=Project+Preview+Soon';
    }
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured <span className="text-primary">Projects</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A showcase of my work in AI, Cybersecurity, and Full Stack Development.
          </p>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="flex-1 relative group w-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative overflow-hidden rounded-2xl glass aspect-video bg-white/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={handleImageError}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
                </div>
              </div>

              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                    {project.icon}
                  </div>
                  <h3 className="text-3xl font-bold">{project.title}</h3>
                </div>
                <h4 className="text-primary font-medium">{project.subtitle}</h4>
                <p className="text-slate-400 leading-relaxed text-lg">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map(tech => (
                    <span key={tech} className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-slate-400">
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.features.map(feature => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/50"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-4 pt-4">
                  <a href={project.github} className="btn-primary py-2 px-5 text-sm flex items-center gap-2 transition-all">
                    <Github size={18} />
                    GitHub
                  </a>
                  <a href={project.demo} className="btn-secondary py-2 px-5 text-sm flex items-center gap-2 transition-all">
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

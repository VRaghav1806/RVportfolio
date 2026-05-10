import React from 'react';
import { motion } from 'framer-motion';
import { Mail, FileText, Send } from 'lucide-react';
import { Github, Linkedin } from './Brands';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Let's build <span className="text-primary">something amazing</span> together.</h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                Whether you have a question about my projects, want to collaborate on an AI solution, or just want to say hi, my inbox is always open!
              </p>

              <div className="space-y-6 mb-12">
                <a href="mailto:contact@raghavv.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                    <Mail className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Email</p>
                    <p className="text-lg text-slate-300 group-hover:text-white">raghav.v2024aids@sece.ac.com</p>
                  </div>
                </a>

                <div className="flex gap-4 pt-4">
                  {[
                    { icon: <Linkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/raghav-v-ab4b10328/' },
                    { icon: <Github />, label: 'GitHub', href: 'https://github.com/VRaghav1806' },
                    { icon: <FileText />, label: 'Resume', href: 'https://ik.imagekit.io/Raghav1806/resume.pdf' },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300"
                      title={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:outline-none transition-colors text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:outline-none transition-colors text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:outline-none transition-colors text-white"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Message</label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:outline-none transition-colors text-white resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2 py-4">
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

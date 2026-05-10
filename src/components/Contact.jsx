import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, FileText, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Github, Linkedin } from './Brands';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
    }
  };

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
                <a href="mailto:raghav.v2024aids@sece.ac.com" className="flex items-center gap-4 group">
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
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:outline-none transition-colors text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:outline-none transition-colors text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:outline-none transition-colors text-white"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:outline-none transition-colors text-white resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={status === 'sending'}
                  className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold transition-all duration-300 ${
                    status === 'sending' ? 'bg-primary/20 text-primary cursor-not-allowed' :
                    status === 'success' ? 'bg-green-500/20 text-green-500 border border-green-500/50' :
                    status === 'error' ? 'bg-red-500/20 text-red-500 border border-red-500/50' :
                    'btn-primary'
                  }`}
                >
                  {status === 'idle' && (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                  {status === 'sending' && (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Sending...
                    </>
                  )}
                  {status === 'success' && (
                    <>
                      <CheckCircle size={20} />
                      Message Sent!
                    </>
                  )}
                  {status === 'error' && (
                    <>
                      <AlertCircle size={20} />
                      Failed to Send.
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <p className="text-green-500 text-sm text-center animate-pulse">
                    Thank you! I'll get back to you soon.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-red-500 text-sm text-center">
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

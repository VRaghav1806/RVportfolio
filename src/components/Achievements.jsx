import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Award, Target, Rocket, Maximize2, X, Medal, Star } from 'lucide-react';

// We will try to be smart about the ID as well
const IK_ID = 'Raghav1806';
const IK_BASE = `https://ik.imagekit.io/${IK_ID}`;

const certificateData = [
  { certi: 1, title: "Winners — Freshathon 2024" },
  { certi: 2, title: "Winners — Project Expo 2026" },
  { certi: 3, title: "Finalist — B.A.S.H 9.0" },
  { certi: 4, title: "Finalist — Incepto 2026" },
  { certi: 5, title: "Database Management Systems — NPTEL" },
  { certi: 6, title: "Data Science & AI Master — Udemy" },
  { certi: 7, title: "Mastering Data Structures — Udemy" },
  { certi: 8, title: "Fiestaa — Event Completion" },
  { certi: 99, title: "Linguaskills" },
  { certi: 10, title: "Design Thinking - NPTEL" },
  { certi: 11, title: "LeetCode 50 Days Challenge" },
  { certi: 12, title: "FedX" },
  { certi: 13, title: "Internship - Future Interns" },
  { certi: 14, title: "ET Hackathon 2026 Semifinalist" },
];

const icons = [
  <Trophy className="text-yellow-400" />,
  <Award className="text-slate-300" />,
  <Target className="text-red-400" />,
  <Rocket className="text-primary" />,
  <Medal className="text-orange-400" />,
  <Star className="text-yellow-500" />
];

const colors = [
  { color: 'from-yellow-400/20 to-orange-500/20', borderColor: 'border-yellow-400/30' },
  { color: 'from-slate-400/20 to-slate-600/20', borderColor: 'border-slate-300/30' },
  { color: 'from-red-400/20 to-rose-600/20', borderColor: 'border-red-400/30' },
  { color: 'from-primary/20 to-accent/20', borderColor: 'border-primary/30' }
];

const Achievements = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const getOptimizedUrl = (url) => {
    if (!url) return '';
    const baseUrl = url.split('?')[0];
    if (baseUrl.toLowerCase().endsWith('.pdf')) {
      return `${baseUrl}?tr=w-1200,f-jpg,q-90`;
    }
    return `${baseUrl}?tr=w-800,f-auto,q-80`;
  };

  const handleImageError = (e, certiNum) => {
    const currentSrc = e.target.src;
    const baseUrl = currentSrc.split('?')[0];

    // Fallback chain to handle ALL common issues
    if (baseUrl.includes('.png')) {
      // 1. Try PDF
      e.target.src = getOptimizedUrl(baseUrl.replace('.png', '.pdf'));
    } else if (baseUrl.includes('.pdf')) {
      // 2. Try JPG
      e.target.src = getOptimizedUrl(baseUrl.replace('.pdf', '.jpg'));
    } else if (baseUrl.includes('certi')) {
      // 3. Try without 'i' (cert8)
      e.target.src = getOptimizedUrl(baseUrl.replace('certi', 'cert').replace('.jpg', '.png'));
    } else if (baseUrl.includes(IK_ID)) {
      // 4. Try lowercase ID just in case
      e.target.src = getOptimizedUrl(baseUrl.replace(IK_ID, IK_ID.toLowerCase()));
    } else {
      // 5. Placeholder
      e.target.src = `https://placehold.co/800x600/0B0F19/00E5FF?text=certi${certiNum}+Not+Found`;
    }
  };

  return (
    <section id="achievements" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Milestones & <span className="text-primary">Achievements</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Recognition and awards from various hackathons and competitions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificateData.map((item, idx) => {
            const icon = icons[idx % icons.length];
            const theme = colors[idx % colors.length];
            const initialUrl = `${IK_BASE}/certi${item.certi}.png`;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`rounded-2xl glass border ${theme.borderColor} relative group overflow-hidden flex flex-col h-full`}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
                  <img
                    src={getOptimizedUrl(initialUrl)}
                    alt={item.title}
                    id={`cert-img-${item.certi}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => handleImageError(e, item.certi)}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button
                      onClick={() => {
                        const img = document.getElementById(`cert-img-${item.certi}`);
                        setSelectedImg(img.src);
                      }}
                      className="p-3 rounded-full bg-primary text-background shadow-lg shadow-primary/40"
                    >
                      <Maximize2 size={20} />
                    </button>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4">
                    {icon}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImg.replace('w-800', 'w-1600')}
              className="max-w-full max-h-[90vh] rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Achievements;

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2, BarChart } from 'lucide-react';

const profiles = [
  {
    platform: 'LeetCode',
    maxRating: 1468,
    solved: 223,
    total: 3200, // Approximate total for percentage
    globalRank: '251,937',
    icon: <Code2 className="text-orange-500" />,
    link: '#',
    color: 'bg-orange-500'
  },
  {
    platform: 'SkillRack',
    solved: 880,
    total: 1000, // Approximate total for percentage
    icon: <BarChart className="text-blue-500" />,
    link: '#',
    color: 'bg-blue-500'
  }
];

const CodingProfiles = () => {
  return (
    <section id="coding" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Coding <span className="text-primary">Profiles</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            My progress and rankings on competitive programming platforms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {profiles.map((profile, idx) => (
            <motion.div
              key={profile.platform}
              initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 glass-card"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                    {profile.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{profile.platform}</h3>
                    <a href={profile.link} className="text-sm text-primary flex items-center gap-1 hover:underline">
                      View Profile <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
                {profile.maxRating && (
                  <div className="text-right">
                    <p className="text-xs text-slate-500 uppercase">Max Rating</p>
                    <p className="text-xl font-bold text-primary">{profile.maxRating}</p>
                  </div>
                )}
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-slate-400">Problems Solved</span>
                    <span className="text-sm font-bold">{profile.solved}+</span>
                  </div>
                  <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(profile.solved / profile.total) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className={`h-full ${profile.color} shadow-[0_0_10px_rgba(0,0,0,0.5)]`}
                    ></motion.div>
                  </div>
                </div>

                {profile.globalRank && (
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center">
                    <span className="text-sm text-slate-400">Global Rank</span>
                    <span className="font-mono text-primary font-bold">#{profile.globalRank}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default CodingProfiles;

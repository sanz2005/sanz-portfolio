import { motion } from 'framer-motion';
import { Trophy, Users } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { achievements } from '../data';

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader number="07 / ACHIEVEMENTS" title="Recognition & leadership." />

        <div className="grid md:grid-cols-2 gap-6">
          {/* Academic Awards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="glass-card p-7"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center">
                <Trophy size={18} className="text-amber-400" />
              </div>
              <h3 className="font-display font-semibold text-text-primary">Academic Awards</h3>
            </div>
            <ul className="space-y-4">
              {achievements.academic.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="font-mono text-xs text-amber-400 mt-1 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-text-secondary text-sm leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Community & Leadership */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-7"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-teal-400/10 border border-teal-400/20 flex items-center justify-center">
                <Users size={18} className="text-teal-400" />
              </div>
              <h3 className="font-display font-semibold text-text-primary">Community & Leadership</h3>
            </div>
            <ul className="space-y-4">
              {achievements.community.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="font-mono text-xs text-teal-400 mt-1 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-text-secondary text-sm leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

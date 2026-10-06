import { motion } from 'framer-motion';
import { Code2, BarChart3, BrainCircuit, Sparkles, Library, Wrench } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { skills } from '../data';

const icons = [Code2, BarChart3, BrainCircuit, Sparkles, Library, Wrench];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader number="04 / SKILLS" title="Tools & technologies." />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, i) => {
            const Icon = icons[i] || Code2;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass-card p-6 hover:border-[#c2497a]/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-[#c2497a]/10 border border-[#c2497a]/20 flex items-center justify-center">
                    <Icon size={16} className="text-[#c2497a]" />
                  </div>
                  <h3 className="font-display font-semibold text-sm text-text-primary">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-xs px-3 py-1.5 rounded-lg bg-graphite-700/50 border border-graphite-600 text-text-secondary hover:border-[#c2497a]/40 hover:text-[#e08bab] transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
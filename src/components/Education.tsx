import { motion } from 'framer-motion';
import { GraduationCap, Sparkles, Zap, BookOpen, Database } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { education, languages } from '../data';

const interests = [
  { icon: Sparkles, label: 'Exploring Generative AI, LLMs & Agentic AI' },
  { icon: Database, label: 'Solving real-world problems with data' },
  { icon: BookOpen, label: 'Continuous Learning' },
  { icon: Zap, label: 'Playing Badminton' },
];

export default function Education() {
  return (
    <section id="education" className="relative py-24 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader number="05 / EDUCATION" title="Academic background." />

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Education */}
          <div className="lg:col-span-2 space-y-4">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass-card p-6 hover:border-teal-400/30 transition-colors flex gap-4"
              >
                <div className="w-11 h-11 shrink-0 rounded-xl bg-teal-400/10 border border-teal-400/20 flex items-center justify-center">
                  <GraduationCap size={18} className="text-teal-400" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                    <h3 className="font-display font-semibold text-text-primary text-sm leading-snug">
                      {edu.degree}
                    </h3>
                    <span className="font-mono text-xs text-amber-400 shrink-0">{edu.year}</span>
                  </div>
                  <p className="text-text-secondary text-sm">{edu.institution}</p>
                  <p className="text-text-muted text-xs mt-1">{edu.location}</p>
                  <span className="inline-block mt-3 font-mono text-xs px-2.5 py-1 rounded-md bg-graphite-700/50 border border-graphite-600 text-teal-300">
                    {edu.score}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Languages + Interests */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="glass-card p-6"
            >
              <h3 className="font-mono text-xs text-teal-400 tracking-widest mb-5">LANGUAGES</h3>
              <div className="space-y-4">
                {languages.map((lang) => {
                  const dots = lang.level.toLowerCase().includes('native') ? 5 : 4;
                  return (
                    <div key={lang.name}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm text-text-primary font-medium">{lang.name}</span>
                        <span className="font-mono text-[11px] text-text-muted">{lang.level}</span>
                      </div>
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <span
                            key={idx}
                            className={`h-1.5 flex-1 rounded-full ${
                              idx < dots ? 'bg-teal-400/70' : 'bg-graphite-700'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="glass-card p-6"
            >
              <h3 className="font-mono text-xs text-amber-400 tracking-widest mb-5">INTERESTS</h3>
              <div className="space-y-3.5">
                {interests.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="w-7 h-7 shrink-0 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center mt-0.5">
                        <Icon size={13} className="text-amber-400" />
                      </div>
                      <span className="text-sm text-text-secondary leading-snug">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { experience } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader number="02 / EXPERIENCE" title="Where I've worked." />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 sm:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-teal-400 via-graphite-600 to-transparent" />

          <div className="space-y-10">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-8 sm:pl-14"
              >
                {/* Dot */}
                <div className="absolute left-[-5px] sm:left-[11px] top-2 w-3 h-3 rounded-full bg-teal-400 ring-4 ring-graphite-950" />

                <div className="glass-card p-6 hover:border-teal-400/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-display font-semibold text-lg text-text-primary">
                        {exp.role}
                      </h3>
                      <p className="text-teal-400 text-sm font-medium mt-0.5">{exp.company}</p>
                    </div>
                    <div className="text-left sm:text-right">
                      <span className="font-mono text-xs text-amber-400">{exp.period}</span>
                      <p className="flex items-center gap-1.5 text-xs text-text-muted mt-1 sm:justify-end">
                        <MapPin size={11} /> {exp.location}
                      </p>
                    </div>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Cpu, Database, Brain, Sparkles } from 'lucide-react';
import SectionHeader from './SectionHeader';

const focusAreas = [
  { icon: Sparkles, label: 'Artificial Intelligence' },
  { icon: Brain, label: 'Machine Learning' },
  { icon: Cpu, label: 'Deep Learning' },
  { icon: Database, label: 'Data Analytics' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader number="01 / ABOUT" title="Engineering intelligent systems with data." />

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <p className="text-text-secondary text-base leading-relaxed">
              I'm an Artificial Intelligence & Data Science undergraduate with hands-on experience in building intelligent systems that solve real-world problems. My work spans machine learning, deep learning, LLM-powered applications, Retrieval-Augmented Generation (RAG), predictive analytics, and intelligent automation. I enjoy transforming complex datasets into practical AI solutions that bridge research with real-world applications across healthcare, space technology, road safety, and intelligent systems.
            </p>
            <p className="mt-4 text-text-secondary text-base leading-relaxed">
              Alongside my academic journey, I recently completed a six-month AI/ML internship at Fireblaze Technologies, where I worked on AI-powered applications and intelligent solutions while expanding my expertise in modern AI technologies. My experience includes healthcare AI, satellite mission anomaly detection, predictive analytics, computer vision, RAG systems, and LLM integration, with hands-on involvement in data processing, model development, application integration, testing, and optimization. I'm passionate about building practical AI systems and continuously exploring new technologies to solve meaningful problems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-6"
          >
            <h3 className="font-mono text-xs text-teal-400 tracking-widest mb-4">FOCUS AREAS</h3>
            <div className="grid grid-cols-2 gap-3">
              {focusAreas.map((f, i) => (
                <motion.div
                  key={f.label}
                  animate={{
                    boxShadow: [
                      '0 0 0px rgba(194,73,122,0.3)',
                      '0 0 18px rgba(194,73,122,0.45)',
                      '0 0 0px rgba(194,73,122,0.3)',
                    ],
                    borderColor: [
                      'rgba(194,73,122,0.2)',
                      'rgba(194,73,122,0.5)',
                      'rgba(194,73,122,0.2)',
                    ],
                  }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-graphite-700/40 border"
                >
                  <f.icon size={20} className="text-[#c2497a]" />
                  <span className="text-xs text-text-secondary text-center font-medium">{f.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
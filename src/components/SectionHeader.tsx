import { motion } from 'framer-motion';

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ number, title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="section-number">{number}</span>
        <div className="accent-line" />
      </div>
      <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight">{title}</h2>
      {subtitle && <p className="mt-2 text-text-secondary text-sm max-w-2xl">{subtitle}</p>}
    </motion.div>
  );
}

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Copy, Check } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { projects } from '../data';

const glowColors = ['rgba(236,72,153,', 'rgba(236,72,153,'];

function CopyRow({ label, items }: { label: string; items: string[] }) {
  const [copied, setCopied] = useState(false);
  const text = items.join(' • ');

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard unavailable, silently ignore
    }
  };

  return (
    <div>
      <p className="font-mono text-[9px] tracking-widest text-teal-400/70 mb-1.5">
        {label.toUpperCase()}
      </p>
      <div className="flex items-center justify-between gap-2 rounded-lg border border-graphite-600 bg-graphite-700/30 px-3 py-2">
        <p className="font-mono text-[10.5px] text-white leading-relaxed">{text}</p>
        <button
          onClick={handleCopy}
          className="shrink-0 p-1 rounded-md text-text-muted hover:text-teal-400 hover:bg-white/[0.04] transition-colors"
          aria-label={`Copy ${label}`}
        >
          {copied ? <Check size={13} className="text-teal-400" /> : <Copy size={13} />}
        </button>
      </div>
    </div>
  );
}

function TiltCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, mx: 50, my: 50 });
  const glow = glowColors[index % glowColors.length];

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = x / rect.width;
    const py = y / rect.height;
    setTilt({
      rx: (py - 0.5) * -8,
      ry: (px - 0.5) * 8,
      mx: px * 100,
      my: py * 100,
    });
  };

  const reset = () => setTilt({ rx: 0, ry: 0, mx: 50, my: 50 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative perspective-[1000px]"
    >
      <motion.div
        aria-hidden
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: index * 0.6 }}
        className="absolute -inset-3.5 rounded-[22px] pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, ${glow}0.5 0%, ${glow}0.15 55%, transparent 75%)`,
          filter: 'blur(14px)',
        }}
      />

      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        style={{
          transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
          transformStyle: 'preserve-3d',
        }}
        className="group glass-card p-7 h-full transition-transform duration-200 ease-out hover:border-teal-400/30 relative overflow-hidden block"
      >
        {/* Cursor spotlight */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${tilt.mx}% ${tilt.my}%, rgba(45,212,191,0.08), transparent 60%)`,
          }}
        />

        <div style={{ transform: 'translateZ(40px)' }} className="relative">
          <div className="flex items-start justify-between mb-4">
            <span className="font-mono text-xs text-teal-400">
              {String(index + 1).padStart(2, '0')}
            </span>
            <ArrowUpRight
              size={18}
              className="text-text-muted group-hover:text-teal-400 transition-colors"
            />
          </div>

          <h3 className="font-display font-semibold text-lg text-teal-300 leading-snug mb-3">
            {project.title}
          </h3>

          <p className="text-text-secondary text-sm leading-relaxed mb-5">
            {project.description}
          </p>

          <div className="space-y-3">
            <CopyRow label="Tech Stack" items={project.techStack} />
            <CopyRow label={project.secondaryLabel} items={project.secondary} />
            <CopyRow label="Concepts" items={project.concepts} />
          </div>
        </div>
      </a>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="03 / PROJECTS"
          title="Selected work."
          subtitle="AI-driven systems spanning satellite telemetry, healthcare, and behavioral analytics."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <TiltCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
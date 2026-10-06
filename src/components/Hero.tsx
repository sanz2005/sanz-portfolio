import { useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { profile } from '../data';

const Hero3D = lazy(() => import('./Hero3D'));

function RotatingSubtext() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % profile.rotatingSubtext.length), 2800);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="h-7 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.p
          key={idx}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="font-mono text-sm text-teal-400"
        >
          {profile.rotatingSubtext[idx]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Dot grid texture */}
      <div className="absolute inset-0 bg-dot-grid bg-dot-grid opacity-[0.15] pointer-events-none" />

      {/* 3D scene */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <Hero3D />
        </Suspense>
      </div>

      {/* Gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-graphite-950 via-graphite-950/80 to-transparent pointer-events-none z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-transparent to-graphite-950/40 pointer-events-none z-[1]" />


      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="font-mono text-xs text-text-secondary tracking-widest">
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight"
          >
            Sanz
            <br />
            <span className="text-teal-400">Wadibhasme</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-5"
          >
            <p className="font-display text-lg text-text-primary font-medium">{profile.tagline}</p>
            <div className="mt-2">
              <RotatingSubtext />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 text-text-secondary text-sm sm:text-base leading-relaxed max-w-xl"
          >
            Building AI isn't just about training models—it's about solving meaningful
            problems and creating solutions that improve the way people live and work. I
            enjoy designing intelligent systems that combine Machine Learning, Deep
            Learning, LLMs, and data-driven insights to transform complex challenges into
            practical, scalable, and impactful applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="magnetic-btn bg-teal-400 text-graphite-950 font-semibold hover:bg-teal-300 hover:shadow-[0_0_30px_-5px] hover:shadow-teal-400/50"
            >
              View Projects <ArrowRight size={16} />
            </a>
            <a
              href="/Sanz_Wadibhasme_Resume.pdf"
              download
              target="_blank"
              rel="noreferrer"
              className="magnetic-btn border border-amber-400/40 text-amber-400 hover:bg-amber-400/10"
            >
              <Download size={16} /> Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-3 text-xs font-mono"
          >
            <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-text-muted">
              <MapPin size={12} className="text-teal-400" /> {profile.location}
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-text-muted transition-all hover:border-teal-400/40 hover:bg-teal-400/[0.08] hover:text-teal-300"
            >
              <Mail size={12} className="text-teal-400" /> {profile.email}
            </a>
            <div className="basis-full h-0" />
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-text-muted transition-all hover:border-teal-400/40 hover:bg-teal-400/[0.08] hover:text-teal-300"
            >
              <Github size={12} className="text-teal-400" /> github.com/sanz2005
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-text-muted transition-all hover:border-teal-400/40 hover:bg-teal-400/[0.08] hover:text-teal-300"
            >
              <Linkedin size={12} className="text-teal-400" /> LinkedIn
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] text-text-muted tracking-widest">SCROLL</span>
        <div className="w-px h-10 bg-gradient-to-b from-teal-400 to-transparent" />
      </motion.div>
    </section>
  );
}
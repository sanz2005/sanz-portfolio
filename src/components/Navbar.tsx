import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Command } from 'lucide-react';
import { navLinks, profile } from '../data';

interface NavbarProps {
  onOpenCommand: () => void;
}

export default function Navbar({ onOpenCommand }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-graphite-950/80 backdrop-blur-xl border-b border-graphite-600'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#hero" className="font-display font-bold text-lg tracking-tight">
          <span className="text-text-primary">Sanz</span>
          <span className="text-teal-400">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary hover:text-teal-400 transition-colors duration-200 font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenCommand}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-graphite-600 text-text-secondary hover:border-teal-400/50 hover:text-teal-400 transition-all duration-200 text-xs font-mono"
          >
            <Command size={12} />
            <span>K</span>
          </button>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex magnetic-btn bg-teal-400/10 border border-teal-400/30 text-teal-300 hover:bg-teal-400/20 text-sm"
          >
            GitHub
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-text-primary"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-graphite-900/95 backdrop-blur-xl border-b border-graphite-600"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-text-secondary hover:text-teal-400 transition-colors py-2 font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

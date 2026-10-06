import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, X } from 'lucide-react';
import { navLinks, profile } from '../data';

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
}

const commands = [
  ...navLinks.map((l) => ({ label: l.label, href: l.href, type: 'Navigate' })),
  { label: 'GitHub Profile', href: profile.github, type: 'External' },
  { label: 'LinkedIn Profile', href: profile.linkedin, type: 'External' },
  { label: 'Send Email', href: `mailto:${profile.email}`, type: 'External' },
  { label: 'Call', href: `tel:${profile.phone.replace(/\s/g, '')}`, type: 'External' },
];

export default function CommandPalette({ open, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (open) {
      setQuery('');
      setActive(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActive((a) => Math.min(a + 1, filtered.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActive((a) => Math.max(a - 1, 0));
      } else if (e.key === 'Enter' && filtered[active]) {
        e.preventDefault();
        window.open(filtered[active].href, '_self');
        onClose();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, filtered, active, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh] px-4 bg-graphite-950/70 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.96, y: -10 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.96, y: -10 }}
            transition={{ duration: 0.15 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg glass-card overflow-hidden shadow-2xl"
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-graphite-600">
              <Search size={16} className="text-text-muted" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActive(0);
                }}
                placeholder="Search commands..."
                className="flex-1 bg-transparent outline-none text-sm text-text-primary placeholder:text-text-muted"
              />
              <button onClick={onClose} className="text-text-muted hover:text-text-primary">
                <X size={16} />
              </button>
            </div>
            <div className="max-h-72 overflow-y-auto py-2">
              {filtered.length === 0 && (
                <p className="px-4 py-6 text-sm text-text-muted text-center">No results found.</p>
              )}
              {filtered.map((cmd, i) => (
                <button
                  key={cmd.label}
                  onClick={() => {
                    window.open(cmd.href, '_self');
                    onClose();
                  }}
                  onMouseEnter={() => setActive(i)}
                  className={`w-full flex items-center justify-between px-4 py-2.5 text-left transition-colors ${
                    i === active ? 'bg-teal-400/10' : ''
                  }`}
                >
                  <span className={`text-sm ${i === active ? 'text-teal-300' : 'text-text-primary'}`}>
                    {cmd.label}
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-text-muted">{cmd.type}</span>
                    <ArrowRight size={12} className={i === active ? 'text-teal-400' : 'text-text-muted'} />
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

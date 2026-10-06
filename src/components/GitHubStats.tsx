import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, Star, GitFork, Users, BookOpen } from 'lucide-react';
import { profile } from '../data';

interface Stats {
  public_repos: number;
  followers: number;
  following: number;
}

function CountUp({ end, duration = 1.5 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const stepTime = 16;
    const steps = Math.ceil((duration * 1000) / stepTime);
    const increment = end / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function GitHubStats() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${profile.githubUser}`)
      .then((r) => r.json())
      .then((d) => {
        if (!d.message) {
          setStats({ public_repos: d.public_repos, followers: d.followers, following: d.following });
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const items = [
    { icon: BookOpen, label: 'Repos', value: stats?.public_repos ?? 0 },
    { icon: Users, label: 'Followers', value: stats?.followers ?? 0 },
    { icon: GitFork, label: 'Following', value: stats?.following ?? 0 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="glass-card p-6"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl bg-graphite-700/60 border border-graphite-600 flex items-center justify-center">
          <Github size={18} className="text-text-primary" />
        </div>
        <div>
          <h3 className="font-display font-semibold text-text-primary text-sm">GitHub Stats</h3>
          <p className="font-mono text-xs text-text-muted">@{profile.githubUser}</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center gap-1 p-3 rounded-xl bg-graphite-700/40 border border-graphite-600"
          >
            <item.icon size={16} className="text-teal-400" />
            <span className="font-display font-bold text-xl text-text-primary">
              {loading ? '—' : <CountUp end={item.value} />}
            </span>
            <span className="font-mono text-[10px] text-text-muted">{item.label}</span>
          </div>
        ))}
      </div>

      <a
        href={profile.github}
        target="_blank"
        rel="noreferrer"
        className="mt-4 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-graphite-600 text-text-secondary hover:border-teal-400/40 hover:text-teal-300 transition-colors text-xs font-mono"
      >
        <Star size={12} /> View Profile
      </a>
    </motion.div>
  );
}

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Cloud, Sparkles, ExternalLink, Users, Trophy } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { certifications } from '../data';

function useCountUp(target: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    let frame: number;

    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [active, target, duration]);

  return value;
}

const timeline = [
  {
    year: '2023',
    label: 'Badges',
    detail: 'Machine Learning, Cloud Computing',
    href: 'https://www.skills.google/profile/badges',
  },
  {
    year: '2024',
    label: 'Badges',
    detail: 'Generative AI, Prompt Engineering',
    href: 'https://www.skills.google/profile/badges',
  },
  {
    year: '2025',
    label: 'Gold League',
    detail: 'ML, GenAI, Vertex AI, Cloud Computing',
    href: 'https://www.skills.google/public_profiles/2c4ff008-2790-4b5c-ba81-440fbbf9b8e1',
  },
];

const skillTags = ['Machine Learning', 'Generative AI', 'Vertex AI', 'Cloud Computing', 'Prompt Engineering'];

function CloudBadgesCard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const points = useCountUp(2782, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="glass-card p-7 mt-6 relative overflow-hidden"
    >
      <div className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 rounded-full bg-amber-400/10 blur-3xl" />

      <div className="relative flex flex-col lg:flex-row lg:items-center gap-8">
        <a
          href="https://www.skills.google/public_profiles/2c4ff008-2790-4b5c-ba81-440fbbf9b8e1"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-5 shrink-0 group/main"
        >
          <div className="relative">
            <motion.div
              animate={{ boxShadow: ['0 0 0px rgba(245,166,35,0.4)', '0 0 24px rgba(245,166,35,0.5)', '0 0 0px rgba(245,166,35,0.4)'] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400/20 to-amber-400/5 border border-amber-400/30 flex items-center justify-center transition-colors group-hover/main:border-amber-400/60"
            >
              <Cloud size={26} className="text-amber-400" />
            </motion.div>
            <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-amber-400 flex items-center justify-center">
              <Sparkles size={11} className="text-graphite-950" />
            </span>
          </div>
          <div>
            <p className="font-mono text-[10px] tracking-widest text-amber-400/80 flex items-center gap-1.5">
              GOOGLE CLOUD SKILLS BOOST
              <ExternalLink size={11} />
            </p>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="font-display font-bold text-3xl text-text-primary tabular-nums">
                {points.toLocaleString()}
              </span>
              <span className="text-xs text-text-muted">points · Gold League</span>
            </div>
          </div>
        </a>

        <div className="flex-1 flex flex-col sm:flex-row gap-4 sm:gap-0 sm:items-start relative">
          {timeline.map((t, i) => (
            <div key={t.year} className="flex-1 relative pl-5 sm:pl-0 sm:px-4">
              {i > 0 && (
                <div className="hidden sm:block absolute top-1.5 left-0 w-full h-px bg-graphite-600 -translate-x-1/2" />
              )}

              <a
                href={t.href}
                target="_blank"
                rel="noreferrer"
                className="group/item flex sm:flex-col items-center sm:items-start gap-2 sm:gap-1.5 -m-2 p-2 rounded-lg transition-colors hover:bg-white/[0.03]"
              >
                <span
                  className={`w-3 h-3 rounded-full shrink-0 ${
                    i === timeline.length - 1 ? 'bg-amber-400' : 'bg-teal-400/70'
                  }`}
                />
                <div>
                  <p className="font-mono text-xs text-text-primary font-semibold flex items-center gap-1.5">
                    {t.year} <span className="text-text-muted font-normal">· {t.label}</span>
                    <ExternalLink size={10} className="text-teal-400" />
                  </p>
                  <p className="text-xs text-text-muted mt-0.5 leading-snug">{t.detail}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex flex-wrap gap-2 mt-6 pt-6 border-t border-graphite-700">
        {skillTags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[10px] px-2.5 py-1 rounded-md bg-graphite-700/60 border border-graphite-600 text-text-secondary"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

const devfestTimeline = [
  {
    year: '2023',
    label: 'Attended',
    detail: 'DevFest Nagpur — community talks & networking',
    href: undefined as string | undefined,
  },
  {
    year: '2025',
    label: 'Certified',
    detail: 'DevFest Nagpur — completion certificate',
    href: 'https://drive.google.com/file/d/10XsFKhL_G-C4A2TqAo2YDWfBg7uQysCm/view?usp=sharing' as string | undefined,
  },
];

const devfestTags = ['GDG Community', 'Networking', 'Tech Talks', 'Developer Events'];

function DevFestCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="glass-card p-7 mt-6 relative overflow-hidden"
    >
      <div className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 rounded-full bg-teal-400/10 blur-3xl" />

      <div className="relative flex flex-col lg:flex-row lg:items-center gap-8">
        <div className="flex items-center gap-5 shrink-0">
          <div className="relative">
            <motion.div
              animate={{ boxShadow: ['0 0 0px rgba(45,212,191,0.4)', '0 0 24px rgba(45,212,191,0.5)', '0 0 0px rgba(45,212,191,0.4)'] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-400/20 to-teal-400/5 border border-teal-400/30 flex items-center justify-center"
            >
              <Users size={26} className="text-teal-400" />
            </motion.div>
            <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-teal-400 flex items-center justify-center">
              <Sparkles size={11} className="text-graphite-950" />
            </span>
          </div>
          <div>
            <p className="font-mono text-[10px] tracking-widest text-teal-400/80">
              GDG DEVFEST NAGPUR
            </p>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="font-display font-bold text-3xl text-text-primary">2×</span>
              <span className="text-xs text-text-muted">events · Community member</span>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col sm:flex-row gap-4 sm:gap-0 sm:items-start relative">
          {devfestTimeline.map((t, i) => {
            const content = (
              <>
                <span
                  className={`w-3 h-3 rounded-full shrink-0 ${
                    i === devfestTimeline.length - 1 ? 'bg-teal-400' : 'bg-teal-400/50'
                  }`}
                />
                <div>
                  <p className="font-mono text-xs text-text-primary font-semibold flex items-center gap-1.5">
                    {t.year} <span className="text-text-muted font-normal">· {t.label}</span>
                    {t.href && (
                      <ExternalLink size={10} className="text-teal-400" />
                    )}
                  </p>
                  <p className="text-xs text-text-muted mt-0.5 leading-snug">{t.detail}</p>
                </div>
              </>
            );

            return (
              <div key={t.year} className="flex-1 relative pl-5 sm:pl-0 sm:px-4">
                {i > 0 && (
                  <div className="hidden sm:block absolute top-1.5 left-0 w-full h-px bg-graphite-600 -translate-x-1/2" />
                )}
                {t.href ? (
                  <a
                    href={t.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group/item flex sm:flex-col items-center sm:items-start gap-2 sm:gap-1.5 -m-2 p-2 rounded-lg transition-colors hover:bg-white/[0.03]"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="flex sm:flex-col items-center sm:items-start gap-2 sm:gap-1.5 -m-2 p-2 rounded-lg opacity-80">
                    {content}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative flex flex-wrap gap-2 mt-6 pt-6 border-t border-graphite-700">
        {devfestTags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[10px] px-2.5 py-1 rounded-md bg-graphite-700/60 border border-graphite-600 text-text-secondary"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

const hackathonTimeline = [
  {
    year: '2026',
    label: 'Certified',
    detail: 'TECH 4 GOOD Hackathon — participation certificate',
    href: 'https://drive.google.com/file/d/1RiApf2i2fAW1J_fOamHRVoyavCkGlheN/view?usp=sharing' as string | undefined,
  },
];

const hackathonTags = ['Hackathon', 'Problem Solving', 'Innovation'];

function HackathonCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="glass-card p-7 mt-6 relative overflow-hidden"
    >
      <div className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 rounded-full bg-amber-400/10 blur-3xl" />

      <div className="relative flex flex-col lg:flex-row lg:items-center gap-8">
        <a
          href={hackathonTimeline[0].href}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-5 shrink-0 group/main"
        >
          <div className="relative">
            <motion.div
              animate={{ boxShadow: ['0 0 0px rgba(245,166,35,0.4)', '0 0 24px rgba(245,166,35,0.5)', '0 0 0px rgba(245,166,35,0.4)'] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400/20 to-amber-400/5 border border-amber-400/30 flex items-center justify-center transition-colors group-hover/main:border-amber-400/60"
            >
              <Trophy size={26} className="text-amber-400" />
            </motion.div>
            <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-amber-400 flex items-center justify-center">
              <Sparkles size={11} className="text-graphite-950" />
            </span>
          </div>
          <div>
            <p className="font-mono text-[10px] tracking-widest text-amber-400/80 flex items-center gap-1.5">
              TECH 4 GOOD HACKATHON
              <ExternalLink size={11} />
            </p>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="font-display font-bold text-3xl text-text-primary">2026</span>
              <span className="text-xs text-text-muted">Certified participant</span>
            </div>
          </div>
        </a>

        <div className="flex-1 flex flex-col sm:flex-row gap-4 sm:gap-0 sm:items-start relative">
          {hackathonTimeline.map((t) => (
            <div key={t.year} className="flex-1 relative pl-5 sm:pl-0 sm:px-4">
              <a
                href={t.href}
                target="_blank"
                rel="noreferrer"
                className="group/item flex sm:flex-col items-center sm:items-start gap-2 sm:gap-1.5 -m-2 p-2 rounded-lg transition-colors hover:bg-white/[0.03]"
              >
                <span className="w-3 h-3 rounded-full shrink-0 bg-amber-400" />
                <div>
                  <p className="font-mono text-xs text-text-primary font-semibold flex items-center gap-1.5">
                    {t.year} <span className="text-text-muted font-normal">· {t.label}</span>
                    <ExternalLink size={10} className="text-amber-400" />
                  </p>
                  <p className="text-xs text-text-muted mt-0.5 leading-snug">{t.detail}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex flex-wrap gap-2 mt-6 pt-6 border-t border-graphite-700">
        {hackathonTags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[10px] px-2.5 py-1 rounded-md bg-graphite-700/60 border border-graphite-600 text-text-secondary"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
function FallingConnector({ colors }: { colors: [string, string, string] }) {
  return (
    <div className="relative h-16 flex justify-center overflow-hidden">
      <div className="w-px h-full bg-gradient-to-b from-graphite-600 to-transparent" />
      {colors.map((color, i) => (
        <motion.span
          key={i}
          className={`absolute top-0 h-2.5 w-2.5 rounded-full ${color} shadow-[0_0_10px_2px]`}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 72, opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            delay: i * 0.5,
            ease: 'easeIn',
          }}
        />
      ))}
    </div>
  );
}
export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader number="06 / CERTIFICATIONS" title="Certifications & training." />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.name}
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group glass-card p-6 hover:border-amber-400/30 transition-colors flex gap-4"
            >
              <div className="w-11 h-11 shrink-0 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center">
                <Award size={18} className="text-amber-400" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-text-primary font-medium leading-snug flex items-start gap-1.5">
                  {cert.name}
                    <ExternalLink
                    size={12}
                    className="shrink-0 mt-0.5 text-amber-400"
                  />
                </p>
                <p className="text-xs text-text-muted mt-1.5 font-mono">
                  {cert.issuer} · {cert.year}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        <FallingConnector colors={['bg-teal-400', 'bg-teal-400', 'bg-amber-400']} />

        <CloudBadgesCard />
        <FallingConnector colors={['bg-amber-400', 'bg-teal-400', 'bg-teal-400']} />

        <DevFestCard />
        <FallingConnector colors={['bg-teal-400', 'bg-teal-400', 'bg-amber-400']} />

        <HackathonCard />
      </div>
    </section>
  );
}

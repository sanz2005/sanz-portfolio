import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Check } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { profile } from '../data';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n---\nFrom: ${form.name}\nEmail: ${form.email}`
    );
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      profile.email
    )}&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
    setStatus('sent');
    setTimeout(() => {
      setStatus('idle');
      setForm({ name: '', email: '', message: '' });
    }, 2500);
  };

  const contactItems = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { icon: MapPin, label: 'Location', value: profile.location, href: null },
    { icon: Linkedin, label: 'LinkedIn', value: 'sanz-wadibhasme', href: profile.linkedin },
    { icon: Github, label: 'GitHub', value: 'sanz2005', href: profile.github },
  ];

  return (
    <section id="contact" className="relative py-24 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader number="08 / CONTACT" title="Let's connect." />

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <p className="text-text-secondary text-sm leading-relaxed mb-2">
              Open to internships, collaborations, and conversations about AI, machine learning, and
              data-driven problem solving. Reach out through any channel below.
            </p>

            <div className="space-y-3">
              {contactItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-4 rounded-xl bg-graphite-800/40 border border-graphite-600 hover:border-teal-400/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-teal-400/10 border border-teal-400/20 flex items-center justify-center shrink-0">
                    <item.icon size={16} className="text-teal-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] text-text-muted tracking-widest">{item.label.toUpperCase()}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel="noreferrer"
                        className="text-sm text-text-primary hover:text-teal-300 transition-colors truncate block"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-text-primary">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-7"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="font-mono text-xs text-text-secondary mb-2 block">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-graphite-700/40 border border-graphite-600 rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-teal-400/50 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="font-mono text-xs text-text-secondary mb-2 block">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-graphite-700/40 border border-graphite-600 rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-teal-400/50 transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="font-mono text-xs text-text-secondary mb-2 block">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-graphite-700/40 border border-graphite-600 rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-teal-400/50 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sent'}
                className="w-full magnetic-btn bg-teal-400 text-graphite-950 font-semibold hover:bg-teal-300 disabled:opacity-70"
              >
                {status === 'sent' ? (
                  <>
                    <Check size={16} /> Opening your email app...
                  </>
                ) : (
                  <>
                    <Send size={16} /> Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
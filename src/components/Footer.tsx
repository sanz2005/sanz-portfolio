import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { profile } from '../data';

export default function Footer() {
  return (
    <footer className="border-t border-graphite-600 bg-graphite-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-display font-bold text-lg">
              <span className="text-text-primary">Sanz</span>
              <span className="text-teal-400">.</span>
            </span>
            <span className="font-mono text-xs text-text-muted">AI / ML Engineer</span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="text-text-secondary hover:text-teal-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-text-secondary hover:text-teal-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-text-secondary hover:text-teal-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, '')}`}
              className="text-text-secondary hover:text-teal-400 transition-colors"
              aria-label="Phone"
            >
              <Phone size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-graphite-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-xs text-text-muted">
            © {new Date().getFullYear()} Sanz Wadibhasme. All rights reserved.
          </p>
          <p className="font-mono text-xs text-text-muted flex items-center gap-1.5">
            <MapPin size={11} /> {profile.location}
          </p>
        </div>
      </div>
    </footer>
  );
}

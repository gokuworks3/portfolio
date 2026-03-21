import { Mail, Phone, ArrowUp } from 'lucide-react';
import brandLogo from '../assets/brand-logo.png';
import { BRAND, PROFILE } from '../data/siteContent';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-800 bg-slate-900">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />

      <div className="section-container py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
            <img src={brandLogo} alt={`${BRAND.name} logo`} className="h-14 w-20 rounded-xl border border-slate-700 object-cover shadow-lg" loading="lazy" />
            <div className="text-center sm:text-left">
              <p className="text-lg font-bold text-white">{BRAND.name}</p>
              <p className="text-sm font-medium text-brand-400">{BRAND.tagline}</p>
              <p className="mt-1 text-xs text-slate-400">Founder: {PROFILE.name}</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 sm:items-end">
            <div className="flex items-center gap-3">
              <a
                href={`mailto:${PROFILE.email}`}
                aria-label="Email"
                className="tap-target flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-800 text-slate-300 transition-all hover:-translate-y-0.5 hover:border-brand-500 hover:text-brand-400 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                <Mail size={18} />
              </a>
              <a
                href={`tel:${PROFILE.phoneHref}`}
                aria-label="Phone"
                className="tap-target flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-800 text-slate-300 transition-all hover:-translate-y-0.5 hover:border-brand-500 hover:text-brand-400 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                <Phone size={18} />
              </a>
              <button
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className="tap-target flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-gradient-to-br from-brand-600 to-accent-600 text-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-500/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                <ArrowUp size={18} />
              </button>
            </div>
            <p className="text-xs text-slate-400">{PROFILE.email} | {PROFILE.phoneDisplay}</p>
            <p className="text-xs text-slate-500">© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

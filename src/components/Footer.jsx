import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import brandLogo from '../assets/brand-logo.png';

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
            <img src={brandLogo} alt="Goku Works logo" className="h-14 w-auto rounded-lg object-contain shadow-lg" />
            <div className="text-center sm:text-left">
              <p className="text-lg font-bold text-white">Gopalakrishan M</p>
              <p className="text-sm font-medium text-brand-400">Web Developer</p>
              <p className="mt-1 text-xs text-slate-400">Building websites that grow your business</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 sm:items-end">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/gokuworks3"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-800 text-slate-300 transition-all hover:-translate-y-0.5 hover:border-brand-500 hover:text-brand-400 hover:shadow-lg"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/goku-works-32a9a73b7/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-800 text-slate-300 transition-all hover:-translate-y-0.5 hover:border-brand-500 hover:text-brand-400 hover:shadow-lg"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:gokuworks3@gmail.com"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-800 text-slate-300 transition-all hover:-translate-y-0.5 hover:border-brand-500 hover:text-brand-400 hover:shadow-lg"
              >
                <Mail size={18} />
              </a>
              <button
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-gradient-to-br from-brand-600 to-accent-600 text-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-500/25"
              >
                <ArrowUp size={18} />
              </button>
            </div>
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} Gopalakrishan M. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

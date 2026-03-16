import { Github, Linkedin } from 'lucide-react';

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900">
      <div className="section-container flex flex-col items-center justify-between gap-4 py-8 text-center sm:flex-row sm:text-left">
        <div>
          <p className="text-lg font-semibold text-white">Goku Works</p>
          <p className="mt-1 text-sm text-slate-300">© 2025 Goku Works. All rights reserved.</p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/gokuworks3"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-slate-700 bg-slate-800 p-2.5 text-slate-100 transition-colors hover:border-brand-400 hover:text-brand-300"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/goku-works-32a9a73b7/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-slate-700 bg-slate-800 p-2.5 text-slate-100 transition-colors hover:border-brand-400 hover:text-brand-300"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

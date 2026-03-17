import { useEffect, useState } from 'react';
import brandIcon from '../assets/brand-icon.png';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' }
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className={`mx-auto mt-3 w-[calc(100%-1.5rem)] max-w-6xl rounded-2xl border transition-all duration-300 sm:w-[calc(100%-2.5rem)] ${
          isScrolled
            ? 'border-slate-200 bg-white/86 shadow-soft backdrop-blur-xl'
            : 'border-white/20 bg-white/50 backdrop-blur-lg'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 sm:px-5">
          <a href="#home" className="flex items-center gap-3 text-base font-extrabold tracking-wide text-slate-900 sm:text-lg">
            <span className="inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-slate-950 p-0.5 shadow-soft">
              <img src={brandIcon} alt="Goku Works logo" className="h-full w-full object-contain" />
            </span>
            Goku Works
            <span className="hidden h-2.5 w-2.5 animate-pulseSoft rounded-full bg-accent-500 sm:inline-flex" />
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-md px-2.5 py-1.5 text-sm font-semibold text-slate-600 transition-all duration-200 hover:bg-slate-100 hover:text-brand-700"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              className="inline-flex items-center rounded-lg bg-gradient-to-r from-brand-600 to-accent-600 px-4 py-2 text-sm font-semibold text-white shadow-emerald transition-all hover:from-brand-500 hover:to-accent-500"
            >
              Start Project
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="relative h-10 w-10 rounded-lg border border-slate-300 text-slate-700 transition hover:border-brand-500 hover:text-brand-700 md:hidden"
          >
            <span
              className={`absolute left-2.5 top-3.5 h-0.5 w-5 bg-current transition-transform duration-300 ${
                isOpen ? 'translate-y-[6px] rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-2.5 top-5.5 h-0.5 w-5 bg-current transition-opacity duration-200 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-2.5 top-7.5 h-0.5 w-5 bg-current transition-transform duration-300 ${
                isOpen ? '-translate-y-[6px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>

        <div
          className={`grid overflow-hidden border-t border-slate-200 transition-all duration-300 md:hidden ${
            isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="min-h-0">
            <div className="space-y-1 bg-white/90 p-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={handleNavClick}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-brand-700"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

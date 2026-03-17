import { useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
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
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);

      // Detect active section
      const sections = navItems.map(item => item.href.replace('#', ''));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className={`mx-auto mt-4 w-[calc(100%-2rem)] max-w-5xl rounded-2xl border transition-all duration-500 sm:w-[calc(100%-3rem)] ${
          isScrolled
            ? 'border-slate-200/60 bg-white/95 shadow-xl shadow-slate-900/10 backdrop-blur-xl'
            : 'border-white/40 bg-white/70 backdrop-blur-lg'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-2.5 sm:px-6">
          {/* Logo */}
          <a href="#home" className="group flex items-center gap-3 transition-transform hover:scale-[1.02]">
            <div className="relative">
              <span className="inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 to-slate-700 p-1 shadow-lg ring-2 ring-brand-500/20">
                <img src={brandIcon} alt="Goku Works logo" className="h-full w-full object-contain" />
              </span>
              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-accent-500">
                <span className="absolute inset-0 animate-ping rounded-full bg-accent-400 opacity-75" />
              </span>
            </div>
            <div className="hidden sm:block">
              <p className="text-lg font-extrabold text-slate-900">Goku Works</p>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-brand-600">Web Developer</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative rounded-lg px-4 py-2 text-sm font-bold transition-all duration-200 ${
                    isActive
                      ? 'text-brand-700'
                      : 'text-slate-600 hover:text-brand-700'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-500 to-accent-500" />
                  )}
                </a>
              );
            })}

            <a
              href="#contact"
              className="group ml-4 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-slate-900 to-slate-800 px-5 py-2.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:from-brand-600 hover:to-accent-600 hover:shadow-xl hover:shadow-brand-500/25"
            >
              <Sparkles size={14} className="opacity-80" />
              Start Project
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-all hover:border-brand-400 hover:text-brand-700 md:hidden"
          >
            <div className="flex h-5 w-5 flex-col items-center justify-center gap-1">
              <span
                className={`h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  isOpen ? 'translate-y-1.5 rotate-45' : ''
                }`}
              />
              <span
                className={`h-0.5 w-5 rounded-full bg-current transition-all duration-200 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  isOpen ? '-translate-y-1.5 -rotate-45' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`grid overflow-hidden transition-all duration-300 md:hidden ${
            isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="min-h-0">
            <div className="border-t border-slate-100 bg-white/98 p-4">
              <div className="space-y-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.replace('#', '');
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={handleNavClick}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-bold transition-colors ${
                        isActive
                          ? 'bg-brand-50 text-brand-700'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {item.label}
                      {isActive && <span className="h-2 w-2 rounded-full bg-brand-500" />}
                    </a>
                  );
                })}
              </div>
              <a
                href="#contact"
                onClick={handleNavClick}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-slate-900 to-slate-800 px-4 py-3.5 text-sm font-bold text-white shadow-lg"
              >
                <Sparkles size={14} />
                Start Project
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

import { useEffect, useState } from 'react';
import { ArrowRight, Mail, Menu, Phone, X } from 'lucide-react';
import brandLogo from '../assets/brand-logo.png';
import { BRAND, PROFILE } from '../data/siteContent';

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

      const sections = navItems.map((item) => item.href.replace('#', ''));
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

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const handleNavClick = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`hidden border-b md:block ${
          isScrolled ? 'border-slate-200/80 bg-white/90 backdrop-blur' : 'border-slate-200/50 bg-white/70 backdrop-blur'
        }`}
      >
        <div className="section-container flex h-10 items-center justify-between text-xs font-semibold text-slate-600">
          <p>{BRAND.tagline}</p>
          <div className="flex items-center gap-4">
            <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-1.5 transition-colors hover:text-brand-700">
              <Mail size={13} />
              {PROFILE.email}
            </a>
            <a href={`tel:${PROFILE.phoneHref}`} className="inline-flex items-center gap-1.5 transition-colors hover:text-brand-700">
              <Phone size={13} />
              {PROFILE.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <nav
        className={`border-b transition-all duration-300 ${
          isScrolled
            ? 'border-slate-200/90 bg-white/97 shadow-lg shadow-slate-900/5 backdrop-blur'
            : 'border-slate-200/70 bg-white/92 backdrop-blur'
        }`}
      >
        <div className="section-container flex h-16 items-center justify-between sm:h-20">
          <a href="#home" className="flex max-w-[70%] items-center gap-3" onClick={handleNavClick}>
            <img src={brandLogo} alt={`${BRAND.name} logo`} className="h-10 w-14 rounded-lg border border-slate-200 object-cover shadow-sm sm:h-11 sm:w-16" loading="eager" />
            <div>
              <p className="text-base font-extrabold text-slate-900 sm:text-lg">{BRAND.name}</p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500 sm:text-[11px]">{BRAND.tagline}</p>
            </div>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`inline-flex min-h-11 items-center rounded-lg px-3 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 ${
                    isActive ? 'bg-brand-50 text-brand-700' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <a href="#contact" className="hidden min-h-11 items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 md:inline-flex">
              Get Started
              <ArrowRight size={14} />
            </a>

            <button
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((prev) => !prev)}
              className="tap-target flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm transition-colors hover:border-brand-400 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 lg:hidden"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 z-40 lg:hidden ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!isOpen}>
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setIsOpen(false)}
          className={`absolute inset-0 bg-slate-900/35 transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <aside
          className={`absolute right-0 top-0 h-full w-[min(20rem,100vw)] border-l border-slate-200 bg-white shadow-2xl transition-transform duration-300 ease-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex h-16 items-center justify-between border-b border-slate-200 px-4">
            <p className="text-sm font-bold text-slate-900">Menu</p>
            <button
              type="button"
              aria-label="Close navigation"
              onClick={() => setIsOpen(false)}
              className="tap-target flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition-colors hover:border-brand-300 hover:text-brand-700"
            >
              <X size={18} />
            </button>
          </div>

          <div className="space-y-1 p-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={handleNavClick}
                  className={`flex min-h-11 items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 ${
                    isActive ? 'bg-brand-50 text-brand-700' : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                  {isActive && <span className="h-2 w-2 rounded-full bg-brand-500" />}
                </a>
              );
            })}

            <a
              href="#contact"
              onClick={handleNavClick}
              className="btn-accent mt-3 flex w-full"
            >
              Start Project
              <ArrowRight size={14} />
            </a>

            <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-600">
              <p className="font-semibold text-slate-800">Quick Contact</p>
              <a href={`tel:${PROFILE.phoneHref}`} onClick={handleNavClick} className="mt-2 block text-slate-700 hover:text-brand-700">
                {PROFILE.phoneDisplay}
              </a>
              <a href={`mailto:${PROFILE.email}`} onClick={handleNavClick} className="block text-slate-700 hover:text-brand-700">
                {PROFILE.email}
              </a>
              <a href={`https://wa.me/${PROFILE.whatsappNumber}`} target="_blank" rel="noreferrer" className="mt-3 inline-flex min-h-11 items-center justify-center rounded-lg border border-emerald-300 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                WhatsApp Chat
              </a>
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}

export default Navbar;

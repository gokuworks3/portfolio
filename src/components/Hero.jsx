import { ArrowRight, MessageCircleMore } from 'lucide-react';

function Hero() {
  return (
    <section id="home" className="section-container relative scroll-mt-28 pb-14 pt-36 sm:pb-16 sm:pt-40 lg:pb-20">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div data-reveal="left">
          <p className="mb-4 inline-flex rounded-full border border-brand-600/20 bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
            Freelance Web Developer
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Hi, I'm <span className="gradient-text">Gokul</span>
          </h1>
          <p className="mt-5 text-lg font-semibold text-brand-700 sm:text-xl">
            I build modern websites for small businesses
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            I create fast, responsive, and visually attractive websites designed to help restaurants, gyms,
            hotels, and local businesses grow their online presence.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 sm:mt-10">
            <a href="#projects" className="btn-accent">
              View Projects
              <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-ghost">
              Contact Me
              <MessageCircleMore size={16} />
            </a>
          </div>

          <div className="mt-8 grid max-w-md grid-cols-2 gap-3 sm:mt-10">
            <div className="surface-card p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Delivery</p>
              <p className="mt-1 text-sm font-semibold text-slate-800">Fast Turnaround</p>
            </div>
            <div className="surface-card p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Responsive</p>
              <p className="mt-1 text-sm font-semibold text-slate-800">Mobile-First Build</p>
            </div>
          </div>
        </div>

        <div data-reveal="right" className="relative">
          <div className="absolute -left-10 -top-12 h-24 w-24 rounded-full bg-brand-300/55 blur-2xl" />
          <div className="absolute -bottom-8 -right-4 h-28 w-28 rounded-full bg-accent-300/55 blur-2xl" />

          <div className="absolute -right-3 top-5 hidden animate-float rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-soft sm:block">
            100% Responsive
          </div>
          <div className="absolute -left-5 bottom-8 hidden animate-float rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-soft sm:block [animation-delay:1s]">
            Fast Delivery
          </div>

          <div className="relative rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-card backdrop-blur-sm">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">What I Deliver</p>
              <ul className="mt-5 space-y-4 text-sm text-slate-700 sm:text-base">
                <li className="rounded-xl border border-slate-200 bg-white px-4 py-3">
                  Responsive websites that look great on every device.
                </li>
                <li className="rounded-xl border border-slate-200 bg-white px-4 py-3">
                  Clean, conversion-focused design for local businesses.
                </li>
                <li className="rounded-xl border border-slate-200 bg-white px-4 py-3">
                  Performance-first development with modern frontend tools.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

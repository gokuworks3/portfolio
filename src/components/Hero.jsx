import { useState, useEffect, useRef } from 'react';
import { ArrowRight, MessageCircleMore, CheckCircle2, Shield, Sparkles, Zap, Clock, Award } from 'lucide-react';
import profilePhoto from '../assets/profile.jpg';
import { BRAND, PRICING_OPTIONS, PROFILE } from '../data/siteContent';

const techStack = ['React', 'Tailwind CSS', 'JavaScript', 'Vite'];

const stats = [
  { value: 4, suffix: '+', label: 'Live Demos', icon: Award },
  { value: 100, suffix: '%', label: 'Responsive', icon: Zap },
  { value: 24, prefix: '<', suffix: 'h', label: 'Response', icon: Clock }
];

const niches = ['restaurants', 'gyms', 'hotels', 'photographers', 'local businesses'];
const STARTING_PRICE = PRICING_OPTIONS[1].price;

function useCountUp(end, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          animate();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return { count, ref };
}

function TypeWriter({ words, className }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < word.length) {
          setCurrentText(word.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-blink">|</span>
    </span>
  );
}

function StatCard({ stat }) {
  const { count, ref } = useCountUp(stat.value, 1500);
  const Icon = stat.icon;
  return (
    <div ref={ref} className="surface-card group relative overflow-hidden p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
      <div className="absolute -right-2 -top-2 text-brand-100 transition-colors group-hover:text-brand-200">
        <Icon size={40} />
      </div>
      <p className="relative text-2xl font-extrabold text-slate-900 sm:text-3xl">
        {stat.prefix}{count}{stat.suffix}
      </p>
      <p className="relative mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">{stat.label}</p>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="section-container relative scroll-mt-28 pb-14 pt-32 sm:pb-16 sm:pt-36 lg:pb-20 lg:pt-40">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div data-reveal="left">
          <div className="mb-5 flex flex-wrap gap-2">
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-600/20 bg-brand-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-brand-700 shadow-sm">
              {BRAND.name}
            </p>
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for New Projects
            </p>
            <p className="inline-flex items-center gap-1.5 rounded-full border border-amber-300 bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-700 shadow-sm">
              <Sparkles size={12} />
              Plans from {STARTING_PRICE}
            </p>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            {BRAND.name} builds{' '}
            <span className="relative">
              <span className="gradient-text">high-converting websites</span>
              <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-to-r from-brand-500 to-accent-500 opacity-60" />
            </span>
          </h1>
          <p className="mt-5 text-base font-semibold text-slate-700 sm:text-xl">
            Founded by {PROFILE.name}, we build websites for{' '}
            <TypeWriter words={niches} className="text-brand-600" />
          </p>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 sm:leading-8">
            {PROFILE.heroHeadline}
          </p>

          <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap sm:items-center">
            <a href="#projects" className="btn-accent btn-magnetic group w-full shadow-lg shadow-brand-500/25 sm:w-auto">
              View Portfolio
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#pricing" className="btn-ghost btn-magnetic group w-full sm:w-auto">
              View Pricing
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href={`https://wa.me/${PROFILE.whatsappNumber}`} target="_blank" rel="noreferrer" className="btn-primary btn-magnetic group w-full sm:w-auto">
              WhatsApp Me
              <MessageCircleMore size={16} className="transition-transform group-hover:scale-110" />
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/80 px-4 py-2 shadow-sm">
              <Shield size={16} className="text-emerald-600" />
              <span className="text-sm font-bold text-emerald-700">
                100% Satisfaction Guaranteed
              </span>
            </div>
            <a href={`tel:${PROFILE.phoneHref}`} className="inline-flex min-h-11 items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:border-brand-300 hover:text-brand-700">
              {PROFILE.phoneDisplay}
            </a>
            <a href={`mailto:${PROFILE.email}`} className="inline-flex min-h-11 max-w-full items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold break-all text-slate-700 shadow-sm transition-colors hover:border-brand-300 hover:text-brand-700 sm:text-sm">
              {PROFILE.email}
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="mr-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">Tech Stack</span>
            {techStack.map((tech) => (
              <span key={tech} className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-bold text-slate-600 shadow-sm transition-all hover:border-brand-300 hover:text-brand-700">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-6 grid max-w-sm grid-cols-3 gap-3">
            {stats.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </div>
        </div>

        <div data-reveal="right" className="relative">
          <div className="absolute -left-10 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-brand-300/50 to-brand-400/30 blur-3xl" />
          <div className="absolute -bottom-8 -right-4 h-36 w-36 rounded-full bg-gradient-to-br from-accent-300/50 to-accent-400/30 blur-3xl" />

          <div className="absolute -right-3 top-5 z-20 hidden animate-float rounded-xl border border-brand-200 bg-white px-3 py-2 shadow-lg sm:block">
            <span className="flex items-center gap-1.5 text-xs font-bold text-brand-700">
              <Zap size={12} className="text-brand-500" />
              100% Responsive
            </span>
          </div>
          <div className="absolute -left-5 bottom-8 z-20 hidden animate-float rounded-xl border border-accent-200 bg-white px-3 py-2 shadow-lg sm:block [animation-delay:1s]">
            <span className="flex items-center gap-1.5 text-xs font-bold text-accent-700">
              <Clock size={12} className="text-accent-500" />
              Fast Delivery
            </span>
          </div>

          <div className="relative rounded-3xl border border-slate-200 bg-white/95 p-5 shadow-card backdrop-blur-sm sm:p-6">
            <div className="rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-5 sm:p-6">
              <div className="mb-4 flex items-center gap-3">
                <img src={profilePhoto} alt={`${PROFILE.name} profile`} className="h-12 w-12 rounded-xl border border-brand-200 object-cover" loading="eager" fetchPriority="high" />
                <div>
                  <p className="text-sm font-bold text-slate-900">{PROFILE.name}</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">{PROFILE.role} · {BRAND.name}</p>
                </div>
              </div>

              <p className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-brand-700">
                <Award size={16} />
                Project Promise
              </p>
              <ul className="space-y-3 text-sm text-slate-700">
                {[
                  'Responsive layout that works on all devices',
                  'Fast-loading pages optimized for speed',
                  'Modern, clean presentation that builds trust',
                  `Transparent plans from ${STARTING_PRICE}`,
                  '30 days free support after launch'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white px-4 py-3 shadow-sm transition-all hover:border-brand-200 hover:shadow-md">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent-500" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

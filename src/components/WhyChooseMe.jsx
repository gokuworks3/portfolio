import { Zap, Shield, Clock, HeartHandshake } from 'lucide-react';
import SectionHeading from './SectionHeading';

const revealDelayClasses = [
  '[transition-delay:0ms]',
  '[transition-delay:80ms]',
  '[transition-delay:160ms]',
  '[transition-delay:240ms]'
];

const values = [
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Most projects delivered within 1-2 weeks, not months.',
    stat: '7-14',
    statLabel: 'days',
    gradient: 'from-amber-500 to-orange-500'
  },
  {
    icon: Shield,
    title: 'Satisfaction Guaranteed',
    description: 'Unlimited revisions until you love it. Your success is my priority.',
    stat: '100',
    statLabel: '%',
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    icon: Clock,
    title: 'Quick Response',
    description: 'Direct communication. No middlemen. Quick response guaranteed.',
    stat: '<24',
    statLabel: 'hours',
    gradient: 'from-brand-500 to-cyan-500'
  },
  {
    icon: HeartHandshake,
    title: 'Free Support',
    description: '30 days of free support after launch for any adjustments needed.',
    stat: '30',
    statLabel: 'days',
    gradient: 'from-violet-500 to-purple-500'
  }
];

function WhyChooseMe() {
  return (
    <section className="section-spacing section-container">
      <SectionHeading
        eyebrow="Why Work With Me"
        title="Built Different. Built Better."
        description="Working with me is simple, transparent, and stress-free. Here's what sets me apart."
        centered
      />

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((value, index) => (
          <div
            key={value.title}
            data-reveal="up"
            className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-card sm:p-6 ${revealDelayClasses[index % revealDelayClasses.length]}`}
          >
            <div className={`absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-br ${value.gradient} opacity-10 blur-xl transition-opacity group-hover:opacity-20`} />

            <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${value.gradient} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}>
              <value.icon size={24} />
            </div>

            <div className="mt-4">
              <span className="text-3xl font-extrabold text-slate-900">{value.stat}</span>
              <span className="ml-1 text-sm font-bold text-slate-500">{value.statLabel}</span>
            </div>

            <h3 className="mt-2 text-base font-bold text-slate-900">{value.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseMe;

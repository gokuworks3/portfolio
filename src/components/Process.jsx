import { MessageCircle, PenTool, Code2, Rocket, ArrowRight } from 'lucide-react';
import SectionHeading from './SectionHeading';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We discuss your goals, audience, and features to plan your ideal website.',
    icon: MessageCircle,
    gradient: 'from-brand-500 to-cyan-500'
  },
  {
    number: '02',
    title: 'Design',
    description: 'I create a conversion-focused layout. You approve before coding begins.',
    icon: PenTool,
    gradient: 'from-violet-500 to-purple-500'
  },
  {
    number: '03',
    title: 'Development',
    description: 'Built with React & Tailwind for speed and performance. Custom code, no templates.',
    icon: Code2,
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    number: '04',
    title: 'Launch',
    description: 'Final review, tweaks, and your site goes live with 30 days free support.',
    icon: Rocket,
    gradient: 'from-orange-500 to-amber-500'
  }
];

function Process() {
  return (
    <section id="process" className="section-spacing section-container scroll-mt-24">
      <SectionHeading
        eyebrow="How I Work"
        title="Simple 4-Step Process"
        description="From idea to live website in just 4 easy steps. Transparent, efficient, and stress-free."
        centered
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isLast = index === steps.length - 1;
          return (
            <div
              key={step.number}
              data-reveal="up"
              style={{ transitionDelay: `${index * 80}ms` }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-brand-300 hover:shadow-card"
            >
              <div className="absolute -right-3 -top-3 text-6xl font-extrabold text-slate-100 transition-colors group-hover:text-brand-100">
                {step.number}
              </div>
              <div className={`relative inline-flex rounded-xl bg-gradient-to-br ${step.gradient} p-3 text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                <Icon size={22} />
              </div>
              <h3 className="relative mt-4 text-lg font-bold text-slate-900">{step.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>

              {!isLast && (
                <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-slate-200 lg:block">
                  <ArrowRight size={20} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Process;

import { Target, Lightbulb, Rocket } from 'lucide-react';
import SectionHeading from './SectionHeading';
import brandIcon from '../assets/brand-icon.png';

const techStack = [
  { label: 'React', color: 'bg-sky-50 text-sky-700 border-sky-200' },
  { label: 'Tailwind CSS', color: 'bg-cyan-50 text-cyan-700 border-cyan-200' },
  { label: 'JavaScript', color: 'bg-amber-50 text-amber-700 border-amber-200' },
  { label: 'Vite', color: 'bg-violet-50 text-violet-700 border-violet-200' },
  { label: 'HTML & CSS', color: 'bg-orange-50 text-orange-700 border-orange-200' },
  { label: 'Git & GitHub', color: 'bg-slate-50 text-slate-700 border-slate-200' }
];

const highlights = [
  { icon: Target, label: 'Focus', value: 'Small Business Websites', gradient: 'from-brand-500 to-cyan-500' },
  { icon: Lightbulb, label: 'Approach', value: 'Conversion-Focused Design', gradient: 'from-amber-500 to-orange-500' },
  { icon: Rocket, label: 'Goal', value: 'Premium, Fast, Mobile-First', gradient: 'from-violet-500 to-purple-500' }
];

function About() {
  return (
    <section id="about" className="section-spacing section-container scroll-mt-24">
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div data-reveal="left">
          <SectionHeading
            eyebrow="About Me"
            title="Building Digital Success for Local Businesses"
            description="I'm a web developer who specializes in creating modern, responsive websites for small businesses. My focus is on clean design, fast performance, and mobile-friendly experiences that convert visitors into customers."
          />

          <div className="mt-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Tech Stack</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech.label}
                  className={`rounded-lg border px-3 py-1.5 text-xs font-bold shadow-sm transition-all hover:shadow-md ${tech.color}`}
                >
                  {tech.label}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 grid max-w-md grid-cols-3 gap-3">
            <div className="surface-card p-4 text-center transition-all hover:-translate-y-1 hover:shadow-card">
              <p className="text-2xl font-extrabold text-slate-900">4+</p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">Projects</p>
            </div>
            <div className="surface-card p-4 text-center transition-all hover:-translate-y-1 hover:shadow-card">
              <p className="text-2xl font-extrabold text-slate-900">100%</p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">Responsive</p>
            </div>
            <div className="surface-card p-4 text-center transition-all hover:-translate-y-1 hover:shadow-card">
              <p className="text-2xl font-extrabold text-slate-900">&lt;24h</p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">Response</p>
            </div>
          </div>
        </div>

        <div data-reveal="right" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card sm:p-7">
          <div className="mx-auto flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl border-2 border-brand-300 bg-slate-950 shadow-lg">
            <img src={brandIcon} alt="Goku Works logo" className="h-[80%] w-[80%] object-contain" />
          </div>

          <p className="mt-5 text-center text-xl font-bold text-slate-900">Gopalakrishan M</p>
          <p className="text-center text-sm font-medium text-brand-600">Web Developer</p>

          <div className="mt-6 space-y-3">
            {highlights.map((item) => (
              <div key={item.label} className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/80 p-3 transition-all hover:border-brand-200 hover:shadow-sm">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${item.gradient} text-white shadow-sm`}>
                  <item.icon size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">{item.label}</p>
                  <p className="text-sm font-bold text-slate-900">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

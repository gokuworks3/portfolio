import SectionHeading from './SectionHeading';

const skills = ['Clean Design', 'Mobile-First', 'Fast Performance', 'User-Friendly UX'];

function About() {
  return (
    <section id="about" className="section-spacing section-container scroll-mt-24">
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div data-reveal="left">
          <SectionHeading
            eyebrow="About"
            title="Building Strong Digital Presence for Local Businesses"
            description="Gokul is a web developer who specializes in building modern and responsive websites for small businesses like restaurants, gyms, and hotels. He focuses on clean design, fast performance, and mobile-friendly user experience."
          />

          <div className="mt-7 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-7 grid max-w-xl grid-cols-3 gap-3">
            <div className="surface-card p-4 text-center">
              <p className="text-2xl font-extrabold text-slate-900">5+</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Projects</p>
            </div>
            <div className="surface-card p-4 text-center">
              <p className="text-2xl font-extrabold text-slate-900">100%</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Responsive</p>
            </div>
            <div className="surface-card p-4 text-center">
              <p className="text-2xl font-extrabold text-slate-900">24h</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Reply Time</p>
            </div>
          </div>
        </div>

        <div data-reveal="right" className="rounded-3xl border border-slate-200 bg-white p-7 shadow-card sm:p-8">
          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-brand-300 bg-gradient-to-br from-brand-100 to-accent-100 text-3xl font-bold text-brand-700">
            GW
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Focus</p>
              <p className="mt-1 text-base font-semibold text-slate-900">Small Business Websites</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Approach</p>
              <p className="mt-1 text-base font-semibold text-slate-900">Conversion-Oriented Design</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:col-span-2">
              <p className="text-sm text-slate-500">Goal</p>
              <p className="mt-1 text-base font-semibold text-slate-900">
                Create websites that look premium, load quickly, and work flawlessly on mobile.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

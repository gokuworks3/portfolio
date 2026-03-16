import { ExternalLink } from 'lucide-react';
import SectionHeading from './SectionHeading';

const projects = [
  {
    name: 'First Bites - Restaurant Website',
    description: 'A modern restaurant website with menu, gallery, and contact sections.',
    url: 'https://first-bites-demo1.vercel.app/',
    palette: 'from-orange-400 via-amber-400 to-rose-400',
    tag: 'Restaurant'
  },
  {
    name: 'Fit Zone - Gym Website',
    description: 'A fitness center website showing gym programs, trainers, and membership plans.',
    url: 'https://fit-zone-lyart.vercel.app/',
    palette: 'from-emerald-400 via-teal-400 to-cyan-400',
    tag: 'Gym'
  },
  {
    name: 'Dream Stay - Hotel Website',
    description: 'A hotel website showcasing rooms, services, gallery, and booking contact section.',
    url: 'https://dream-stay-phi.vercel.app/',
    palette: 'from-sky-400 via-cyan-400 to-blue-500',
    tag: 'Hotel'
  }
];

function Projects() {
  return (
    <section id="projects" className="section-spacing section-container scroll-mt-24">
      <SectionHeading
        eyebrow="Featured Work"
        title="Demo Projects"
        description="Client-focused websites crafted for speed, usability, and a polished business presence."
        centered
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <article
            key={project.name}
            data-reveal="up"
            style={{ transitionDelay: `${index * 110}ms` }}
            className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:border-brand-300 hover:shadow-card"
          >
            <div className="relative p-4">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
                <div className="flex items-center gap-1.5 border-b border-slate-200 bg-slate-50 px-3 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className={`relative h-44 bg-gradient-to-br ${project.palette}`}>
                  <div className="absolute inset-0 bg-slate-900/20" />
                  <div className="absolute left-4 top-4 rounded-full border border-white/55 bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white backdrop-blur">
                    {project.tag}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="px-4 text-center text-xl font-bold text-white sm:text-2xl">{project.name}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-slate-900">{project.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{project.description}</p>
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-slate-900 to-slate-700 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:from-slate-800 hover:to-slate-700"
              >
                Live Demo
                <ExternalLink size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;

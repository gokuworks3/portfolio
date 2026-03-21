import { memo } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import restaurantPreview from '../assets/project-restaurant.png';
import restaurantPreviewMobile from '../assets/project-restaurant-mobile.jpg';
import gymPreview from '../assets/project-fitzone.png';
import hotelPreview from '../assets/project-dreamstay.png';
import photographyPreview from '../assets/project-photography.jpg';

const fallbackProjectPreview =
  'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1400" height="800" viewBox="0 0 1400 800"%3E%3Cdefs%3E%3ClinearGradient id="bg" x1="0" y1="0" x2="1" y2="1"%3E%3Cstop offset="0%25" stop-color="%23e2e8f0"/%3E%3Cstop offset="100%25" stop-color="%23cbd5e1"/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="1400" height="800" fill="url(%23bg)"/%3E%3Ctext x="50%25" y="50%25" fill="%23334155" font-family="Segoe UI, Arial, sans-serif" font-size="38" font-weight="700" text-anchor="middle" dominant-baseline="middle"%3EPreview unavailable%3C/text%3E%3C/svg%3E';

const projects = [
  {
    name: 'FreshBites',
    subtitle: 'Restaurant Website',
    description: 'Modern restaurant website with menu, gallery, and contact sections.',
    url: 'https://first-bites-demo1.vercel.app/',
    tag: 'Restaurant',
    tagColor: 'bg-orange-100 text-orange-700 border-orange-200',
    image: restaurantPreview,
    mobileImage: restaurantPreviewMobile
  },
  {
    name: 'Fit Zone',
    subtitle: 'Gym Website',
    description: 'Fitness center website with programs, trainers, and membership plans.',
    url: 'https://fit-zone-lyart.vercel.app/',
    tag: 'Gym',
    tagColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    image: gymPreview
  },
  {
    name: 'Dream Stay',
    subtitle: 'Hotel Website',
    description: 'Hotel website showcasing rooms, services, and booking section.',
    url: 'https://dream-stay-phi.vercel.app/',
    tag: 'Hotel',
    tagColor: 'bg-sky-100 text-sky-700 border-sky-200',
    image: hotelPreview
  },
  {
    name: 'Alex Studio',
    subtitle: 'Photography',
    description: 'Stunning photography portfolio with gallery and booking contact.',
    url: 'https://photography-virid-eight.vercel.app/',
    tag: 'Photography',
    tagColor: 'bg-violet-100 text-violet-700 border-violet-200',
    image: photographyPreview
  }
];

const revealDelayClasses = [
  '[transition-delay:0ms]',
  '[transition-delay:90ms]',
  '[transition-delay:180ms]',
  '[transition-delay:270ms]',
  '[transition-delay:360ms]',
  '[transition-delay:450ms]'
];

const ProjectCard = memo(function ProjectCard({ project, index }) {
  const revealDelayClass = revealDelayClasses[index % revealDelayClasses.length];

  return (
    <article
      data-reveal="up"
      className={`group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-card ${revealDelayClass}`}
    >
      <div className="border-b border-slate-200 bg-slate-50 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-rose-400" />
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
          </div>
          <div className="flex-1 truncate rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-400">
            {project.url.replace('https://', '')}
          </div>
        </div>
      </div>

      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={project.image}
          srcSet={project.mobileImage ? `${project.mobileImage} 768w, ${project.image} 1768w` : undefined}
          sizes={project.mobileImage ? '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw' : undefined}
          alt={`${project.name} homepage preview`}
          loading={index === 0 ? 'eager' : 'lazy'}
          fetchPriority={index === 0 ? 'high' : 'auto'}
          onError={(event) => {
            const image = event.currentTarget;
            if (image.dataset.fallbackApplied === 'true') {
              return;
            }

            image.dataset.fallbackApplied = 'true';
            image.src = fallbackProjectPreview;
          }}
          className="h-full w-full max-w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 sm:min-h-[4rem]">
            <h3 className="text-lg font-bold leading-tight text-slate-900">{project.name}</h3>
            <p className="mt-1 text-sm font-medium leading-6 text-slate-500">{project.subtitle}</p>
          </div>
          <span className={`mt-0.5 shrink-0 self-start rounded-full border px-3 py-1 text-xs font-bold ${project.tagColor}`}>
            {project.tag}
          </span>
        </div>

        <p className="mt-3 text-sm leading-6 text-slate-600">{project.description}</p>

        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-slate-900 to-slate-700 px-4 py-3 text-sm font-bold text-white transition-all duration-200 hover:from-brand-600 hover:to-accent-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2"
        >
          View Live Site
          <ExternalLink size={14} />
        </a>
      </div>
    </article>
  );
});

function Projects() {
  return (
    <section id="projects" className="section-spacing section-container scroll-mt-24">
      <SectionHeading
        eyebrow="Featured Work"
        title="Selected Portfolio Projects"
        description="Recent website demos built for service-based businesses with a focus on speed, trust, and conversions."
        centered
      />

      <div className="mt-12 grid items-start grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>

      <div className="mt-10 text-center" data-reveal="up">
        <a href="#contact" className="btn-accent btn-magnetic inline-flex items-center gap-2">
          Discuss Your Website
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}

export default memo(Projects);

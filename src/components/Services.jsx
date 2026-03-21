import {
  Building2,
  Hotel,
  LayoutTemplate,
  Laptop2,
  UtensilsCrossed,
  Dumbbell,
  Camera,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import SectionHeading from './SectionHeading';

const revealDelayClasses = [
  '[transition-delay:0ms]',
  '[transition-delay:80ms]',
  '[transition-delay:160ms]',
  '[transition-delay:240ms]',
  '[transition-delay:320ms]',
  '[transition-delay:400ms]'
];

const services = [
  {
    title: 'Restaurant Website',
    icon: UtensilsCrossed,
    gradient: 'from-orange-500 to-amber-500',
    features: ['Menu & gallery sections', 'Online reservation form', 'Mouth-watering visual presentation']
  },
  {
    title: 'Gym Website',
    icon: Dumbbell,
    gradient: 'from-emerald-500 to-teal-500',
    features: ['Trainer & class listings', 'Membership plan cards', 'High-energy, motivating sections']
  },
  {
    title: 'Hotel Website',
    icon: Hotel,
    gradient: 'from-sky-500 to-blue-500',
    features: ['Room showcase & gallery', 'Amenities & services section', 'Booking enquiry contact form']
  },
  {
    title: 'Photography Portfolio',
    icon: Camera,
    gradient: 'from-violet-500 to-purple-500',
    features: ['Stunning image galleries', 'Portfolio showcase layout', 'Contact & booking forms']
  },
  {
    title: 'Business Website',
    icon: Building2,
    gradient: 'from-slate-600 to-slate-800',
    features: ['Professional multi-page layout', 'Contact & enquiry forms', 'SEO-friendly structure']
  },
  {
    title: 'Landing Page',
    icon: LayoutTemplate,
    gradient: 'from-brand-500 to-accent-500',
    features: ['Focused single-page layout', 'Strong call-to-action copy', 'Fast load & mobile-first']
  }
];

function Services() {
  return (
    <section id="services" className="section-spacing section-container scroll-mt-24">
      <SectionHeading
        eyebrow="What I Offer"
        title="Services Built for Results"
        description="Specialized website solutions tailored for small businesses that want to stand out online."
        centered
      />

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;
          const revealDelayClass = revealDelayClasses[index % revealDelayClasses.length];

          return (
            <div
              key={service.title}
              data-reveal="up"
              className={`group rounded-2xl border border-slate-200 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-card sm:p-6 ${revealDelayClass}`}
            >
              <div className={`inline-flex rounded-xl bg-gradient-to-br ${service.gradient} p-3 text-white shadow-lg transition-transform group-hover:scale-110`}>
                <Icon size={24} />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">{service.title}</h3>
              <ul className="mt-3 space-y-2">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-accent-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div
        data-reveal="up"
        className="mt-8 rounded-2xl border border-dashed border-brand-300 bg-gradient-to-br from-brand-50 via-white to-accent-50 p-6 text-center shadow-soft sm:p-8"
      >
        <div className="mx-auto inline-flex rounded-xl border border-brand-200 bg-white p-3 text-brand-700 shadow-sm">
          <Laptop2 size={24} />
        </div>
        <h3 className="mt-4 text-xl font-bold text-slate-900">Need Something Custom?</h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-slate-600">
          Don't see exactly what you need? I build tailored solutions for any business type.
        </p>
        <a href="#contact" className="btn-accent btn-magnetic mt-5 inline-flex w-full items-center gap-2 sm:w-auto">
          Let's Discuss Your Project
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}

export default Services;

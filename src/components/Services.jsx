import {
  Building2,
  Hotel,
  LayoutTemplate,
  Laptop2,
  UtensilsCrossed,
  Dumbbell
} from 'lucide-react';
import SectionHeading from './SectionHeading';

const services = [
  { title: 'Business Website Development', icon: Building2 },
  { title: 'Restaurant Website Design', icon: UtensilsCrossed },
  { title: 'Gym Website Design', icon: Dumbbell },
  { title: 'Hotel Website Design', icon: Hotel },
  { title: 'Landing Page Development', icon: LayoutTemplate }
];

function Services() {
  return (
    <section id="services" className="section-spacing section-container scroll-mt-24">
      <SectionHeading
        eyebrow="What I Offer"
        title="Services"
        description="Specialized web design and development solutions tailored to small business goals."
        centered
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <div
              key={service.title}
              data-reveal="up"
              style={{ transitionDelay: `${index * 90}ms` }}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-card"
            >
              <div className="inline-flex rounded-xl border border-brand-200 bg-gradient-to-br from-brand-100 to-accent-100 p-3 text-brand-700 transition-colors group-hover:from-brand-200 group-hover:to-accent-200">
                <Icon size={24} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-600">
                Modern, responsive layouts built to showcase your business clearly and convert visitors.
              </p>
            </div>
          );
        })}

        <div
          data-reveal="up"
          style={{ transitionDelay: `${services.length * 90}ms` }}
          className="rounded-2xl border border-dashed border-brand-300 bg-gradient-to-br from-brand-100 to-accent-100 p-6 shadow-emerald sm:col-span-2 lg:col-span-1"
        >
          <div className="inline-flex rounded-xl border border-brand-300 bg-white/90 p-3 text-brand-700">
            <Laptop2 size={24} />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-slate-900">Need a Custom Project?</h3>
          <p className="mt-2 text-sm text-slate-600">
            I also create tailored web solutions based on your specific business requirements.
          </p>
          <a href="#contact" className="mt-4 inline-block text-sm font-semibold text-brand-800 hover:text-brand-900">
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;

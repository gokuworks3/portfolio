import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import QuickContact from './components/QuickContact';
import useScrollReveal from './hooks/useScrollReveal';

const Projects = lazy(() => import('./components/Projects'));
const Services = lazy(() => import('./components/Services'));
const Pricing = lazy(() => import('./components/Pricing'));
const WhyChooseMe = lazy(() => import('./components/WhyChooseMe'));
const Process = lazy(() => import('./components/Process'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));

function SectionSkeleton() {
  return (
    <section className="section-container py-10 sm:py-12" aria-hidden="true">
      <div className="h-40 animate-pulse rounded-2xl border border-slate-200 bg-slate-100/70" />
    </section>
  );
}

function App() {
  useScrollReveal();

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-100 text-slate-800">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-cyan-100/75 to-transparent" />
        <div className="absolute left-1/2 top-[-12rem] h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-brand-300/30 blur-3xl" />
        <div className="absolute -left-20 top-1/3 h-[16rem] w-[16rem] rounded-full bg-accent-200/45 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-[18rem] w-[18rem] rounded-full bg-sky-200/35 blur-3xl" />
        <div className="grain-overlay absolute inset-0 opacity-70" />
      </div>

      <Navbar />

      <main>
        <Hero />
        <Suspense fallback={<SectionSkeleton />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Services />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Pricing />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <WhyChooseMe />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Process />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Contact />
        </Suspense>
      </main>

      <Footer />
      <QuickContact />
    </div>
  );
}

export default App;

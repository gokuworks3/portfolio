import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import QuickContact from './components/QuickContact';
import useScrollReveal from './hooks/useScrollReveal';

const Projects = lazy(() => import('./components/Projects'));
const Services = lazy(() => import('./components/Services'));
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
    <div className="relative min-h-screen overflow-x-hidden bg-white text-slate-800">
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

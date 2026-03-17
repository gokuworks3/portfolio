import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import WhyChooseMe from './components/WhyChooseMe';
import Process from './components/Process';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QuickContact from './components/QuickContact';
import useScrollReveal from './hooks/useScrollReveal';

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
        <Projects />
        <WhyChooseMe />
        <Process />
        <Services />
        <About />
        <Contact />
      </main>

      <Footer />
      <QuickContact />
    </div>
  );
}

export default App;

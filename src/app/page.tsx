import Hero from '@/components/HeroSection';
import About from '@/components/AboutSection';
import Projects from '@/components/ProjectsSection';
import Contact from '@/components/ContactSection';
import Header from '@/components/Header';

export default function Home() {
  return (
    <>
      <Header />

      <main className="scroll-smooth">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* <Footer /> */}
    </>
  );
}

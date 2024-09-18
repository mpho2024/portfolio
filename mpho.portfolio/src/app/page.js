import Navbar from './components/Navbar';
import HomeP from './components/home';
import AboutSection from './components/AboutSection';
import Projects from './components/Projects';
import EmailSection from './components/EmailSection';
import HeroSection from './components/HeroSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
     
      <Navbar />
      <section id="home" className="py-16">
        <div className="container mx-auto px-12">
          <HeroSection />
        </div>
      </section>

      <div className="container mt-24 mx-auto px-12 py-4">
        <AboutSection />
      </div>

      <section id="project" className="py-16">
        <div className="container mx-auto px-12">
          <Projects />
        </div>
      </section>

      <section id="contact" className="py-16">
        <div className="container mx-auto px-12">
          <EmailSection />
        </div>
      </section>
    </main>
  );
}

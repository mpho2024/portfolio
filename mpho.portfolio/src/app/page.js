import Image from "next/image";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
    <Navbar/>

    
    <div className="container mt-24 mx-auto px-12 py-4">
      <AboutSection/>
      </div>
      <section id="project">
      <ProjectsSection/>
      </section>

      <section id="contact">
      <EmailSection/>
    
      </section>
  
    </main>
  );
}

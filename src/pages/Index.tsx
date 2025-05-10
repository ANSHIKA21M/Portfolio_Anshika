
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        <section id="home">
          <Hero setActiveSection={setActiveSection} />
        </section>
        
        <section id="about" className="scroll-mt-16">
          <About />
        </section>
        
        <section id="skills" className="scroll-mt-16">
          <Skills />
        </section>
        
        <section id="projects" className="scroll-mt-16">
          <Projects />
        </section>
        
        <section id="experience" className="scroll-mt-16">
          <Experience />
        </section>
        
        <section id="education" className="scroll-mt-16">
          <Education />
        </section>
        
        <section id="contact" className="scroll-mt-16">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

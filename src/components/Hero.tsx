
import { ArrowDownCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  setActiveSection: (section: string) => void;
}

const Hero = ({ setActiveSection }: HeroProps) => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
      setActiveSection("about");
    }
  };

  return (
    <div className="min-h-screen flex items-center bg-gradient-to-br from-white to-blue-50 pt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              <span className="block">Hi, I'm</span>
              <span className="text-primary block mt-2">Anshika Srivastava</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 font-light">
              Full Stack Developer with expertise in Java, Spring Boot,
              React.js, and RESTful API development
            </h2>
            <p className="text-gray-600 max-w-lg">
              I build efficient, scalable applications with strong analytical skills 
              and a focus on data structure design and system optimization.
            </p>
            <div className="flex space-x-4 pt-4">
              <Button 
                onClick={scrollToAbout}
                size="lg"
                className="transition-all duration-300 hover:shadow-lg hover:bg-primary/90 transform hover:scale-105"
              >
                Learn More
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="transition-all duration-300 hover:bg-primary hover:text-white transform hover:scale-105" 
                asChild
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center transition-transform hover:scale-105 hover:shadow-xl duration-500">
              <div className="text-6xl md:text-8xl font-bold text-primary/80">AS</div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <button 
            onClick={scrollToAbout} 
            aria-label="Scroll down"
            className="transition-transform hover:scale-125 duration-300"
          >
            <ArrowDownCircle className="text-primary/70 hover:text-primary" size={36} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

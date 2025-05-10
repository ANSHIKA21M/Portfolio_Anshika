
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Anshika Srivastava</h3>
            <p className="text-gray-400 mb-4">
              Full Stack Developer with expertise in Java, Spring Boot, React.js, and RESTful API development.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors hover:underline">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors hover:underline">About</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors hover:underline">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors hover:underline">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-6">
              <Button 
                variant="outline"
                size="sm"
                className="transition-colors hover:bg-white/20 hover:border-white"
                asChild
              >
                <a 
                  href="https://github.com/ANSHIKA21M" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  GitHub
                </a>
              </Button>
              <Button 
                variant="outline"
                size="sm"
                className="transition-colors hover:bg-white/20 hover:border-white"
                asChild
              >
                <a 
                  href="https://linkedin.com/in/anshika-srivastava" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  LinkedIn
                </a>
              </Button>
            </div>
            <p className="text-gray-400">
              Email: anshika241824@gmail.com
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} Anshika Srivastava. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          About <span className="text-primary">Me</span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            I'm a Java programmer with knowledge of Android development and full-stack applications. I'm familiar with Spring Boot frameworks, RESTful APIs, and database systems including SQL and NoSQL.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            I have a strong understanding of CI/CD principles and Agile methodologies, with analytical skills focused on data structure design and system optimization. As a collaborative team member, I'm dedicated to creating efficient, scalable solutions.
          </p>
          <p className="text-lg text-gray-700 mb-10">
            Currently, I'm seeking an entry-level Software Engineer position to apply my technical skills while growing in a professional environment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              asChild
            >
              <a href="https://github.com/ANSHIKA21M" target="_blank" rel="noopener noreferrer">
                GitHub Profile
              </a>
            </Button>
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              asChild
            >
              <a href="https://linkedin.com/in/anshika-srivastava" target="_blank" rel="noopener noreferrer">
                LinkedIn Profile
              </a>
            </Button>
            <Button 
              className="flex items-center gap-2"
              asChild
            >
              <a href="#" download>
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

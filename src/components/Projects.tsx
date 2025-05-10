
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Journal Application",
      type: "Full Stack Developer",
      description: "Architected and developed full-stack application with Spring Boot backend and React frontend achieving 95% test coverage. Implemented secure RESTful APIs with authentication and CRUD operations.",
      technologies: ["Spring Boot", "MongoDB", "React.js", "RESTful API"],
      highlights: [
        "Engineered efficient NoSQL data persistence layer with custom repositories and optimized queries",
        "Applied Computer Science principles to design responsive UI with seamless integration between components"
      ]
    },
    {
      title: "News App",
      type: "Android Developer",
      description: "Developed Android application that fetches and displays real-time news data from public APIs. Implemented efficient data caching to reduce API calls and improve performance by 40%.",
      technologies: ["Java", "Android SDK", "RESTful API", "XML"],
      highlights: [
        "Created responsive layouts adapting to multiple screen sizes with Material Design principles",
        "Utilized analytical approach to optimize application development and user experience"
      ]
    },
    {
      title: "UNBOOK",
      type: "Full Stack Web Developer",
      description: "Engineered online book reading platform with user authentication and session management. Implemented features tracking reading progress, bookmarking, and personalized recommendations.",
      technologies: ["Django", "SQLite", "JavaScript", "HTML/CSS", "RESTful API"],
      highlights: [
        "Developed RESTful API endpoints for content delivery and user data synchronization",
        "Integrated NLP-based recommendation engine improving user engagement by 25%"
      ]
    },
    {
      title: "Cosmo Breakout Game",
      type: "Java Developer",
      description: "Developed 2D game application using Java and object-oriented design principles. Implemented collision detection algorithms and responsive control systems.",
      technologies: ["Java", "Object-Oriented Programming", "JavaFX"],
      highlights: [
        "Created event-driven architecture for real-time gameplay and user interaction",
        "Collaborated with team members to integrate innovative gaming mechanics"
      ]
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          My <span className="text-primary">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                <CardDescription>{project.type}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-gray-600">Key Features:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    {project.highlights.map((highlight, hIndex) => (
                      <li key={hIndex}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge variant="outline" key={techIndex}>{tech}</Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

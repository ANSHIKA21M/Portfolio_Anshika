
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      company: "Walmart USA",
      position: "Software Engineer (Virtual Experience Program)",
      period: "June 2023",
      responsibilities: [
        "Implemented Java-based heap data structure that improved logistics processing efficiency by 30%",
        "Optimized database schema for inventory management system supporting 10,000+ product entries",
        "Collaborated with cross-functional teams to develop scalable solutions using Java 8 features and distributed systems architecture",
        "Applied analytical skills to identify performance bottlenecks and implement innovative solutions"
      ],
      technologies: ["Java", "Data Structures", "Database Optimization", "Distributed Systems"]
    },
    {
      company: "Wells Fargo",
      position: "Software Engineering Associate (Virtual Experience)",
      period: "May 2023",
      responsibilities: [
        "Designed and implemented financial portfolio management system using Java and SQL",
        "Created comprehensive ER diagrams for complex database relationships supporting financial data",
        "Translated business requirements into technical specifications and system architecture",
        "Utilized Agile methodologies to integrate CI/CD pipelines, improving deployment efficiency"
      ],
      technologies: ["Java", "SQL", "System Design", "Agile/CI/CD"]
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Professional <span className="text-primary">Experience</span>
        </h2>
        
        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <div>
                    <CardTitle className="text-xl font-bold">{exp.company}</CardTitle>
                    <CardDescription className="text-base font-medium">{exp.position}</CardDescription>
                  </div>
                  <Badge variant="secondary" className="md:self-start w-fit">
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 list-disc pl-5">
                  {exp.responsibilities.map((responsibility, rIndex) => (
                    <li key={rIndex} className="text-gray-700">
                      {responsibility}
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge variant="outline" key={techIndex}>
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

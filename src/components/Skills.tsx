
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "C", "SQL", "JavaScript"],
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Spring Boot", "Django", "React.js", "RESTful APIs"],
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB", "Firebase", "SQLite"],
    },
    {
      title: "Development Tools",
      skills: ["Git", "Docker", "Kubernetes", "AWS", "Postman", "Maven", "CI/CD"],
    },
    {
      title: "Mobile Development",
      skills: ["Android SDK", "Android Studio"],
    },
    {
      title: "Software Development",
      skills: ["Object-Oriented Design", "Data Structures", "Algorithms", "MVC Architecture"],
    },
    {
      title: "Methodologies",
      skills: ["Agile", "Scrum", "Test-Driven Development"],
    },
  ];

  return (
    <div className="py-20 bg-[#080C14]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Technical <span className="text-neon-blue neon-text">Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="neon-card hover:animate-neon-glow"
            >
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-neon-blue">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="neon-badge bg-secondary/50 text-white px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
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

export default Skills;

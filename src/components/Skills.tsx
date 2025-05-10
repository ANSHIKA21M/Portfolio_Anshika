
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
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Technical <span className="text-primary">Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] hover:border-primary/30"
            >
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-primary">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:bg-primary hover:text-white cursor-default"
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

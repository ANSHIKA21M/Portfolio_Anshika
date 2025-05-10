
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Education = () => {
  const educationData = [
    {
      institution: "KIET, Dr. A. P. J. Abdul Kalam Technical University, Lucknow",
      degree: "Master of Computer Applications (MCA)",
      period: "2024 - Present",
      description: "Currently pursuing advanced studies in computer applications with focus on software development and system design."
    },
    {
      institution: "University of Allahabad",
      degree: "Bachelor of Computer Applications (BCA)",
      period: "2021 - 2024",
      description: "Completed foundational education in computer applications, programming, and software development principles."
    }
  ];

  const certifications = [
    {
      name: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      issuer: "Amazon Web Services",
      date: "April 2025",
      skills: [
        "Mastered core AWS services, architecture, security, and cloud deployment models",
        "Gained hands-on experience with EC2, S3, RDS, and CloudFormation"
      ]
    },
    {
      name: "Cisco Certified - Networking Basics",
      issuer: "Cisco Networking Academy",
      date: "2024",
      skills: [
        "Acquired expertise in network protocols, IP addressing, and TCP/IP fundamentals",
        "Developed skills in network configuration, troubleshooting, and security best practices"
      ]
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Education & <span className="text-primary">Certifications</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {educationData.map((education, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-bold">{education.institution}</CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold text-lg text-primary">{education.degree}</h3>
                <p className="text-gray-600 mt-2">{education.description}</p>
              </CardContent>
              <CardFooter className="text-sm text-gray-500 border-t pt-4">
                {education.period}
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <h3 className="text-2xl font-bold text-center mb-8">
          Professional <span className="text-primary">Certifications</span>
        </h3>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg font-bold">{cert.name}</CardTitle>
                <p className="text-primary font-medium">{cert.issuer}</p>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-700">{skill}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="text-sm text-gray-500 border-t pt-4">
                {cert.date}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;

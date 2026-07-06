import { Calendar } from "lucide-react";
import Navbar from "@/components/navbar";

export default function Experience() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Work Experience</h1>
          <div className="space-y-8">
            {[
              {
                title: "Senior Full Stack Developer",
                company: "Tech Company",
                period: "2022 - Present",
                description: "Leading development of web applications, mentoring junior developers, and implementing best practices."
              },
              {
                title: "Full Stack Developer",
                company: "Startup Inc",
                period: "2020 - 2022",
                description: "Built and maintained multiple client-facing applications using React and Node.js."
              },
              {
                title: "Junior Developer",
                company: "Web Agency",
                period: "2018 - 2020",
                description: "Developed responsive websites and web applications for various clients."
              }
            ].map((exp) => (
              <div key={exp.title} className="border-l-2 border-border pl-6">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-primary mb-2">{exp.company}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar size={16} />
                  {exp.period}
                </div>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

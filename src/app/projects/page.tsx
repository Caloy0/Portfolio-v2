import { ExternalLink } from "lucide-react";
import Navbar from "@/components/navbar";

export default function Projects() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Featured Projects</h1>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Project One",
                description: "A modern web application built with Next.js and TypeScript",
                tech: ["Next.js", "React", "TypeScript", "Tailwind"],
                link: "#"
              },
              {
                title: "Project Two",
                description: "Full-stack application with real-time features",
                tech: ["Node.js", "Express", "Socket.io", "MongoDB"],
                link: "#"
              },
              {
                title: "Project Three",
                description: "E-commerce platform with payment integration",
                tech: ["React", "Stripe", "PostgreSQL", "Redis"],
                link: "#"
              },
              {
                title: "Project Four",
                description: "Dashboard application with data visualization",
                tech: ["Next.js", "Chart.js", "API", "TypeScript"],
                link: "#"
              }
            ].map((project) => (
              <div key={project.title} className="border border-border rounded-lg p-6 hover:border-primary transition-colors">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-accent px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="inline-flex items-center gap-2 text-primary hover:underline">
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

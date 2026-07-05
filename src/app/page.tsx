import { Mail, MapPin, Phone, Calendar, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Portfolio</h1>
          <div className="flex gap-6">
            <a href="#about" className="text-sm hover:text-primary transition-colors">About</a>
            <a href="#skills" className="text-sm hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="text-sm hover:text-primary transition-colors">Projects</a>
            <a href="#experience" className="text-sm hover:text-primary transition-colors">Experience</a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <section id="hero" className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-4xl text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="text-primary">Your Name</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Full Stack Developer | React | Next.js | TypeScript
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              I build modern, performant web applications with a focus on user experience and clean code.
            </p>
            <div className="flex gap-4 justify-center">
              <a href="#contact" className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Get in Touch
              </a>
              <a href="#projects" className="border border-border px-6 py-3 rounded-lg font-medium hover:bg-accent transition-colors">
                View Projects
              </a>
            </div>
            <div className="flex gap-6 justify-center mt-12">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                LinkedIn
              </a>
              <a href="mailto:your.email@example.com" className="hover:text-primary transition-colors flex items-center gap-2">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-muted-foreground mb-4">
                I'm a passionate full-stack developer with experience in building modern web applications. 
                I specialize in React, Next.js, and TypeScript, with a strong focus on creating clean, 
                maintainable code and exceptional user experiences.
              </p>
              <p className="text-muted-foreground mb-4">
                My journey in software development started with a curiosity about how things work on the web. 
                Since then, I've worked on various projects ranging from small personal tools to large-scale 
                enterprise applications.
              </p>
              <p className="text-muted-foreground">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="py-24 px-6 bg-accent/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Skills & Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express",
                "Tailwind CSS", "PostgreSQL", "MongoDB", "Git", "REST APIs", "GraphQL"
              ].map((skill) => (
                <div key={skill} className="bg-background border border-border rounded-lg px-4 py-3 text-center">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Featured Projects</h2>
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
        </section>

        <section id="experience" className="py-24 px-6 bg-accent/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Work Experience</h2>
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
        </section>

        <section id="contact" className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Get in Touch</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-muted-foreground text-lg">
                  I'm always interested in hearing about new opportunities and projects. 
                  Feel free to reach out if you'd like to connect!
                </p>
                <div className="space-y-3">
                  <a href="mailto:your.email@example.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Mail size={20} />
                    your.email@example.com
                  </a>
                  <a href="tel:+1234567890" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Phone size={20} />
                    +1 (234) 567-890
                  </a>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin size={20} />
                    Your City, Country
                  </div>
                </div>
              </div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your message"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

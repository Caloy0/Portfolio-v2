import Navbar from "@/components/navbar";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">About Me</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-muted-foreground mb-4 text-lg">
              I'm a passionate full-stack developer with experience in building modern web applications. 
              I specialize in React, Next.js, and TypeScript, with a strong focus on creating clean, 
              maintainable code and exceptional user experiences.
            </p>
            <p className="text-muted-foreground mb-4 text-lg">
              My journey in software development started with a curiosity about how things work on the web. 
              Since then, I've worked on various projects ranging from small personal tools to large-scale 
              enterprise applications.
            </p>
            <p className="text-muted-foreground text-lg">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import Navbar from "@/components/navbar";

export default function Skills() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Skills & Technologies</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express",
              "Tailwind CSS", "PostgreSQL", "MongoDB", "Git", "REST APIs", "GraphQL"
            ].map((skill) => (
              <div key={skill} className="bg-background border border-border rounded-lg px-4 py-3 text-center hover:border-primary transition-colors">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

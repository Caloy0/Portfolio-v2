import { Mail } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

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
              <Link href="/contact" className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Get in Touch
              </Link>
              <Link href="/projects" className="border border-border px-6 py-3 rounded-lg font-medium hover:bg-accent transition-colors">
                View Projects
              </Link>
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
      </main>

      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

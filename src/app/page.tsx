import {
  ArrowRight,
  Award,
  Briefcase,
  Mail,
  Server,
  Shield,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import Footer from "@/components/footer";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social";
import Navbar from "@/components/navbar";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "200+", label: "Users Supported" },
  { value: "99.9%", label: "Uptime Maintained" },
  { value: "15+", label: "Certifications" },
];

const expertise = [
  {
    icon: Server,
    title: "Infrastructure",
    description: "Windows Server, VMware, Active Directory, and cloud environments.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Endpoint protection, access control, patching, and ITIL best practices.",
  },
  {
    icon: Wrench,
    title: "Technical Support",
    description: "Tier 2/3 troubleshooting, hardware lifecycle, and user enablement.",
  },
];

const topSkills = [
  "Windows Server",
  "Active Directory",
  "PowerShell",
  "VMware",
  "Azure",
  "Networking",
  "ITIL",
  "Help Desk",
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background relative overflow-hidden">
      <div className="pointer-events-none fixed inset-0 bg-grid opacity-[0.04]" />
      <div className="pointer-events-none fixed inset-0 bg-dots opacity-[0.02]" />
      <div className="pointer-events-none fixed inset-0 bg-radial-glow" />
      <div className="pointer-events-none fixed inset-0 bg-radial-glow-bottom" />

      <Navbar />

      <main className="relative flex-1">
        <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-6 pt-20 pb-16">
          <div className="max-w-4xl text-center">
            <div className="opacity-0 animate-fade-in-up">
              <Badge variant="primary" className="mb-6 px-4 py-1.5 text-sm">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                Open to new opportunities
              </Badge>
            </div>

            <h1 className="opacity-0 animate-fade-in-up animate-delay-100 text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Hi, I&apos;m{" "}
              <span className="text-gradient">Your Name</span>
            </h1>

            <p className="opacity-0 animate-fade-in-up animate-delay-200 text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
              IT Specialist
            </p>

            <p className="opacity-0 animate-fade-in-up animate-delay-300 text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              I design, deploy, and maintain reliable IT infrastructure — keeping
              systems secure, users productive, and operations running smoothly.
            </p>

            <div className="opacity-0 animate-fade-in-up animate-delay-400 flex flex-wrap gap-4 justify-center mb-12">
              <ButtonLink href="/contact" size="lg">
                Get in Touch
                <ArrowRight size={18} />
              </ButtonLink>
              <ButtonLink href="/experience" variant="outline" size="lg">
                View Experience
              </ButtonLink>
            </div>

            <div className="opacity-0 animate-fade-in-up animate-delay-500 flex flex-wrap gap-3 justify-center mb-12">
              {topSkills.map((skill) => (
                <Badge key={skill} variant="outline" className="text-sm px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>

            <div className="flex gap-4 justify-center">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg glass text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                aria-label="GitHub"
              >
                <GitHubIcon size={22} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg glass text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={22} />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="p-2.5 rounded-lg glass text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 border-t border-border/50">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <Card key={stat.label} className="text-center py-5" hover>
                  <p className="text-3xl font-bold text-gradient mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">
                What I Do
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">Core Expertise</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {expertise.map((item) => (
                <Card key={item.title} hover className="text-center">
                  <div className="icon-box mx-auto mb-4">
                    <item.icon size={20} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 border-t border-border/50">
          <div className="max-w-4xl mx-auto">
            <Card className="text-center py-12 px-8 glow-sm">
              <div className="icon-box mx-auto mb-6">
                <Briefcase size={20} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Let&apos;s build reliable systems together
              </h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Whether you need infrastructure support, systems administration,
                or a dedicated IT professional — I&apos;d love to connect.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <ButtonLink href="/contact" size="lg">
                  <Mail size={18} />
                  Contact Me
                </ButtonLink>
                <ButtonLink href="/projects" variant="outline" size="lg">
                  See My Work
                </ButtonLink>
              </div>
            </Card>
          </div>
        </section>

        <section className="px-6 py-12 border-t border-border/50">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Award size={20} className="text-primary" />
              <span className="text-sm">CompTIA A+ · Network+ · Security+ · Azure Fundamentals</span>
            </div>
            <Link
              href="/skills"
              className="text-sm text-primary hover:underline inline-flex items-center gap-1"
            >
              View all skills <ArrowRight size={14} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

import { Mail } from "lucide-react";
import Link from "next/link";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social";

export default function Footer() {
  return (
    <footer className="relative mt-auto border-t border-border/50 glass-strong">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-semibold text-foreground">
              Your<span className="text-primary">.</span>Name
            </p>
            <p className="text-sm text-muted-foreground">IT Specialist · Systems & Infrastructure</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
              aria-label="GitHub"
            >
              <GitHubIcon size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={20} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm text-muted-foreground">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/skills", label: "Skills" },
            { href: "/projects", label: "Projects" },
            { href: "/experience", label: "Experience" },
            { href: "/contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

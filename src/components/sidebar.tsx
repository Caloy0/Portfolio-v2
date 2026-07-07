"use client";

import { Mail, MapPin, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social";
import { useSidebar } from "@/contexts/sidebar-context";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useSidebar();
  const pathname = usePathname();

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-30 bg-background/60 backdrop-blur-sm transition-opacity duration-300",
          isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={closeSidebar}
        aria-hidden={!isSidebarOpen}
      />

      <aside
        className={cn(
          "fixed left-3 lg:left-4 top-[4.5rem] w-[min(16rem,calc(100vw-1.5rem))] lg:w-64 h-[calc(100dvh-5.5rem)] z-40 transition-all duration-300 ease-out",
          isSidebarOpen
            ? "translate-x-0 opacity-100 pointer-events-auto"
            : "-translate-x-[calc(100%+0.75rem)] lg:-translate-x-[calc(100%+2rem)] opacity-0 pointer-events-none"
        )}
        aria-hidden={!isSidebarOpen}
      >
        <div className="glass-strong rounded-xl h-full p-5 glow-md shadow-2xl shadow-black/20 overflow-y-auto relative">
          <button
            onClick={closeSidebar}
            className="absolute top-3 right-3 p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            aria-label="Close sidebar"
          >
            <X size={16} />
          </button>

          <div className="space-y-6">
            <div className="text-center pt-2">
              <div className="relative w-20 h-20 mx-auto mb-4">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 to-violet-500/40 blur-sm" />
                <div className="relative w-full h-full rounded-full bg-secondary border-2 border-primary/30 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gradient">YN</span>
                </div>
              </div>
              <h2 className="text-lg font-bold">Your Name</h2>
              <p className="text-xs text-primary font-medium mt-0.5">IT Specialist</p>
              <p className="text-xs text-muted-foreground mt-1">Systems & Infrastructure</p>
            </div>

            <div className="flex justify-center gap-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
                aria-label="GitHub"
              >
                <GitHubIcon size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={16} />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>

            <div className="space-y-2.5 pt-4 border-t border-border/50">
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Contact
              </h3>
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={14} className="shrink-0 text-primary/70" />
                <span className="truncate">your.email@example.com</span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone size={14} className="shrink-0 text-primary/70" />
                +1 (234) 567-890
              </a>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <MapPin size={14} className="shrink-0 text-primary/70" />
                Your City, Country
              </div>
            </div>

            <div className="space-y-1 pt-4 border-t border-border/50">
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Navigate
              </h3>
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeSidebar}
                  className={cn(
                    "block text-xs px-2 py-1.5 rounded-md transition-colors",
                    pathname === link.href
                      ? "text-primary bg-primary/10 font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useSidebar } from "@/contexts/sidebar-context";
import ThemeToggle from "@/components/theme-toggle";

export default function Navbar() {
  const pathname = usePathname();
  const { toggleSidebar, isSidebarOpen } = useSidebar();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-strong border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 py-3.5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <button
            onClick={toggleSidebar}
            className={`hidden lg:flex p-2 rounded-lg transition-colors ${
              isSidebarOpen
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:text-primary hover:bg-accent"
            }`}
            aria-label="Toggle sidebar"
          >
            <Menu size={20} />
          </button>
          <Link href="/" className="flex items-center gap-2 group">
            <span className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-sm group-hover:glow-sm transition-all">
              YN
            </span>
            <span className="font-semibold hidden sm:block">
              Your<span className="text-primary">.</span>Name
            </span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                pathname === item.href
                  ? "text-primary bg-primary/10 font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border/50 bg-card/95 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  pathname === item.href
                    ? "text-primary bg-primary/10 font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { useSidebar } from "@/contexts/sidebar-context";

export default function Sidebar() {
  const { isSidebarOpen } = useSidebar();

  return (
    <aside className={`hidden lg:block bg-card border border-border rounded-r-lg shadow-lg fixed left-4 top-20 h-[calc(100vh-5rem)] transition-all duration-300 overflow-hidden ${isSidebarOpen ? "w-64 p-6" : "w-0 p-0 border-none"}`}>
      <div className="space-y-6">
        <div className="text-center">
          <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-3xl font-bold text-muted-foreground">YN</span>
          </div>
          <h2 className="text-xl font-bold">Your Name</h2>
          <p className="text-sm text-muted-foreground">Full Stack Developer</p>
        </div>

        <div className="space-y-3 pt-4 border-t border-border">
          <h3 className="text-sm font-semibold mb-2">Contact</h3>
          <a href="mailto:your.email@example.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Mail size={16} />
            your.email@example.com
          </a>
          <a href="tel:+1234567890" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Phone size={16} />
            +1 (234) 567-890
          </a>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin size={16} />
            Your City, Country
          </div>
        </div>

        <div className="space-y-2 pt-4 border-t border-border">
          <h3 className="text-sm font-semibold mb-2">Quick Links</h3>
          <Link href="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/skills" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
            Skills
          </Link>
          <Link href="/projects" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
            Projects
          </Link>
          <Link href="/experience" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
            Experience
          </Link>
          <Link href="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </aside>
  );
}

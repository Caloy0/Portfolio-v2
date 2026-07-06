"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useSidebar } from "@/contexts/sidebar-context";

export default function Navbar() {
  const pathname = usePathname();
  const { toggleSidebar, isSidebarOpen } = useSidebar();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSidebar}
            className={`hidden lg:block p-2 rounded-lg transition-colors ${isSidebarOpen ? "bg-primary text-primary-foreground" : "hover:bg-accent"}`}
            aria-label="Toggle sidebar"
          >
            <Menu size={20} />
          </button>
          <Link href="/" className="text-xl font-bold">Portfolio</Link>
        </div>
        <div className="flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm hover:text-primary transition-colors ${
                pathname === item.href ? "text-primary font-medium" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

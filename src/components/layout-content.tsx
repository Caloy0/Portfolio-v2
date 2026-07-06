"use client";

import { useSidebar } from "@/contexts/sidebar-context";

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1">
      {children}
    </div>
  );
}

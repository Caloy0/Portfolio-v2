import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "outline";
  className?: string;
}

const variantStyles = {
  default: "bg-secondary text-secondary-foreground",
  primary: "bg-primary/10 text-primary border border-primary/20",
  outline: "border border-border text-muted-foreground",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

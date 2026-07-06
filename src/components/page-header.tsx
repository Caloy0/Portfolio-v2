interface PageHeaderProps {
  label?: string;
  title: string;
  description?: string;
  gradient?: boolean;
}

export default function PageHeader({ label, title, description, gradient = false }: PageHeaderProps) {
  return (
    <div className="mb-12 animate-fade-in-up">
      {label && (
        <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">
          {label}
        </p>
      )}
      <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${gradient ? "text-gradient" : ""}`}>
        {title}
      </h1>
      {description && (
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">{description}</p>
      )}
      <div className="mt-6 h-px w-32 bg-gradient-to-r from-primary via-primary/50 to-transparent" />
    </div>
  );
}

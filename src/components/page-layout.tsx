import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
  wide?: boolean;
}

export default function PageLayout({ children, className = "", wide = false }: PageLayoutProps) {
  return (
    <div className={`min-h-screen flex flex-col bg-background relative overflow-hidden ${className}`}>
      <div className="pointer-events-none fixed inset-0 bg-grid opacity-[0.04]" />
      <div className="pointer-events-none fixed inset-0 bg-dots opacity-[0.02]" />
      <div className="pointer-events-none fixed inset-0 bg-radial-glow" />
      <div className="pointer-events-none fixed inset-0 bg-radial-glow-bottom" />
      <Navbar />
      <main className="relative flex-1 pt-24 pb-16 px-6">
        <div className={`mx-auto ${wide ? "max-w-6xl" : "max-w-4xl"}`}>{children}</div>
      </main>
      <Footer />
    </div>
  );
}

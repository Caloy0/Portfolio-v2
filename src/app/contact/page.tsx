import { Clock, Mail, MapPin, MessageSquare, Phone, Send } from "lucide-react";
import PageHeader from "@/components/page-header";
import PageLayout from "@/components/page-layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (234) 567-890",
    href: "tel:+1234567890",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Your City, Country",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
  },
];

export default function Contact() {
  return (
    <PageLayout>
      <PageHeader
        label="Contact"
        title="Get in Touch"
        description="Interested in working together? I'd love to hear from you. Fill out the form or reach out directly."
      />

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Card>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I&apos;m actively seeking opportunities where I can contribute my
              infrastructure expertise and grow alongside a great team. Whether
              you have a role in mind or just want to connect — my inbox is always open.
            </p>

            <div className="space-y-4">
              {contactMethods.map((method) => (
                <div key={method.label} className="flex items-center gap-4">
                  <div className="icon-box shrink-0">
                    <method.icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      {method.label}
                    </p>
                    {method.href ? (
                      <a
                        href={method.href}
                        className="text-sm hover:text-primary transition-colors"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="text-sm">{method.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="border-primary/20 bg-primary/5">
            <div className="flex items-center gap-3">
              <MessageSquare size={20} className="text-primary" />
              <p className="text-sm text-muted-foreground">
                Prefer LinkedIn?{" "}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Send me a message there
                </a>
              </p>
            </div>
          </Card>
        </div>

        <Card>
          <form className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2.5 border border-border rounded-lg bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2.5 border border-border rounded-lg bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2.5 border border-border rounded-lg bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
                placeholder="Job opportunity, collaboration, etc."
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2.5 border border-border rounded-lg bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors resize-none"
                placeholder="Tell me about the opportunity or how I can help..."
              />
            </div>
            <Button type="submit" size="lg" className="w-full">
              <Send size={18} />
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </PageLayout>
  );
}

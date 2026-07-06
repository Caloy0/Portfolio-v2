import { GraduationCap, Heart, MapPin, Target } from "lucide-react";
import PageHeader from "@/components/page-header";
import PageLayout from "@/components/page-layout";
import { Card } from "@/components/ui/card";

const highlights = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "Focused on minimizing downtime and maximizing team productivity.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description: "Always staying current with emerging technologies and certifications.",
  },
  {
    icon: Heart,
    title: "User-Centric",
    description: "Translating complex technical issues into clear, actionable solutions.",
  },
];

export default function About() {
  return (
    <PageLayout>
      <PageHeader
        label="About"
        title="About Me"
        description="A dedicated IT professional passionate about building and maintaining robust technology environments."
      />

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {highlights.map((item) => (
          <Card key={item.title} hover className="text-center">
            <div className="icon-box mx-auto mb-4">
              <item.icon size={20} />
            </div>
            <h3 className="font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
          </Card>
        ))}
      </div>

      <Card className="mb-8">
        <div className="space-y-5 text-muted-foreground leading-relaxed">
          <p className="text-lg">
            I&apos;m an IT Specialist with hands-on experience in systems administration,
            network infrastructure, and end-user support. I thrive in environments where
            reliability, security, and efficiency are paramount.
          </p>
          <p>
            My work spans everything from deploying Windows Server environments and managing
            Active Directory to automating routine tasks with PowerShell and maintaining
            virtualized infrastructure on VMware and Azure.
          </p>
          <p>
            I believe great IT isn&apos;t just about fixing problems — it&apos;s about
            proactively designing systems that prevent them. I take pride in documenting
            processes, mentoring colleagues, and ensuring technology empowers rather than
            hinders the people who depend on it.
          </p>
        </div>
      </Card>

      <Card>
        <div className="flex items-start gap-4">
          <div className="icon-box shrink-0">
            <MapPin size={20} />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Based in Your City, Country</h3>
            <p className="text-sm text-muted-foreground">
              Open to remote, hybrid, and on-site opportunities. Willing to relocate for the right role.
            </p>
          </div>
        </div>
      </Card>
    </PageLayout>
  );
}

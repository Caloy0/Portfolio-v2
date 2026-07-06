import { Building2, Calendar } from "lucide-react";
import PageHeader from "@/components/page-header";
import PageLayout from "@/components/page-layout";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const experiences = [
  {
    title: "IT Specialist",
    company: "Enterprise Corp",
    period: "2022 – Present",
    type: "Full-time",
    description:
      "Manage Windows Server infrastructure, Active Directory, and VMware environment for 200+ users. Lead security patching, backup verification, and Tier 3 escalations.",
    achievements: [
      "Reduced ticket resolution time by 35%",
      "Deployed Intune MDM for 150 devices",
      "Automated 20+ routine tasks via PowerShell",
    ],
  },
  {
    title: "Systems Administrator",
    company: "Tech Solutions Inc",
    period: "2020 – 2022",
    type: "Full-time",
    description:
      "Administered hybrid cloud environment spanning on-premises servers and Azure. Managed network infrastructure, VPN, and endpoint security for a 100-person organization.",
    achievements: [
      "Migrated file servers to SharePoint Online",
      "Implemented network segmentation with VLANs",
      "Achieved 99.9% uptime over 18 months",
    ],
  },
  {
    title: "IT Support Specialist",
    company: "Regional Services",
    period: "2018 – 2020",
    type: "Full-time",
    description:
      "Provided Tier 1–2 help desk support, hardware provisioning, and software deployment. Created knowledge base articles that decreased repeat tickets by 25%.",
    achievements: [
      "Supported 80+ users across 3 office locations",
      "Built imaging process reducing setup time by 50%",
      "Earned CompTIA Network+ and Security+",
    ],
  },
];

export default function Experience() {
  return (
    <PageLayout>
      <PageHeader
        label="Career"
        title="Work Experience"
        description="A track record of keeping systems running, users supported, and infrastructure evolving."
      />

      <div className="relative">
        <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-border to-transparent hidden md:block" />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={exp.title} className="relative md:pl-12">
              <div className="absolute left-0 top-6 hidden md:flex items-center justify-center w-10 h-10 rounded-full glass border-primary/30 glow-sm">
                <Building2 size={16} className="text-primary" />
              </div>

              <Card hover className={index === 0 ? "border-primary/30" : ""}>
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="flex items-center gap-1.5">
                      <Calendar size={12} />
                      {exp.period}
                    </Badge>
                    <Badge variant="primary">{exp.type}</Badge>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="text-primary mt-1">▸</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}

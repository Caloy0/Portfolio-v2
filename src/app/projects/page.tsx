import { ExternalLink, FolderGit2 } from "lucide-react";
import PageHeader from "@/components/page-header";
import PageLayout from "@/components/page-layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "Active Directory Migration",
    description:
      "Led a full AD domain migration for 150+ users with zero downtime, including GPO restructuring and permission audits.",
    tech: ["Active Directory", "PowerShell", "Group Policy", "DNS"],
    link: "#",
    category: "Infrastructure",
  },
  {
    title: "VMware Cluster Deployment",
    description:
      "Designed and deployed a 3-node VMware vSphere cluster with HA/DRS, reducing provisioning time by 60%.",
    tech: ["VMware", "vSAN", "Windows Server", "Networking"],
    link: "#",
    category: "Virtualization",
  },
  {
    title: "IT Asset Management System",
    description:
      "Built a PowerShell-based asset tracking system integrated with ServiceNow for automated hardware lifecycle management.",
    tech: ["PowerShell", "ServiceNow", "SQL", "Automation"],
    link: "#",
    category: "Automation",
  },
  {
    title: "Azure Cloud Migration",
    description:
      "Migrated on-premises file servers and email to Microsoft 365 and Azure, implementing Intune MDM for 200+ devices.",
    tech: ["Azure", "Microsoft 365", "Intune", "Azure AD"],
    link: "#",
    category: "Cloud",
  },
];

export default function Projects() {
  return (
    <PageLayout wide>
      <PageHeader
        label="Portfolio"
        title="Featured Projects"
        description="Real-world infrastructure and automation work that delivered measurable impact."
      />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card key={project.title} hover className="flex flex-col">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="icon-box shrink-0">
                  <FolderGit2 size={18} />
                </div>
                <Badge variant="outline" className="shrink-0">
                  {project.category}
                </Badge>
              </div>
              <CardTitle className="mt-4">{project.title}</CardTitle>
              <CardDescription className="leading-relaxed">
                {project.description}
              </CardDescription>
            </CardHeader>

            <div className="flex flex-wrap gap-2 mb-6 flex-1">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="primary">
                  {tech}
                </Badge>
              ))}
            </div>

            <a
              href={project.link}
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium"
            >
              View Details <ExternalLink size={14} />
            </a>
          </Card>
        ))}
      </div>
    </PageLayout>
  );
}

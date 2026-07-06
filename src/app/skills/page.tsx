import {
  Cloud,
  Code,
  Database,
  Globe,
  Monitor,
  Network,
  Server,
  Shield,
  Terminal,
  Wrench,
} from "lucide-react";
import PageHeader from "@/components/page-header";
import PageLayout from "@/components/page-layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    icon: Server,
    title: "Systems & Infrastructure",
    skills: [
      "Windows Server",
      "Linux (Ubuntu/CentOS)",
      "Active Directory",
      "Group Policy",
      "VMware vSphere",
      "Hyper-V",
      "DNS / DHCP",
    ],
  },
  {
    icon: Network,
    title: "Networking",
    skills: [
      "TCP/IP",
      "VPN",
      "Firewalls",
      "Cisco / Meraki",
      "VLANs",
      "Wi-Fi Administration",
      "Network Troubleshooting",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & Virtualization",
    skills: [
      "Microsoft Azure",
      "AWS Basics",
      "Microsoft 365",
      "Intune / MDM",
      "Azure AD",
      "Backup Solutions",
      "Disaster Recovery",
    ],
  },
  {
    icon: Shield,
    title: "Security",
    skills: [
      "Endpoint Protection",
      "Patch Management",
      "Access Control",
      "Security Audits",
      "Compliance (SOC 2)",
      "Incident Response",
      "Multi-Factor Auth",
    ],
  },
  {
    icon: Terminal,
    title: "Automation & Scripting",
    skills: [
      "PowerShell",
      "Bash",
      "Task Scheduler",
      "WSUS",
      "SCCM / Intune",
      "IT Automation",
      "Batch Scripting",
    ],
  },
  {
    icon: Wrench,
    title: "Support & Operations",
    skills: [
      "Help Desk (Tier 1–3)",
      "ITIL Framework",
      "ServiceNow",
      "Ticketing Systems",
      "Hardware Lifecycle",
      "Asset Management",
      "Documentation",
    ],
  },
];

const tools = [
  { icon: Monitor, name: "RDP / Remote Tools" },
  { icon: Database, name: "SQL Server" },
  { icon: Globe, name: "Web Servers (IIS)" },
  { icon: Code, name: "Git / Version Control" },
];

export default function Skills() {
  return (
    <PageLayout wide>
      <PageHeader
        label="Skills"
        title="Skills & Technologies"
        description="A comprehensive toolkit built through years of hands-on infrastructure and support work."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {skillCategories.map((category) => (
          <Card key={category.title} hover>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="icon-box">
                  <category.icon size={18} />
                </div>
                <CardTitle>{category.title}</CardTitle>
              </div>
            </CardHeader>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge key={skill} variant="primary">
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Additional Tools & Platforms</CardTitle>
        </CardHeader>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 border border-border/50"
            >
              <tool.icon size={18} className="text-primary shrink-0" />
              <span className="text-sm">{tool.name}</span>
            </div>
          ))}
        </div>
      </Card>
    </PageLayout>
  );
}

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Malware Analysis Research Project",
      subtitle: "Academic Research at Riara University",
      description:
        "Comprehensive research project analyzing modern malware detection techniques using data mining and machine learning approaches. The study explored static and dynamic analysis methods, achieving a 10% similarity score indicating original research contributions.",
      role: "Lead Researcher & Analyst",
      technologies: [
        "Static Analysis",
        "Dynamic Analysis",
        "Machine Learning",
        "Python",
        "Flare VM",
      ],
      outcomes: [
        "Achieved A-grade with 10% plagiarism score (Satisfactory)",
        "37 pages of original research and analysis",
        "64+ academic sources reviewed and cited",
        "Novel insights into malware detection methodologies",
      ],
      featured: true,
    },
    {
      title: "SOC Analyst Training Lab",
      subtitle: "Home Lab Environment",
      description:
        "Built a comprehensive home lab environment for practicing SOC operations, threat hunting, and incident response. Integrated multiple SIEM platforms with custom alert rules and threat intelligence feeds for real-world simulation.",
      role: "Infrastructure Designer & Analyst",
      technologies: ["Splunk", "Wazuh", "Elastic Stack", "VMware", "Kali Linux"],
      outcomes: [
        "24/7 monitoring capability with custom dashboards",
        "Integrated threat intelligence feeds",
        "Automated incident response playbooks",
        "Real-world attack simulation environment",
      ],
      featured: false,
    },
    {
      title: "Threat Intelligence Dashboard",
      subtitle: "Custom Security Tool",
      description:
        "Developed a centralized threat intelligence dashboard aggregating data from multiple open-source and commercial feeds. Provides real-time visualization of global threat landscape and automated risk scoring.",
      role: "Developer & Security Analyst",
      technologies: ["Python", "Flask", "React", "D3.js", "MISP", "STIX/TAXII"],
      outcomes: [
        "Aggregates 10+ threat intelligence sources",
        "Real-time threat feed parsing and normalization",
        "Custom risk scoring algorithms",
        "Interactive threat landscape visualization",
      ],
      featured: false,
    },
    {
      title: "Flare VM Customization",
      subtitle: "Malware Analysis Environment",
      description:
        "Customized Flare VM environment with additional tools and automation scripts for efficient malware analysis. Created standardized workflows for static, dynamic, and behavioral analysis of suspicious files.",
      role: "Security Engineer",
      technologies: [
        "Flare VM",
        "IDA Pro",
        "x64dbg",
        "Wireshark",
        "PowerShell",
        "Python",
      ],
      outcomes: [
        "50+ malware samples analyzed",
        "Automated initial triage process",
        "Custom analysis report generation",
        "Documented MITRE ATT&CK mappings",
      ],
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-mono text-primary uppercase tracking-wide" data-testid="text-projects-label">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6" data-testid="text-projects-heading">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-projects-subtitle">
            Real-world cybersecurity projects and research demonstrating practical skills
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`p-8 lg:p-10 hover-elevate ${
                project.featured
                  ? "border-primary/50 bg-gradient-to-br from-primary/5 via-transparent to-transparent"
                  : ""
              }`}
              data-testid={`project-${index}`}
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1 space-y-6">
                  {/* Header */}
                  <div>
                    {project.featured && (
                      <Badge className="mb-3 bg-primary/20 text-primary border-primary/30" data-testid="badge-featured-project">
                        Featured Project
                      </Badge>
                    )}
                    <h3 className="text-2xl lg:text-3xl font-bold mb-2" data-testid={`text-project-title-${index}`}>
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground font-medium" data-testid={`text-project-subtitle-${index}`}>{project.subtitle}</p>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed" data-testid={`text-project-description-${index}`}>
                    {project.description}
                  </p>

                  {/* Role and Technologies */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wide">
                        Role
                      </h4>
                      <p className="font-medium">{project.role}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="text-xs"
                            data-testid={`tech-${tech.toLowerCase().replace(/ /g, "-")}`}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Outcomes */}
                  <div>
                    <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
                      Key Outcomes
                    </h4>
                    <ul className="space-y-2">
                      {project.outcomes.map((outcome, outcomeIndex) => (
                        <li
                          key={outcomeIndex}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  {project.featured && (
                    <div className="flex flex-wrap gap-3 pt-4">
                      <Button variant="default" size="sm" className="group" data-testid="button-view-project-details">
                        View Details
                        <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <Button variant="outline" size="sm" data-testid="button-view-project-code">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4" data-testid="text-projects-cta">
            Want to see more of my work or collaborate on a project?
          </p>
          <Button
            variant="outline"
            size="lg"
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            data-testid="button-contact-from-projects"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
}

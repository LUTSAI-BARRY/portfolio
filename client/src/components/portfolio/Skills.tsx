import { Card } from "@/components/ui/card";
import {
  Shield,
  Eye,
  Search,
  Lock,
  Server,
  Radar,
  Users,
  Building2,
} from "lucide-react";

export function Skills() {
  const skills = [
    {
      icon: Eye,
      title: "SOC Monitoring",
      description:
        "24/7 security monitoring, threat detection, and incident response using industry-standard SIEM platforms and security tools.",
    },
    {
      icon: Server,
      title: "SIEM Operations",
      description:
        "Expert in Splunk and Wazuh for log aggregation, correlation, and real-time security event analysis.",
    },
    {
      icon: Radar,
      title: "Threat Hunting",
      description:
        "Proactive threat hunting methodologies to identify and neutralize advanced persistent threats before they cause damage.",
    },
    {
      icon: Lock,
      title: "Penetration Testing",
      description:
        "Offensive security testing to identify vulnerabilities, exploit weaknesses, and provide actionable remediation guidance.",
    },
    {
      icon: Search,
      title: "Malware Analysis",
      description:
        "Static and dynamic malware analysis using Flare VM and custom tooling to understand attack vectors and techniques.",
    },
    {
      icon: Shield,
      title: "Security Auditing",
      description:
        "ISO/IEC 27001:2022 certified auditor providing comprehensive security assessments and compliance reviews.",
    },
    {
      icon: Users,
      title: "Mentoring & Training",
      description:
        "Passionate about educating young learners in cybersecurity fundamentals and building the next generation of security professionals.",
    },
    {
      icon: Building2,
      title: "GuardZen CaaS",
      description:
        "Providing Cybersecurity as a Service for small businesses and startups - enterprise-grade security made accessible.",
    },
  ];

  return (
    <section id="skills" className="py-20 lg:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-mono text-primary uppercase tracking-wide" data-testid="text-skills-label">
            Skills & Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6" data-testid="text-skills-heading">
            What I Do
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-skills-subtitle">
            Comprehensive cybersecurity services from monitoring to penetration testing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card
                key={index}
                className="p-8 hover-elevate group cursor-pointer"
                data-testid={`skill-${skill.title.toLowerCase().replace(/ /g, "-")}`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {skill.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* GuardZen CTA */}
        <div className="mt-16">
          <Card className="p-8 lg:p-12 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-primary/20" data-testid="card-guardzen-cta">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4" data-testid="text-guardzen-heading">
                Introducing <span className="text-primary">GuardZen</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-2" data-testid="text-guardzen-tagline">
                Cybersecurity as a Service for the Gen Z Guard
              </p>
              <p className="text-muted-foreground mb-6" data-testid="text-guardzen-description">
                Making enterprise-grade cybersecurity accessible to small businesses and
                startups. From vulnerability assessments to 24/7 monitoring, GuardZen
                provides the protection you need to focus on growing your business.
              </p>
              <div className="inline-block px-6 py-3 bg-primary/10 border border-primary/20 rounded-md">
                <p className="text-sm font-mono text-primary" data-testid="text-guardzen-launch">
                  Launching January 2025 • Stay Tuned
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

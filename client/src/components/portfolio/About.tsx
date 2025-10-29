import { Card } from "@/components/ui/card";
import { Award, Briefcase, GraduationCap, Target } from "lucide-react";

export function About() {
  const stats = [
    { icon: GraduationCap, label: "Certifications", value: "6+" },
    { icon: Briefcase, label: "Projects Completed", value: "10+" },
    { icon: Award, label: "Years Experience", value: "2+" },
    { icon: Target, label: "Success Rate", value: "100%" },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-mono text-primary uppercase tracking-wide" data-testid="text-about-label">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6" data-testid="text-about-heading">
            Cybersecurity Professional
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-about-subtitle">
            Dedicated to protecting digital assets and building secure infrastructure
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Bio */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4" data-testid="text-bio-heading">Who I Am</h3>
              <div className="space-y-4 text-muted-foreground">
                <p data-testid="text-bio-intro">
                  I'm Jermann Barry Lutsai, known as "Lutsai the Tech Guy" - a Junior SOC
                  Analyst and cybersecurity practitioner passionate about threat
                  detection, security monitoring, and ethical hacking.
                </p>
                <p data-testid="text-bio-education">
                  With a diploma in Information Security & Ethical Hacking and an
                  academic diploma in Information & Cybersecurity from Riara University,
                  I've built a solid foundation in defensive and offensive security
                  practices.
                </p>
                <p data-testid="text-bio-guardzen">
                  Currently, I'm preparing to launch{" "}
                  <span className="text-primary font-semibold">GuardZen</span>, my
                  cybersecurity company offering{" "}
                  <span className="text-primary font-semibold">
                    Cybersecurity as a Service
                  </span>{" "}
                  tailored for the Gen Z guard. I'm also actively seeking opportunities
                  as a Tier 1 SOC Analyst to further develop my skills in threat
                  hunting and incident response.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Quick Facts */}
          <div>
            <Card className="p-8 space-y-6 hover-elevate" data-testid="card-quick-facts">
              <h3 className="text-2xl font-bold mb-6" data-testid="text-quick-facts-heading">Quick Facts</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <h4 className="font-semibold mb-1">Current Role</h4>
                    <p className="text-sm text-muted-foreground">
                      Junior SOC Analyst & Cybersecurity Professional
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <h4 className="font-semibold mb-1">Education</h4>
                    <p className="text-sm text-muted-foreground">
                      Diploma in Info Security & Ethical Hacking
                      <br />
                      Academic Diploma in Info & Cybersecurity
                      <br />
                      Riara University, Kenya
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <h4 className="font-semibold mb-1">Certifications</h4>
                    <p className="text-sm text-muted-foreground">
                      CompTIA Security+, CySA+ (In Progress)
                      <br />
                      ISO/IEC 27001:2022 Lead Auditor
                      <br />
                      EC-Council Ethical Hacking, Linux Essentials
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <h4 className="font-semibold mb-1">Home Lab</h4>
                    <p className="text-sm text-muted-foreground">
                      Active SOC environment with SIEM tools (Splunk, Wazuh), Flare VM,
                      and custom threat intelligence dashboard
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <h4 className="font-semibold mb-1">Mission</h4>
                    <p className="text-sm text-muted-foreground">
                      Building GuardZen to democratize enterprise-level cybersecurity for
                      small businesses and startups
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="p-6 text-center hover-elevate"
                data-testid={`stat-${stat.label.toLowerCase().replace(/ /g, "-")}`}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

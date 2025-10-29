import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, CheckCircle2 } from "lucide-react";

export function Certifications() {
  const certifications = [
    {
      name: "ISO/IEC 27001:2022 Lead Auditor",
      issuer: "Mastermind Assurance",
      date: "July 2025",
      expiry: "July 2028",
      creditHours: 16,
      status: "Active",
      category: "Security Auditing",
      description:
        "Qualified to conduct comprehensive ISO/IEC 27001:2022 information security management system audits and assessments.",
    },
    {
      name: "Ethical Hacking Certification",
      issuer: "EC-Council / Riara University",
      date: "2024",
      expiry: null,
      creditHours: null,
      status: "Active",
      category: "Offensive Security",
      description:
        "Comprehensive training in ethical hacking methodologies, penetration testing, and vulnerability assessment techniques.",
    },
    {
      name: "CompTIA Security+",
      issuer: "CompTIA",
      date: "In Progress",
      expiry: null,
      creditHours: null,
      status: "In Progress",
      category: "Security Foundations",
      description:
        "Industry-standard certification covering network security, compliance, threats, and vulnerabilities.",
    },
    {
      name: "CompTIA CySA+",
      issuer: "CompTIA",
      date: "In Progress",
      expiry: null,
      creditHours: null,
      status: "In Progress",
      category: "Cybersecurity Analytics",
      description:
        "Advanced certification focusing on security analytics, threat detection, and incident response.",
    },
    {
      name: "Programming Essentials in C",
      issuer: "Cisco Networking Academy",
      date: "December 2023",
      expiry: null,
      creditHours: null,
      status: "Active",
      category: "Programming",
      description:
        "Fundamental programming skills in C language, covering syntax, data types, and standard library functions.",
    },
    {
      name: "Linux Essentials",
      issuer: "NDG / Linux Professional Institute",
      date: "July 2023",
      expiry: null,
      creditHours: null,
      status: "Active",
      category: "Operating Systems",
      description:
        "Professional development certificate demonstrating Linux system administration and command-line proficiency.",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-500/10 text-green-500 border-green-500/30";
      case "In Progress":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/30";
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/30";
    }
  };

  return (
    <section id="certifications" className="py-20 lg:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-mono text-primary uppercase tracking-wide" data-testid="text-certs-label">
            Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6" data-testid="text-certs-heading">
            Certifications & Training
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-certs-subtitle">
            Industry-recognized credentials demonstrating expertise across multiple
            cybersecurity domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate flex flex-col"
              data-testid={`cert-${index}`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-md bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <Badge className={getStatusColor(cert.status)} data-testid={`badge-cert-status-${index}`}>{cert.status}</Badge>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-3">
                <div>
                  <h3 className="font-bold text-lg mb-1 leading-tight" data-testid={`text-cert-name-${index}`}>{cert.name}</h3>
                  <p className="text-sm text-primary font-medium" data-testid={`text-cert-category-${index}`}>{cert.category}</p>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-cert-description-${index}`}>
                  {cert.description}
                </p>

                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>{cert.issuer}</span>
                  </div>

                  {cert.date && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>
                        {cert.date}
                        {cert.expiry && ` - Expires ${cert.expiry}`}
                      </span>
                    </div>
                  )}

                  {cert.creditHours && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Award className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{cert.creditHours} Credit Hours</span>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <Card className="inline-block p-6 bg-primary/5 border-primary/20" data-testid="card-cert-note">
            <p className="text-sm text-muted-foreground" data-testid="text-cert-note">
              <span className="font-semibold text-primary">Continuous Learning:</span>{" "}
              Currently pursuing CompTIA Security+ and CySA+ certifications to expand
              expertise in security operations and threat analysis.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

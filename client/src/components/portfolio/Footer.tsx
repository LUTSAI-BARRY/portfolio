import { Github, Linkedin, Mail, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const quickLinks = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Certifications", id: "certifications" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* GuardZen Section */}
        <div className="mb-12 pb-12 border-b border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
                <div className="p-2 rounded-md bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold" data-testid="text-footer-guardzen-heading">GuardZen</h3>
              </div>
              <p className="text-sm text-muted-foreground max-w-md" data-testid="text-footer-guardzen-tagline">
                Cybersecurity as a Service for the Gen Z Guard
                <br />
                <span className="text-primary font-medium">
                  Launching January 2025
                </span>
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground mb-2" data-testid="text-footer-guardzen-cta">
                Interested in GuardZen services?
              </p>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                data-testid="button-footer-guardzen-contact"
              >
                Get Early Access
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h4 className="font-mono font-bold text-lg mb-4 text-primary" data-testid="text-footer-brand">
              &lt;Lutsai the Tech Guy /&gt;
            </h4>
            <p className="text-sm text-muted-foreground mb-4" data-testid="text-footer-description">
              SOC Analyst & Cybersecurity Professional dedicated to building secure
              digital infrastructure and mentoring the next generation of security
              experts.
            </p>
            <div className="flex gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="hover-elevate"
                asChild
                data-testid="footer-link-linkedin"
              >
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover-elevate"
                asChild
                data-testid="footer-link-github"
              >
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover-elevate"
                onClick={() => scrollToSection("contact")}
                data-testid="footer-button-email"
                aria-label="Contact"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4" data-testid="text-footer-quicklinks-heading">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`footer-link-${link.id}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Specializations */}
          <div>
            <h4 className="font-semibold mb-4" data-testid="text-footer-specs-heading">Specializations</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-primary" />
                <span>SOC Monitoring & Analysis</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-primary" />
                <span>SIEM (Splunk, Wazuh)</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-primary" />
                <span>Threat Hunting</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-primary" />
                <span>Penetration Testing</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-primary" />
                <span>Malware Analysis</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p data-testid="text-footer-copyright">
              © {currentYear} Jermann Barry Lutsai. All rights reserved.
            </p>
            <p className="font-mono" data-testid="text-footer-tech">
              Built with React + TypeScript + Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

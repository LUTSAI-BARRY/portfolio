import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Clock, Send, Loader2 } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export function Contact() {
  const { toast } = useToast();
  
  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error: Error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
      });
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "jermann.lutsai@example.com",
      link: "mailto:jermann.lutsai@example.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nairobi, Kenya",
      link: null,
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24-48 hours",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-mono text-primary uppercase tracking-wide" data-testid="text-contact-label">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6" data-testid="text-contact-heading">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-contact-description">
            Whether you need a SOC analyst, cybersecurity consultation, or want to discuss
            GuardZen services, I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 lg:p-10">
            <h3 className="text-2xl font-bold mb-6" data-testid="text-form-heading">Send a Message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John Doe"
                          {...field}
                          data-testid="input-name"
                          disabled={contactMutation.isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="john@example.com"
                          {...field}
                          data-testid="input-email"
                          disabled={contactMutation.isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell me about your project or inquiry..."
                          rows={6}
                          {...field}
                          data-testid="input-message"
                          disabled={contactMutation.isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full group"
                  disabled={contactMutation.isPending}
                  data-testid="button-submit"
                  aria-live="polite"
                  aria-busy={contactMutation.isPending}
                >
                  {contactMutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-8 lg:p-10 hover-elevate">
              <h3 className="text-2xl font-bold mb-6" data-testid="text-contact-info-heading">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start gap-4" data-testid={`contact-info-${index}`}>
                      <div className="p-3 rounded-md bg-primary/10 flex-shrink-0">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1" data-testid={`text-${info.label.toLowerCase()}-label`}>{info.label}</h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                            data-testid={`link-${info.label.toLowerCase()}`}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-sm text-muted-foreground" data-testid={`text-${info.label.toLowerCase()}-value`}>{info.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            <Card className="p-8 lg:p-10 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-primary/20">
              <h3 className="text-xl font-bold mb-4" data-testid="text-hiring-heading">Looking to Hire?</h3>
              <p className="text-muted-foreground mb-6" data-testid="text-hiring-description">
                I'm actively seeking opportunities as a Tier 1 SOC Analyst. If you're
                looking for a dedicated security professional with hands-on experience in
                threat detection, SIEM operations, and incident response, let's connect!
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2" data-testid="hiring-point-0">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Available for full-time positions</span>
                </div>
                <div className="flex items-center gap-2" data-testid="hiring-point-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Open to remote or hybrid work</span>
                </div>
                <div className="flex items-center gap-2" data-testid="hiring-point-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Can start immediately</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

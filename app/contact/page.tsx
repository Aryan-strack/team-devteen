"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

type Errors = Record<string, string>;

export default function ContactPage() {
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [serverError, setServerError] = useState<string>("");

  // honeypot (hidden) for bots
  const [honey, setHoney] = useState("");

  // Prefill from query: service + price
  const serviceQP = searchParams.get("service");
  const priceQP = searchParams.get("price");

  useEffect(() => {
    if (serviceQP) {
      const subject = `Inquiry about ${serviceQP} service`;
      let message = `Hi DevTeen team,\n\nI'm interested in your ${serviceQP} service`;
      if (priceQP) message += ` (starting from ${priceQP})`;
      message +=
        `. I would like to discuss my project requirements and get more information about:\n\n` +
        `- Project timeline\n- Detailed pricing\n- Your development process\n- Next steps\n\n` +
        `Please let me know when we can schedule a consultation.\n\nThank you!`;

      setFormData((prev) => ({ ...prev, subject, message }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serviceQP, priceQP]);

  const validateForm = () => {
    const newErrors: Errors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email address";

    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters long";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError("");

    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          service: serviceQP,
          price: priceQP,
          honey, // honeypot
        }),
      });

      if (res.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setHoney("");
      } else {
        const data = await res.json().catch(() => ({}));
        if (data?.errors) setErrors(data.errors);
        setServerError(data?.error || "Failed to send message.");
      }
    } catch (error) {
      setServerError("Network error. Please try again.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-primary/10 via-background to-muted/20 py-20 px-4 flex items-center justify-center">
        <Card className="max-w-md mx-auto text-center shadow-xl rounded-2xl">
          <CardContent className="p-8">
            <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />

            {/* Gradient Text */}
            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent mb-4">
              Message Sent!
            </h2>

            <p className="text-muted-foreground mb-6">
              Thank you for reaching out. We&apos;ll get back to you within 24 hours.
            </p>

            <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
          </CardContent>
        </Card>
      </div>

    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1ABC9C]/10 via-background to-[#0A2342]/10 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#1ABC9C] to-[#0A2342] bg-clip-text text-transparent mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start your project? Have questions about our services? We&apos;d love to hear from you.
            Let&apos;s discuss how we can help bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-rows-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="border-border/50 shadow-lg rounded-2xl">
              <CardHeader>
                <CardTitle className="text-2xl bg-gradient-to-r from-[#1ABC9C] to-[#0A2342] bg-clip-text text-transparent px-4 pt-4">
                  Send us a Message
                </CardTitle>
                <CardDescription className="px-4 pb-4">
                  {serviceQP
                    ? `Interested in our ${serviceQP} service? Fill out the form below and we'll get back to you with detailed information.`
                    : "Fill out the form below and we'll get back to you as soon as possible."}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {serviceQP && (
                  <div className="mb-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">Service Inquiry</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        Service: <strong>{serviceQP}</strong>
                      </span>
                      {priceQP && (
                        <span className="text-primary font-semibold">{priceQP}</span>
                      )}
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot (hidden) */}
                  <input
                    type="text"
                    value={honey}
                    onChange={(e) => setHoney(e.target.value)}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your full name"
                        className={errors.name ? "border-destructive" : ""}
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your@email.com"
                        className={errors.email ? "border-destructive" : ""}
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      placeholder="What's this about?"
                      className={errors.subject ? "border-destructive" : ""}
                      aria-invalid={!!errors.subject}
                    />
                    {errors.subject && <p className="text-sm text-destructive">{errors.subject}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us about your project or ask us anything..."
                      rows={6}
                      className={errors.message ? "border-destructive" : ""}
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
                  </div>

                  {serverError && (
                    <p className="text-sm text-destructive -mt-2">{serverError}</p>
                  )}

                  <Button type="submit" className="w-full text-lg py-6 rounded-xl bg-gradient-to-r from-[#1ABC9C] to-[#0A2342]
                    hover:from-[#20c997] hover:to-[#081a33] text-white cursor-pointer"
                    size="lg" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-border/50 shadow-lg rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl bg-gradient-to-r from-[#1ABC9C] to-[#0A2342] bg-clip-text text-transparent px-4 pt-4">
                  Contact Information
                </CardTitle>
                <CardDescription className="px-4 pb-4">Reach out to us through any of these channels.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold bg-gradient-to-r from-[#1ABC9C] to-[#0A2342] bg-clip-text text-transparent">
                      Phone
                    </h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold bg-gradient-to-r from-[#1ABC9C] to-[#0A2342] bg-clip-text text-transparent">
                      Email
                    </h3>
                    <p className="text-muted-foreground">hello@devteen.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold bg-gradient-to-r from-[#1ABC9C] to-[#0A2342] bg-clip-text text-transparent">
                      Business Hours
                    </h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM PST
                      <br />
                      Saturday: 10:00 AM - 2:00 PM PST
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </CardContent>

            </Card>
          </div>
        </div>
      </div>
    </div>

  );
}

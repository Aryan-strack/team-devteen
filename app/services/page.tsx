"use client"


import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"

const pricingPlans = [
  {
    name: "Landing Pages",
    price: "$499",
    period: "+ tax / starting-from",
    description:
      "High-converting landing pages for marketing, SaaS, and product launches.",
    features: [
      "Custom UI/UX design",
      "Responsive & SEO optimized",
      "Built with Webflow or Next.js",
      "Basic animations included",
      "Fast loading & performance optimized",
      "Delivery in 5–7 days",
    ],
    popular: false,
    cta: "Get Started",
  },
  {
    name: "Web Applications",
    price: "$3000",
    period: "+ tax / starting-from",
    description:
      "Scalable and secure web applications tailored to your business needs.",
    features: [
      "React / Next.js frontend",
      "Node.js / Firebase / Python(Flask, Django) / NestJS backend",
      "Database & API integrations",
      "Authentication & role management",
      "Admin dashboard (optional)",
      "Agile weekly progress updates",
    ],
    popular: true,
    cta: "Most Popular",
  },
  {
    name: "Mobile Applications",
    price: "$4500",
    period: "+ tax / starting-from",
    description:
      "Cross-platform mobile apps for iOS and Android with modern UI.",
    features: [
      "React Native or Flutter",
      "Single codebase for iOS & Android",
      "Push notifications",
      "Device API integration (Camera, GPS)",
      "App Store & Play Store deployment",
      "3-month free maintenance",
    ],
    popular: false,
    cta: "Get Started",
  },
  {
    name: "Desktop Applications",
    price: "$4000",
    period: "+ tax / starting-from",
    description:
      "High-performance desktop applications for Windows, macOS, and Linux.",
    features: [
      "Electron / .NET / Python-based apps",
      "Modern & secure UI",
      "Offline support",
      "Local & cloud database integration",
      "Auto-update functionality",
      "Cross-platform support",
    ],
    popular: false,
    cta: "Get Started",
  },
  {
    name: "AI Integrations",
    price: "$3500",
    period: "+ tax / starting-from",
    description:
      "AI-powered solutions to automate, analyze, and scale your business.",
    features: [
      "AI chatbots (OpenAI, Rasa, etc.)",
      "Image & voice recognition",
      "Predictive analytics",
      "Custom ML models",
      "Third-party AI API integrations",
      "Security & privacy compliance",
    ],
    popular: false,
    cta: "Get Started",
  },
  {
    name: "SaaS Development",
    price: "$7000",
    period: "+ tax / starting-from",
    description:
      "End-to-end SaaS product development for scalable, subscription-based platforms.",
    features: [
      "Product discovery & architecture",
      "Multi-tenant SaaS system",
      "Subscription & billing integration",
      "User roles & access control",
      "Cloud deployment & scalability",
      "Post-launch support & scaling",
    ],
    popular: false,
    cta: "Build SaaS",
  },
  {
    name: "Custom Software Development",
    price: "$5000",
    period: "+ tax / starting-from",
    description:
      "Tailor-made software solutions designed to meet unique business requirements.",
    features: [
      "Requirement analysis & planning",
      "Web, mobile or desktop software",
      "Custom workflows & logic",
      "Third-party API integrations",
      "Secure & scalable architecture",
      "Documentation & deployment",
    ],
    popular: false,
    cta: "Start Project",
  },
  {
    name: "Cloud & Hosting",
    price: "$800",
    period: "+ tax / monthly",
    description:
      "Secure, scalable, and managed cloud infrastructure for your applications.",
    features: [
      "AWS / Azure / GCP deployment",
      "Server setup & configuration",
      "Cloud migration support",
      "Database hosting & management",
      "Auto-scaling & load balancing",
      "Backup & disaster recovery",
    ],
    popular: false,
    cta: "Manage My Cloud",
  },
  {
    name: "API & Integration Services",
    price: "$1500",
    period: "+ tax / starting-from",
    description:
      "Robust APIs and seamless third-party integrations for modern applications.",
    features: [
      "REST & GraphQL API development",
      "Third-party API integrations",
      "Payment gateway integration",
      "CRM / ERP integrations",
      "Secure authentication & tokens",
      "API documentation & testing",
    ],
    popular: false,
    cta: "Integrate Now",
  },
  {
    name: "Digital & Growth Tech",
    price: "$1200",
    period: "+ tax / monthly",
    description:
      "Technology-driven digital growth solutions to scale your business.",
    features: [
      "SEO & technical SEO optimization",
      "Website performance optimization",
      "Analytics & tracking setup (GA4)",
      "Marketing automation tools",
      "CRM setup & integrations",
      "Conversion rate optimization (CRO)",
    ],
    popular: false,
    cta: "Grow My Business",
  },
  {
    name: "Software Maintenance & Support",
    price: "$1000",
    period: "+ tax / monthly",
    description:
      "Reliable maintenance and ongoing support to keep your software running smoothly.",
    features: [
      "Bug fixes & issue resolution",
      "Performance monitoring",
      "Security updates & patches",
      "Feature enhancements",
      "Backup & recovery support",
      "Priority technical support",
    ],
    popular: false,
    cta: "Subscribe Now",
  },
];



const faqs = [
  {
    question: "How do you determine project pricing?",
    answer:
      "Our pricing is based on project complexity, timeline, required features, and the level of customization needed. We provide detailed quotes after understanding your specific requirements during our discovery phase.",
  },
  {
    question: "What's included in the support period?",
    answer:
      "Support includes bug fixes, minor content updates, security patches, and technical assistance. The duration varies by plan: Landing Page (1 month), Web Development (3 months), Web App (3 months), AI Integrations (3 months), Mobile App (3 months).",
  },
  {
    question: "Can I upgrade my plan during development?",
    answer:
      "Yes, you can upgrade your plan at any time during development. We'll adjust the scope and pricing accordingly, ensuring you get the features you need.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes, we offer flexible payment plans. Typically, we require 50% upfront and 50% upon completion, but we can discuss custom payment schedules for larger projects.",
  },
  {
    question: "What if I need ongoing maintenance?",
    answer:
      "We offer ongoing maintenance packages starting at $200/month, which include regular updates, security monitoring, backups, and priority support.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during project planning.",
  },
]

export default function PricingPage() {
  // Removed unused expandedService and setExpandedService

  // Removed unused toggleService function

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F0FDF9] via-[#E8F5FF] to-[#F8FAFC] py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#1ABC9C] to-[#0A2342] bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive digital solutions with transparent pricing and no hidden fees.
            Choose the service that fits your needs, or let&apos;s discuss a custom solution for your unique requirements.
          </p>
        </div>

        {/* Pricing Plans */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative hover:shadow-xl transition-all duration-300 ${plan.popular ? "border-primary shadow-lg scale-105" : "border-border/50"
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-[#1ABC9C] to-[#0A2342] text-white px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center py-6">
                <CardTitle className="text-xl font-bold bg-gradient-to-r from-[#1ABC9C] to-[#0A2342] bg-clip-text text-transparent">
                  {plan.name}
                </CardTitle>
                <div className="mt-4">
                  <span className="text-3xl font-bold bg-gradient-to-r from-[#1ABC9C] to-[#0A2342] bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  <span className="text-xs text-muted-foreground block mt-1">{plan.period}</span>
                </div>
                <CardDescription className="mt-2 text-sm">{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-xs">
                      <Check className="h-3 w-3 text-[#1ABC9C] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${plan.popular ? "bg-gradient-to-r from-[#1ABC9C] to-[#0A2342] text-white" : ""}`}
                  variant={plan.popular ? "default" : "outline"}
                  size="sm"
                  asChild
                >
                  <Link
                    href={`/contact?service=${encodeURIComponent(plan.name)}&price=${encodeURIComponent(plan.price)}`}
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#1ABC9C] to-[#0A2342] bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions about our services or pricing? Find answers to the most common questions below.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border/50 rounded-lg px-6 data-[state=open]:bg-card/50"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="font-semibold bg-gradient-to-r from-[#1ABC9C] to-[#0A2342] bg-clip-text text-transparent">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

       
      </div>
    </div>

  )
}

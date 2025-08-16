"use client"


import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

import { Check, ArrowRight} from "lucide-react"
import Link from "next/link"

const pricingPlans = [
  {
    name: "Landing Page",
    price: "$499",
    period: "+ tax / starting-from",
    description: "High-converting landing pages for marketing, SaaS, or product launches.",
    features: [
      "Custom UI/UX design",
      "Responsive & SEO optimized",
      "Built in Webflow or Next.js",
      "Basic animations included",
      "Delivered in 5–7 days",
      "1-month support included",
    ],
    popular: false,
    cta: "Start Today",
  },
  {
    name: "Web Development",
    price: "$2000",
    period: "+ tax / starting-from",
    description: "Full-stack website solutions tailored for your business needs.",
    features: [
      "Custom website design & development",
      "Responsive & SEO optimized",
      "CMS integration (WordPress, Strapi, etc.)",
      "E-commerce functionality (optional)",
      "Hosting & deployment setup",
      "3-month support included",
    ],
    popular: false,
    cta: "Start Today",
  },
  {
    name: "Web App",
    price: "$3000",
    period: "+ tax / starting-from",
    description: "Custom-built web apps with full backend and API integration.",
    features: [
      "React/Next.js frontend",
      "Node.js/Firebase backend",
      "Database + API integration",
      "Authentication & Roles",
      "Admin dashboard (optional)",
      "Agile weekly updates",
    ],
    popular: true,
    cta: "Most Popular",
  },
  {
    name: "AI Integrations",
    price: "$3500",
    period: "+ tax / starting-from",
    description: "Add AI-powered features to your apps and workflows.",
    features: [
      "Chatbot integration (OpenAI, Rasa, etc.)",
      "Image & speech recognition",
      "Predictive analytics",
      "Custom machine learning models",
      "API integrations for AI services",
      "Security & privacy compliance",
    ],
    popular: false,
    cta: "Start Today",
  },
  {
    name: "Mobile App",
    price: "$4500",
    period: "+ tax / starting-from",
    description: "iOS & Android apps built with React Native or Flutter.",
    features: [
      "Cross-platform codebase",
      "Modern UI/UX",
      "Push notifications",
      "Device APIs (camera, GPS, etc.)",
      "App store deployment support",
      "3-month free maintenance",
    ],
    popular: false,
    cta: "Start Today",
  },
  {
    name: "Hire a Developer",
    price: "$1500",
    period: "+ tax / monthly",
    description: "Add an experienced full-stack developer to your team remotely.",
    features: [
      "Up to 80 hours/month",
      "Daily progress updates",
      "Slack + GitHub collaboration",
      "Frontend, backend or full-stack",
      "Flexible time zone overlap",
      "Scalable hours anytime",
    ],
    popular: false,
    cta: "Start Today",
  },
]


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
    <div className="min-h-screen bg-background py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Services</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive digital solutions with transparent pricing and no hidden fees. Choose the service
            that fits your needs, or let&apos;s discuss a custom solution for your unique requirements.
          </p>
        </div>

        {/* Pricing Plans */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative hover:shadow-xl transition-all duration-300 ${
                plan.popular ? "border-primary shadow-lg scale-105" : "border-border/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">Most Popular</Badge>
                </div>
              )}

              <CardHeader className="text-center pb-6">
                <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-primary">{plan.price}</span>
                  <span className="text-xs text-muted-foreground block mt-1">{plan.period}</span>
                </div>
                <CardDescription className="mt-2 text-sm">{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-xs">
                      <Check className="h-3 w-3 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full" variant={plan.popular ? "default" : "outline"} size="sm" asChild>
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
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
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project requirements and find the perfect solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link href="/contact">
                Get a Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent" asChild>
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

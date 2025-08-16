import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { TechIcon } from "@/components/tech-icons"

const projects = [
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    category: "Web",
    description: "A comprehensive e-commerce solution with advanced features",
    longDescription:
      "We developed a full-featured e-commerce platform that handles everything from product catalog management to payment processing. The platform includes advanced features like real-time inventory tracking, personalized recommendations, and comprehensive analytics dashboard. Built with scalability in mind, it can handle thousands of concurrent users and millions of products.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center",
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "AWS", "Docker"],
    features: [
      "Advanced product catalog with filtering and search",
      "Real-time inventory management",
      "Secure payment processing with Stripe",
      "Admin dashboard with analytics",
      "Mobile-responsive design",
      "SEO optimization",
      "Multi-language support",
      "Email notifications and marketing",
    ],
    client: "RetailCorp Inc.",
    duration: "4 months",
    teamSize: "5 developers",
    liveUrl: "https://retailcorp-demo.com",
    githubUrl: "https://github.com/devteen/ecommerce-platform",
    testimonial: {
      text: "DevTeen delivered an exceptional e-commerce platform that exceeded our expectations. The attention to detail and technical expertise was outstanding.",
      author: "Sarah Johnson",
      position: "CTO, RetailCorp Inc.",
    },
    results: [
      "300% increase in online sales",
      "50% reduction in cart abandonment",
      "99.9% uptime achieved",
      "40% faster page load times",
    ],
  },
  {
    slug: "fitness-mobile-app",
    title: "Fitness Tracking App",
    category: "Mobile",
    description: "Cross-platform mobile app for fitness enthusiasts",
    longDescription:
      "A comprehensive fitness tracking application that helps users monitor their workouts, nutrition, and progress. The app features AI-powered workout recommendations, social features for community engagement, and integration with popular wearable devices. Built using React Native for cross-platform compatibility.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center",
    technologies: ["React Native", "TypeScript", "Node.js", "MongoDB", "Firebase", "TensorFlow"],
    features: [
      "Workout tracking and planning",
      "Nutrition logging with barcode scanning",
      "AI-powered exercise recommendations",
      "Social features and challenges",
      "Wearable device integration",
      "Progress analytics and insights",
      "Offline mode support",
      "Push notifications",
    ],
    client: "FitLife Technologies",
    duration: "6 months",
    teamSize: "4 developers",
    liveUrl: "https://fitlife-app.com",
    githubUrl: "https://github.com/devteen/fitness-app",
    testimonial: {
      text: "The fitness app DevTeen created has transformed how our users engage with fitness. The AI recommendations are incredibly accurate.",
      author: "Mike Chen",
      position: "Product Manager, FitLife Technologies",
    },
    results: [
      "100K+ downloads in first month",
      "4.8/5 app store rating",
      "85% user retention rate",
      "Featured in App Store",
    ],
  },
  {
    slug: "healthcare-dashboard",
    title: "Healthcare Analytics Dashboard",
    category: "UI/UX",
    description: "Intuitive dashboard for healthcare professionals",
    longDescription:
      "A sophisticated healthcare analytics dashboard designed for medical professionals to track patient data, monitor treatment outcomes, and generate insights. The interface prioritizes usability and accessibility, ensuring healthcare workers can quickly access critical information during high-pressure situations.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&crop=center",
    technologies: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL", "Docker"],
    features: [
      "Real-time patient monitoring",
      "Interactive data visualizations",
      "Treatment outcome tracking",
      "Automated report generation",
      "HIPAA compliant security",
      "Multi-role access control",
      "Mobile-responsive design",
      "Integration with EMR systems",
    ],
    client: "MedTech Solutions",
    duration: "5 months",
    teamSize: "6 developers",
    liveUrl: "https://medtech-dashboard.com",
    githubUrl: "https://github.com/devteen/healthcare-dashboard",
    testimonial: {
      text: "DevTeen's dashboard has revolutionized how we analyze patient data. The intuitive design saves us hours every day.",
      author: "Dr. Emily Rodriguez",
      position: "Chief Medical Officer, MedTech Solutions",
    },
    results: [
      "60% reduction in data analysis time",
      "95% user satisfaction rate",
      "HIPAA compliance achieved",
      "Deployed across 50+ hospitals",
    ],
  },
  {
    slug: "ai-content-generator",
    title: "AI Content Generator",
    category: "AI",
    description: "Advanced AI-powered content creation platform",
    longDescription:
      "An innovative AI-powered platform that generates high-quality content for various use cases including blog posts, social media content, product descriptions, and marketing copy. The system uses advanced natural language processing and machine learning algorithms to create contextually relevant and engaging content.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=center",
    technologies: ["Python", "TensorFlow", "OpenAI API", "React", "Next.js", "MongoDB", "AWS"],
    features: [
      "Multi-format content generation",
      "Brand voice customization",
      "SEO optimization suggestions",
      "Plagiarism detection",
      "Content scheduling",
      "Analytics and performance tracking",
      "Team collaboration tools",
      "API for third-party integration",
    ],
    client: "ContentCorp",
    duration: "7 months",
    teamSize: "8 developers",
    liveUrl: "https://contentcorp-ai.com",
    githubUrl: "https://github.com/devteen/ai-content-generator",
    testimonial: {
      text: "The AI content generator from DevTeen has transformed our content marketing strategy. The quality is consistently impressive.",
      author: "Alex Thompson",
      position: "Marketing Director, ContentCorp",
    },
    results: [
      "500% increase in content output",
      "80% reduction in content creation time",
      "92% client satisfaction rate",
      "1M+ pieces of content generated",
    ],
  },
  {
    slug: "fintech-web-app",
    title: "FinTech Web Application",
    category: "Web",
    description: "Secure financial management platform",
    longDescription:
      "A comprehensive financial technology platform that provides users with advanced tools for personal finance management, investment tracking, and financial planning. The application features bank-level security, real-time market data integration, and AI-powered financial insights to help users make informed decisions.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop&crop=center",
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "AWS", "Kubernetes"],
    features: [
      "Account aggregation and management",
      "Real-time transaction monitoring",
      "Investment portfolio tracking",
      "AI-powered financial insights",
      "Budgeting and goal setting",
      "Bill payment automation",
      "Credit score monitoring",
      "Advanced security features",
    ],
    client: "FinanceFlow Inc.",
    duration: "8 months",
    teamSize: "10 developers",
    liveUrl: "https://financeflow-app.com",
    githubUrl: "https://github.com/devteen/fintech-app",
    testimonial: {
      text: "DevTeen delivered a world-class fintech platform that our users love. The security and user experience are exceptional.",
      author: "Jennifer Liu",
      position: "CEO, FinanceFlow Inc.",
    },
    results: ["$50M+ in managed assets", "99.99% uptime achieved", "SOC 2 compliance certified", "50K+ active users"],
  },
  {
    slug: "social-media-app",
    title: "Social Media Mobile App",
    category: "Mobile",
    description: "Next-generation social networking platform",
    longDescription:
      "A modern social media application that focuses on authentic connections and meaningful interactions. The app features innovative content discovery algorithms, advanced privacy controls, and unique social features that encourage genuine engagement rather than superficial metrics.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&crop=center",
    technologies: ["Flutter", "Node.js", "GraphQL", "MongoDB", "Redis", "AWS", "TensorFlow"],
    features: [
      "Authentic content sharing",
      "AI-powered content discovery",
      "Advanced privacy controls",
      "Real-time messaging",
      "Story and live streaming",
      "Community groups and events",
      "Content moderation tools",
      "Cross-platform synchronization",
    ],
    client: "SocialConnect",
    duration: "9 months",
    teamSize: "12 developers",
    liveUrl: "https://socialconnect-app.com",
    githubUrl: "https://github.com/devteen/social-app",
    testimonial: {
      text: "DevTeen created a social platform that truly prioritizes user well-being. The engagement metrics speak for themselves.",
      author: "David Park",
      position: "Founder, SocialConnect",
    },
    results: [
      "1M+ downloads in 6 months",
      "4.9/5 app store rating",
      "90% user retention rate",
      "Featured as App of the Day",
    ],
  },
]

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Back Button */}
        <div className="mb-8">
          <Button variant="outline" asChild>
            <Link href="/projects">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Link>
          </Button>
        </div>

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <Badge variant="secondary" className="text-sm">
              {project.category}
            </Badge>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              {project.duration}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4" />
              {project.teamSize}
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{project.title}</h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">{project.longDescription}</p>

          <div className="flex gap-4">
            {project.liveUrl && (
              <Button asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Live Site
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button variant="outline" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  View Code
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Project Image */}
        <div className="mb-12">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={1200}
            height={600}
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Features */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Technologies */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Technologies Used</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {project.technologies.map((tech) => (
                  <Card key={tech} className="text-center hover:shadow-md transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex justify-center mb-2">
                        <TechIcon tech={tech} className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-semibold text-sm">{tech}</h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Results */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Results & Impact</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {project.results.map((result, index) => (
                  <Card key={index} className="border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3">
                        <Star className="h-5 w-5 text-primary" />
                        <span className="font-medium">{result}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Info */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>Project Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Client</h4>
                  <p className="text-muted-foreground">{project.client}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Duration</h4>
                  <p className="text-muted-foreground">{project.duration}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Team Size</h4>
                  <p className="text-muted-foreground">{project.teamSize}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Category</h4>
                  <Badge variant="secondary">{project.category}</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>Client Testimonial</CardTitle>
              </CardHeader>
              <CardContent>
                <blockquote className="text-muted-foreground italic mb-4">&quot;{project.testimonial.text}&quot;</blockquote>
                <div>
                  <p className="font-semibold text-foreground">{project.testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{project.testimonial.position}</p>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="border-border/50 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-foreground mb-2">Interested in Similar Work?</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Let&apos;s discuss how we can help bring your vision to life.
                </p>
                <Button asChild className="w-full">
                  <Link href="/contact">Start Your Project</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

// Generate static params for all projects
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

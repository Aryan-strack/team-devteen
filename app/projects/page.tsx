"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Filter, ArrowRight, Star, Clock, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import { PageTransition } from "@/components/page-transition"
import { motion, AnimatePresence } from "framer-motion"
import { TechIcon } from "@/components/tech-icons"

const projects = [
  {
    id: 1,
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    category: "Web",
    description: "A comprehensive e-commerce solution with advanced features and real-time inventory management",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center",
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "AWS", "Docker"],
    client: "RetailCorp Inc.",
    testimonial:
      "DevTeen delivered an exceptional e-commerce platform that exceeded our expectations. The attention to detail and technical expertise was outstanding.",
    duration: "4 months",
    results: ["300% increase in online sales", "50% reduction in cart abandonment"],
    rating: 4.9,
  },
  {
    id: 2,
    slug: "fitness-mobile-app",
    title: "Fitness Tracking App",
    category: "Mobile",
    description: "Cross-platform mobile app for fitness enthusiasts with AI-powered recommendations",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
    technologies: ["React Native", "TypeScript", "Node.js", "MongoDB", "Firebase", "TensorFlow"],
    client: "FitLife Technologies",
    testimonial:
      "The fitness app DevTeen created has transformed how our users engage with fitness. The AI recommendations are incredibly accurate.",
    duration: "6 months",
    results: ["100K+ downloads in first month", "4.8/5 app store rating"],
    rating: 4.8,
  },
  {
    id: 3,
    slug: "healthcare-dashboard",
    title: "Healthcare Analytics Dashboard",
    category: "UI/UX",
    description: "Intuitive dashboard for healthcare professionals with real-time patient monitoring",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop&crop=center",
    technologies: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL", "Docker"],
    client: "MedTech Solutions",
    testimonial:
      "DevTeen's dashboard has revolutionized how we analyze patient data. The intuitive design saves us hours every day.",
    duration: "5 months",
    results: ["60% reduction in data analysis time", "95% user satisfaction rate"],
    rating: 4.7,
  },
  {
    id: 4,
    slug: "ai-content-generator",
    title: "AI Content Generator",
    category: "AI",
    description: "Advanced AI-powered content creation platform with natural language processing",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center",
    technologies: ["Python", "TensorFlow", "OpenAI API", "React", "Node.js", "MongoDB", "AWS"],
    client: "ContentCorp",
    testimonial:
      "The AI content generator from DevTeen has transformed our content marketing strategy. The quality is consistently impressive.",
    duration: "7 months",
    results: ["500% increase in content output", "80% reduction in content creation time"],
    rating: 4.9,
  },
  {
    id: 5,
    slug: "fintech-web-app",
    title: "FinTech Web Application",
    category: "Web",
    description: "Secure financial management platform with bank-level security and real-time market data",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop&crop=center",
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "AWS", "Kubernetes"],
    client: "FinanceFlow Inc.",
    testimonial:
      "DevTeen delivered a world-class fintech platform that our users love. The security and user experience are exceptional.",
    duration: "8 months",
    results: ["$50M+ in managed assets", "99.99% uptime achieved"],
    rating: 5.0,
  },
  {
    id: 6,
    slug: "social-media-app",
    title: "Social Media Mobile App",
    category: "Mobile",
    description: "Next-generation social networking platform focusing on authentic connections",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=center",
    technologies: ["Flutter", "Node.js", "GraphQL", "MongoDB", "Redis", "AWS", "TensorFlow"],
    client: "SocialConnect",
    testimonial:
      "DevTeen created a social platform that truly prioritizes user well-being. The engagement metrics speak for themselves.",
    duration: "9 months",
    results: ["1M+ downloads in 6 months", "4.9/5 app store rating"],
    rating: 4.9,
  },
]

const categories = ["All", "Web", "Mobile", "UI/UX", "AI"]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
   <PageTransition>
  <div className="min-h-screen bg-gradient-to-br from-[#ffffff] via-[#f9f9f9] to-[#e8fdf9] py-20 px-4">
    <div className="container mx-auto max-w-7xl">
      {/* Header */}
      <ScrollReveal>
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#1ABC9C] to-[#0A2342] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Projects
          </motion.h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successful projects across web development, mobile apps, UI/UX design, and AI
            solutions. Each project represents our commitment to excellence and innovation.
          </p>
        </div>
      </ScrollReveal>

      {/* Filter Buttons */}
      <ScrollReveal delay={0.2}>
        <div className="flex flex-col items-center gap-4 mb-16">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <Filter className="h-4 w-4" />
            Filter by category:
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.div 
                key={category} 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`transition-all duration-200 ${
                    selectedCategory === category 
                      ? "shadow-lg bg-gradient-to-r from-[#1ABC9C] to-[#0A2342] text-white" 
                      : "text-gray-600"
                  }`}
                >
                  {category}
                  {selectedCategory === category && (
                    <motion.span 
                      className="ml-1"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring" }}
                    >
                      ✓
                    </motion.span>
                  )}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="relative"
            >
              {/* Glow effect on hover */}
              {hoveredProject === project.id && (
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#1ABC9C]/20 to-[#0A2342]/20 rounded-xl blur-md -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
              
              <Card className="group hover:shadow-xl hover:border-[#1ABC9C]/40 transition-all duration-300 border-gray-200 overflow-hidden h-full flex flex-col bg-white">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Badge variant="secondary" className="bg-white/90 text-gray-800 shadow-sm">
                      {project.category}
                    </Badge>
                    <Badge variant="default" className="flex items-center gap-1 bg-gradient-to-r from-[#1ABC9C]/20 to-[#0A2342]/20 text-[#0A2342]">
                      <Star className="h-3 w-3 fill-[#0A2342]" />
                      {project.rating}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="flex-grow px-4">
                  <CardTitle className="text-xl bg-gradient-to-r from-[#1ABC9C] to-[#0A2342] bg-clip-text text-transparent group-hover:opacity-90 transition-all duration-300">
                    {project.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600 leading-relaxed mt-2 line-clamp-2">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4 pt-0">
                  {/* Technologies with Icons */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <motion.div 
                        key={tech} 
                        className="flex items-center gap-1.5"
                        whileHover={{ scale: 1.05 }}
                      >
                        <TechIcon tech={tech} className="h-4 w-4 text-[#1ABC9C]" />
                        <Badge variant="outline" className="text-xs font-medium">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 4} more
                      </Badge>
                    )}
                  </div>

                  {/* Project Stats */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4 text-[#1ABC9C]" />
                      <span>Duration:</span>
                      <span className="font-medium text-gray-900 ml-auto">{project.duration}</span>
                    </div>
                    <div className="space-y-2">
                      {project.results.slice(0, 2).map((result, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <TrendingUp className="h-4 w-4 text-[#0A2342]" />
                          <span className="text-gray-600">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      asChild 
                      className="w-full mt-4 hover:shadow-md transition-all duration-200 bg-gradient-to-r from-[#1ABC9C] to-[#0A2342] text-white"
                    >
                      <Link href={`/projects/${project.slug}`}>
                        View Project Details
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  </div>
</PageTransition>

  )
}
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import { Target, Eye, Heart, Award, Users, Calendar, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// const teamMembers = [
//   {
//     name: "Alex Rodriguez",
//     role: "Founder & CEO",
//     bio: "Full-stack developer with 10+ years of experience building scalable web applications. Passionate about creating innovative solutions that drive business growth.",
//     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
//     social: {
//       linkedin: "https://linkedin.com/in/alexrodriguez",
//       twitter: "https://twitter.com/alexrodriguez",
//       github: "https://github.com/alexrodriguez",
//     },
//   },
//   {
//     name: "Sarah Chen",
//     role: "Lead Designer",
//     bio: "UI/UX designer specializing in user-centered design and brand identity. Creates beautiful, functional interfaces that users love to interact with.",
//     image: "https://images.unsplash.com/photo-1494790108755-2616b612b780?w=300&h=300&fit=crop&crop=face",
//     social: {
//       linkedin: "https://linkedin.com/in/sarahchen",
//       twitter: "https://twitter.com/sarahchen",
//       website: "https://sarahchen.design",
//     },
//   },
//   {
//     name: "Marcus Johnson",
//     role: "Senior Developer",
//     bio: "Mobile and web developer with expertise in React Native, Flutter, and modern web technologies. Loves solving complex technical challenges.",
//     image: "https://images.unsplash.com/photo-1472099645785-5658abf48d80?w=300&h=300&fit=crop&crop=face",
//     social: {
//       linkedin: "https://linkedin.com/in/marcusjohnson",
//       github: "https://github.com/marcusjohnson",
//     },
//   },
//   {
//     name: "Emily Davis",
//     role: "AI Specialist",
//     bio: "Machine learning engineer and AI researcher. Specializes in implementing AI solutions that provide real business value and competitive advantages.",
//     image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
//     social: {
//       linkedin: "https://linkedin.com/in/emilydavis",
//       twitter: "https://twitter.com/emilydavis",
//       github: "https://github.com/emilydavis",
//     },
//   },
// ]

// const technologies = [
//   { name: "React", category: "Frontend" },
//   { name: "Next.js", category: "Frontend" },
//   { name: "TypeScript", category: "Language" },
//   { name: "Node.js", category: "Backend" },
//   { name: "Python", category: "Backend" },
//   { name: "PostgreSQL", category: "Database" },
//   { name: "MongoDB", category: "Database" },
//   { name: "AWS", category: "Cloud" },
//   { name: "Docker", category: "DevOps" },
//   { name: "React Native", category: "Mobile" },
//   { name: "Flutter", category: "Mobile" },
//   { name: "TensorFlow", category: "AI/ML" },
//   { name: "OpenAI API", category: "AI/ML" },
//   { name: "Figma", category: "Design" },
//   { name: "Tailwind CSS", category: "Styling" },
// ]

// const achievements = [
//   {
//     icon: Users,
//     number: "50+",
//     label: "Happy Clients",
//     description: "Businesses we've helped grow",
//   },
//   {
//     icon: Award,
//     number: "100+",
//     label: "Projects Completed",
//     description: "Successful deliveries",
//   },
//   {
//     icon: Calendar,
//     number: "5+",
//     label: "Years Experience",
//     description: "In the industry",
//   },
//   {
//     icon: Globe,
//     number: "15+",
//     label: "Countries Served",
//     description: "Global reach",
//   },
// ]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F0FDF9] via-[#E8F5FF] to-[#F8FAFC] py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#1ABC9C] to-[#0A2342] bg-clip-text text-transparent">
            About The DevTeen
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We&apos;re a passionate team of developers, designers, and innovators dedicated to transforming ideas into
            exceptional digital experiences that drive business success.
          </p>
        </div>

        {/* Our Story */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#1ABC9C] to-[#0A2342] bg-clip-text text-transparent">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2019, DevTeen started as a small team of passionate teenage developers who believed that
                  great software should be accessible to businesses of all sizes. What began as a side project has grown
                  into a full-service digital agency serving clients worldwide.
                </p>
                <p>
                  Our journey has been driven by a simple philosophy: combine cutting-edge technology with
                  human-centered design to create solutions that not only work flawlessly but also delight users and
                  drive business growth.
                </p>
                <p>
                  Today, we&apos;re proud to have helped over 50 businesses transform their digital presence, from startups
                  launching their first product to established companies modernizing their technology stack.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&crop=center"
                alt="DevTeen team collaboration"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-all duration-300 border-border/50">
              <CardHeader className="pt-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#1ABC9C]/10 to-[#0A2342]/10 rounded-lg flex items-center justify-center mx-auto mb-4 pt-4">
                  <Target className="h-8 w-8 text-[#1ABC9C]" />
                </div>
                <CardTitle className="text-xl font-bold bg-gradient-to-r from-[#1ABC9C] to-[#0A2342] bg-clip-text text-transparent">
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  To empower businesses with innovative digital solutions that drive growth, enhance user experiences,
                  and create lasting competitive advantages in the digital landscape.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 border-border/50">
              <CardHeader className="pt-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#1ABC9C]/10 to-[#0A2342]/10 rounded-lg flex items-center justify-center mx-auto mb-4 pt-4">
                  <Eye className="h-8 w-8 text-[#0A2342]" />
                </div>
                <CardTitle className="text-xl font-bold bg-gradient-to-r from-[#1ABC9C] to-[#0A2342] bg-clip-text text-transparent">
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  To be the leading digital agency that bridges the gap between cutting-edge technology and
                  human-centered design, making advanced digital solutions accessible to all.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 border-border/50">
              <CardHeader className="pt-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#1ABC9C]/10 to-[#0A2342]/10 rounded-lg flex items-center justify-center mx-auto mb-4 ">
                  <Heart className="h-8 w-8 text-[#1ABC9C]" />
                </div>
                <CardTitle className="text-xl font-bold bg-gradient-to-r from-[#1ABC9C] to-[#0A2342] bg-clip-text text-transparent">
                  Our Values
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Innovation, integrity, and collaboration guide everything we do. We believe in transparent
                  communication, continuous learning, and delivering exceptional value to our clients.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center py-16 bg-gradient-to-r from-[#1ABC9C]/10 to-[#0A2342]/10 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#1ABC9C] to-[#0A2342] bg-clip-text text-transparent">
            Ready to Work With Us?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our team can help bring your vision to life with our expertise and passion for excellence.
          </p>
          <Button
            size="lg"
            className="text-lg px-10 py-6 bg-gradient-to-r from-[#1ABC9C] to-[#0A2342] hover:from-[#20c997] hover:to-[#081a33] text-white font-semibold rounded-xl shadow-2xl hover:shadow-[#1ABC9C]/30 hover:scale-105 transition-all duration-300 animate-pulse-glow "
            asChild
          >
            <Link href="/contact">

              Get In Touch

            </Link>
          </Button>
        </div>
      </div>
    </div>

  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,

  CheckCircle,
  Clock,
  Shield,
  Rocket,
  Globe,
  Lightbulb,
} from "lucide-react"

import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import { PageTransition } from "@/components/page-transition"
import { motion } from "framer-motion"
import { TechIcon } from "@/components/tech-icons"
import { CounterAnimation } from "@/components/counter-animation"
import { FloatingCTA } from "@/components/floating-cta"
import Image from "next/image"

const services = [
  {
    image: "/images/webdev.jpg",
    title: "Web Development & Applications",
    description:
      "High-performance and scalable websites or web apps tailored to your business needs.",
    points: [
      "Responsive, SEO-optimized, and mobile-friendly designs",
      "Secure coding practices with modern frameworks",
      "Custom solutions from corporate sites to enterprise-grade platforms",
    ],
  },
  {
    image: "/images/mobile.jpg",
    title: "Mobile App Development",
    description:
      "Robust native and cross-platform mobile solutions with seamless performance and UI/UX design.",
    points: [
      "Native iOS & Android apps",
      "Cross-platform with Flutter & React Native",
      "User-friendly and high-performance designs",
    ],
  },
  {
    image: "/images/landing.jpg",
    title: "Landing Page Design",
    description:
      "Visually compelling, conversion-focused landing pages crafted for maximum business impact.",
    points: [
      "Custom UI/UX with engaging visuals",
      "Optimized for conversions",
      "Fast delivery with animations",
    ],
  },
  {
    image: "/images/ai.jpg",
    title: "AI-Powered Solutions",
    description:
      "Custom AI integrations to automate workflows, enhance decision-making, and boost efficiency.",
    points: [
      "Chatbots & virtual assistants",
      "Predictive analytics & automation",
      "Computer vision & NLP solutions",
    ],
  },
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut" as const,
    },
  },
}

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "Flask",
  "Django",
  "MongoDB",
  "PostgreSQL",
  "Sass",
  "Flutter",
  "React Native",
  "Material-UI",
  "AWS",
  "Docker",
  "GitHub",
  "GraphQL",
  "TailwindCSS",
  "Angular",
  "Express",
  "FastAPI",
  "Firebase",
  "Figma",
  "Supabase",
  "Bootstrap",
  "HTML",
  "CSS",
  "JavaScript",
  "PHP",
  "MySQL",
  "Laravel",
]

export default function HomePage() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#0A2342] via-[#081a33] to-[#0A2342] py-24 px-4">
          {/* Background Floating Blobs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#1ABC9C]/20 rounded-full blur-3xl animate-float" />
            <div
              className="absolute top-3/4 right-1/4 w-96 h-96 bg-[#0A2342]/40 rounded-full blur-3xl animate-float"
              style={{ animationDelay: "2s" }}
            />
            <div
              className="absolute top-1/2 left-1/2 w-48 h-48 bg-[#20c997]/30 rounded-full blur-3xl animate-float"
              style={{ animationDelay: "4s" }}
            />
          </div>

          <div className="container mx-auto max-w-6xl text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.25, 0.25, 0.75] }}
            >
              {/* 🔹 Tagline Centered */}
              <div className="flex justify-center mb-6">
                <div className="group relative flex max-w-fit flex-row items-center justify-center rounded-2xl px-5 py-[6px] whitespace-nowrap text-sm sm:text-lg font-medium shadow-[inset_0_-8px_10px_#0A2342] backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#0A2342] dark:bg-black/40">
                  <div className="absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#1ABC9C]/60 via-[#0A2342]/60 to-[#1ABC9C]/60 bg-[length:var(--bg-size)_100%] p-[1px] ![mask-composite:subtract] rounded-2xl [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]"></div>
                  <span className="relative bg-gradient-to-r from-teal-400 to-teal-200 bg-clip-text text-transparent tracking-tight">
                    Innovative Solutions, Seamless Experience
                  </span>
                </div>
              </div>

              {/* 🔹 Heading with extra gap below tagline */}
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight font-display">
                Futuremap Your Digital Vision with Next-Gen Technology
                <motion.span
                  className="block mt-2 bg-gradient-to-r from-[#1ABC9C] to-[#0A2342] bg-clip-text text-transparent"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                </motion.span>
              </h1>


              {/* 🔹 Paragraph with more gap */}
              <motion.p
                className="font-primary text-white text-center text-[1rem]  leading-6 sm:text-[27px]  mb-8 sm:leading-10 w-[80vw] font-Lexend"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                From Concept to Execution: Shaping the Future of Businesses
              </motion.p>


              {/* 🔹 CTAs */}
              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {/* Primary CTA */}
                <Button
                  size="lg"
                  className="text-lg px-10 py-6 bg-gradient-to-r from-[#1ABC9C] to-[#0A2342] hover:from-[#20c997] hover:to-[#081a33] text-white font-semibold rounded-xl shadow-2xl hover:shadow-[#1ABC9C]/30 hover:scale-105 transition-all duration-300 animate-pulse-glow border border-[#1ABC9C]/20"
                  asChild
                >
                  <Link href="/contact">
                    
                    Get In Touch
                    
                  </Link>
                </Button>

                
              </motion.div>
            </motion.div>
          </div>

        </section>

        {/* Tech Stack Section */}
        <section className="py-16 bg-gradient-to-r from-white via-gray-50 to-gray-100 overflow-hidden border-b border-gray-200">
          <div className="container mx-auto max-w-6xl mb-12">
            <ScrollReveal>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-800 mb-3 font-display">Technologies We Master</h3>
                <p className="text-lg text-gray-600">
                  Cutting-edge tools and frameworks we use to build exceptional solutions
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="relative">
            <div className="flex animate-marquee space-x-8">
              {[...techStack, ...techStack].map((tech, index) => (
                <div
                  key={`${tech}-${index}`}
                  className="flex items-center space-x-3 bg-white/70 backdrop-blur-sm rounded-xl px-6 py-4 shadow-md border border-gray-200 whitespace-nowrap hover:shadow-xl hover:scale-105 transition-all duration-300 group"
                >
                  {/* Colored Icon */}
                  <TechIcon
                    tech={tech}
                    className="w-7 h-7 transition-colors"
                  // 👈 pass colored prop so icons show brand color
                  />
                  <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Services Section */}
        <section className="py-30 px-8 bg-gradient-to-b from-white via-gray-50 to-gray-100 border-b border-gray-200">
          <div className="container mx-auto max-w-7xl">
            <ScrollReveal>
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-display">
                  Our Expertise
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  From concept to deployment, we deliver comprehensive digital solutions that drive growth and
                  innovation.
                </p>
              </div>
            </ScrollReveal>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-4 gap-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {services.map((service) => (
                <motion.div key={service.title} variants={itemVariants}>
                  <Card className="group hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-gray-200 shadow-lg bg-white h-full overflow-hidden hover:bg-gray-50">
                    <CardHeader className="text-center pb-4">
                      <motion.div className=" w-full h-full rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-300">
                        <Image
                          src={service.image}
                          alt={service.title}
                          width={400}
                          height={320}
                          className="w-full h-80 object-cover "
                        />
                      </motion.div>
                      <CardTitle className="text-2xl pt-3 font-bold text-gray-800 font-display">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-justify text-gray-600 text-base leading-relaxed">
                        {service.description}
                      </div>
                      <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2 text-base">
                        {service.points.map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* {Stats Section} */}
        <section className="relative py-20 bg-gradient-to-b from-white via-gray-50 to-gray-100 border-b border-gray-200 overflow-hidden">
          <motion.div
            className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Happy Clients */}
            <motion.div
              className="p-10 rounded-2xl bg-white/70 backdrop-blur-md border border-gray-200 hover:border-cyan-300 hover:shadow-cyan-200/50 hover:shadow-xl transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <h2 className="text-6xl font-extrabold text-cyan-500 drop-shadow-sm">
                <CounterAnimation end={50} duration={2500} suffix="+" />
              </h2>
              <p className="mt-4 text-xl font-semibold text-gray-700 tracking-wide">
                Happy Clients
              </p>
            </motion.div>

            {/* Projects Completed */}
            <motion.div
              className="p-10 rounded-2xl bg-white/70 backdrop-blur-md border border-gray-200 hover:border-pink-300 hover:shadow-pink-200/50 hover:shadow-xl transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <h2 className="text-6xl font-extrabold text-pink-500 drop-shadow-sm">
                <CounterAnimation end={60} duration={2500} suffix="+" />
              </h2>
              <p className="mt-4 text-xl font-semibold text-gray-700 tracking-wide">
                Projects Completed
              </p>
            </motion.div>

            {/* Client Satisfaction */}
            <motion.div
              className="p-10 rounded-2xl bg-white/70 backdrop-blur-md border border-gray-200 hover:border-yellow-300 hover:shadow-yellow-200/50 hover:shadow-xl transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <h2 className="text-6xl font-extrabold text-yellow-500 drop-shadow-sm">
                <CounterAnimation end={99} duration={2500} suffix="%" />
              </h2>
              <p className="mt-4 text-xl font-semibold text-gray-700 tracking-wide">
                Client Satisfaction
              </p>
            </motion.div>
          </motion.div>

          {/* Decorative gradient blur background */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-cyan-300/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-pink-300/20 rounded-full blur-3xl" />
        </section>



        {/* Features Section */}
        <section className="py-24 px-4 bg-gradient-to-br from-white via-gray-50 to-gray-100 border-b border-gray-200">
          <div className="container mx-auto max-w-7xl">
            <ScrollReveal>
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-display">
                  Why Choose Us?
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  We combine technical expertise with creative innovation to deliver solutions that exceed expectations
                </p>
              </div>
            </ScrollReveal>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {[
                {
                  icon: CheckCircle,
                  title: "Proven Track Record",
                  description: "100+ successful projects delivered with 98% client satisfaction rate",
                  gradient: "from-green-500 to-emerald-500",
                },
                {
                  icon: Clock,
                  title: "On-Time Delivery",
                  description: "We respect deadlines and deliver projects on schedule without compromising quality",
                  gradient: "from-blue-500 to-indigo-500",
                },
                {
                  icon: Shield,
                  title: "Quality Assurance",
                  description: "Rigorous testing and quality checks ensure bug-free, reliable solutions",
                  gradient: "from-purple-500 to-violet-500",
                },
                {
                  icon: Lightbulb,
                  title: "Innovation First",
                  description: "We use the latest technologies and best practices to future-proof your solutions",
                  gradient: "from-yellow-500 to-orange-500",
                },
              ].map((feature) => {
                const Icon = feature.icon
                return (
                  <motion.div key={feature.title} variants={itemVariants}>
                    <Card className="group hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-gray-200 shadow-lg bg-white h-full hover:bg-gray-50">
                      <CardHeader className="text-center pb-4">
                        <motion.div
                          className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md group-hover:shadow-lg transition-all duration-300`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Icon className="h-10 w-10 text-white" />
                        </motion.div>
                        <CardTitle className="text-2xl font-bold text-gray-800 font-display">
                          {feature.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-justify text-gray-600 text-base leading-relaxed">
                          {feature.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        <FloatingCTA />
      </div>
    </PageTransition>
  )
}
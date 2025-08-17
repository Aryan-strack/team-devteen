"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Code2, Mail, Phone, MapPin, ArrowRight } from "lucide-react"

const footerLinks = {
  services: [
    { name: "Web Development", href: "/pricing" },
    { name: "Mobile Apps", href: "/pricing" },
    { name: "Web Apps", href: "/pricing" },
    { name: "Landing Pages", href: "/pricing" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about" },
    { name: "Careers", href: "/contact" },
    { name: "Contact", href: "/contact" },
  ],

}

// const socialLinks = [
//   { name: "LinkedIn", href: "https://linkedin.com/company/devteen",  },
//   { name: "Twitter", href: "https://twitter.com/devteen",  },
//   { name: "GitHub", href: "https://github.com/devteen",  },
//   { name: "Instagram", href: "https://instagram.com/devteen",  },
// ]

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto max-w-7xl px-4 pt-12 pb-4">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Code2 className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">DevTeen Technologies</span>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span>123 Innovation Drive, San Francisco, CA</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span>hello@devteen.com</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

           
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-foreground mb-4">Stay Updated</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe to our newsletter for the latest updates, insights, and industry trends.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
              />
              <Button type="submit" className="w-full" size="sm">
                {isSubscribed ? "Subscribed!" : "Subscribe"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>

            {/* Social Links */}
            {/* <div className="mt-6">
              <h4 className="font-medium text-foreground mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <Button key={social.name} variant="outline" size="sm" asChild>
                      <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                        <Icon className="h-4 w-4" />
                      </a>
                    </Button>
                  )
                })}
              </div>
            </div> */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-4 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} DevTeen. All rights reserved.</p>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

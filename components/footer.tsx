"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"

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
    <footer className="bg-white">
      <div className="container mx-auto max-w-7xl px-4 pt-12 pb-4">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10  flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="DevTeen Logo"
                  width={60}
                  height={60}
                  className="object-cover w-10 h-10"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-[#1ABC9C] to-[#0A2342] bg-clip-text text-transparent">
                DevTeen Technologies
              </span>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin className="h-4 w-4 text-[#1ABC9C]" />
                <span>123 Innovation Drive, San Francisco, CA</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Phone className="h-4 w-4 text-[#1ABC9C]" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail className="h-4 w-4 text-[#1ABC9C]" />
                <span>hello@devteen.com</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-4 bg-gradient-to-r from-[#1ABC9C] to-[#0A2342] bg-clip-text text-transparent">
                Services
              </h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:bg-gradient-to-r hover:from-[#1ABC9C] hover:to-[#0A2342] hover:bg-clip-text hover:text-transparent transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 bg-gradient-to-r from-[#1ABC9C] to-[#0A2342] bg-clip-text text-transparent">
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:bg-gradient-to-r hover:from-[#1ABC9C] hover:to-[#0A2342] hover:bg-clip-text hover:text-transparent transition-colors text-sm"
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
            <h3 className="font-semibold mb-4 bg-gradient-to-r from-[#1ABC9C] to-[#0A2342] bg-clip-text text-transparent">
              Stay Updated
            </h3>
            <p className="text-gray-600 text-sm mb-4">
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
              <Button type="submit" className="w-full bg-gradient-to-r from-[#1ABC9C] to-[#0A2342] text-white" size="sm">
                {isSubscribed ? "Subscribed!" : "Subscribe"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-4 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} DevTeen. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link
              href="/privacy"
              className="text-gray-500 hover:bg-gradient-to-r hover:from-[#1ABC9C] hover:to-[#0A2342] hover:bg-clip-text hover:text-transparent transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-500 hover:bg-gradient-to-r hover:from-[#1ABC9C] hover:to-[#0A2342] hover:bg-clip-text hover:text-transparent transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-gray-500 hover:bg-gradient-to-r hover:from-[#1ABC9C] hover:to-[#0A2342] hover:bg-clip-text hover:text-transparent transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

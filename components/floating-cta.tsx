"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsVisible(true) // scroll down → show
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(false) // scroll up → hide
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed bottom-4 inset-x-0 flex justify-center px-4 z-50"
        >
          <div className="w-full max-w-3xl bg-white border border-gray-200 rounded-2xl shadow-2xl px-4 sm:px-6 py-3 flex flex-col sm:flex-row items-center sm:justify-between gap-3 sm:gap-4 backdrop-blur-md">

            {/* Logo + Tagline */}
            <div className="flex items-center gap-2 text-center sm:text-left">
              <Image
                src="/logo.png"
                alt="DevTeen Logo"
                width={36}
                height={36}
                className="rounded-md"
              />
              <p className="text-sm text-gray-700">
                Giving{" "}
                <span className="bg-gradient-to-r from-[#1ABC9C] to-[#0A2342] bg-clip-text text-transparent font-semibold">
                  Client
                </span>{" "}
                their time back.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-2 sm:gap-3 w-full sm:w-auto justify-center">
              <Button
                size="sm"
                className="flex-1 sm:flex-none bg-gradient-to-r from-[#1ABC9C] to-[#0A2342] text-white hover:opacity-90 transition-all"
                asChild
              >
                <Link href="/services">Pricing</Link>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex-1 sm:flex-none border border-gray-300 bg-gradient-to-r from-[#1ABC9C] to-[#0A2342] bg-clip-text text-transparent hover:opacity-80 transition-all duration-300"
                asChild
              >
                <a
                  href="https://calendly.com/devteen11/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Call
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default FloatingCTA

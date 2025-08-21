import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "DevTeen - Software Development Services",
  description:
    "Leading software development agency specializing in web development, mobile apps, UI/UX design, and AI solutions. Transform your ideas into powerful digital experiences.",
  generator: "v0.app",
  keywords: "software development, web development, mobile apps, UI/UX design, AI solutions, startup agency",
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" type="image/png" href="/logo.png" sizes="32x32" />
        <meta name="theme-color" content="#1e293b" />
      </head>
      <body className="font-sans antialiased">
        <Navigation />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

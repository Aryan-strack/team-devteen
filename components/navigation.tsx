"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Code2 } from "lucide-react";
import Image from "next/image";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-navy/70 backdrop-blur-md border-b border-teal/40 shadow-lg"
          : "bg-navy border-b border-teal/20"
        }`}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 rounded-md"
          >
            <div className="relative w-16 h-16 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/logo.png"
                alt="DevTeen Logo"
                width={60}
                height={60}
                className="object-cover w-16 h-16"
              />
            </div>
            <span className="text-[18px] font-bold bg-gradient-to-r from-[#1ABC9C] to-[#0A2342] bg-clip-text text-transparent tracking-tight">
              DevTeen <br /> Technologies
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-2 py-1 text-sm font-medium tracking-wide transition-all duration-200 group
        ${isActive(item.href)
                    ? "bg-gradient-to-r from-[#1ABC9C] to-[#0A2342] bg-clip-text text-transparent font-semibold"
                    : "text-gray-600 hover:bg-gradient-to-r hover:from-[#1ABC9C] hover:to-[#0A2342] hover:bg-clip-text hover:text-transparent"
                  }
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 rounded-md`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-0.5 left-2 h-0.5 bg-gradient-to-r from-[#1ABC9C] to-[#0A2342] transition-all duration-300 
          ${isActive(item.href)
                      ? "w-[calc(100%-1rem)]"
                      : "w-0 group-hover:w-[calc(100%-1rem)]"
                    }`}
                />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Button
              className="relative overflow-hidden rounded-md px-5 py-2 font-medium text-white bg-gradient-to-r from-[#1ABC9C] to-[#0A2342] hover:from-[#16a085] hover:to-[#081a33] transition-all duration-300 shadow-lg hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-teal-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 text-gray-200"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[280px] sm:w-[350px] bg-gradient-to-b from-[#0A2342] to-[#081a33] backdrop-blur-xl border-l border-[#1ABC9C]/30"
            >
              <div className="flex flex-col h-full">
                <div className="flex flex-col space-y-8 pt-8 pb-6">
                  {/* Mobile Logo */}
                  <div className="flex items-center space-x-2 px-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#1ABC9C] to-[#20c997] rounded-lg flex items-center justify-center shadow-md">
                      <Code2 className="h-4 w-4 text-[#0A2342]" />
                    </div>
                    <span className="text-xl font-bold bg-gradient-to-r from-[#1ABC9C] to-[#0A2342] bg-clip-text text-transparent">
                      DevTeen
                    </span>
                  </div>

                  {/* Mobile Nav */}
                  <nav className="flex flex-col space-y-1">
                    {navigationItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`px-4 py-2.5 text-base font-medium transition-all duration-200 rounded-md mx-2
                ${isActive(item.href)
                            ? "bg-gradient-to-r from-[#1ABC9C]/20 to-[#0A2342]/40 text-[#1ABC9C] font-semibold"
                            : "text-gray-200 hover:text-white hover:bg-gradient-to-r hover:from-[#1ABC9C]/10 hover:to-[#0A2342]/30"
                          } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </div>

                {/* Contact Button */}
                <div className="mt-auto p-4">
                  <Button
                    className="w-full bg-gradient-to-r from-[#1ABC9C] to-[#0A2342] hover:from-[#20c997] hover:to-[#081a33] text-white font-medium py-3 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2"
                    asChild
                  >
                    <Link
                      href="/contact"
                      onClick={() => setIsOpen(false)}
                      className="focus-visible:outline-none"
                    >
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>

        </div>
      </div>
    </header>
  );
}

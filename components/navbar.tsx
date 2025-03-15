"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Brain, Menu, X } from "lucide-react"
import { motion } from "framer-motion"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "About", href: "/about" },
    { name: "Teams", href: "/teams" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="flex items-center space-x-2">
            <Brain className="h-6 w-6 text-turquoise-500" />
            <span className="text-2xl font-bold text-turquoise-900">Memoright</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-turquoise-500 ${
                  pathname === item.href ? "text-turquoise-500" : "text-turquoise-700"
                }`}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        <motion.div
          className="hidden md:flex gap-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button variant="ghost" asChild className="text-turquoise-700 hover:text-turquoise-500 hover:bg-turquoise-50">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild className="bg-turquoise-500 text-white hover:bg-turquoise-600">
            <Link href="/register">Get Started</Link>
          </Button>
        </motion.div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-turquoise-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-turquoise-500 ${
                  pathname === item.href ? "text-turquoise-500" : "text-turquoise-700"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t border-turquoise-100">
              <Button
                variant="ghost"
                asChild
                className="text-turquoise-700 hover:text-turquoise-500 hover:bg-turquoise-50"
              >
                <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                  Login
                </Link>
              </Button>
              <Button asChild className="bg-turquoise-500 text-white hover:bg-turquoise-600">
                <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}


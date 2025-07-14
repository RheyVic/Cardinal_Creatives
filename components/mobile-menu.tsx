"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="sm" onClick={toggleMenu} className="p-2">
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg z-50">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="/"
              className="block text-gray-700 hover:text-[#00d4d0] transition-colors py-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-[#00d4d0] transition-colors py-2"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/services"
              className="block text-gray-700 hover:text-[#00d4d0] transition-colors py-2"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="block text-gray-700 hover:text-[#00d4d0] transition-colors py-2"
              onClick={toggleMenu}
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className="block text-gray-700 hover:text-[#00d4d0] transition-colors py-2"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link href="/contact" onClick={toggleMenu}>
              <Button className="w-full bg-[#00d4d0] text-gray-900 hover:bg-[#00d4d0]/90 mt-4">Get Started</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

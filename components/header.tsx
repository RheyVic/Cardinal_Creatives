'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { MobileMenu } from '@/components/mobile-menu'

export function Header() {
  const pathname = usePathname()
  
  return (
    <nav className="border-b border-gray-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/Logo.png" 
              alt="Cardinal Creatives Logo" 
              width={32} 
              height={32}
              className="h-8 w-8"
            />
            <span className="text-xl font-bold text-gray-900">Cardinal Creatives</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={pathname === '/' ? 'text-[#00d4d0] font-medium' : 'text-gray-700 hover:text-[#00d4d0] transition-colors'}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={pathname === '/about' ? 'text-[#00d4d0] font-medium' : 'text-gray-700 hover:text-[#00d4d0] transition-colors'}
            >
              About
            </Link>
            <Link 
              href="/services" 
              className={pathname === '/services' ? 'text-[#00d4d0] font-medium' : 'text-gray-700 hover:text-[#00d4d0] transition-colors'}
            >
              Services
            </Link>
            <Link 
              href="/portfolio" 
              className={pathname === '/portfolio' ? 'text-[#00d4d0] font-medium' : 'text-gray-700 hover:text-[#00d4d0] transition-colors'}
            >
              Portfolio
            </Link>
            <Link 
              href="/contact" 
              className={pathname === '/contact' ? 'text-[#00d4d0] font-medium' : 'text-gray-700 hover:text-[#00d4d0] transition-colors'}
            >
              Contact
            </Link>
          </div>
          <div className="hidden md:block">
            <Link href="/contact">
              <Button className="bg-[#00d4d0] text-gray-900 hover:bg-[#00d4d0]/90">Get Started</Button>
            </Link>
          </div>
          <MobileMenu />
        </div>
      </div>
    </nav>
  )
}
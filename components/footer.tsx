import Link from 'next/link'
import { Palette } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-[#00d4d0] rounded-lg flex items-center justify-center">
                <Palette className="w-5 h-5 text-gray-900" />
              </div>
              <span className="text-xl font-bold">Cardinal Creatives</span>
            </div>
            <p className="text-gray-400">Creating exceptional visual experiences that inspire and engage.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/services" className="hover:text-[#00d4d0] transition-colors">Brand Identity</Link></li>
              <li><Link href="/services" className="hover:text-[#00d4d0] transition-colors">Logo Design</Link></li>
              <li><Link href="/services" className="hover:text-[#00d4d0] transition-colors">Print Design</Link></li>
              <li><Link href="/services" className="hover:text-[#00d4d0] transition-colors">Digital Graphics</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-[#00d4d0] transition-colors">About Us</Link></li>
              <li><Link href="/portfolio" className="hover:text-[#00d4d0] transition-colors">Portfolio</Link></li>
              <li><Link href="/contact" className="hover:text-[#00d4d0] transition-colors">Contact</Link></li>
              <li><Link href="/about" className="hover:text-[#00d4d0] transition-colors">Partnership</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Partner</h4>
            <p className="text-gray-400 mb-2">Galadevs</p>
            <p className="text-sm text-gray-500">
              Digital solutions, software development, web development & prototyping
            </p>
            <Link 
              href="https://galadevs.software" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#00d4d0] hover:text-[#00d4d0]/80 transition-colors text-sm"
            >
              Visit Galadevs →
            </Link>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Cardinal Creatives. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { Palette, Printer, Monitor, Package, Smartphone, Globe, Code, Layers } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-[#00d4d0]">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            From brand identity to digital experiences, we offer comprehensive design solutions that elevate your
            business and connect with your audience.
          </p>
        </div>
      </section>

      {/* Design Services */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Design Services</h2>
            <p className="text-xl text-gray-600">Creative solutions that make an impact</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-[#00d4d0] rounded-lg flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-gray-900" />
                </div>
                <CardTitle className="text-xl">Brand Identity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Complete brand identity packages including logo design, color palettes, typography, and brand
                  guidelines.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Logo Design & Variations</li>
                  <li>• Brand Guidelines</li>
                  <li>• Color Palette Development</li>
                  <li>• Typography Selection</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-[#00d4d0] rounded-lg flex items-center justify-center mb-4">
                  <Printer className="w-6 h-6 text-gray-900" />
                </div>
                <CardTitle className="text-xl">Print Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Professional print materials that make a lasting impression, from business cards to large format
                  displays.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Business Cards & Stationery</li>
                  <li>• Brochures & Flyers</li>
                  <li>• Posters & Banners</li>
                  <li>• Packaging Design</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-[#00d4d0] rounded-lg flex items-center justify-center mb-4">
                  <Monitor className="w-6 h-6 text-gray-900" />
                </div>
                <CardTitle className="text-xl">Digital Graphics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Eye-catching digital graphics for web, social media, and digital marketing campaigns.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Social Media Graphics</li>
                  <li>• Web Banners & Ads</li>
                  <li>• Email Templates</li>
                  <li>• Digital Illustrations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-[#00d4d0] rounded-lg flex items-center justify-center mb-4">
                  <Package className="w-6 h-6 text-gray-900" />
                </div>
                <CardTitle className="text-xl">Packaging Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Innovative packaging solutions that protect your product and enhance your brand presence.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Product Packaging</li>
                  <li>• Label Design</li>
                  <li>• Box & Container Design</li>
                  <li>• Retail Display Materials</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-[#00d4d0] rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-gray-900" />
                </div>
                <CardTitle className="text-xl">UI/UX Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  User-centered design for websites and mobile applications that deliver exceptional user experiences.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Website UI Design</li>
                  <li>• Mobile App Design</li>
                  <li>• User Experience Research</li>
                  <li>• Wireframing & Prototyping</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-[#00d4d0] rounded-lg flex items-center justify-center mb-4">
                  <Layers className="w-6 h-6 text-gray-900" />
                </div>
                <CardTitle className="text-xl">Creative Consulting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Strategic creative guidance to help you make informed design decisions and maximize impact.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Brand Strategy</li>
                  <li>• Design Audits</li>
                  <li>• Creative Direction</li>
                  <li>• Market Research</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Services */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Partnership Services</h2>
            <p className="text-xl text-gray-600">Complete digital solutions with Galadevs</p>
          </div>
          <div className="bg-gradient-to-r from-[#00d4d0]/10 to-[#00d4d0]/5 rounded-2xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Design + Development</h3>
                <p className="text-gray-600 mb-8">
                  Through our partnership with Galadevs, we offer comprehensive digital solutions that combine our
                  design expertise with their technical prowess. Get everything you need under one roof.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-0 shadow-md">
                    <CardContent className="p-4">
                      <div className="w-8 h-8 bg-[#00d4d0] rounded-lg flex items-center justify-center mb-3">
                        <Globe className="w-4 h-4 text-gray-900" />
                      </div>
                      <h4 className="font-semibold mb-2">Web Development</h4>
                      <p className="text-sm text-gray-600">Responsive websites and web applications</p>
                    </CardContent>
                  </Card>
                  <Card className="border-0 shadow-md">
                    <CardContent className="p-4">
                      <div className="w-8 h-8 bg-[#00d4d0] rounded-lg flex items-center justify-center mb-3">
                        <Code className="w-4 h-4 text-gray-900" />
                      </div>
                      <h4 className="font-semibold mb-2">Software Development</h4>
                      <p className="text-sm text-gray-600">Custom software solutions and applications</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">What's Included:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#00d4d0] rounded-full"></div>
                      <span className="text-gray-600">Complete brand identity design</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#00d4d0] rounded-full"></div>
                      <span className="text-gray-600">UI/UX design and prototyping</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#00d4d0] rounded-full"></div>
                      <span className="text-gray-600">Frontend and backend development</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#00d4d0] rounded-full"></div>
                      <span className="text-gray-600">Responsive web design</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#00d4d0] rounded-full"></div>
                      <span className="text-gray-600">Quality assurance and testing</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#00d4d0] rounded-full"></div>
                      <span className="text-gray-600">Deployment and maintenance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">How we bring your vision to life</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00d4d0] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gray-900">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Discovery</h3>
              <p className="text-gray-600">We learn about your business, goals, and target audience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00d4d0] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gray-900">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Strategy</h3>
              <p className="text-gray-600">We develop a creative strategy aligned with your objectives</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00d4d0] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gray-900">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Design</h3>
              <p className="text-gray-600">We create and refine designs based on your feedback</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00d4d0] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gray-900">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Delivery</h3>
              <p className="text-gray-600">We deliver final assets and provide ongoing support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">Let's discuss your project and create something amazing together</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-[#00d4d0] text-gray-900 hover:bg-[#00d4d0]/90">
                Start Your Project
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="border-[#00d4d0] text-[#00d4d0] hover:bg-[#00d4d0] hover:text-gray-900 bg-transparent"
              >
                View Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

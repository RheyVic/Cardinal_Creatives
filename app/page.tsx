import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { ArrowRight, Palette, Zap, Users, Award } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Creative Design
            <span className="block text-[#00d4d0]">That Inspires</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We craft stunning visual experiences that elevate your brand and captivate your audience. From logos to
            complete brand identities, we bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/portfolio">
              <Button size="lg" className="bg-[#00d4d0] text-gray-900 hover:bg-[#00d4d0]/90">
                View Our Work
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-[#00d4d0] text-[#00d4d0] hover:bg-[#00d4d0] hover:text-gray-900 bg-transparent"
              >
                Start Your Project
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Cardinal Creatives?</h2>
            <p className="text-xl text-gray-600">We deliver exceptional design solutions that drive results</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#00d4d0] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Creative Excellence</h3>
                <p className="text-gray-600">Award-winning designs that stand out from the competition</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#00d4d0] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                <p className="text-gray-600">Quick turnaround times without compromising quality</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#00d4d0] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Collaborative Process</h3>
                <p className="text-gray-600">We work closely with you every step of the way</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#00d4d0] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
                <p className="text-gray-600">Designs that increase engagement and conversions</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-[#00d4d0]/10 to-[#00d4d0]/5 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Powered by Partnership</h2>
              <p className="text-xl text-gray-600 mb-8">
                In collaboration with Galadevs, we offer complete digital solutions
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Cardinal Creatives + Galadevs</h3>
                <p className="text-gray-600 mb-6">
                  Our partnership with Galadevs brings together the best of both worlds - stunning graphic design and
                  cutting-edge digital development. Together, we deliver comprehensive solutions that include:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#00d4d0] rounded-full mr-3"></div>
                    Software Development & Web Applications
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#00d4d0] rounded-full mr-3"></div>
                    Responsive Web Design & Development
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#00d4d0] rounded-full mr-3"></div>
                    UI/UX Design & Prototyping
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#00d4d0] rounded-full mr-3"></div>
                    Complete Brand Identity Solutions
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center">
                      <Image 
                        src="/Logo.png" 
                        alt="Cardinal Creatives Logo" 
                        width={64} 
                        height={64}
                        className="h-16 w-16"
                      />
                    </div>
                    <div className="text-2xl font-bold text-gray-400">+</div>
                    <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center">
                      <span className="text-[#00d4d0] font-bold text-lg">GD</span>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Complete Digital Solutions</h4>
                  <p className="text-gray-600">From concept to deployment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Brand?</h2>
          <p className="text-xl text-gray-300 mb-8">Let's create something amazing together</p>
          <Link href="/contact">
            <Button size="lg" className="bg-[#00d4d0] text-gray-900 hover:bg-[#00d4d0]/90">
              Start Your Project Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

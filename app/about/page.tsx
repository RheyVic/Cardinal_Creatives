import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { Palette, Users, Target, Lightbulb } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-[#00d4d0]">Cardinal Creatives</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a passionate team of graphic designers dedicated to creating visual experiences that tell your
              story and connect with your audience on a deeper level.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded with a vision to bridge the gap between creativity and strategy, Cardinal Creatives has been at
                the forefront of innovative graphic design since our inception. We believe that great design is not just
                about aesthetics—it's about communication, emotion, and impact.
              </p>
              <p className="text-gray-600 mb-6">
                Our journey began with a simple mission: to help businesses and individuals express their unique
                identity through compelling visual design. Today, we've grown into a trusted partner for clients ranging
                from startups to established enterprises.
              </p>
              <p className="text-gray-600">
                Through our strategic partnership with Galadevs, we now offer comprehensive digital solutions that
                combine stunning design with cutting-edge technology, ensuring our clients receive end-to-end creative
                and technical support.
              </p>
            </div>
            <div className="relative">
              <div className="bg-[#00d4d0]/10 rounded-2xl p-8">
                <Image
                  src="/about.png"
                  alt="Cardinal Creatives Team"
                  width={500}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#00d4d0] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-gray-600">
                  We constantly push creative boundaries to deliver fresh, innovative solutions
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#00d4d0] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
                <p className="text-gray-600">We believe the best results come from working closely with our clients</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#00d4d0] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Purpose</h3>
                <p className="text-gray-600">Every design we create serves a strategic purpose and drives results</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#00d4d0] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-gray-600">We maintain the highest standards in every project we undertake</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Strategic Partnership</h2>
            <p className="text-xl text-gray-600">Stronger together with Galadevs</p>
          </div>
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Cardinal Creatives × Galadevs</h3>
                <p className="text-gray-600 mb-6">
                  Our strategic partnership with Galadevs represents a powerful combination of creative design expertise
                  and technical innovation. Together, we provide comprehensive digital solutions that cover every aspect
                  of your brand's digital presence.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#00d4d0] rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Complete Digital Ecosystem</h4>
                      <p className="text-gray-600">From brand identity to web development and software solutions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#00d4d0] rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Seamless Integration</h4>
                      <p className="text-gray-600">Design and development work hand-in-hand for optimal results</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#00d4d0] rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Technical Excellence</h4>
                      <p className="text-gray-600">Cutting-edge technology meets award-winning design</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-[#00d4d0]/10 to-[#00d4d0]/5 rounded-xl p-8">
                  <div className="flex items-center justify-center space-x-6 mb-6">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-black rounded-xl flex items-center justify-center mx-auto mb-2">
                        <Image src="/logo.png" alt="Cardinal Creatives Logo" width={40} height={40} />
                      </div>
                      <p className="font-semibold text-gray-900">Design</p>
                    </div>
                    <div className="text-3xl font-bold text-[#00d4d0]">+</div>
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mx-auto mb-2">
                        <Image src="/logo_galadevs.png" alt="Galadevs Logo" width={40} height={40} />
                      </div>
                      <p className="font-semibold text-gray-900">Development</p>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Unified Solutions</h4>
                  <p className="text-gray-600">Where creativity meets technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Work Together?</h2>
          <p className="text-xl text-gray-300 mb-8">Let's discuss how we can bring your vision to life</p>
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

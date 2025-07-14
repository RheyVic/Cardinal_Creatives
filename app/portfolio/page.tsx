"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Palette, ExternalLink, Eye } from "lucide-react"
import { useState } from "react"

export default function PortfolioPage() {
  const portfolioItems = [
    {
      id: 1,
      title: "TechFlow Brand Identity",
      category: "Brand Identity",
      description:
        "Complete brand identity design for a tech startup including logo, color palette, and brand guidelines.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Logo Design", "Brand Guidelines", "Typography"],
    },
    {
      id: 2,
      title: "EcoGreen Packaging",
      category: "Packaging Design",
      description:
        "Sustainable packaging design for an eco-friendly product line with emphasis on environmental messaging.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Packaging", "Sustainability", "Print Design"],
    },
    {
      id: 3,
      title: "FitLife Mobile App UI",
      category: "UI/UX Design",
      description: "Modern and intuitive mobile app interface design for a fitness tracking application.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Mobile UI", "UX Design", "Prototyping"],
    },
    {
      id: 4,
      title: "Artisan Coffee Website",
      category: "Web Design",
      description:
        "E-commerce website design for a premium coffee brand with focus on storytelling and user experience.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Web Design", "E-commerce", "Branding"],
    },
    {
      id: 5,
      title: "Festival Poster Series",
      category: "Print Design",
      description: "Eye-catching poster series for a music festival featuring bold typography and vibrant colors.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Poster Design", "Typography", "Event Branding"],
    },
    {
      id: 6,
      title: "FinTech Dashboard",
      category: "UI/UX Design",
      description:
        "Clean and professional dashboard design for a financial technology platform with complex data visualization.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Dashboard", "Data Viz", "FinTech"],
    },
    {
      id: 7,
      title: "Organic Skincare Branding",
      category: "Brand Identity",
      description:
        "Natural and elegant branding for an organic skincare line including packaging and marketing materials.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Organic", "Skincare", "Packaging"],
    },
    {
      id: 8,
      title: "Restaurant Menu Design",
      category: "Print Design",
      description: "Sophisticated menu design for a fine dining restaurant with emphasis on typography and layout.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Menu Design", "Restaurant", "Typography"],
    },
    {
      id: 9,
      title: "Social Media Campaign",
      category: "Digital Graphics",
      description: "Cohesive social media graphics campaign for a fashion brand's seasonal collection launch.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Social Media", "Fashion", "Campaign"],
    },
  ]

  const [activeCategory, setActiveCategory] = useState("All")

  const filteredItems =
    activeCategory === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory)

  const categories = [
    "All",
    "Logo",
    "Brand Identity",
    "UI/UX Design",
    "Print Design",
    "Packaging Design",
    "Web Design",
    "Digital Graphics",
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-[#00d4d0]">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our collection of creative projects that showcase our expertise in graphic design, branding, and
            digital experiences. Each project tells a unique story.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4 drop-shadow-lg brightness-110 contrast-125">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === activeCategory ? "default" : "outline"}
                className={
                  category === "Logo"
                    ? "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-background hover:bg-accent h-10 px-4 py-2 border-gray-300 text-gray-700 hover:border-[#00d4d0] hover:text-[#00d4d0]"
                    : category === activeCategory
                    ? "bg-[#00d4d0] text-gray-900 hover:bg-[#00d4d0]/90"
                    : "border-gray-300 text-gray-700 hover:border-[#00d4d0] hover:text-[#00d4d0]"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 group overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Button size="sm" className="bg-[#00d4d0] text-gray-900 hover:bg-[#00d4d0]/90">
                        <Eye className="w-4 h-4 mr-2" />
                        View
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Details
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-[#00d4d0]/10 text-[#00d4d0] hover:bg-[#00d4d0]/20">
                      {item.category}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600">Numbers that speak to our success</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00d4d0] mb-2">150+</div>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00d4d0] mb-2">98%</div>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00d4d0] mb-2">50+</div>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00d4d0] mb-2">5</div>
              <p className="text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real feedback from real clients</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#00d4d0] rounded-full flex items-center justify-center mr-4">
                    <span className="text-gray-900 font-bold">JD</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">John Davis</h4>
                    <p className="text-sm text-gray-600">CEO, TechFlow</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Cardinal Creatives transformed our brand identity completely. The new design perfectly captures our
                  vision and has significantly improved our market presence."
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#00d4d0] rounded-full flex items-center justify-center mr-4">
                    <span className="text-gray-900 font-bold">SM</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Sarah Miller</h4>
                    <p className="text-sm text-gray-600">Founder, EcoGreen</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The packaging design exceeded our expectations. It perfectly communicates our eco-friendly values
                  while standing out on the shelf."
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#00d4d0] rounded-full flex items-center justify-center mr-4">
                    <span className="text-gray-900 font-bold">MR</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Mike Rodriguez</h4>
                    <p className="text-sm text-gray-600">Product Manager, FitLife</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The UI design for our mobile app is intuitive and beautiful. User engagement has increased by 40%
                  since the redesign."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's create something amazing together that showcases your brand
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-[#00d4d0] text-gray-900 hover:bg-[#00d4d0]/90">
                Start Your Project
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-[#00d4d0] text-[#00d4d0] hover:bg-[#00d4d0] hover:text-gray-900 bg-transparent"
              >
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                <li>Brand Identity</li>
                <li>Logo Design</li>
                <li>Print Design</li>
                <li>Digital Graphics</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Portfolio</li>
                <li>Contact</li>
                <li>Partnership</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Partner</h4>
              <p className="text-gray-400 mb-2">Galadevs</p>
              <p className="text-sm text-gray-500">
                Digital solutions, software development, web development & prototyping
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Cardinal Creatives. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

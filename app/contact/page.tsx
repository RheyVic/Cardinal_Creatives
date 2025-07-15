"use client"
import Link from "next/link"
import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Footer } from "@/components/footer"
import { Palette, Mail, Phone, MapPin, Clock } from "lucide-react"
import { useState } from "react"
import { MobileMenu } from "@/components/mobile-menu"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setSubmitMessage("Thank you for your message! We'll get back to you within 24 hours.")
    setIsSubmitting(false)

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      service: "",
      budget: "",
      message: "",
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Get In <span className="text-[#00d4d0]">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Ready to bring your vision to life? Let's discuss your project and create something amazing together. We're
            here to help you every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company (Optional)
                    </label>
                    <Input
                      id="company"
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00d4d0] focus:border-transparent"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="brand-identity">Brand Identity</option>
                      <option value="logo-design">Logo Design</option>
                      <option value="print-design">Print Design</option>
                      <option value="digital-graphics">Digital Graphics</option>
                      <option value="ui-ux-design">UI/UX Design</option>
                      <option value="web-development">Web Development (with Galadevs)</option>
                      <option value="complete-solution">Complete Digital Solution</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00d4d0] focus:border-transparent"
                      value={formData.budget}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select budget range</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="over-50k">Over $50,000</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  {submitMessage && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                      <p className="text-green-800">{submitMessage}</p>
                    </div>
                  )}
                  <Button
                    type="submit"
                    className="w-full bg-[#00d4d0] text-gray-900 hover:bg-[#00d4d0]/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Let's Connect</h2>
                <p className="text-gray-600 mb-8">
                  We're excited to learn about your project and discuss how we can help bring your vision to life. Reach
                  out through any of the channels below, and we'll get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[#00d4d0] rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-gray-900" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Email Us</h3>
                        <p className="text-gray-600">cardinalcreatives21@gmail.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[#00d4d0] rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-gray-900" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Call Us</h3>
                        <p className="text-gray-600">+63 962 547 2396</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[#00d4d0] rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-gray-900" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Visit Us</h3>
                        <p className="text-gray-600">
                          Inday Street
                          <br />
                          IloIlo City, Philippines
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[#00d4d0] rounded-lg flex items-center justify-center">
                        <Clock className="w-6 h-6 text-gray-900" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Business Hours</h3>
                        <p className="text-gray-600">
                          Mon - Fri: 9:00 AM - 6:00 PM
                          <br />
                          Sat: 10:00 AM - 4:00 PM
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Partnership Info */}
              <Card className="border-0 shadow-lg bg-gradient-to-r from-[#00d4d0]/10 to-[#00d4d0]/5">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Need Development Services?</h3>
                  <p className="text-gray-600 mb-4">
                    Through our partnership with Galadevs, we offer complete digital solutions including web
                    development, software development, and prototyping services.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/about">
                      <Button
                        variant="outline"
                        className="border-[#00d4d0] text-[#00d4d0] hover:bg-[#00d4d0] hover:text-gray-900 bg-transparent"
                      >
                        Learn About Partnership
                      </Button>
                    </Link>
                    <Link href="https://galadevs.software" target="_blank" rel="noopener noreferrer">
                      <Button
                        className="bg-[#00d4d0] text-gray-900 hover:bg-[#00d4d0]/90"
                      >
                        Go to Galadevs Website
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What's your typical project timeline?</h3>
                <p className="text-gray-600">
                  Project timelines vary based on scope and complexity. Simple logo designs typically take 1-2 weeks,
                  while complete brand identity projects can take 4-6 weeks. We'll provide a detailed timeline during
                  our initial consultation.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you work with small businesses?</h3>
                <p className="text-gray-600">
                  We work with businesses of all sizes, from startups to established enterprises. We offer flexible
                  packages and solutions that can fit various budgets and requirements.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What's included in your partnership with Galadevs?
                </h3>
                <p className="text-gray-600">
                  Our partnership allows us to offer complete digital solutions including web development, software
                  development, UI/UX design, and prototyping. You get design and development expertise under one roof.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">How do you handle revisions?</h3>
                <p className="text-gray-600">
                  We include multiple revision rounds in all our packages. We work closely with you throughout the
                  process to ensure the final result exceeds your expectations and aligns perfectly with your vision.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

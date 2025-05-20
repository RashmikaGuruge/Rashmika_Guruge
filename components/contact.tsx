"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from "lucide-react"

export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    })

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  return (
    <section id="contact" ref={sectionRef} className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gray-950 -z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.15),transparent_70%)] -z-10"></div>
      <div className="blob top-[30%] right-[20%] opacity-10"></div>
      <div className="blob bottom-[20%] left-[10%] opacity-10"></div>

      <motion.div className="section-container" style={{ opacity, y }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title text-center"
        >
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6 gradient-text">Contact Information</h3>
            <p className="text-gray-300 mb-8">
              Feel free to reach out to me for any inquiries, collaboration opportunities, or just to say hello!
            </p>

            <div className="space-y-8">
              <motion.div
                className="flex items-center gap-4"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="bg-gradient-to-br from-primary/30 to-accent/30 p-4 rounded-lg">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Email</h4>
                  <a
                    href="mailto:dilharaoshaka@gmail.com"
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    rashmikaguruge01@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="bg-gradient-to-br from-primary/30 to-accent/30 p-4 rounded-lg">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Phone</h4>
                  <a href="tel:0766534112" className="text-gray-300 hover:text-primary transition-colors">
                    +94768833425
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="bg-gradient-to-br from-primary/30 to-accent/30 p-4 rounded-lg">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Location</h4>
                  <p className="text-gray-300">Colombo, Sri Lanka</p>
                </div>
              </motion.div>
            </div>

            <div className="mt-12">
              <h4 className="text-lg font-medium mb-6 gradient-text">Connect with me</h4>
              <div className="flex space-x-4">
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-gray-800/50 backdrop-blur-sm border-primary/20 hover:bg-primary/20 hover:border-primary/40"
                    asChild
                  >
                    <a
                      href="https://www.linkedin.com/in/rashmika-guruge/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1, rotate: -5 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-gray-800/50 backdrop-blur-sm border-primary/20 hover:bg-primary/20 hover:border-primary/40"
                    asChild
                  >
                    <a href="https://github.com/RashmikaGuruge" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-gray-800/50 backdrop-blur-sm border-primary/20 hover:bg-primary/20 hover:border-primary/40"
                    asChild
                  >
                    <a href="https://x.com/GurugeRash" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                      <Twitter className="h-5 w-5" />
                    </a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur"></div>
              <Card className="relative bg-gray-800/50 border-primary/10 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-6 gradient-text">Send a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                      <Input
                        placeholder="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-gray-700/50 border-gray-600 focus:border-primary/50 focus:ring-primary/50"
                      />
                      <div className="absolute inset-0 rounded-md pointer-events-none transition-opacity opacity-0 focus-within:opacity-100 duration-300">
                        <div className="absolute inset-[-1px] rounded-md bg-gradient-to-r from-primary/50 to-accent/50 animate-pulse blur-sm"></div>
                      </div>
                    </div>
                    <div className="relative">
                      <Input
                        type="email"
                        placeholder="Your Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-gray-700/50 border-gray-600 focus:border-primary/50 focus:ring-primary/50"
                      />
                      <div className="absolute inset-0 rounded-md pointer-events-none transition-opacity opacity-0 focus-within:opacity-100 duration-300">
                        <div className="absolute inset-[-1px] rounded-md bg-gradient-to-r from-primary/50 to-accent/50 animate-pulse blur-sm"></div>
                      </div>
                    </div>
                    <div className="relative">
                      <Input
                        placeholder="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="bg-gray-700/50 border-gray-600 focus:border-primary/50 focus:ring-primary/50"
                      />
                      <div className="absolute inset-0 rounded-md pointer-events-none transition-opacity opacity-0 focus-within:opacity-100 duration-300">
                        <div className="absolute inset-[-1px] rounded-md bg-gradient-to-r from-primary/50 to-accent/50 animate-pulse blur-sm"></div>
                      </div>
                    </div>
                    <div className="relative">
                      <Textarea
                        placeholder="Your Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="bg-gray-700/50 border-gray-600 min-h-[150px] focus:border-primary/50 focus:ring-primary/50"
                      />
                      <div className="absolute inset-0 rounded-md pointer-events-none transition-opacity opacity-0 focus-within:opacity-100 duration-300">
                        <div className="absolute inset-[-1px] rounded-md bg-gradient-to-r from-primary/50 to-accent/50 animate-pulse blur-sm"></div>
                      </div>
                    </div>
                    <Button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 animated-border bg-gray-900/80 backdrop-blur-sm"
                      disabled={isSubmitting}
                    >
                      <span className="relative z-10">{isSubmitting ? "Sending..." : "Send Message"}</span>
                      <Send className="h-4 w-4 ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

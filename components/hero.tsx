"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import ParticlesBackground from "@/components/particles"
import Typewriter from "typewriter-effect"

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden animated-bg">
      {/* Blob animations */}
      <div className="blob top-[-20%] left-[-10%] opacity-30"></div>
      <div className="blob bottom-[-20%] right-[-10%] opacity-20"></div>

      {/* Particles Background */}
      <ParticlesBackground className="absolute inset-0 -z-10" />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <span className="text-primary text-sm font-medium">Software Engineer</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4 glow-text">
              Hello, I'm <span className="gradient-text neon-text">Rashmika Guruge</span>
            </h1>

            <div className="h-12 mb-6">
              <Typewriter
                options={{
                  strings: [
                    "Building intelligent solutions",
                    "Crafting code with creativity",
                    "Developing AI applications",
                    "Creating innovative software",
                  ],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: "text-xl md:text-2xl text-gray-300",
                  cursorClassName: "text-primary",
                }}
              />
            </div>

            <p className="text-gray-400 text-lg mb-8 max-w-lg">
              Passionate about creating impactful software solutions and exploring the frontiers of artificial
              intelligence.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button asChild className="relative overflow-hidden group animated-border">
                <a href="#contact" className="px-6 py-2 z-10 bg-gray-900/80 rounded-md">
                  <span className="relative z-10 flex items-center gap-2">
                    Get in Touch
                    <Mail className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="backdrop-blur-sm border-primary/20 hover:bg-primary/10 transition-all duration-300"
              >
                <a href="#projects" className="px-6 py-2">
                  View Projects
                </a>
              </Button>
              <Button
                variant="ghost"
                asChild
                className="backdrop-blur-sm hover:bg-primary/10 transition-all duration-300"
              >
                <a href="/resume.pdf" download className="flex items-center gap-2">
                  Resume
                </a>
              </Button>
            </div>

            <div className="flex space-x-4">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-gray-800/50 hover:bg-gray-700/50 backdrop-blur-sm border border-gray-700/50"
                  asChild
                >
                  <a href="https://github.com/RashmikaGuruge" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-gray-800/50 hover:bg-gray-700/50 backdrop-blur-sm border border-gray-700/50"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/rashmika-guruge-54a77622a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-gray-800/50 hover:bg-gray-700/50 backdrop-blur-sm border border-gray-700/50"
                  asChild
                >
                  <a href="mailto:rashmikaguruge01@gmail.com" aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
            style={{ transform: `translateY(${scrollY * -0.05}px)` }}
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-30 animate-pulse"></div>
              <div className="absolute -inset-1 bg-gray-900 rounded-full blur-sm"></div>

              {/* Profile image */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-800 glow z-10">
                <Image src="/me.jpg" alt="Oshaka Dilhara" fill className="object-cover" priority />
              </div>

              {/* Floating tech icons */}
              <motion.div
                className="absolute -top-4 -right-4 bg-gray-800/80 backdrop-blur-sm p-3 rounded-full border border-primary/30 glow"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" }}
              >
                <Image src="/coding-python.png" width={30} height={30} alt="Python" />
              </motion.div>

              <motion.div
                className="absolute top-1/2 -left-6 bg-gray-800/80 backdrop-blur-sm p-3 rounded-full border border-accent/30 glow-accent"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut", delay: 1 }}
              >
                <Image src="/abstract-react.png" width={30} height={30} alt="React" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 left-1/3 bg-gray-800/80 backdrop-blur-sm p-3 rounded-full border border-primary/30 glow"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
              >
                <Image src="/steaming-java-code.png" width={30} height={30} alt="Java" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <Button
            variant="ghost"
            size="icon"
            className="animate-bounce rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50"
            asChild
          >
            <a href="#about" aria-label="Scroll down">
              <ArrowDown className="h-6 w-6" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

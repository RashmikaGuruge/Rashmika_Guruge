"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gray-950 py-8 border-t border-gray-800 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.1),transparent_70%)] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-400 text-sm mb-2">© {currentYear} Rashmika Guruge. All rights reserved.</p>
            <p className="text-gray-500 text-xs flex items-center justify-center">
              Made with <Heart className="h-3 w-3 text-primary mx-1 animate-pulse" /> using Next.js and Tailwind CSS
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2"
          >
            <a href="#home" className="text-gray-400 hover:text-primary text-sm transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-400 hover:text-primary text-sm transition-colors">
              About
            </a>
            <a href="#experience" className="text-gray-400 hover:text-primary text-sm transition-colors">
              Experience
            </a>
            <a href="#skills" className="text-gray-400 hover:text-primary text-sm transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-gray-400 hover:text-primary text-sm transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-gray-400 hover:text-primary text-sm transition-colors">
              Contact
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

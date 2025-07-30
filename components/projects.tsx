"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ArrowRight, Eye } from "lucide-react"

const projects = [
  {
    title: "Sole Craze - E-commerce Website",
    description:
      "An eCommerce platform designed for shoe enthusiasts, offering a seamless shopping experience with efficient product discovery, secure transactions, and robust inventory management tools for administrators",
    image: "/solecraze.png",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Firebase", "Stripe"],
    demoLink: "https://solecraze.netlify.app/",
    githubLink: "https://github.com/SoleCraze"
  },
  {
    title: "Venture Vibe - Travel Planning Website",
    description:
      "A travel planning web application designed to simplify trip management and enhance user experiences. It allows users to create detailed itineraries, manage budgets, and connect with a vibrant travel community to share stories and insights.",
    image: "/venturevibe.png",
    tags: ["React", "Spring Boot", "PostgreSQL", "AWS", "Google Maps API"],
    demoLink: "https://youtu.be/lT8GjW9kkVs",
    githubLink: "https://github.com/VentureVibe",
    featured: true,
  },
  {
    title: "Creatify - Freelance Website",
    description:
      "A dedicated platform for seamlessly connecting clients with skilled graphic designers for a range of creative projects, featuring integrated communication tools, secure payments, and a user-friendly interface.",
    image: "/creatify.png",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Firebase", "Stripe"],
    demoLink: "https://youtu.be/TRxBXteCUt0",
    githubLink: "https://github.com/Creatify-Freelance",
    featured: true,
  },
  // {
  //   title: "Aimei Educational Institute",
  //   description:
  //     "A modern educational website for Aimei Institute featuring course information, student registration, event management, and an interactive learning portal with responsive design.",
  //   image: "/emi.png",
  //   tags: ["React", "Tailwind CSS", "Firebase", "Express", "UI/UX Design"],
  //   demoLink: "https://aimei.edu.lk/",
  //   githubLink: "https://aimei.edu.lk/",
  // },
  {
    title: "Symphony - Musical Equipment Renting and Services Hiring Platform",
    description:
      "A centralized platform designed for customers to rent or hire from service providers, offering seamless event bookings, studio and instrument rentals, along with comprehensive management tools for service providers",
    image: "/sympony.png",
    tags: ["PHP", "JavaScript", "MySQL", "MVC"],
    demoLink: "https://github.com/Dinirubanuka/symphony",
    githubLink: "https://github.com/Dinirubanuka/symphony",
  },
  {
    title: "RealEstate - A Real Estate Website",
    description:
      "A user-friendly real estate platform for buying, selling, and renting properties with secure login, smart search filters, and easy booking, making property transactions simple and hassle-free.",
    image: "/realestate.png",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Stripe"],
    demoLink: "https://github.com/RashmikaGuruge/PropertEase-ClientSide",
    githubLink: "https://github.com/RashmikaGuruge/PropertEase-ClientSide",
  },
  {
    title: "Brooklyn Crust - Website for Restaurant",
    description:
      "Brooklyn Crust is a sleek and modern landing page that highlights the menu, specials, and contact details with a clean layout, smooth navigation, and a fully responsive design for all devices.",
    image: "/pizza.png",
    tags: ["JavaScript", "HTML", "CSS"],
    demoLink: "https://brooklyncrust.netlify.app/",
    githubLink: "https://brooklyncrust.netlify.app/",
  },
  {
    title: "Website for Villa",
    description:
      "Elegant villa landing page with dedicated sections for company info, villa listings, services offered, and contact details.",
    image: "/villa.png",
    tags: ["JavaScript", "HTML", "CSS"],
    demoLink: "https://rvilla.netlify.app/",
    githubLink: "https://github.com/RashmikaGuruge/villa-frontend",
  },
  {
    title: "Rashmika Guruge - Personal Porfolio",
    description:
      "This personal portfolio showcases my work, skills, and projects in a clean and organized layout. Designed with a focus on simplicity and responsiveness, it offers an easy way to explore my professional journey and connect with me.",
    image: "/portfolio.png",
    tags: ["Next.js", "Tailwind CSS"],
    demoLink: "https://example.com/demo3",
    githubLink: "https://github.com/RashmikaGuruge/Rashmika_Guruge",
  },
  {
    title: "Fitness Center - Website",
    description:
      "This fitness center website features a modern, responsive design that highlights services, subscription plans, and promotions. With a clean layout and engaging visuals, it delivers a smooth user experience and effectively communicates the brand’s offerings.",
    image: "/fitness.png",
    tags: ["JavaScript", "HTML", "CSS"],
    demoLink: "https://fitness-center-gym-web.netlify.app/",
    githubLink: "https://fitness-center-gym-web.netlify.app/",
  },
]

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(3)
  const [activeProject, setActiveProject] = useState<number | null>(null)
  const [activeFilter, setActiveFilter] = useState("all")

  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  const showMoreProjects = () => {
    setVisibleProjects(projects.length)
  }

  return (
    <section id="projects" ref={sectionRef} className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gray-900/90 backdrop-blur-sm -z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(139,92,246,0.15),transparent_70%)] -z-10"></div>
      <div className="blob top-[20%] right-[10%] opacity-10"></div>
      <div className="blob bottom-[10%] left-[20%] opacity-10"></div>

      <motion.div className="section-container" style={{ opacity, y }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="mb-8 flex flex-wrap justify-center gap-4">
          <Button
            variant={activeFilter === "all" ? "default" : "outline"}
            onClick={() => setActiveFilter("all")}
            className="rounded-full"
          >
            All Projects
          </Button>
          <Button
            variant={activeFilter === "web" ? "default" : "outline"}
            onClick={() => setActiveFilter("web")}
            className="rounded-full"
          >
            Web Development
          </Button>
          <Button
            variant={activeFilter === "education" ? "default" : "outline"}
            onClick={() => setActiveFilter("education")}
            className="rounded-full"
          >
            Education
          </Button>
          <Button
            variant={activeFilter === "ai" ? "default" : "outline"}
            onClick={() => setActiveFilter("ai")}
            className="rounded-full"
          >
            AI/ML
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {projects
            .filter((project) => {
              if (activeFilter === "all") return true
              if (
                activeFilter === "education" &&
                (project.title.includes("Education") || project.tags.includes("Education"))
              )
                return true
              if (activeFilter === "web" && (project.tags.includes("React") || project.tags.includes("Next.js") || project.tags.includes("HTML") || project.tags.includes("PHP")))
                return true
              if (
                activeFilter === "ai" &&
                (project.tags.includes("AI") || project.tags.includes("TensorFlow") || project.tags.includes("NLP"))
              )
                return true
              return false
            })
            .slice(0, visibleProjects)
            .map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                onHoverStart={() => setActiveProject(index)}
                onHoverEnd={() => setActiveProject(null)}
                className="card-3d"
              >
                <Card className="bg-gray-800/50 border-primary/20 backdrop-blur-sm overflow-hidden h-full flex flex-col">
                  <div className="relative h-48 w-full overflow-hidden group">
                    {project.featured && (
                      <div className="absolute top-0 right-0 z-10 bg-gradient-to-r from-primary to-accent px-3 py-1 text-xs font-medium text-white rounded-bl-lg">
                        Featured
                      </div>
                    )}
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>

                    {/* Overlay with buttons that appear on hover */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900/70 backdrop-blur-md">
                      <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: activeProject === index ? 1 : 0.8 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Button size="sm" variant="default" asChild className="rounded-full">
                          <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1"
                          >
                            <Eye className="h-4 w-4 mr-1" />{" "}
                            {project.title === "DevSchool Educational Platform" ||
                            project.title === "Aimei Educational Institute"
                              ? "Visit Site"
                              : project.title === "Mr. Kottu Restaurant Platform"
                                ? "View Restaurant"
                                : "Live Demo"}
                          </a>
                        </Button>
                      </motion.div>
                      <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: activeProject === index ? 1 : 0.8 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10, delay: 0.1 }}
                      >
                        <Button size="sm" variant="outline" asChild className="rounded-full">
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1"
                          >
                            <Github className="h-4 w-4 mr-1" /> Code
                          </a>
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold gradient-text">{project.title}</h3>
                      <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mt-2 rounded-full"></div>
                    </div>

                    <p className="text-gray-300 mb-6 flex-grow">{project.description}</p>

                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {project.tags.map((tag, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="bg-primary/10 text-primary border-primary/20 backdrop-blur-sm"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex justify-between items-center pt-2 border-t border-gray-700/50">
                        <div className="text-xs text-gray-400">Project Showcase</div>
                        <div className="flex gap-3">
                          <Button size="sm" variant="ghost" asChild className="group">
                            <a
                              href={project.demoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1"
                            >
                              <span>Demo</span>
                              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                            </a>
                          </Button>
                          <Button size="sm" variant="ghost" asChild className="group">
                            <a
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1"
                            >
                              <Github className="h-4 w-4 mr-1" />
                              <span>Code</span>
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
        </div>

        {visibleProjects < projects.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mt-12"
          >
            <Button
              onClick={showMoreProjects}
              className="flex items-center gap-2 animated-border bg-gray-900/80 backdrop-blur-sm"
            >
              <span className="relative z-10">View More Projects</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}

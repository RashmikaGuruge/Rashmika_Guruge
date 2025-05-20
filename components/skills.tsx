"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Database, Cpu, Layers, Globe, Terminal, Cloud } from "lucide-react"

const skillCategories = [
  {
    name: "Programming Languages",
    icon: <Code2 className="h-6 w-6" />,
    skills: [
      { name: "Java", level: 90 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Python", level: 75 },
      { name: "PHP", level: 75 },
      { name: "C++", level: 70 },
    ],
  },
  {
    name: "Frameworks",
    icon: <Layers className="h-6 w-6" />,
    skills: [
      { name: "React", level: 90 },
      { name: "Spring Boot", level: 90 },
      { name: "Node.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Express", level: 85 },
      { name: "Nest.js", level: 80 },
    ],
  },
   {
    name: "Web Technologies",
    icon: <Globe className="h-6 w-6" />,
    skills: [
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Bootstrap", level: 90 },
      { name: "REST APIs", level: 90 },
      { name: "GraphQL", level: 70 },
      { name: "WebSockets", level: 65 },
    ],
  },
  {
    name: "Databases",
    icon: <Database className="h-6 w-6" />,
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 85 },
      { name: "DynamoDB", level: 65 },
    ],
  },
  {
    name: "Tools & DevOps",
    icon: <Terminal className="h-6 w-6" />,
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 80 },
      { name: "Kubernetes", level: 65 },
      { name: "Linux", level: 75 },
    ],
  },
  {
    name: "Cloud Platforms",
    icon: <Cloud className="h-6 w-6" />,
    skills: [
      { name: "AWS", level: 80 },
      { name: "Firebase", level: 75 },
    ],
  },
]

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  return (
    <section id="skills" ref={sectionRef} className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gray-950 -z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.1),transparent_70%)] -z-10"></div>
      <div className="blob top-[10%] right-[20%] opacity-10"></div>
      <div className="blob bottom-[30%] left-[10%] opacity-10"></div>

      <motion.div className="section-container" style={{ opacity, y }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title text-center"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="card-3d"
            >
              <Card className="bg-gray-800/50 border-primary/20 backdrop-blur-sm h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-gradient-to-br from-primary/30 to-accent/30 p-3 rounded-lg text-white">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                  </div>

                  <div className="space-y-5">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-300 font-medium">{skill.name}</span>
                          {/* <span className="text-primary">{skill.level}%</span> */}
                        </div>
                        <div className="skill-bar">
                          <motion.div
                            className="skill-progress"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

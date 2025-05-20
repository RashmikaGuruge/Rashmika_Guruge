"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Intern Software Engineer",
    company: "Axizta Digital Labs",
    period: "Nov 2024 - Apr 2025",
    duration: "6 months",
    description: [
      "Contributed to Phase 5 of the NaPA project, a geospatial analytics platform for EDOTCO Group Malaysia.",
      "Developed new features and optimized performance across frontend (React) and backend (Node.js).",
      "Built reusable UI components and designed efficient API endpoints for data processing workflows.",
      "Created interactive dashboards in Apache Superset using SQL and customized chart visualizations.",
      "Implemented database indexing strategies to enhance query performance.",
      "Developed a Proof of Concept (POC) for a generative AI chatbot using AWS Bedrock and MongoDB Atlas (vector DB).",
      "Worked in an Agile environment with Jira, actively participated in daily stand-ups, sprint planning, and client meetings.",
      "Improved technical and communication skills through cross-functional collaboration and feedback cycles."
    ],
    skills: ["JavaScript", "React", "Node.js", "Nest.js", "Express.js", "MongoDB", "AWS", "Git", "Agile"],
  },
]

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  return (
    <section id="experience" ref={sectionRef} className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gray-900/90 backdrop-blur-sm -z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.1),transparent_70%)] -z-10"></div>
      <div className="blob top-[20%] left-[10%] opacity-10"></div>
      <div className="blob bottom-[10%] right-[20%] opacity-10"></div>

      <motion.div className="section-container" style={{ opacity, y }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title text-center"
        >
          Work Experience
        </motion.h2>

        <div className="flex justify-center mt-12 relative">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <div className="w-full max-w-2xl">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="card-3d"
                >
                  <Card className="bg-gray-800/50 border-primary/20 backdrop-blur-sm overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent"></div>
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                        <div>
                          <CardTitle className="text-xl md:text-2xl gradient-text">{exp.title}</CardTitle>
                          <p className="text-primary font-medium mt-1">{exp.company}</p>
                        </div>
                        <div className="text-gray-400 text-sm md:text-right">
                          <p>{exp.period}</p>
                          <p>{exp.duration}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {/* ⭐ Show description as bullet points */}
                      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                        {exp.description.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="bg-primary/10 text-primary border-primary/20 backdrop-blur-sm"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Briefcase, Code, Award, BookOpen, Lightbulb } from "lucide-react"

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  return (
    <section id="about" ref={sectionRef} className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gray-900/90 backdrop-blur-sm -z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15),transparent_70%)] -z-10"></div>
      <div className="blob top-[30%] left-[10%] opacity-10"></div>
      <div className="blob bottom-[20%] right-[5%] opacity-10"></div>

      <motion.div className="section-container" style={{ opacity, y, scale }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title text-center"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur"></div>
              <Card className="relative bg-gray-800/50 border-primary/10 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-6">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    I'm a passionate <span className="text-primary font-medium">Software Engineer</span> and{" "}
                    <span className="text-accent font-medium">AI/ML Enthusiast</span> with a strong foundation in
                    computer science and a keen interest in building intelligent solutions that solve real-world
                    problems.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg blur"></div>
              <Card className="relative bg-gray-800/50 border-primary/10 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-6">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    With over 2 years of professional experience, I specialize in developing robust applications and
                    exploring the cutting edge of artificial intelligence and machine learning technologies to create
                    innovative solutions.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur"></div>
              <Card className="relative bg-gray-800/50 border-primary/10 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-6">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    I'm constantly learning and expanding my skill set to stay at the forefront of technology trends and
                    best practices, with a particular focus on AI/ML applications and modern web development.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="card-3d"
            >
              <Card className="bg-gray-800/50 border-primary/20 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Education</h3>
                      <p className="text-gray-300">BSc in Computer Science</p>
                      <p className="text-gray-400">University of Colombo School of Computing</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="card-3d"
            >
              <Card className="bg-gray-800/50 border-primary/20 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-lg">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Experience</h3>
                      <p className="text-gray-300">Intern Software Engineer at Axiata Digital Labs</p>
                      <p className="text-gray-400">6 months</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="card-3d"
            >
              <Card className="bg-gray-800/50 border-primary/20 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-lg">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Internship</h3>
                      <p className="text-gray-300">Intern Software Engineer at Inivos</p>
                      <p className="text-gray-400">6 months</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div> */}
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.03 }}
            className="card-3d"
          >
            <Card className="h-full bg-gray-800/50 border-primary/20 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/20 p-4 rounded-full mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Achievements</h3>
                  <p className="text-gray-300">
                    Recognized for outstanding contributions to AI-driven solutions that improved business efficiency by
                    35%.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.03 }}
            className="card-3d"
          >
            <Card className="h-full bg-gray-800/50 border-primary/20 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-accent/20 p-4 rounded-full mb-4">
                    <BookOpen className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Learning</h3>
                  <p className="text-gray-300">
                    Continuously expanding knowledge in emerging technologies, with recent focus on deep learning and
                    cloud architecture.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.03 }}
            className="card-3d"
          >
            <Card className="h-full bg-gray-800/50 border-primary/20 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/20 p-4 rounded-full mb-4">
                    <Lightbulb className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                  <p className="text-gray-300">
                    Passionate about creating innovative solutions that leverage cutting-edge technologies to solve
                    complex problems.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

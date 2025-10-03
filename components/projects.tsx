"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GithubIcon, ExternalLink, ChevronRight } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Global Terrorism Dashboard",
    description:
      "A comprehensive Power BI dashboard visualizing global terrorism data, providing insights into patterns and trends across different regions and time periods.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Power BI", "Data Analysis", "Visualization", "Research"],
    github: "https://github.com/kullaybo/Power-BI-Global-Terrorism#",
    demo: null,
    featured: true,
  },
  {
    title: "Personal Web Portfolio",
    description:
      "A responsive portfolio website showcasing my skills, projects, and professional experience. Built with modern web technologies and best practices.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/kullaybo/Portfolio",
    demo: null,
    featured: true,
  },
  {
    title: "Financial Analysis Tool",
    description:
      "A tool for analyzing financial data and generating insights for investment decisions and portfolio management.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Python", "Pandas", "Data Visualization", "Finance"],
    github: "#",
    demo: null,
    featured: false,
  },
  {
    title: "E-commerce Analytics Dashboard",
    description:
      "An interactive dashboard for tracking and analyzing e-commerce metrics, customer behavior, and sales performance.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Power BI", "SQL", "Data Modeling", "Business Intelligence"],
    github: "#",
    demo: null,
    featured: false,
  },
]

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const displayedProjects = showAll ? projects : projects.filter((project) => project.featured)

  return (
    <section id="projects" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            My Work
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl">
            A showcase of my recent work, demonstrating my skills and expertise in various domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden border-border/50 hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag, i) => (
                        <Badge key={i} variant="secondary" className="font-normal">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">{project.description}</p>
                </CardContent>
                <CardFooter className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <GithubIcon size={16} />
                      GitHub
                    </a>
                  </Button>
                  {project.demo && (
                    <Button size="sm" asChild>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {projects.length > 2 && (
          <div className="flex justify-center">
            <Button variant="outline" onClick={() => setShowAll(!showAll)} className="group flex items-center gap-2">
              {showAll ? "Show Less" : "View All Projects"}
              <ChevronRight
                className={`h-4 w-4 transition-transform group-hover:translate-x-1 ${showAll ? "rotate-90" : ""}`}
              />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

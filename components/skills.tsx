"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Progress } from "@/components/ui/progress"

const skills = [
  {
    category: "Technical",
    items: [
      { name: "Data Analysis", level: 90 },
      { name: "Power BI", level: 85 },
      { name: "Web Development", level: 75 },
      { name: "Python", level: 70 },
    ],
  },
  {
    category: "Business",
    items: [
      { name: "Strategic Planning", level: 95 },
      { name: "Financial Analysis", level: 85 },
      { name: "Project Management", level: 80 },
      { name: "Market Research", level: 75 },
    ],
  },
  {
    category: "Soft Skills",
    items: [
      { name: "Leadership", level: 90 },
      { name: "Communication", level: 95 },
      { name: "Problem Solving", level: 85 },
      { name: "Teamwork", level: 90 },
    ],
  },
]

export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            My Skills
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Expertise & Capabilities</h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl">
            A diverse set of skills across technical, business, and interpersonal domains that enable me to tackle
            complex challenges and deliver exceptional results.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={groupIndex}
              variants={itemVariants}
              className="bg-card rounded-xl p-6 shadow-md border border-border/50"
            >
              <h3 className="text-xl font-semibold mb-6 text-center">{skillGroup.category} Skills</h3>
              <div className="space-y-6">
                {skillGroup.items.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

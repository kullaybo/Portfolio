"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"
import { Award, Users, Briefcase, Coffee } from "lucide-react"

const stats = [
  { icon: Briefcase, value: 8, label: "Years Experience", suffix: "+" },
  { icon: Users, value: 50, label: "Clients Worldwide", suffix: "+" },
  { icon: Award, value: 15, label: "Projects Completed", suffix: "+" },
  { icon: Coffee, value: 1000, label: "Cups of Coffee", suffix: "+" },
]

export default function Stats() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="bg-white/10 p-4 rounded-full mb-4">
                <stat.icon className="h-8 w-8" />
              </div>
              <CountUp end={stat.value} inView={inView} className="text-4xl font-bold" suffix={stat.suffix} />
              <p className="mt-2 text-primary-foreground/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// CountUp component for animating numbers
function CountUp({ end, inView, className, suffix = "" }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (inView) {
      let start = 0
      const duration = 2000 // 2 seconds
      const increment = end / (duration / 16) // 60fps

      const timer = setInterval(() => {
        start += increment
        if (start > end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [inView, end])

  return (
    <span className={className}>
      {count}
      {suffix}
    </span>
  )
}

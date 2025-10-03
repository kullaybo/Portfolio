"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, LinkedinIcon as LinkedInIcon } from "lucide-react"

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="about" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              About Me
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Who I Am</h2>
          </div>

          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="space-y-4 text-lg">
                <p>
                  Passionate about technology and entrepreneurship, I am dedicated to delivering innovative solutions
                  and empowering others to reach their full potential. With expertise in computer science and finance, I
                  have successfully worked on tech-driven projects, developed business strategies, and was part of
                  high-performing teams to drive growth and make informed decisions.
                </p>
                <p>
                  Beyond entrepreneurship, I find fulfillment in mentoring individuals on their personal and
                  professional journeys, helping them overcome challenges and achieve their goals. I thrive on
                  collaboration, fostering inclusive environments, and driving creative solutions through diverse
                  perspectives.
                </p>
                <p>
                  Let's connect to explore transformative projects, investment opportunities, or personal and
                  professional growth. Together, we can create impactful change and achieve remarkable outcomes.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Button asChild>
                  <a
                    href="https://www.linkedin.com/in/karaboserake/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <LinkedInIcon size={18} />
                    Connect on LinkedIn
                  </a>
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Download size={18} />
                  Download Resume
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

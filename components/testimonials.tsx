"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const testimonials = [
  {
    quote:
      "Emanuel's strategic insights and technical expertise were instrumental in the success of our data analytics project. His ability to translate complex data into actionable business strategies is remarkable.",
    author: "Delphine Johnson",
    position: "Head of Insurance, Letsatsi Finance and Loan",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "Working with Emanuel was a game-changer for our startup. His entrepreneurial mindset and technical knowledge helped us navigate challenges and capitalize on opportunities we hadn't even considered.",
    author: "Lesego Sebusi",
    position: "Founder, Proud Nerd",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "Emanuel's mentorship has been invaluable to my professional development. His guidance and support have helped me grow both technically and personally in ways I never thought possible.",
    author: "Wandile Phinzi",
    position: "IT Student, NorthWest University",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "The financial analysis dashboard Emanuel developed transformed how we make investment decisions. His attention to detail and understanding of both technology and finance is truly unique.",
    author: "Rhulani Khoza",
    position: "Head of Training & Development",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">What People Say</h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl">
            Feedback from clients and colleagues who have worked with me on various projects and initiatives.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Desktop view - grid */}
            <div className="hidden md:grid grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-border/50 hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-6">
                      <Quote className="h-8 w-8 text-primary/40 mb-4" />
                      <p className="text-foreground/80 mb-6 italic">{testimonial.quote}</p>
                      <div className="flex items-center">
                        <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">{testimonial.author}</h4>
                          <p className="text-sm text-foreground/60">{testimonial.position}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Mobile view - carousel */}
            <div className="md:hidden">
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <Quote className="h-8 w-8 text-primary/40 mb-4" />
                    <p className="text-foreground/80 mb-6 italic">{testimonials[activeIndex].quote}</p>
                    <div className="flex items-center">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonials[activeIndex].image || "/placeholder.svg"}
                          alt={testimonials[activeIndex].author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonials[activeIndex].author}</h4>
                        <p className="text-sm text-foreground/60">{testimonials[activeIndex].position}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex justify-center mt-6">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`h-2 w-2 rounded-full mx-1 ${
                        index === activeIndex ? "bg-primary" : "bg-foreground/20"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

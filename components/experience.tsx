"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { BriefcaseIcon, GraduationCap } from "lucide-react"

const experiences = [
  {
    title: "Introducing Broker/Affiliate",
    company: "Exness",
    location: "Online",
    period: "Jan 2020 - Present",
    description: "Working as an introducing broker and affiliate for online trading services.",
    type: "work",
  },
  {
    title: "Junior MIS Analyst",
    company: "Letsatsi Finance and Loan",
    location: "Sandton, Gauteng",
    period: "Jan 2024 - Feb 2025",
    description:
      "Analyzed data from various sources within the organization. Created monthly insurance reporting for 59 national branches. Developed dashboards and visualizations to present data insights effectively. Offered training and documentation to help users. Collaborated with various departments to understand their data needs and provide appropriate solutions.",
    type: "work",
  },
  {
    title: "System Administrator",
    company: "Letsatsi Finance and Loan",
    location: "Sandton, Gauteng",
    period: "Oct 2022 - Jan 2024",
    description:
      "Performed regular system maintenance tasks. Monitored system performance. Troubleshot and resolved hardware, software and network issues. Assisted users with account setup, password resets and access requests. Offered training and documentation to help users utilize IT resources effectively.",
    type: "work",
  },
  {
    title: "Broker Consultant",
    company: "Rooks Insurance & Financial Brokers",
    location: "Vanderbijlpark, Gauteng",
    period: "Jan 2022 - Sep 2022",
    description:
      "Assessed client insurance needs and provided tailored recommendations. Processed new policies, renewals, and amendments. Assisted clients with claims and ensured smooth settlements. Met sales targets through upselling and cross-selling. Prepared reports on sales performance and client interactions.",
    type: "work",
  },
  {
    title: "Network Marketer",
    company: "World Ventures & DreamTrips",
    location: "Randburg, Gauteng",
    period: "Dec 2018 - Dec 2020",
    description:
      "Promoted and sold travel club membership, leveraging direct sales strategies. Built and maintained a network of Independent Representatives to expand the brand's reach. Provided personal development support to new recruits, helping them grow their businesses. Collaborated with a global team to share strategies, resources, and experiences. Hosted presentations and workshops to educate potential members about the benefits of the travel club.",
    type: "work",
  },
  {
    title: "BSc Computer Science",
    institution: "University of The People",
    location: "United States",
    period: "2023 - 2026",
    description: "Currently pursuing a Bachelor of Science degree in Computer Science.",
    type: "education",
  },
  {
    title: "Micro Finance (SAQA 7489 Level 4)",
    institution: "University of The People",
    location: "United States",
    period: "2024 - 2025",
    description: "Specialized training in micro finance principles and applications.",
    type: "education",
  },
  {
    title: "Contact Centre Operation (SAQA 7499 Level 4)",
    institution: "Graduate Institute of Financial Science",
    location: "Bryanston, South Africa",
    period: "2023 - 2024",
    description: "Professional qualification in contact center operations and management.",
    type: "education",
  },
  {
    title: "Microsoft Power BI Analyst",
    institution: "Microsoft",
    location: "",
    period: "2023",
    description: "Professional certification in Microsoft Power BI data analysis and visualization.",
    type: "education",
  },
  {
    title: "Matric",
    institution: "Orange Farm Secondary School",
    location: "South Africa",
    period: "2021",
    description: "Completed secondary education with focus on mathematics and science.",
    type: "education",
  },
]

export default function Experience() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  // Filter experiences by type
  const workExperiences = experiences.filter((exp) => exp.type === "work")
  const educationExperiences = experiences.filter((exp) => exp.type === "education")

  return (
    <section id="experience" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            My Journey
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Experience & Education</h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl">
            A timeline of my professional experience and educational background that has shaped my career path.
          </p>
        </div>

        {/* Work Experience Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-10 flex items-center justify-center gap-2">
            <BriefcaseIcon className="h-6 w-6 text-primary" />
            Work Experience
          </h3>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary/30"></div>

              {/* Timeline items */}
              {workExperiences.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative mb-12 md:mb-16 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right md:ml-0 md:mr-auto" : "md:pl-12 md:ml-auto md:mr-0"
                  } md:w-1/2 z-10`}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute top-0 ${
                      index % 2 === 0 ? "md:-right-4" : "md:-left-4"
                    } -left-4 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center`}
                  >
                    <div className="w-4 h-4 rounded-full bg-primary"></div>
                  </div>

                  {/* Content */}
                  <div
                    className={`relative p-6 rounded-lg shadow-md bg-card border border-border/50 ${
                      index % 2 === 0 ? "md:rounded-tr-none" : "md:rounded-tl-none"
                    }`}
                  >
                    <div
                      className={`absolute top-6 ${
                        index % 2 === 0 ? "md:-right-2 md:left-auto -left-2" : "md:-left-2 -left-2"
                      } w-0 h-0 border-8 border-transparent ${
                        index % 2 === 0 ? "md:border-l-card md:border-r-0 border-r-card" : "border-l-card"
                      }`}
                    ></div>

                    <div className="flex items-center mb-3 text-primary">
                      <span className="text-sm font-medium">{item.period}</span>
                    </div>

                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-foreground/70 mb-3">
                      {item.company}
                      {item.location && <span> • {item.location}</span>}
                    </p>
                    <p className="text-foreground/80">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-10 flex items-center justify-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            Education
          </h3>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary/30"></div>

              {/* Timeline items */}
              {educationExperiences.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative mb-12 md:mb-16 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right md:ml-0 md:mr-auto" : "md:pl-12 md:ml-auto md:mr-0"
                  } md:w-1/2 z-10`}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute top-0 ${
                      index % 2 === 0 ? "md:-right-4" : "md:-left-4"
                    } -left-4 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center`}
                  >
                    <div className="w-4 h-4 rounded-full bg-primary"></div>
                  </div>

                  {/* Content */}
                  <div
                    className={`relative p-6 rounded-lg shadow-md bg-card border border-border/50 ${
                      index % 2 === 0 ? "md:rounded-tr-none" : "md:rounded-tl-none"
                    }`}
                  >
                    <div
                      className={`absolute top-6 ${
                        index % 2 === 0 ? "md:-right-2 md:left-auto -left-2" : "md:-left-2 -left-2"
                      } w-0 h-0 border-8 border-transparent ${
                        index % 2 === 0 ? "md:border-l-card md:border-r-0 border-r-card" : "border-l-card"
                      }`}
                    ></div>

                    <div className="flex items-center mb-3 text-primary">
                      <span className="text-sm font-medium">{item.period}</span>
                    </div>

                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-foreground/70 mb-3">
                      {item.institution}
                      {item.location && <span> • {item.location}</span>}
                    </p>
                    <p className="text-foreground/80">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

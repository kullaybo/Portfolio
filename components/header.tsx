"use client"

import { motion } from "framer-motion"

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground py-16 text-center">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Emanuel Karabo Serake</h1>
        <p className="text-lg md:text-xl">Showcasing My Skills, Projects, and Experience</p>
      </motion.div>
    </header>
  )
}

"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface SkillBadgeProps {
  name: string
  level: number
}

export default function SkillBadge({ name, level }: SkillBadgeProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      className="bg-blue-950/50 p-4 rounded-lg border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:bg-blue-900/30"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-2">{name}</div>
      <div className="w-full bg-blue-900/30 rounded-full h-2.5">
        <motion.div
          className="bg-blue-500 h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </div>
    </motion.div>
  )
}

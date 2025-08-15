"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Database, Layout, Code, GitBranch, Palette, Server, Settings, Terminal } from "lucide-react"

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
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
    visible: { opacity: 1, y: 0 },
  }

  const skills = [
    {
      category: "Programming Languages",
      icon: <Code className="w-8 h-8 text-primary" />,
      items: [
        "C",
        "C++",
        "Core Java",
        "Advanced Java",
        "Python"
      ],
    },
    {
      category: "Frontend",
      icon: <Layout className="w-10 h-10 text-primary" />,
      items: ["React", "Next.js", "TypeScript", "HTML/CSS", "Tailwind CSS"],
    },
    {
      category: "Backend",
      icon: <Server className="w-10 h-10 text-primary" />,
      items: ["Node.js", "Express", "REST APIs", "GraphQL", "Authentication"],
    },
    {
      category: "Database",
      icon: <Database className="w-10 h-10 text-primary" />,
      items: ["MongoDB", "MySQL"],
    },
    {
      category: "UI/UX",
      icon: <Palette className="w-10 h-10 text-primary" />,
      items: ["Responsive Design", "Animations"],
    },
    {
      category: "Version Control",
      icon: <GitBranch className="w-8 h-8 text-primary" />,
      items: [
        "GitHub"
      ],
    },
  ]

  return (
    <section id="skills" ref={ref} className="py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">My Skills</h2>
          <div className="w-20 h-1 mt-2 rounded-full bg-primary" />
          <p className="max-w-2xl mt-4 text-muted-foreground">
            I&apos;ve worked with a variety of technologies and tools throughout my career. Here are some of the key
            skills I&apos;ve developed.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ duration: 0.5 }}
              className="p-6 transition-all duration-300 border rounded-lg shadow-sm hover:shadow-md hover:border-primary/50 group"
            >
              <div className="flex flex-col items-center mb-4 text-center">
                <div className="p-3 mb-4 transition-transform duration-300 rounded-full bg-primary/10 group-hover:scale-110">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold">{skill.category}</h3>
              </div>
              <ul className="space-y-2 text-center">
                {skill.items.map((item, i) => (
                  <li key={i} className="text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col items-center mt-16 text-center"
        >
          <h3 className="text-2xl font-bold">Technical Proficiency</h3>
          <div className="w-full max-w-3xl mt-8 space-y-6">
            {[
              { name: "Programming Languages", percentage: 95 },
              { name: "Web Technologies", percentage: 90 },
              { name: "Databases", percentage: 85 },
              { name: "UI/UX Design", percentage: 80 },
              { name: "Version Control", percentage: 50 },
            ].map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.percentage}%</span>
                </div>
                <div className="w-full h-2 overflow-hidden rounded-full bg-muted">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.percentage}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                    className="h-full rounded-full bg-primary"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
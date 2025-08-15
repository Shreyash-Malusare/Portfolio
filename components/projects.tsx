"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import macs_img from "../public/macs.png"
import porfolio_img from "../public/porfolio.png"
import weather_img from "../public/weather.png"
import taskify_img from "../public/taskify.png"
import jarvis_img from "../public/jarvis.jpeg"

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: "M.A.C.S.",
      description:
        "A full-featured clothing e-commerce platform with product management, cart functionality, and payment processing.",
      image: macs_img,
      tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      category: "Full Stack",
      github: "https://github.com/Shreyash-Malusare/M.A.C.S",
      demo: "https://m-a-c-s.onrender.com",
    },
    {
      title: "J.A.R.V.I.S.",
      description: "A real-time Virtual Personal Assistant using Python.",
      image: jarvis_img,
      tags: ["Python"],
      category: "Full Stack",
      github: "https://github.com/Shreyash-Malusare/Virtual-Personal-Assistant-using-Python",
      demo: "https://github.com/Shreyash-Malusare/Virtual-Personal-Assistant-using-Python",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects and skills with a modern design.",
      image: porfolio_img,
      tags: ["Next.js", "Tailwind CSS"],
      category: "Frontend",
      github: "https://github.com/Shreyash-Malusare/portfolio",
      demo: "https://project5-demo.com",
    },
    {
      title: "Weather Application",
      description: "A weather forecast application with location detection and interactive maps.",
      image: weather_img,
      tags: ["React", "OpenWeather API", "Mapbox"],
      category: "Frontend",
      github: "https://github.com/Shreyash-Malusare/WeatherApp",
      demo: "https://weather-app-7qnv.onrender.com",
    },
    {
      title: "Taskify",
      description: "A productivity app for managing tasks, projects, and deadlines with team collaboration features.",
      image: taskify_img,
      tags: ["React", "Firebase", "Tailwind CSS"],
      category: "Frontend",
      github: "https://github.com/Shreyash-Malusare/todo",
      demo: "https://taskify-3jrm.onrender.com",
    },
  ]

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

  return (
    <section id="projects" ref={ref} className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">My Projects</h2>
          <div className="w-20 h-1 mt-2 rounded-full bg-primary" />
          <p className="max-w-2xl mt-4 text-muted-foreground">
            Here are some of the projects I&apos;ve worked on. Each project represents different skills and technologies
            I&apos;ve mastered.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ duration: 0.5 }}
              className="overflow-hidden transition-all duration-300 border rounded-lg shadow-sm group hover:shadow-md hover:border-primary/50"
            >
              <div className="relative overflow-hidden h-60">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-black/60 group-hover:opacity-100">
                  <div className="flex items-center justify-center h-full gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 transition-transform bg-white rounded-full hover:scale-110"
                    >
                      <Github className="w-5 h-5 text-black" />
                      <span className="sr-only">GitHub</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 transition-transform bg-white rounded-full hover:scale-110"
                    >
                      <ExternalLink className="w-5 h-5 text-black" />
                      <span className="sr-only">Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                <p className="mb-4 text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

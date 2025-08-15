"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import image from "../public/Shreyash_Malusare.jpg"
export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" ref={ref} className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
          <div className="w-20 h-1 mt-2 rounded-full bg-primary" />
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-64 h-64 overflow-hidden rounded-full sm:w-80 sm:h-80 ring-4 ring-primary/20">
              <Image src={image} alt="Profile" fill className="object-cover" priority />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col justify-center space-y-6"
          >
            <h3 className="text-2xl font-bold">
              I&apos;m <span className="text-primary">Shreyash Malusare</span>, a passionate Software Developer
            </h3>
            <p className="text-muted-foreground">
              I specialize in building modern web applications with React, Next.js, and other cutting-edge technologies.
              With a strong foundation in frontend development and a keen eye for design, I create intuitive and
              engaging user experiences.
            </p>
            <p className="text-muted-foreground">
              My journey in software development began 3 years ago, and I&apos;ve since worked on a variety of projects
              ranging from e-commerce platforms to complex data visualization tools. I&apos;m constantly learning and
              exploring new technologies to stay at the forefront of web development.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div>
                <h4 className="font-medium">Name:</h4>
                <p className="text-muted-foreground">Shreyash Malusare</p>
              </div>
              <div>
                <h4 className="font-medium">Email:</h4>
                <p className="text-muted-foreground">malusareshreyash01@gmail.com</p>
              </div>
              <div>
                <h4 className="font-medium">Location:</h4>
                <p className="text-muted-foreground">Mira-Bhyanader, India</p>
              </div>
              <div>
                <h4 className="font-medium">Availability:</h4>
                <p className="text-muted-foreground">Open to opportunities</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

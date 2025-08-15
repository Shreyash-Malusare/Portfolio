"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Twitter, Mail } from "lucide-react"
import Typed from "typed.js"

export default function Hero() {
  const typedRef = useRef(null)

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Software Developer", "Frontend Developer", "Backend Developer", "Full-Stack Developer"],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen pt-16 overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
              style={{
                backgroundColor:
                  i % 2 === 0
                    ? `hsl(200, ${70 + Math.random() * 20}%, ${70 + Math.random() * 20}%)` // Primary color variations
                    : `hsl(32, ${70 + Math.random() * 20}%, ${70 + Math.random() * 20}%)`, // Accent color variations
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 400 + 100}px`,
                height: `${Math.random() * 400 + 100}px`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${Math.random() * 20 + 10}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className="flex flex-col items-center justify-center max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-2 text-sm font-medium tracking-wider text-primary uppercase"
          >
            Hello, I&apos;m
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
          >
            Shreyash Malusare
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl font-medium sm:text-2xl md:text-3xl text-muted-foreground"
          >
            <span ref={typedRef}></span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-muted-foreground"
          >
            Building beautiful, functional, and user-friendly applications with modern technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 mt-8"
          >
            <Button
              size="lg"
              onClick={() => {
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="bg-primary hover:bg-primary/90"
            >
              Get in Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="border-primary text-primary hover:bg-primary/10"
            >
              View My Work
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center justify-center gap-6 mt-8"
          >
            <a
              href="https://github.com/Shreyash-Malusare"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:text-accent hover:scale-110"
            >
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/shreyash-malusare-65ab4427b"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:text-accent hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://mail.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:text-accent hover:scale-110"
            >
              <Mail className="w-6 h-6" />
              <span className="sr-only">Mail</span>
            </a>
          </motion.div>

          {/* Add the scroll down button below the social icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 flex justify-center animate-bounce"
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="rounded-full hover:bg-primary/10 hover:text-primary"
            >
              <ArrowDown className="w-6 h-6" />
              <span className="sr-only">Scroll Down</span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

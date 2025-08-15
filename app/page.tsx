"use client"

import { useEffect } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import CustomCursor from "@/components/custom-cursor"

export default function Home() {
  // Safely initialize cursor visibility
  useEffect(() => {
    // We don't need to simulate a mouse event
    // The cursor will appear naturally on the first real mouse move
  }, [])

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-background to-background/80">
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

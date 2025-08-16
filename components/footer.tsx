"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold tracking-tight"
          >
            <span className="text-primary">Shreyash </span>Malusare
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center space-x-6"
          >
            <a
              href="https://github.com/Shreyash-Malusare"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/shreyash-malusare-65ab4427b"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            {/* <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </a> */}
            <a href="https://mail.google.com/mail/u/0/#search/malusareshreyash01%40gmail.com?compose=new"
              className="transition-colors hover:text-primary">
              <Mail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-6 mt-8"
        >
          <div className="text-sm text-muted-foreground text-center">
            © {currentYear} Shreyash Malusare. All rights reserved.
          </div>
        </motion.div>

      </div>
    </footer>
  )
}

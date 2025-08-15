// "use client"

// import { useState, useEffect } from "react"
// import { Moon, Sun } from "lucide-react"
// import { useTheme } from "next-themes"
// import { Button } from "@/components/ui/button"
// import { motion } from "framer-motion"

// export default function Navbar() {
//   const [mounted, setMounted] = useState(false)
//   const { theme, setTheme } = useTheme()
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

//   useEffect(() => {
//     setMounted(true)
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10)
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const navLinks = [
//     { name: "Home", href: "#home" },
//     { name: "About", href: "#about" },
//     { name: "Skills", href: "#skills" },
//     { name: "Projects", href: "#projects" },
//     { name: "Contact", href: "#contact" },
//   ]

//   const scrollToSection = (id: string) => {
//     const element = document.querySelector(id)
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" })
//     }
//   }

//   return (
//     <motion.header
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
//         }`}
//     >
//       <div className="container flex items-center justify-between h-16 px-4 mx-auto">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2 }}
//           className="text-xl font-bold tracking-tight"
//         >
//           <span className="text-primary">Shreyash </span>Malusare
//         </motion.div>

//         <nav className="hidden md:flex items-center space-x-8">
//           {navLinks.map((link, index) => (
//             <motion.a
//               key={link.name}
//               href={link.href}
//               onClick={(e) => {
//                 e.preventDefault()
//                 scrollToSection(link.href)
//               }}
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 * index }}
//               className="text-sm font-medium transition-colors hover:text-primary"
//             >
//               {link.name}
//             </motion.a>
//           ))}
//         </nav>

//         <div className="flex items-center space-x-4">
//           {mounted && (
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//               className="rounded-full"
//               aria-label="Toggle theme"
//             >
//               {theme === "dark" ? (
//                 <Sun className="h-5 w-5 text-white" />
//               ) : (
//                 <Moon className="h-5 w-5 text-slate-700" />
//               )}
//               <span className="sr-only">Toggle theme</span>
//             </Button>
//           )}

//           <Button className="hidden md:flex" onClick={() => window.open("/resume.pdf", "_blank")}>
//             Resume
//           </Button>

//           <Button
//             variant="outline"
//             size="icon"
//             className="md:hidden"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             aria-label="Toggle mobile menu"
//           >
//             {mobileMenuOpen ? (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="w-6 h-6"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             ) : (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="w-6 h-6"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//               </svg>
//             )}
//           </Button>
//         </div>
//       </div>
//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//           className="absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md shadow-lg border-b z-50"
//         >
//           <div className="container py-4 px-4 mx-auto flex flex-col space-y-4">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 onClick={(e) => {
//                   e.preventDefault()
//                   scrollToSection(link.href)
//                   setMobileMenuOpen(false)
//                 }}
//                 className="text-lg py-2 font-medium transition-colors hover:text-primary"
//               >
//                 {link.name}
//               </a>
//             ))}
//             <Button
//               className="w-full mt-2"
//               onClick={() => {
//                 window.open("/resume.pdf", "_blank")
//                 setMobileMenuOpen(false)
//               }}
//             >
//               Resume
//             </Button>
//           </div>
//         </motion.div>
//       )}
//     </motion.header>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const downloadResume = () => {
    const link = document.createElement("a")
    link.href = "/Shreyash_Malusare_Resume.pdf"
    link.download = "Shreyash_Malusare_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
    >
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl font-bold tracking-tight"
        >
          <span className="text-primary">Shreyash </span>Malusare
        </motion.div>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(link.href)
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-white" />
              ) : (
                <Moon className="h-5 w-5 text-slate-700" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          )}

          <Button className="hidden md:flex" onClick={downloadResume}>
            Resume
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </Button>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md shadow-lg border-b z-50"
        >
          <div className="container py-4 px-4 mx-auto flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(link.href)
                  setMobileMenuOpen(false)
                }}
                className="text-lg py-2 font-medium transition-colors hover:text-primary"
              >
                {link.name}
              </a>
            ))}
            <Button
              className="w-full mt-2"
              onClick={() => {
                downloadResume()
                setMobileMenuOpen(false)
              }}
            >
              Resume
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}

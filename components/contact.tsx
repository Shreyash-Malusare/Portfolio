// "use client"

// import type React from "react"

// import { useState } from "react"
// import { motion } from "framer-motion"
// import { useInView } from "react-intersection-observer"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Mail, MapPin, Phone } from "lucide-react"

// export default function Contact() {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   })

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   })

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     // Handle form submission logic here
//     console.log(formData)
//     // Reset form
//     setFormData({ name: "", email: "", subject: "", message: "" })
//     // Show success message
//     alert("Message sent successfully!")
//   }

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   }

//   return (
//     <section id="contact" ref={ref} className="py-20">
//       <div className="container px-4 mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.5 }}
//           className="flex flex-col items-center mb-12 text-center"
//         >
//           <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get In Touch</h2>
//           <div className="w-20 h-1 mt-2 rounded-full bg-primary" />
//           <p className="max-w-2xl mt-4 text-muted-foreground">
//             Have a project in mind or want to discuss potential opportunities? Feel free to reach out to me using the
//             contact form below.
//           </p>
//         </motion.div>

//         <div className="grid gap-12 md:grid-cols-3">
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate={inView ? "visible" : "hidden"}
//             className="space-y-8 md:col-span-1"
//           >
//             <motion.div variants={itemVariants} transition={{ duration: 0.5 }} className="flex items-start gap-4">
//               <div className="p-3 rounded-full bg-primary/10">
//                 <MapPin className="w-6 h-6 text-primary" />
//               </div>
//               <div>
//                 <h3 className="mb-1 text-lg font-medium">Location</h3>
//                 <p className="text-muted-foreground">Mira-Bhayander, India</p>
//               </div>
//             </motion.div>

//             <motion.div variants={itemVariants} transition={{ duration: 0.5 }} className="flex items-start gap-4">
//               <div className="p-3 rounded-full bg-primary/10">
//                 <Mail className="w-6 h-6 text-primary" />
//               </div>
//               <div>
//                 <h3 className="mb-1 text-lg font-medium">Email</h3>
//                 <p className="text-muted-foreground">malusareshreyash@gmail.com</p>
//               </div>
//             </motion.div>

//             <motion.div variants={itemVariants} transition={{ duration: 0.5 }} className="flex items-start gap-4">
//               <div className="p-3 rounded-full bg-primary/10">
//                 <Phone className="w-6 h-6 text-primary" />
//               </div>
//               <div>
//                 <h3 className="mb-1 text-lg font-medium">Phone</h3>
//                 <p className="text-muted-foreground">+91 9076452426</p>
//               </div>
//             </motion.div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//             className="md:col-span-2"
//           >
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid gap-6 sm:grid-cols-2">
//                 <div className="space-y-2">
//                   <Input
//                     name="name"
//                     placeholder="Your Name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="h-12"
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Input
//                     name="email"
//                     type="email"
//                     placeholder="Your Email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="h-12"
//                   />
//                 </div>
//               </div>
//               <div className="space-y-2">
//                 <Input
//                   name="subject"
//                   placeholder="Subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   required
//                   className="h-12"
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Textarea
//                   name="message"
//                   placeholder="Your Message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   className="min-h-[150px]"
//                 />
//               </div>
//               <Button type="submit" size="lg" className="w-full sm:w-auto">
//                 Send Message
//               </Button>
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }


// "use client"
// import React from "react"
// import { useState } from "react"
// import { motion } from "framer-motion"
// import { useInView } from "react-intersection-observer"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Mail, MapPin, Phone } from "lucide-react"

// export default function Contact() {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   })

//   // Using Formspree integration - no local state necessary for form data
//   // But you can keep local state for UI enhancements or validations if needed

//   // We'll use native form submission to Formspree endpoint you provided

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   }
//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   }

//   return (
//     <section id="contact" ref={ref} className="py-20">
//       <div className="container px-4 mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.5 }}
//           className="flex flex-col items-center mb-12 text-center"
//         >
//           <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get In Touch</h2>
//           <div className="w-20 h-1 mt-2 rounded-full bg-primary" />
//           <p className="max-w-2xl mt-4 text-muted-foreground">
//             Have a project in mind or want to discuss potential opportunities? Feel free to reach out to me using the
//             contact form below.
//           </p>
//         </motion.div>
//         <div className="grid gap-12 md:grid-cols-3">
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate={inView ? "visible" : "hidden"}
//             className="space-y-8 md:col-span-1"
//           >
//             <motion.div variants={itemVariants} transition={{ duration: 0.5 }} className="flex items-start gap-4">
//               <div className="p-3 rounded-full bg-primary/10">
//                 <MapPin className="w-6 h-6 text-primary" />
//               </div>
//               <div>
//                 <h3 className="mb-1 text-lg font-medium">Location</h3>
//                 <p className="text-muted-foreground">Mira-Bhayander, India</p>
//               </div>
//             </motion.div>
//             <motion.div variants={itemVariants} transition={{ duration: 0.5 }} className="flex items-start gap-4">
//               <div className="p-3 rounded-full bg-primary/10">
//                 <Mail className="w-6 h-6 text-primary" />
//               </div>
//               <div>
//                 <h3 className="mb-1 text-lg font-medium">Email</h3>
//                 <p className="text-muted-foreground">malusareshreyash@gmail.com</p>
//               </div>
//             </motion.div>
//             <motion.div variants={itemVariants} transition={{ duration: 0.5 }} className="flex items-start gap-4">
//               <div className="p-3 rounded-full bg-primary/10">
//                 <Phone className="w-6 h-6 text-primary" />
//               </div>
//               <div>
//                 <h3 className="mb-1 text-lg font-medium">Phone</h3>
//                 <p className="text-muted-foreground">+91 9076452426</p>
//               </div>
//             </motion.div>
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//             className="md:col-span-2"
//           >
//             {/* Formspree form */}
//             <form
//               action="https://formspree.io/f/xwpqzyjg"
//               method="POST"
//               className="space-y-6"
//             >
//               <div className="grid gap-6 sm:grid-cols-2">
//                 <div className="space-y-2">
//                   <Input name="name" placeholder="Your Name" required className="h-12" />
//                 </div>
//                 <div className="space-y-2">
//                   <Input name="email" type="email" placeholder="Your Email" required className="h-12" />
//                 </div>
//               </div>
//               <div className="space-y-2">
//                 <Input name="subject" placeholder="Subject" required className="h-12" />
//               </div>
//               <div className="space-y-2">
//                 <Textarea name="message" placeholder="Your Message" required className="min-h-[150px]" />
//               </div>
//               {/* Recaptcha disable */}
//               <input type="hidden" name="_captcha" value="false" />
//               <Button type="submit" size="lg" className="w-full sm:w-auto">
//                 Send Message
//               </Button>
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"
import React, { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const formRef = useRef<HTMLFormElement>(null)

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Formspree handles submission, so just reset the form after a slight delay
    setTimeout(() => {
      formRef.current?.reset()
    }, 100)
  }

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
    <section id="contact" ref={ref} className="py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get In Touch</h2>
          <div className="w-20 h-1 mt-2 rounded-full bg-primary" />
          <p className="max-w-2xl mt-4 text-muted-foreground">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out to me using the
            contact form below.
          </p>
        </motion.div>
        <div className="grid gap-12 md:grid-cols-3">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8 md:col-span-1"
          >
            <motion.div variants={itemVariants} transition={{ duration: 0.5 }} className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-medium">Location</h3>
                <p className="text-muted-foreground">Mira-Bhayander, India</p>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} transition={{ duration: 0.5 }} className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-medium">Email</h3>
                <p className="text-muted-foreground">malusareshreyash@gmail.com</p>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} transition={{ duration: 0.5 }} className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-medium">Phone</h3>
                <p className="text-muted-foreground">+91 9076452426</p>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2"
          >
            <form
              ref={formRef}
              action="https://formspree.io/f/xwpqzyjg"
              method="POST"
              className="space-y-6"
              onSubmit={handleFormSubmit}
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <Input name="name" placeholder="Your Name" required className="h-12" />
                <Input name="email" type="email" placeholder="Your Email" required className="h-12" />
              </div>
              <Input name="subject" placeholder="Subject" required className="h-12" />
              <Textarea name="message" placeholder="Your Message" required className="min-h-[150px]" />
              <input type="hidden" name="_captcha" value="false" />
              <Button type="submit" size="lg" className="w-full sm:w-auto">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

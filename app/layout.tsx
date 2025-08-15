import type React from "react"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "Shreyash Malusare Portfolio",
  description: "A modern portfolio showcasing skills and projects",
  generator: "v0.dev",
  icons: {
    icon: "/favicon.ico", // Path to your favicon (must be in public folder)
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png", // Optional: for iOS devices
    other: {
      rel: "icon",
      url: "/favicon-32x32.png", // Optional: different sizes
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
          html, body {
            cursor: none !important;
          }
          a, button, input, textarea, select {
            cursor: none !important;
          }
          @media (hover: none) and (pointer: coarse) {
            html, body, a, button, input, textarea, select {
              cursor: auto !important;
            }
          }
        `}</style>
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

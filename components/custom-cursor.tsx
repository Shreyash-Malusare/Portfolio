"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const trailX = useSpring(cursorX, { stiffness: 1000, damping: 50 })
  const trailY = useSpring(cursorY, { stiffness: 1000, damping: 50 })
  const [isPointer, setIsPointer] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isText, setIsText] = useState(false)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)

      const target = e.target as HTMLElement
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer')
      setIsText(['p', 'h1', 'h2', 'h3', 'a', 'button', 'input', 'textarea', 'label']
        .some(tag => target.closest(tag)))
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  return (
    <div className="cursor-container">
      {/* Main Cursor */}
      <motion.div
        className="fixed w-6 h-6 rounded-full pointer-events-none z-[99999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          backgroundColor: isPointer ? '#3b82f6' : isText ? '#10b981' : '#ffffff',
        }}
        animate={{
          scale: isClicking ? 0.5 : isPointer ? 1.5 : isText ? 1.2 : 1,
          borderRadius: isPointer ? '10%' : '50%',
          transition: { type: 'spring', stiffness: 500, damping: 20 }
        }}
      >
        {isClicking && (
          <motion.div
            className="absolute inset-0 rounded-full bg-current opacity-30"
            initial={{ scale: 1 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 0.6 }}
          />
        )}
      </motion.div>

      {/* Trailing Cursor */}
      <motion.div
        className="fixed w-10 h-10 rounded-full pointer-events-none z-[99999] mix-blend-difference border-2"
        style={{
          x: trailX,
          y: trailY,
          borderColor: isPointer ? '#3b82f6' : isText ? '#10b981' : '#ffffff',
        }}
        animate={{
          scale: isClicking ? 0.3 : isPointer ? 0.8 : isText ? 0.7 : 0.6,
          opacity: isClicking ? 0.2 : 0.4,
          transition: { type: 'spring', stiffness: 500, damping: 30 }
        }}
      />

      <style jsx global>{`
        :root {
          cursor: none !important;
        }
        
        a, button, [role="button"], input, textarea, select, label {
          cursor: none !important;
        }

        @media (hover: none) and (pointer: coarse) {
          .cursor-container > div {
            display: none !important;
          }
        }
      `}</style>
    </div>
  )
}

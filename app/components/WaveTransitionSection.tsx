'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

const WaveTransitionSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Smooth spring for better performance
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  })

  // Parallax layers - different speeds for depth
  const backgroundY = useTransform(smoothProgress, [0, 1], [200, -200])
  const middleY = useTransform(smoothProgress, [0, 1], [100, -300])
  const foregroundY = useTransform(smoothProgress, [0, 1], [50, -400])
  
  // Zoom dive effect
  const zoomScale = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0.8, 1.5, 2.5, 4])
  const diveOpacity = useTransform(smoothProgress, [0, 0.2, 0.6, 0.9, 1], [0, 1, 1, 0.3, 0])
  
  // Text animations
  const textScale = useTransform(smoothProgress, [0, 0.4, 0.6, 1], [0.5, 1.2, 1.8, 3])
  const textOpacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const textY = useTransform(smoothProgress, [0, 1], [100, -500])

  // Particle dive motion
  const particleY = useTransform(smoothProgress, [0, 1], [0, -800])
  const particleScale = useTransform(smoothProgress, [0, 0.5, 1], [0, 1.5, 0])

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[150vh] overflow-hidden bg-gradient-to-b from-slate-900 via-blue-900/30 to-slate-800"
      style={{ zIndex: 15 }}
    >
      {/* Diving Background - Slowest parallax */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ 
          y: backgroundY,
          scale: zoomScale,
          opacity: diveOpacity
        }}
      >
        {/* Background Wave Layer */}
        <motion.svg
          viewBox="0 0 1440 1080"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="diveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e40af" stopOpacity="0.4" />
              <stop offset="30%" stopColor="#3b82f6" stopOpacity="0.6" />
              <stop offset="60%" stopColor="#60a5fa" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.3" />
            </linearGradient>
            
            <filter id="diveGlow1">
              <feGaussianBlur stdDeviation="15" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          <motion.path
            d="M0,400 C360,200 720,600 1080,400 C1200,300 1320,500 1440,400 L1440,1080 L0,1080 Z"
            fill="url(#diveGradient1)"
            filter="url(#diveGlow1)"
            animate={{
              d: [
                "M0,400 C360,200 720,600 1080,400 C1200,300 1320,500 1440,400 L1440,1080 L0,1080 Z",
                "M0,500 C360,300 720,100 1080,300 C1200,400 1320,200 1440,350 L1440,1080 L0,1080 Z",
                "M0,300 C360,500 720,700 1080,500 C1200,200 1320,600 1440,450 L1440,1080 L0,1080 Z",
                "M0,400 C360,200 720,600 1080,400 C1200,300 1320,500 1440,400 L1440,1080 L0,1080 Z"
              ]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.svg>

        {/* Diving Bubbles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-blue-300/50 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: 'blur(1px) drop-shadow(0 0 8px rgba(147, 197, 253, 0.6))'
              }}
              animate={{
                y: [0, -200, 0],
                scale: [0.5, 1.5, 0.5],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 8 + Math.random() * 6,
                repeat: Infinity,
                delay: Math.random() * 8,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Middle Dive Layer - Medium parallax */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ 
          y: middleY,
          scale: zoomScale,
          opacity: diveOpacity
        }}
      >
        <motion.svg
          viewBox="0 0 1440 1080"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="diveGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.4" />
            </linearGradient>
            
            <filter id="diveGlow2">
              <feGaussianBlur stdDeviation="10" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          <motion.path
            d="M0,600 C480,400 960,800 1440,600 L1440,1080 L0,1080 Z"
            fill="url(#diveGradient2)"
            filter="url(#diveGlow2)"
            animate={{
              d: [
                "M0,600 C480,400 960,800 1440,600 L1440,1080 L0,1080 Z",
                "M0,700 C480,500 960,300 1440,550 L1440,1080 L0,1080 Z",
                "M0,500 C480,700 960,900 1440,650 L1440,1080 L0,1080 Z",
                "M0,600 C480,400 960,800 1440,600 L1440,1080 L0,1080 Z"
              ]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.svg>

        {/* Diving Ripples */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border-2 border-blue-400/30"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
                width: `${100 + i * 80}px`,
                height: `${100 + i * 80}px`,
              }}
              animate={{
                scale: [0, 3, 0],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                delay: i * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Foreground Dive Layer - Fastest parallax */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ 
          y: foregroundY,
          scale: zoomScale,
          opacity: diveOpacity
        }}
      >
        <motion.svg
          viewBox="0 0 1440 1080"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="diveGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
            </linearGradient>
            
            <filter id="diveGlow3">
              <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          <motion.path
            d="M0,800 C240,600 480,1000 720,800 C960,600 1200,1000 1440,800 L1440,1080 L0,1080 Z"
            fill="url(#diveGradient3)"
            filter="url(#diveGlow3)"
            animate={{
              d: [
                "M0,800 C240,600 480,1000 720,800 C960,600 1200,1000 1440,800 L1440,1080 L0,1080 Z",
                "M0,900 C240,700 480,500 720,700 C960,900 1200,500 1440,750 L1440,1080 L0,1080 Z",
                "M0,700 C240,900 480,1100 720,900 C960,500 1200,1100 1440,850 L1440,1080 L0,1080 Z",
                "M0,800 C240,600 480,1000 720,800 C960,600 1200,1000 1440,800 L1440,1080 L0,1080 Z"
              ]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.svg>

        {/* Diving Particles */}
        <motion.div 
          className="absolute inset-0"
          style={{ y: particleY, scale: particleScale }}
        >
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-300/70 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: 'drop-shadow(0 0 6px rgba(34, 211, 238, 0.8))'
              }}
              animate={{
                y: [0, -300, 0],
                x: [0, Math.random() * 100 - 50, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 10 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 10,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Dive Text - Center focal point */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <motion.div
          className="text-center"
          style={{ 
            scale: textScale,
            opacity: textOpacity,
            y: textY
          }}
        >
          <motion.h2 
            className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-white mb-4"
            style={{
              textShadow: "0 0 30px rgba(59, 130, 246, 0.8), 0 0 60px rgba(59, 130, 246, 0.6), 0 0 90px rgba(59, 130, 246, 0.4)"
            }}
            animate={{
              textShadow: [
                "0 0 30px rgba(59, 130, 246, 0.8), 0 0 60px rgba(59, 130, 246, 0.6), 0 0 90px rgba(59, 130, 246, 0.4)",
                "0 0 40px rgba(147, 197, 253, 1), 0 0 80px rgba(147, 197, 253, 0.8), 0 0 120px rgba(147, 197, 253, 0.6)",
                "0 0 30px rgba(59, 130, 246, 0.8), 0 0 60px rgba(59, 130, 246, 0.6), 0 0 90px rgba(59, 130, 246, 0.4)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Let's Dive In
          </motion.h2>
          
          {/* Zoom indicator */}
          <motion.div
            className="flex justify-center mt-8"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-8 h-8 border-2 border-cyan-400 rounded-full flex items-center justify-center">
              <motion.div 
                className="w-2 h-2 bg-cyan-400 rounded-full"
                animate={{
                  scale: [0.5, 1.5, 0.5]
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Dive Tunnel Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, transparent 0%, transparent 40%, rgba(15, 23, 42, ${0.3 + scrollYProgress.get() * 0.7}) 100%)`,
          scale: zoomScale
        }}
      />
    </section>
  )
}

export default WaveTransitionSection 
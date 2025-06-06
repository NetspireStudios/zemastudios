'use client'

import React from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

const FullScreenWaveOverlay = () => {
  const { scrollY } = useScroll()
  
  // Smooth spring for better performance
  const smoothScroll = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Transform scroll position to animation values
  // Trigger after hero section (around 100vh)
  const waveHeight = useTransform(smoothScroll, [0, 400, 800, 1200], ['0vh', '100vh', '100vh', '0vh'])
  const waveOpacity = useTransform(smoothScroll, [0, 300, 800, 1000], [0, 1, 1, 0])
  const waveScale = useTransform(smoothScroll, [0, 400, 600], [0.5, 1.2, 1])
  
  // Background blur effect for website content
  const backdropBlur = useTransform(smoothScroll, [0, 400, 800], ['0px', '20px', '0px'])
  const backgroundOpacity = useTransform(smoothScroll, [0, 300, 800], [0, 0.8, 0])

  return (
    <>
      {/* Full Screen Wave Overlay */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-[200]"
        style={{ 
          opacity: waveOpacity,
          scale: waveScale
        }}
      >
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
              'radial-gradient(circle at 70% 60%, rgba(147, 197, 253, 0.2) 0%, transparent 70%)',
              'radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.1) 0%, transparent 70%)'
            ]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />

        {/* Main Wave SVG - Full Screen */}
        <motion.svg
          viewBox="0 0 1440 1080"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid slice"
          style={{ height: waveHeight }}
        >
          <defs>
            {/* Enhanced Gradients */}
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
              <stop offset="25%" stopColor="#1d4ed8" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#2563eb" stopOpacity="0.8" />
              <stop offset="75%" stopColor="#60a5fa" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.3" />
            </linearGradient>
            
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e40af" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.2" />
            </linearGradient>

            {/* Glow Filters */}
            <filter id="waveGlow">
              <feGaussianBlur stdDeviation="12" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>

            <filter id="waveGlow2">
              <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Background Wave Layer */}
          <motion.path
            d="M0,200 C480,100 960,300 1440,200 L1440,1080 L0,1080 Z"
            fill="url(#waveGradient1)"
            filter="url(#waveGlow)"
            animate={{
              d: [
                "M0,200 C480,100 960,300 1440,200 L1440,1080 L0,1080 Z",
                "M0,300 C480,200 960,100 1440,250 L1440,1080 L0,1080 Z", 
                "M0,150 C480,250 960,50 1440,180 L1440,1080 L0,1080 Z",
                "M0,200 C480,100 960,300 1440,200 L1440,1080 L0,1080 Z"
              ]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Middle Wave Layer */}
          <motion.path
            d="M0,400 C360,300 720,500 1080,400 C1200,350 1320,450 1440,400 L1440,1080 L0,1080 Z"
            fill="url(#waveGradient2)"
            filter="url(#waveGlow2)"
            animate={{
              d: [
                "M0,400 C360,300 720,500 1080,400 C1200,350 1320,450 1440,400 L1440,1080 L0,1080 Z",
                "M0,450 C360,350 720,250 1080,350 C1200,400 1320,300 1440,380 L1440,1080 L0,1080 Z",
                "M0,350 C360,450 720,150 1080,450 C1200,300 1320,500 1440,420 L1440,1080 L0,1080 Z",
                "M0,400 C360,300 720,500 1080,400 C1200,350 1320,450 1440,400 L1440,1080 L0,1080 Z"
              ]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Front Wave Layer */}
          <motion.path
            d="M0,600 C240,500 480,700 720,600 C960,500 1200,700 1440,600 L1440,1080 L0,1080 Z"
            fill="#2563eb"
            fillOpacity="0.6"
            filter="url(#waveGlow)"
            animate={{
              d: [
                "M0,600 C240,500 480,700 720,600 C960,500 1200,700 1440,600 L1440,1080 L0,1080 Z",
                "M0,650 C240,550 480,450 720,550 C960,650 1200,450 1440,580 L1440,1080 L0,1080 Z",
                "M0,550 C240,650 480,350 720,650 C960,350 1200,750 1440,620 L1440,1080 L0,1080 Z",
                "M0,600 C240,500 480,700 720,600 C960,500 1200,700 1440,600 L1440,1080 L0,1080 Z"
              ]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.svg>

        {/* Floating Particles - Full Screen */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/60 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: 'drop-shadow(0 0 6px rgba(59, 130, 246, 0.6))'
              }}
              animate={{
                y: [0, -200, 0],
                x: [0, Math.random() * 100 - 50, 0],
                scale: [0, 1.5, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 12 + Math.random() * 8,
                repeat: Infinity,
                delay: Math.random() * 10,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Ripple Effects - Full Screen */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border-2 border-blue-400/30"
              style={{
                left: `${10 + i * 20}%`,
                top: `${20 + i * 15}%`,
                width: `${150 + i * 100}px`,
                height: `${150 + i * 100}px`,
              }}
              animate={{
                scale: [0, 3, 0],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 8 + i * 3,
                repeat: Infinity,
                delay: i * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Dynamic Glow Overlay */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'linear-gradient(45deg, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
              'linear-gradient(135deg, rgba(147, 197, 253, 0.15) 0%, transparent 50%)',
              'linear-gradient(225deg, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
              'linear-gradient(315deg, rgba(147, 197, 253, 0.15) 0%, transparent 50%)',
              'linear-gradient(45deg, rgba(59, 130, 246, 0.1) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* Website Content Backdrop Effect */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-[150]"
        style={{ 
          backdropFilter: backdropBlur,
          backgroundColor: `rgba(15, 23, 42, ${backgroundOpacity})`
        }}
      />
    </>
  )
}

export default FullScreenWaveOverlay 
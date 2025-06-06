'use client'

import React, { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

interface ParallaxWaveTransitionProps {
  className?: string
  color?: 'primary' | 'secondary' | 'white' | 'dark'
  intensity?: 'low' | 'medium' | 'high'
}

const ParallaxWaveTransition = ({ 
  className = '', 
  color = 'primary',
  intensity = 'medium'
}: ParallaxWaveTransitionProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Smooth spring animations for better performance
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // 3D Transform effects based on scroll
  const y1 = useTransform(smoothProgress, [0, 1], [0, -300])
  const y2 = useTransform(smoothProgress, [0, 1], [0, -200])
  const y3 = useTransform(smoothProgress, [0, 1], [0, -100])
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1.2, 0.9])
  const opacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  const colorSchemes = {
    primary: {
      gradient1: 'from-blue-500/20 via-cyan-400/15 to-transparent',
      gradient2: 'from-blue-600/30 via-blue-400/20 to-transparent',
      fill: '#3b82f6',
      glow: 'rgba(59, 130, 246, 0.3)'
    },
    secondary: {
      gradient1: 'from-purple-500/20 via-pink-400/15 to-transparent',
      gradient2: 'from-purple-600/30 via-purple-400/20 to-transparent',
      fill: '#8b5cf6',
      glow: 'rgba(139, 92, 246, 0.3)'
    },
    white: {
      gradient1: 'from-white/20 via-gray-200/15 to-transparent',
      gradient2: 'from-white/30 via-white/20 to-transparent',
      fill: '#ffffff',
      glow: 'rgba(255, 255, 255, 0.3)'
    },
    dark: {
      gradient1: 'from-gray-800/20 via-gray-600/15 to-transparent',
      gradient2: 'from-gray-900/30 via-gray-700/20 to-transparent',
      fill: '#1f2937',
      glow: 'rgba(31, 41, 55, 0.3)'
    }
  }

  const scheme = colorSchemes[color]

  return (
    <div 
      ref={containerRef}
      className={`relative h-screen w-full overflow-hidden ${className}`}
      style={{ zIndex: 100 }}
    >
      {/* 3D Parallax Wave Layers */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y: y1, scale, opacity }}
      >
        {/* Background Wave Layer */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-b ${scheme.gradient1}`}
          animate={{
            background: [
              `linear-gradient(45deg, ${scheme.glow} 0%, transparent 50%)`,
              `linear-gradient(135deg, ${scheme.glow} 0%, transparent 50%)`,
              `linear-gradient(225deg, ${scheme.glow} 0%, transparent 50%)`,
              `linear-gradient(315deg, ${scheme.glow} 0%, transparent 50%)`,
              `linear-gradient(45deg, ${scheme.glow} 0%, transparent 50%)`
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Main Wave SVG */}
        <motion.svg
          viewBox="0 0 1440 800"
          className="absolute bottom-0 w-full h-full"
          style={{ y: y2 }}
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id={`waveGradient-${color}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={scheme.fill} stopOpacity="0.3" />
              <stop offset="50%" stopColor={scheme.fill} stopOpacity="0.6" />
              <stop offset="100%" stopColor={scheme.fill} stopOpacity="0.2" />
            </linearGradient>
            
            <filter id={`glow-${color}`}>
              <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Animated Wave Paths */}
          <motion.path
            d="M0,400 C320,300 420,500 840,400 C1120,300 1200,500 1440,400 L1440,800 L0,800 Z"
            fill={`url(#waveGradient-${color})`}
            filter={`url(#glow-${color})`}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: 1,
              d: [
                "M0,400 C320,300 420,500 840,400 C1120,300 1200,500 1440,400 L1440,800 L0,800 Z",
                "M0,350 C320,450 420,250 840,350 C1120,450 1200,250 1440,350 L1440,800 L0,800 Z",
                "M0,400 C320,300 420,500 840,400 C1120,300 1200,500 1440,400 L1440,800 L0,800 Z"
              ]
            }}
            transition={{ 
              pathLength: { duration: 2, ease: "easeInOut" },
              opacity: { duration: 1 },
              d: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
          />

          {/* Secondary Wave Layer */}
          <motion.path
            d="M0,500 C360,400 480,600 720,500 C960,400 1080,600 1440,500 L1440,800 L0,800 Z"
            fill={scheme.fill}
            fillOpacity="0.4"
            style={{ y: y3 }}
            animate={{
              d: [
                "M0,500 C360,400 480,600 720,500 C960,400 1080,600 1440,500 L1440,800 L0,800 Z",
                "M0,450 C360,550 480,350 720,450 C960,550 1080,350 1440,450 L1440,800 L0,800 Z",
                "M0,500 C360,400 480,600 720,500 C960,400 1080,600 1440,500 L1440,800 L0,800 Z"
              ]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.svg>
      </motion.div>

      {/* Floating Particles */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ opacity }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              backgroundColor: scheme.fill,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: `drop-shadow(0 0 4px ${scheme.glow})`
            }}
            animate={{
              y: [0, -150, 0],
              x: [0, Math.random() * 50 - 25, 0],
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      {/* 3D Ripple Effects */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity, scale }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border-2 opacity-30"
            style={{
              borderColor: scheme.fill,
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
            }}
            animate={{
              scale: [0, 2, 0],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      {/* Enhanced Glow Effects */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity }}
        animate={{
          background: [
            `radial-gradient(circle at 20% 50%, ${scheme.glow} 0%, transparent 50%)`,
            `radial-gradient(circle at 80% 50%, ${scheme.glow} 0%, transparent 50%)`,
            `radial-gradient(circle at 50% 20%, ${scheme.glow} 0%, transparent 50%)`,
            `radial-gradient(circle at 20% 50%, ${scheme.glow} 0%, transparent 50%)`
          ]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  )
}

export default ParallaxWaveTransition 
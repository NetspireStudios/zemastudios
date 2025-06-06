'use client'

import React from 'react'
import { motion } from 'framer-motion'

const SimpleWaveTransition = () => {
  return (
    <section className="relative h-32 overflow-hidden">
      {/* Simple SVG Wave */}
      <motion.svg
        viewBox="0 0 1440 320"
        className="absolute bottom-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,160 C240,80 480,240 720,160 C960,80 1200,240 1440,160 L1440,320 L0,320 Z"
          fill="url(#simpleWaveGradient)"
          initial={{ pathLength: 0 }}
          animate={{ 
            pathLength: 1,
            d: [
              "M0,160 C240,80 480,240 720,160 C960,80 1200,240 1440,160 L1440,320 L0,320 Z",
              "M0,140 C240,220 480,60 720,140 C960,220 1200,60 1440,140 L1440,320 L0,320 Z",
              "M0,160 C240,80 480,240 720,160 C960,80 1200,240 1440,160 L1440,320 L0,320 Z"
            ]
          }}
          transition={{ 
            pathLength: { duration: 1, ease: "easeOut" },
            d: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        
        <defs>
          <linearGradient id="simpleWaveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </motion.svg>
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-800/50" />
    </section>
  )
}

export default SimpleWaveTransition 
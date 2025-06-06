'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface WaveTransitionProps {
  className?: string
  variant?: 'top' | 'bottom' | 'both'
  color?: 'primary' | 'secondary' | 'white' | 'transparent'
}

const WaveTransition = ({ 
  className = '', 
  variant = 'bottom',
  color = 'primary' 
}: WaveTransitionProps) => {
  const colorClasses = {
    primary: 'fill-primary-500/30',
    secondary: 'fill-secondary-500/30', 
    white: 'fill-white/90',
    transparent: 'fill-slate-800/40'
  }

  const WaveSVG = ({ flip = false, delay = 0 }: { flip?: boolean; delay?: number }) => (
    <motion.div
      className={`absolute ${flip ? 'top-0' : 'bottom-0'} left-0 w-full h-32 z-20`}
      initial={{ opacity: 0, y: flip ? -50 : 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, delay }}
    >
      <motion.svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className={`w-full h-full ${colorClasses[color]} ${flip ? 'rotate-180' : ''}`}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, ease: "easeInOut", delay: delay + 0.5 }}
      >
        {/* Multiple animated wave layers */}
        <motion.path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, ease: "easeInOut", delay: delay + 0.5 }}
        />
        
        {/* Second wave layer */}
        <motion.path
          d="M0,0V15.81c13,20.65,27.5,41.84,43.4,42.07,15.9.23,32.78-20.59,49.18-21.78,16.4-1.19,32.82,16.66,49.64,17.85s34.22-11.2,51.84-12.4c17.62-1.2,35.84,9.6,54.46,10.8s37.84-8.4,57.26-9.6c19.42-1.2,39.64,7.2,60.26,8.4s41.84-6,63.26-7.2c21.42-1.2,43.64,4.8,66.26,6s46.84-3.6,71.26-4.8c24.42-1.2,49.64,2.4,75.26,3.6s52.84-1.2,79.26-2.4V0Z"
          initial={{ pathLength: 0, opacity: 0.5 }}
          animate={{ pathLength: 1, opacity: 0.8 }}
          transition={{ duration: 5, ease: "easeInOut", delay: delay + 1 }}
          className="fill-current opacity-60"
        />
      </motion.svg>
      
      {/* Animated wave movement */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            `linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.1) 25%, rgba(147, 197, 253, 0.15) 50%, rgba(59, 130, 246, 0.1) 75%, transparent 100%)`,
            `linear-gradient(90deg, transparent 0%, rgba(147, 197, 253, 0.15) 25%, rgba(59, 130, 246, 0.1) 50%, rgba(147, 197, 253, 0.15) 75%, transparent 100%)`,
            `linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.1) 25%, rgba(147, 197, 253, 0.15) 50%, rgba(59, 130, 246, 0.1) 75%, transparent 100%)`
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  )

  // Flower Animation Component
  const FloatingFlowers = () => (
    <div className="absolute inset-0 pointer-events-none z-10">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{ 
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
            rotate: [0, 360],
            y: [0, -100],
            x: [0, Math.random() * 40 - 20]
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        >
          {/* Flower SVG */}
          <svg width="20" height="20" viewBox="0 0 24 24" className="text-pink-300/60">
            <motion.path
              d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L19 8V6.5C19 5.1 17.9 4 16.5 4S14 5.1 14 6.5V8L12 7V9C12 10.1 12.9 11 14 11H16.5C17.9 11 19 9.9 19 8.5V8L21 9ZM9 12C7.9 12 7 12.9 7 14V15L5 14V16C5 17.1 5.9 18 7 18H9C10.1 18 11 17.1 11 16V14C11 12.9 10.1 12 9 12ZM15 12C16.1 12 17 12.9 17 14V16C17 17.1 16.1 18 15 18H13C11.9 18 11 17.1 11 16V14L13 14V15C13 15.6 13.4 16 14 16S15 15.6 15 15V12Z"
              fill="currentColor"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: Math.random() * 2 }}
            />
          </svg>
        </motion.div>
      ))}
    </div>
  )

  return (
    <div className={`relative w-full h-40 ${className}`} style={{ zIndex: 30 }}>
      {/* Full screen coverage */}
      <div className="absolute inset-0 w-screen left-1/2 transform -translate-x-1/2">
        {(variant === 'top' || variant === 'both') && (
          <WaveSVG flip={true} delay={0.2} />
        )}
        
        {(variant === 'bottom' || variant === 'both') && (
          <WaveSVG flip={false} delay={0.4} />
        )}

        {/* Floating Flowers */}
        <FloatingFlowers />

        {/* Enhanced water ripple effects */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 60%)",
              "radial-gradient(circle at 80% 50%, rgba(147, 197, 253, 0.12) 0%, transparent 60%)",
              "radial-gradient(circle at 50% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 60%)",
              "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 60%)"
            ]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Particle system for added sparkle */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary-300/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -60, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default WaveTransition 
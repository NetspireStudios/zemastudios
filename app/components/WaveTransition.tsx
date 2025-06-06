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
    primary: 'fill-primary-500/20',
    secondary: 'fill-secondary-500/20', 
    white: 'fill-white',
    transparent: 'fill-slate-800/50'
  }

  const WaveSVG = ({ flip = false }: { flip?: boolean }) => (
    <motion.svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className={`w-full h-full ${colorClasses[color]} ${flip ? 'rotate-180' : ''}`}
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      <motion.path
        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      />
    </motion.svg>
  )

  return (
    <div className={`relative ${className}`}>
      {(variant === 'top' || variant === 'both') && (
        <motion.div 
          className="absolute top-0 left-0 w-full h-24 z-10"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        >
          <WaveSVG flip={true} />
        </motion.div>
      )}
      
      {(variant === 'bottom' || variant === 'both') && (
        <motion.div 
          className="absolute bottom-0 left-0 w-full h-24 z-10"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
        >
          <WaveSVG />
        </motion.div>
      )}

      {/* Animated water effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(147, 197, 253, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
    </div>
  )
}

export default WaveTransition 
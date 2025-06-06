'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, Focus } from 'lucide-react'

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [showFlash, setShowFlash] = useState(false)

  useEffect(() => {
    // Show preloader for 3 seconds, then flash and exit
    const timer = setTimeout(() => {
      setShowFlash(true)
      setTimeout(() => setIsLoading(false), 300) // Flash duration
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 overflow-hidden"
        >
          {/* Animated background with multiple gradients */}
          <div className="absolute inset-0">
            {/* Main gradient background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
              animate={{
                background: [
                  "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
                  "linear-gradient(135deg, #1e293b 0%, #334155 50%, #1e293b 100%)",
                  "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            {/* Floating gradient orbs */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  background: `radial-gradient(circle, ${
                    i % 2 === 0 ? 'rgba(59, 130, 246, 0.15)' : 'rgba(147, 197, 253, 0.1)'
                  } 0%, transparent 70%)`,
                  width: `${200 + i * 100}px`,
                  height: `${200 + i * 100}px`,
                  left: `${10 + i * 20}%`,
                  top: `${10 + i * 15}%`,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                  x: [0, 50, 0],
                  y: [0, -30, 0],
                }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  delay: i * 1.5,
                }}
              />
            ))}

            {/* Animated grid lines */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute h-full w-px bg-gradient-to-b from-transparent via-primary-400 to-transparent"
                  style={{ left: `${i * 10}%` }}
                  animate={{
                    opacity: [0.1, 0.4, 0.1],
                    scaleY: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>

            {/* Floating particles */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 6 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                }}
              />
            ))}
          </div>

          {/* Main content - perfectly centered */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
            {/* Enhanced Camera Design */}
            <motion.div
              className="relative mb-8"
              initial={{ scale: 0, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
            >
              {/* Outer glow effect */}
              <motion.div
                className="absolute inset-0 w-56 h-56 rounded-full"
                animate={{ 
                  boxShadow: [
                    "0 0 60px rgba(59, 130, 246, 0.3)",
                    "0 0 120px rgba(59, 130, 246, 0.6)",
                    "0 0 60px rgba(59, 130, 246, 0.3)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              {/* Camera body */}
              <motion.div
                className="w-56 h-56 rounded-full border-4 border-primary-400/30 flex items-center justify-center relative"
                style={{
                  background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
                  backdropFilter: 'blur(10px)',
                }}
                initial={{ borderColor: 'rgba(59, 130, 246, 0.1)' }}
                animate={{ borderColor: 'rgba(59, 130, 246, 0.5)' }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                {/* Camera lens */}
                <motion.div
                  className="w-40 h-40 rounded-full border-2 border-secondary-400/50 flex items-center justify-center relative"
                  style={{
                    background: 'linear-gradient(135deg, rgba(51, 65, 85, 0.6) 0%, rgba(30, 41, 59, 0.8) 100%)',
                  }}
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {/* Inner lens */}
                  <motion.div
                    className="w-28 h-28 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden"
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    {/* Lens reflection */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"
                      animate={{ opacity: [0.2, 0.4, 0.2] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    />
                    
                    {/* Camera icon */}
                    <Camera className="h-14 w-14 text-white relative z-10" />
                  </motion.div>

                  {/* Aperture elements - static, no spinning */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-10 bg-gradient-to-b from-primary-300/60 to-secondary-300/60 rounded-full"
                      style={{
                        transformOrigin: '50% 100%',
                        transform: `rotate(${i * 45}deg) translateY(-20px)`,
                      }}
                      initial={{ scaleY: 0.3, opacity: 0 }}
                      animate={{ scaleY: 1, opacity: 0.8 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.8 + i * 0.1,
                      }}
                    />
                  ))}
                </motion.div>

                {/* Focus corner indicators */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      top: i < 2 ? '15px' : 'auto',
                      bottom: i >= 2 ? '15px' : 'auto',
                      left: i % 2 === 0 ? '15px' : 'auto',
                      right: i % 2 === 1 ? '15px' : 'auto',
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1 + i * 0.1 }}
                  >
                    <Focus className="h-6 w-6 text-primary-400" />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Enhanced text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-center"
            >
              <motion.h2 
                className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold gradient-text mb-4"
                initial={{ letterSpacing: '0.1em' }}
                animate={{ letterSpacing: '0.05em' }}
                transition={{ duration: 1, delay: 1.5 }}
              >
                Smile for the camera
              </motion.h2>
              <motion.p
                className="text-xl md:text-2xl text-gray-300 font-poppins"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
              >
                ZM Studio Photography
              </motion.p>
            </motion.div>
          </div>

          {/* Enhanced flash effect */}
          <AnimatePresence>
            {showFlash && (
              <>
                {/* Pre-flash glow */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.3 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.1 }}
                  className="absolute inset-0 bg-primary-200 z-20"
                />
                {/* Main flash */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                  className="absolute inset-0 bg-white z-30"
                />
              </>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Preloader 
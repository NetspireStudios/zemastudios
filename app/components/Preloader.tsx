'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, Aperture, Focus } from 'lucide-react'

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prevProgress + Math.random() * 15
      })
    }, 150)

    return () => clearInterval(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center"
        >
          {/* Background animated grid */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-px h-full bg-gradient-to-b from-transparent via-primary-400 to-transparent"
                style={{ left: `${i * 5}%` }}
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                  scaleY: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>

          {/* Main content */}
          <div className="relative z-10 text-center">
            {/* Camera lens animation */}
            <motion.div
              className="relative mx-auto mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
            >
              {/* Outer ring */}
              <motion.div
                className="w-32 h-32 rounded-full border-4 border-primary-400/30 flex items-center justify-center relative"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                {/* Middle ring */}
                <motion.div
                  className="w-24 h-24 rounded-full border-2 border-secondary-400/50 flex items-center justify-center relative"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                >
                  {/* Camera icon */}
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center shadow-2xl"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      boxShadow: [
                        "0 0 20px rgba(59, 130, 246, 0.3)",
                        "0 0 40px rgba(59, 130, 246, 0.6)",
                        "0 0 20px rgba(59, 130, 246, 0.3)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Camera className="h-8 w-8 text-white" />
                  </motion.div>

                  {/* Aperture blades */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-6 bg-gradient-to-b from-primary-300 to-secondary-300"
                      style={{
                        transformOrigin: '50% 100%',
                        transform: `rotate(${i * 45}deg) translateY(-12px)`,
                      }}
                      animate={{
                        scaleY: [0.5, 1, 0.5],
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.1,
                      }}
                    />
                  ))}
                </motion.div>

                {/* Focus indicators */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-primary-400 rounded-full"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `translate(-50%, -50%) rotate(${i * 90}deg) translateY(-20px)`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>

            {/* Loading text with typewriter effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6"
            >
              <h2 className="text-2xl md:text-3xl font-playfair font-bold gradient-text mb-2">
                ZM Studio
              </h2>
              <motion.p
                className="text-gray-300 font-poppins"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Capturing your perfect moments...
              </motion.p>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="w-64 mx-auto"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-poppins text-gray-400">Loading</span>
                <span className="text-sm font-poppins text-primary-400">{Math.round(progress)}%</span>
              </div>
              <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>

            {/* Floating camera elements */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute opacity-20"
                style={{
                  left: `${20 + i * 10}%`,
                  top: `${30 + (i % 2) * 40}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 360],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              >
                {i % 3 === 0 ? (
                  <Aperture className="h-6 w-6 text-primary-400" />
                ) : i % 3 === 1 ? (
                  <Focus className="h-5 w-5 text-secondary-400" />
                ) : (
                  <Camera className="h-4 w-4 text-primary-300" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Flash effect when completed */}
          {progress >= 100 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-white"
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Preloader 
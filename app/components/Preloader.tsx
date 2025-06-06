'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera } from 'lucide-react'

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
          className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center"
        >
          {/* Main content - perfectly centered */}
          <div className="flex flex-col items-center justify-center text-center">
            {/* Big Camera Animation */}
            <motion.div
              className="relative mb-8"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.3 }}
            >
              {/* Outer glow ring */}
              <motion.div
                className="absolute inset-0 w-48 h-48 rounded-full"
                animate={{ 
                  boxShadow: [
                    "0 0 40px rgba(59, 130, 246, 0.3)",
                    "0 0 80px rgba(59, 130, 246, 0.6)",
                    "0 0 40px rgba(59, 130, 246, 0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              {/* Camera lens outer ring */}
              <motion.div
                className="w-48 h-48 rounded-full border-4 border-primary-400/40 flex items-center justify-center relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm"
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              >
                {/* Camera lens inner ring */}
                <motion.div
                  className="w-36 h-36 rounded-full border-3 border-secondary-400/60 flex items-center justify-center relative bg-gradient-to-br from-primary-900/30 to-secondary-900/30"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  {/* Main camera icon */}
                  <motion.div
                    className="w-24 h-24 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center shadow-2xl"
                    animate={{ 
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Camera className="h-12 w-12 text-white" />
                  </motion.div>

                  {/* Aperture blades - 8 blades around the camera */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1.5 h-8 bg-gradient-to-b from-primary-300 to-secondary-300 rounded-full"
                      style={{
                        transformOrigin: '50% 100%',
                        transform: `rotate(${i * 45}deg) translateY(-16px)`,
                      }}
                      animate={{
                        scaleY: [0.6, 1, 0.6],
                        opacity: [0.4, 1, 0.4],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.1,
                      }}
                    />
                  ))}
                </motion.div>

                {/* Focus corner indicators */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 border-2 border-primary-400"
                    style={{
                      top: i < 2 ? '10px' : 'auto',
                      bottom: i >= 2 ? '10px' : 'auto',
                      left: i % 2 === 0 ? '10px' : 'auto',
                      right: i % 2 === 1 ? '10px' : 'auto',
                      borderTop: i >= 2 ? 'none' : '2px solid',
                      borderBottom: i < 2 ? 'none' : '2px solid',
                      borderLeft: i % 2 === 1 ? 'none' : '2px solid',
                      borderRight: i % 2 === 0 ? 'none' : '2px solid',
                    }}
                    animate={{
                      opacity: [0.3, 1, 0.3],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>

            {/* "Smile for the camera" text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center"
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-playfair font-bold gradient-text mb-3"
                animate={{ 
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Smile for the camera
              </motion.h2>
              <motion.p
                className="text-lg text-gray-300 font-poppins"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                ZM Studio Photography
              </motion.p>
            </motion.div>
          </div>

          {/* Camera flash effect */}
          <AnimatePresence>
            {showFlash && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-white z-10"
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Preloader 
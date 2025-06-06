'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowDown, Camera, Sparkles, Heart } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  const texts = [
    'Capturing Forever Moments',
    'Wedding Photography',
    'Love Stories Told',
    'Memories That Last'
  ]

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 80
    const pauseTime = isDeleting ? 300 : 1200

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < texts[textIndex].length) {
        setCurrentText(texts[textIndex].substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      } else if (isDeleting && charIndex > 0) {
        setCurrentText(texts[textIndex].substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      } else if (!isDeleting && charIndex === texts[textIndex].length) {
        setTimeout(() => setIsDeleting(true), pauseTime)
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setTextIndex((textIndex + 1) % texts.length)
      }
    }, typeSpeed)

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, textIndex, texts])

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Parallax */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0"
        >
          <Image
            src="/images/Wedphoto1.png"
            alt="Beautiful wedding photography by ZM Studio"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        
        {/* Additional background layers */}
        <motion.div
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0"
        >
          <Image
            src="/images/Wedphoto2.png"
            alt="Wedding moments"
            fill
            className="object-cover opacity-20 mix-blend-overlay"
          />
        </motion.div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/30 via-transparent to-secondary-900/30" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-5">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto section-padding">
        {/* Brand Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center space-x-4 mb-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-16 h-16 rounded-full bg-gradient-to-r from-primary-400 to-secondary-400 flex items-center justify-center shadow-lg"
            >
              <Camera className="h-8 w-8 text-white" />
            </motion.div>
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-playfair font-bold gradient-text"
            >
              ZM Studio
            </motion.h1>
          </div>
        </motion.div>

        {/* Typewriter Effect */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-8 h-20 flex items-center justify-center"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-poppins font-light text-white text-shadow">
            {currentText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="text-primary-400"
            >
              |
            </motion.span>
          </h2>
        </motion.div>

        {/* Animated Tagline with Letter Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mb-12"
        >
          <motion.p className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-poppins font-light max-w-4xl mx-auto">
            {"Professional Wedding & Event Photography in Edmonton".split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, delay: 1.3 + index * 0.02 }}
                className={char === ' ' ? 'inline-block w-2' : 'inline-block'}
              >
                {char}
              </motion.span>
            ))}
          </motion.p>
        </motion.div>

        {/* Enhanced CTA Buttons */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-10 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-poppins font-semibold rounded-full shadow-2xl hover:shadow-primary-500/50 transition-all duration-500 overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-secondary-400 to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
            <span className="relative z-10 flex items-center space-x-2">
              <Sparkles className="h-5 w-5" />
              <span>View Our Work</span>
            </span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-10 py-4 glass-effect text-white font-poppins font-semibold rounded-full hover:bg-white/20 transition-all duration-500 border-2 border-white/30 hover:border-primary-400/50"
          >
            <span className="flex items-center space-x-2">
              <Heart className="h-5 w-5" />
              <span>Get In Touch</span>
            </span>
          </motion.button>
        </motion.div>

        {/* Floating Decorative Elements - Enhanced */}
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-6 h-6 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full opacity-60 blur-sm"
        />
        <motion.div
          animate={{ 
            y: [0, -40, 0],
            x: [0, 20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-40 right-20 w-8 h-8 bg-gradient-to-r from-secondary-400 to-primary-300 rounded-full opacity-40"
        />
        <motion.div
          animate={{ 
            y: [0, -25, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute bottom-40 left-20 w-4 h-4 bg-gradient-to-r from-primary-300 to-secondary-500 rounded-full opacity-50"
        />
        
        {/* Additional floating hearts and sparkles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`heart-${i}`}
            className="absolute opacity-30"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            <Heart className="h-4 w-4 text-pink-300" />
          </motion.div>
        ))}
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-white/80 cursor-pointer group"
          onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-sm mb-3 font-poppins font-light group-hover:text-primary-400 transition-colors">
            Discover Our Story
          </span>
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="p-2 rounded-full glass-effect group-hover:bg-primary-500/20 transition-all duration-300"
          >
            <ArrowDown className="h-6 w-6" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero 
'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowDown, Camera, Sparkles, Heart } from 'lucide-react'
import Image from 'next/image'
import ImageSlider from './ImageSlider'

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

  const sliderImages = [
    '/images/Wedphoto1.png',
    '/images/Wedphoto2.png',
    '/images/Wedphoto3.png',
    '/images/Wedphoto4.png',
    '/images/Wedphoto5.png'
  ]

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <ImageSlider 
          images={sliderImages}
          className="w-full h-full"
          autoPlay={true}
          interval={6000}
        />
        
        {/* Enhanced gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-900/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/40 via-transparent to-secondary-900/40" />
        
        {/* Dynamic glow overlay */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 70% 60%, rgba(147, 197, 253, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Optimized background elements */}
      <div className="absolute inset-0 z-5">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto section-padding">
        {/* Brand Title - Centered */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          className="mb-8"
        >
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-poppins font-bold gradient-text text-center"
            style={{
              filter: `drop-shadow(0 0 20px rgba(59, 130, 246, 0.6)) drop-shadow(0 0 40px rgba(59, 130, 246, 0.3))`
            }}
          >
            ZM Studio
          </motion.h1>
        </motion.div>

        {/* Typewriter Effect */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-8 h-20 flex items-center justify-center"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-poppins font-light glow-text-strong">
            {currentText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="text-primary-400"
              style={{
                textShadow: `0 0 10px rgba(59, 130, 246, 0.8), 0 0 20px rgba(59, 130, 246, 0.5)`
              }}
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
          <motion.p className="text-xl md:text-2xl lg:text-3xl glow-text font-poppins font-light max-w-4xl mx-auto">
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
        
        {/* Optimized floating hearts */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`heart-${i}`}
            className="absolute opacity-30"
            style={{
              left: `${25 + i * 25}%`,
              top: `${40 + i * 15}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut"
            }}
          >
            <Heart className="h-4 w-4 text-pink-300" />
          </motion.div>
        ))}
      </div>


    </section>
  )
}

export default Hero 
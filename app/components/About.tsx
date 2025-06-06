'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Heart, Camera, Star } from 'lucide-react'
import Image from 'next/image'

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section id="about" className="relative py-20 bg-slate-900 overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0.08 }}
          animate={{ scale: 1.05, opacity: 0.12 }}
          transition={{ duration: 25, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0"
        >
          <Image
            src="/images/wedphoto5.png"
            alt="Wedding background"
            fill
            className="object-cover"
          />
        </motion.div>
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-slate-900/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/10 via-transparent to-secondary-900/10" />
      </div>

      {/* Floating background elements */}
      <div className="absolute inset-0 z-5">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-primary-400/40 to-secondary-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 gradient-text">
              About ZM Studio
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed font-poppins">
              For years, I've been a popular photographer in many types of events, working with couples 
              to capture their special day. I meet with each couple beforehand, getting a sense of their 
              personality and style so that I can bring them to life on camera.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed font-poppins">
              There is nothing more gratifying than seeing smiling, happy couples as they relive their 
              cherished wedding memories through my images. Every photograph tells a unique story of love, 
              joy, and celebration.
            </p>

            {/* Features */}
            <div className="space-y-4">
              {[
                { icon: Heart, text: "Passionate about capturing love stories" },
                { icon: Camera, text: "Professional photography & videography" },
                { icon: Star, text: "Years of experience in wedding photography" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <feature.icon className="h-6 w-6 text-primary-400" />
                  <span className="text-gray-300 font-poppins">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/images/Wedphoto2.png"
                alt="Professional wedding photography"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent" />
            </div>
            
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 glass-effect p-6 rounded-xl"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-400 mb-1">5+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute -top-6 -right-6 glass-effect p-6 rounded-xl"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary-400 mb-1">100+</div>
                <div className="text-sm text-gray-300">Happy Couples</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 
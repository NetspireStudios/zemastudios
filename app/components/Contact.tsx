'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Phone, Mail, Send, Clock, Star } from 'lucide-react'
import Image from 'next/image'

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: "Edmonton, AB, Canada",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "(780) 782-8619",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Mail,
      title: "Email",
      details: "zemastudiophotography@gmail.com",
      color: "from-green-500 to-teal-500"
    }
  ]

  return (
    <section id="contact" className="relative py-20 bg-slate-800 overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0.1 }}
          animate={{ scale: 1.05, opacity: 0.15 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0"
        >
          <Image
            src="/images/Wedphoto3.png"
            alt="Wedding background"
            fill
            className="object-cover"
          />
        </motion.div>
        
        <motion.div
          initial={{ scale: 1, opacity: 0.05 }}
          animate={{ scale: 1.1, opacity: 0.1 }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", delay: 5 }}
          className="absolute inset-0"
        >
          <Image
            src="/images/Wedphoto4.png"
            alt="Wedding moments"
            fill
            className="object-cover mix-blend-overlay"
          />
        </motion.div>

        {/* Enhanced gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/95 via-slate-800/90 to-slate-900/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 via-transparent to-secondary-900/20" />
      </div>

      {/* Floating background elements */}
      <div className="absolute inset-0 z-5">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-primary-300/30 to-secondary-300/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-6"
          >
            <div className="p-4 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500">
              <Mail className="h-8 w-8 text-white" />
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 gradient-text">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-poppins">
            Are you looking for a professional Wedding Photographer who can capture your 
            special day? You've come to the right place. Please get in touch today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info - Enhanced */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-playfair font-bold text-white mb-8">Contact Information</h3>
            
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="flex items-center space-x-6 glass-effect p-6 rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-14 h-14 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center shadow-lg`}
                  >
                    <info.icon className="h-7 w-7 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="font-poppins font-semibold text-white text-lg mb-1">{info.title}</h4>
                    <p className="text-gray-300 font-poppins break-all">{info.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="glass-effect p-6 rounded-xl bg-gradient-to-r from-primary-900/20 to-secondary-900/20"
            >
              <div className="flex items-center space-x-3 mb-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center"
                >
                  <Clock className="h-5 w-5 text-white" />
                </motion.div>
                <h4 className="font-poppins font-semibold text-white text-lg">Business Hours</h4>
              </div>
              <div className="space-y-3 text-gray-300 font-poppins">
                <div className="flex justify-between items-center">
                  <span>Monday - Friday</span>
                  <span className="text-primary-300 font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Saturday - Sunday</span>
                  <span className="text-secondary-300 font-medium">By Appointment</span>
                </div>
              </div>
            </motion.div>

            {/* Reviews/Testimonials hint */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="glass-effect p-6 rounded-xl"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.9 + i * 0.1 }}
                    >
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </div>
                <span className="text-gray-300 font-poppins">5.0 Rating</span>
              </div>
              <p className="text-gray-400 text-sm font-poppins italic">
                "Exceptional service and stunning photography. Highly recommended!"
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form - Enhanced and Aligned */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 lg:mt-0" // Added margin top to align with contact info section
          >
            {/* Form Header with Camera Icon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center space-x-3 mb-8"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <Send className="h-6 w-6 text-white" />
              </motion.div>
              <h3 className="text-2xl font-playfair font-bold text-white">Send us a message</h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="glass-effect p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="space-y-2"
                  >
                    <label htmlFor="name" className="block text-sm font-poppins font-medium text-gray-300">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 glass-effect rounded-lg text-white font-poppins placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your Name"
                    />
                  </motion.div>
                  
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="space-y-2"
                  >
                    <label htmlFor="email" className="block text-sm font-poppins font-medium text-gray-300">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 glass-effect rounded-lg text-white font-poppins placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>
                </div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label htmlFor="subject" className="block text-sm font-poppins font-medium text-gray-300">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass-effect rounded-lg text-white font-poppins placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="Wedding Photography Inquiry"
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label htmlFor="message" className="block text-sm font-poppins font-medium text-gray-300">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 glass-effect rounded-lg text-white font-poppins placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none transition-all duration-300"
                    placeholder="Tell us about your special day and what you're looking for..."
                  ></textarea>
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-poppins font-semibold rounded-lg shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 flex items-center justify-center space-x-3 group"
                >
                  <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 
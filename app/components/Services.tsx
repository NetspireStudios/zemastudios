'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Camera, Video, Heart, Image as ImageIcon, Calendar, Users } from 'lucide-react'

const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const services = [
    {
      icon: Camera,
      title: "Wedding Photography",
      description: "Capturing your special day with artistic vision and attention to every detail. From intimate moments to grand celebrations.",
      features: ["Full day coverage", "High-resolution images", "Online gallery"]
    },
    {
      icon: Video,
      title: "Videography",
      description: "Professional video recording to preserve the sounds, emotions, and movements of your special day.",
      features: ["4K video quality", "Drone footage", "Highlight reel"]
    },
    {
      icon: Heart,
      title: "Engagement Sessions",
      description: "Recording true beauty and emotional moments surrounding your wedding day, capturing every bit on camera.",
      features: ["Couple portraits", "Location flexibility", "Style consultation"]
    },
    {
      icon: ImageIcon,
      title: "Digital Albums",
      description: "Beautiful digital albums and poster creation to showcase your memories in the most elegant way.",
      features: ["Custom design", "Print-ready files", "Multiple formats"]
    },
    {
      icon: Calendar,
      title: "Event Photography",
      description: "Professional coverage for all types of special events beyond weddings, capturing every important moment.",
      features: ["Corporate events", "Private parties", "Family gatherings"]
    },
    {
      icon: Users,
      title: "Group Sessions",
      description: "Family portraits and group photography sessions with professional lighting and composition.",
      features: ["Family portraits", "Group photos", "Studio sessions"]
    }
  ]

  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Photography, Videography, recording in live events, Posters, Digital albums, and many other 
            professional services to make your special day unforgettable.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-effect p-6 rounded-xl hover:bg-white/15 transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mb-4"
              >
                <service.icon className="h-8 w-8 text-white" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                    <div className="w-2 h-2 bg-primary-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get Custom Quote
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Services 
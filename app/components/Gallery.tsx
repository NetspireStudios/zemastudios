'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { X } from 'lucide-react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const images = [
    {
      src: '/images/Wedphoto1.png',
      alt: 'Beautiful wedding ceremony capture',
      span: 'md:col-span-2 md:row-span-2'
    },
    {
      src: '/images/Wedphoto2.png',
      alt: 'Romantic couple portrait',
      span: 'md:col-span-1 md:row-span-1'
    },
    {
      src: '/images/Wedphoto3.png',
      alt: 'Wedding reception moments',
      span: 'md:col-span-1 md:row-span-1'
    },
    {
      src: '/images/Wedphoto4.png',
      alt: 'Intimate wedding details',
      span: 'md:col-span-2 md:row-span-1'
    },
    {
      src: '/images/wedphoto5.png',
      alt: 'Celebration and joy',
      span: 'md:col-span-1 md:row-span-1'
    }
  ]

  return (
    <section id="gallery" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every moment tells a story. Browse through our collection of captured memories, 
            where love, joy, and celebration come together in perfect harmony.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${image.span} relative group cursor-pointer overflow-hidden rounded-lg`}
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Gallery image"
                width={1200}
                height={800}
                className="max-w-full max-h-full object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Gallery 
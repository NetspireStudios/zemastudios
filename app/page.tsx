'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import Preloader from './components/Preloader'
export default function Home() {
  return (
    <>
      <Preloader />
      
      <main className="relative overflow-x-hidden">
        <Navigation />
        
        {/* Hero Section */}
        <Hero />
        
        {/* All Content Sections */}
        <About />
        <Services />
        <Gallery />
        <Contact />
      </main>
    </>
  )
} 
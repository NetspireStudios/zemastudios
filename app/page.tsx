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
import WaveTransition from './components/WaveTransition'
import ParallaxWaveTransition from './components/ParallaxWaveTransition'
import FullScreenWaveOverlay from './components/FullScreenWaveOverlay'
import WaveTransitionSection from './components/WaveTransitionSection'

export default function Home() {
  return (
    <>
      <Preloader />
      
      <main className="relative overflow-x-hidden">
        <Navigation />
        
        {/* Hero Section */}
        <div className="relative z-10">
          <Hero />
        </div>
        
        {/* MASSIVE Wave Transition Section - 300vh height */}
        <WaveTransitionSection />
        
        {/* All Other Sections - After the wave transition */}
        <div className="relative z-20">
          <About />
        </div>
        
        <div className="relative z-30">
          <Services />
        </div>
        
        <div className="relative z-40">
          <Gallery />
        </div>
        
        <div className="relative z-50">
          <Contact />
        </div>
      </main>
    </>
  )
} 
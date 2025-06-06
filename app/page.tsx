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

export default function Home() {
  return (
    <>
      <Preloader />
      <main className="relative overflow-x-hidden">
        <Navigation />
        <div className="relative">
          <Hero />
          <WaveTransition variant="bottom" color="transparent" />
        </div>
        <div className="relative">
          <About />
          <WaveTransition variant="bottom" color="primary" />
        </div>
        <div className="relative">
          <Services />
          <WaveTransition variant="bottom" color="secondary" />
        </div>
        <div className="relative">
          <Gallery />
          <WaveTransition variant="bottom" color="white" />
        </div>
        <Contact />
      </main>
    </>
  )
} 
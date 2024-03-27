import React from 'react'
import Hero from './Sections/Hero'
import About from './Sections/About'

export default function page() {
  return (
    <div>
      <span id="home">
        <Hero />
      </span>
      <span className="flex justify-center" id="About">
        <About />
      </span>
    </div>
  )
}

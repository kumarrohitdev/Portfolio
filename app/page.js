import React from 'react'
import Hero from './Sections/Hero'
import About from './Sections/About'
import Project from './Sections/Projects'
import Skills from './Sections/Skills'
import Shorts from './Sections/Shorts'

export default function page() {
  return (
    <div>
      <span id="home">
        <Hero />
      </span>
      <span className="flex justify-center" id="About">
        <About />
      </span>
      <span className="flex justify-center" id="Project">
        <Project />
      </span>

      <span className="flex justify-center" id="skills">
        <Skills />
      </span>

      <span className="flex justify-center" id="skills">
        <Shorts/>
      </span>
    </div>
  )
}

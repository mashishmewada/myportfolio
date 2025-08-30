import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'

export default function App(){
  return (
    <div className="font-sans bg-gradient-to-b from-purple-900 to-blue-900 text-white">
      <Navbar/>
      <main>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </main>
      <footer className="text-center text-gray-300 py-6">© 2025 Ashish Mewada</footer>
    </div>
  )
}

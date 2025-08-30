import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import ashishPhoto from '../img/ashish.png';

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center text-center px-6">
      <motion.div 
        initial={{ opacity: 0, y: 40 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto"
      >
        {/* Left: Photo */}
        <div className="flex justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg hover:scale-105 transition">
            <img src={ashishPhoto} alt="Ashish Mewada" className="object-cover w-full h-full" />
          </div>
        </div>

        {/* Right: Text */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Hi, I'm <span className="text-blue-400">Ashish Mewada</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6">
            Software Engineer | Java | Spring Boot | Microservices
          </p>
          <div className="flex justify-center md:justify-start space-x-6 text-3xl text-gray-300">
            <a href="https://github.com/mashishmewada" target="_blank" rel="noreferrer">
              <FaGithub className="hover:text-white" />
            </a>
            <a href="https://linkedin.com/in/ashishmewada14" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-white" />
            </a>
            <a href="mailto:dashishmewada@gmail.com">
              <FaEnvelope className="hover:text-white" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

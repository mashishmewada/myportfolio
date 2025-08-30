import React from "react";
import logo from '../img/logo.png';

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-purple-950/70 backdrop-blur-md shadow-md z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Left: Logo */}
        <div className="flex items-center space-x-3">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-blue-400 shadow-md hover:scale-110 transition">
            <img src={logo} alt="logo" className="object-cover w-full h-full" />
          </div>

          <span 
            className="text-xl font-bold text-blue-300 tracking-wide"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Ashish
          </span>
        </div>

        {/* Right: Navigation */}
        <div className="space-x-6 text-sm font-medium">
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#skills" className="hover:text-blue-400">Skills</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>
      </nav>
    </header>
  )
}

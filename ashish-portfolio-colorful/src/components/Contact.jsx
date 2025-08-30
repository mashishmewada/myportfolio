import React from 'react'
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="bg-gradient-to-r from-blue-900 to-purple-900 py-20 px-6 text-center">
      <h2 className="text-3xl font-bold text-blue-300 mb-6">Get in Touch</h2>
      <p className="text-gray-200 mb-10 max-w-xl mx-auto">
        I’d love to hear from you — whether it’s about a project, opportunity, or just to say hello 👋
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10">
        {/* Phone */}
        <a 
          href="tel:+919584480478"
          className="flex items-center justify-center gap-3 bg-white/10 hover:bg-blue-600 px-6 py-4 rounded-xl text-white font-medium transition shadow-lg"
        >
          <FaPhoneAlt className="text-xl text-green-400" />
          <span>+91 95844 80478</span>
        </a>
        
        {/* WhatsApp */}
        <a 
          href="https://wa.me/919584480478"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 bg-white/10 hover:bg-green-600 px-6 py-4 rounded-xl text-white font-medium transition shadow-lg"
        >
          <FaWhatsapp className="text-2xl text-green-400" />
          <span>Chat with Ashish</span>   {/* ✅ Changed here */}
        </a>

        {/* Email */}
        <a 
          href="mailto:dashishmewada@gmail.com"
          className="flex items-center justify-center gap-3 bg-white/10 hover:bg-purple-600 px-6 py-4 rounded-xl text-white font-medium transition shadow-lg"
        >
          <FaEnvelope className="text-2xl text-yellow-300" />
          <span>dashishmewada@gmail.com</span>
        </a>
      </div>

      <p className="text-gray-400 text-sm">📲 Quick responses on WhatsApp & Email</p>
    </section>
  )
}

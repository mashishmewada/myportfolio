import React from 'react'
import { FaJava, FaDocker, FaGitAlt, FaTools } from 'react-icons/fa'
import { 
  SiSpringboot, SiPostgresql, SiMysql, SiJenkins, 
  SiApachekafka, SiApachemaven, SiEclipseide, SiApachetomcat 
} from 'react-icons/si'
import { MdSecurity } from 'react-icons/md'

const skills = [
  // Languages
  { name: 'Java', icon: <FaJava className='text-red-500' /> },

  // Frameworks & Libraries
  { name: 'Spring Boot', icon: <SiSpringboot className='text-green-500' /> },
  { name: 'Spring MVC', icon: <FaTools className='text-green-400' /> },
  { name: 'Spring Core', icon: <FaTools className='text-green-300' /> },
  { name: 'Microservices', icon: <FaTools className='text-emerald-400' /> },
  { name: 'Hibernate', icon: <FaTools className='text-yellow-500' /> },
  { name: 'JPA', icon: <FaTools className='text-orange-500' /> },
  { name: 'Struts', icon: <FaTools className='text-purple-400' /> },

  // Messaging & Streaming
  { name: 'Apache Kafka', icon: <SiApachekafka className='text-black' /> },

  // Tools & Databases
  { name: 'Maven', icon: <SiApachemaven className='text-orange-500' /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className='text-sky-400' /> },
  { name: 'MySQL', icon: <SiMysql className='text-blue-500' /> },
  { name: 'Docker', icon: <FaDocker className='text-blue-400' /> },
  { name: 'Jenkins', icon: <SiJenkins className='text-red-400' /> },
  { name: 'Eclipse', icon: <SiEclipseide className='text-indigo-500' /> },
  { name: 'Tomcat', icon: <SiApachetomcat className='text-yellow-500' /> },
  { name: 'Git', icon: <FaGitAlt className='text-orange-500' /> },

  // Testing & Code Quality
  { name: 'JUnit', icon: <FaTools className='text-green-600' /> },
  { name: 'SonarQube', icon: <FaTools className='text-sky-600' /> },

  // Security & Cryptography
  { name: 'Thales Payshield HSM', icon: <MdSecurity className='text-red-500' /> },
  { name: 'AES', icon: <MdSecurity className='text-blue-400' /> },
  { name: 'TDES', icon: <MdSecurity className='text-green-500' /> },
  { name: 'SSL', icon: <MdSecurity className='text-purple-500' /> },
  { name: 'TLS', icon: <MdSecurity className='text-indigo-400' /> },
  { name: 'HCE', icon: <MdSecurity className='text-yellow-400' /> }
]

export default function Skills() {
  return (
    <section id="skills" className="bg-gradient-to-r from-purple-800 to-blue-800 py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-blue-300 mb-10">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {skills.map((s) => (
          <div
            key={s.name}
            className="bg-white/10 backdrop-blur-md p-6 rounded-xl flex flex-col items-center hover:scale-105 transition"
          >
            <div className="text-4xl mb-2">{s.icon}</div>
            <p className="text-white font-medium text-center">{s.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

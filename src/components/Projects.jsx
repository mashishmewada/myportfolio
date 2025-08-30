import React from 'react'

const projects = [
  {
    title: 'Payment Middleware Platform',
    description:
      'Middleware integrator enabling SPOS terminals using AES cryptography and integrating with backend switches using TDES. It interacts with TMS for key management and Thales HSM for key derivation, storage, translation, and MAC verification.',
    technologies: 'Java, Spring Boot, JPA, REST, PostgreSQL, Thales Payshield HSM',
    responsibilities: [
      'Developed backend APIs and features.',
      'Implemented DUKPT with Thales Payshield 10K HSM.',
      'Integrated with Merchant Onboarding and Switch systems.',
      'Worked on end-to-end integration and testing.',
      'Fixed Sonar issues and QA-reported bugs.'
    ]
  },
  {
    title: 'POS Billing System',
    description:
      'A POS system with two components POS Lib and POS Controller. It supports terminal discovery, auto-reconnect, retry mechanisms, and transaction processing. The system integrates with the payment application through POS Bridge.',
    technologies: 'Java 8, Spring, Web Services, JavaFX',
    responsibilities: [
      'Conducted requirement analysis and developed features.',
      'Designed and developed UI using JavaFX.',
      'Developed backend APIs and services.',
      'Fixed Sonar issues and ensured code quality.'
    ]
  },
  {
    title: 'Loyalty Platform',
    description:
      'An enterprise-level microservices-based platform for user management, integrating with issuance and acquiring systems for reward points and redemption. Built a responsive and intuitive UI using React.js for user dashboards and admin modules.',
    technologies: 'Java, Spring Boot, REST, React.js, Microservices',
    responsibilities: [
      'Involved in requirement discussions and technical design.',
      'Developed REST APIs and unit test cases.',
      'Conducted code reviews and ensured compliance with best practices.'
    ]
  },
  {
    title: 'Terminal Management System',
    description:
      'Enterprise-level microservices-based platform integrating with issuance and acquiring systems. Provided REST APIs and Hibernate-based services for transaction processing. Integrated with a global processor for OLTP operations.',
    technologies: 'Java, Spring Boot, Hibernate, REST, Microservices',
    responsibilities: [
      'Developed Hibernate-based services for data processing.',
      'Exposed RESTful APIs for transaction processing.',
      'Integrated with a global processor for OLTP operations.'
    ]
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6">
      <h2 className="text-3xl font-bold text-blue-300 text-center mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-white/10 p-6 rounded-xl shadow hover:scale-105 hover:shadow-lg transition text-left"
          >
            <h3 className="text-xl font-semibold text-white mb-2">{p.title}</h3>
            <p className="text-gray-200 text-sm mb-3">{p.description}</p>
            <p className="text-gray-300 text-sm mb-2">
              <span className="font-semibold text-blue-300">Technologies: </span>
              {p.technologies}
            </p>
            <ul className="list-disc list-inside text-gray-200 text-sm space-y-1">
              {p.responsibilities.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

"use client";
import React from 'react'
import Image from 'next/image'

const workExperiences = [
  {
    id: 1,
    title: "Backend Developer Intern",
    company: "Sharmii Technologies (Remote)",
    period: "Apr 2025 - Jun 2025",
    description: "Developed RESTful APIs using Spring Boot and MongoDB for workforce management system serving 500+ employees. Built authentication, role-based access control, and shift scheduling modules reducing manual overhead by 40%. Implemented automated testing with 85% code coverage using JUnit and Mockito.",
    technologies: ["Spring Boot", "MongoDB", "JUnit", "Mockito"],
    image: "/images/work/shramii.png" // You'll upload this
  },
  {
    id: 2,
    title: "Technical Project Manager - Riviera Cultural Fest",
    company: "VIT Vellore",
    period: "Dec 2024 - Feb 2025",
    description: "Led 16 developers to build festival website handling 7,000+ daily users with 99.5% uptime. Architected backend using Golang and Docker, achieving 60% faster response times. Implemented caching strategies and load balancing for high-traffic scenarios.",
    technologies: ["Golang", "Docker", "Load Balancing", "Caching"],
    website: "riviera.vit.ac.in",
    image: "/images/work/riviera.png" // You'll upload this
  },
  {
    id: 3,
    title: "Technical Lead - LAMPY Mental Health App",
    company: "VIT Vellore",
    period: "2024",
    description: "Built cross-platform counseling app using React Native serving 1,000+ users. Implemented biometric authentication with facial recognition (95% accuracy). Developed ML-based counselor matching algorithm improving user satisfaction by 80%.",
    technologies: ["React Native", "ML", "Facial Recognition", "Biometric Auth"],
    image: "/images/work/lampy.png" // You'll upload this
  },
  {
    id: 4,
    title: "Software Engineering Educator",
    company: "YaySkool Ed-Tech Platform",
    period: "December 2022 - February 2023",
    description: "Delivered Java and C programming courses to 200+ students with 90% completion rate. Created interactive curriculum and conducted live sessions, improving student proficiency by 70%.",
    technologies: ["Java", "C Programming", "Education", "Curriculum Development"],
    image: "/images/work/yayskool.png" // You'll upload this
  },
  {
    id: 5,
    title: "Events Volunteer",
    company: "Vellore Institute of Technology",
    period: "Dec 2022 - Feb 2024 · 1 yr 3 mos",
    description: "Content Report Creation: Drafted and structured detailed reports for event documentation. Emergency Management: Assisted in handling on-ground crises and ensuring smooth event execution. Conflict Resolution: Managed interdepartmental challenges and facilitated effective communication. Event Coordination: Worked closely with multiple teams to synchronize large-scale fest operations.",
    technologies: ["Event Management", "Crisis Management", "Communication", "Team Coordination"],
    image: "/images/work/events.png" // You'll upload this
  }
];

const WorkExperience = () => {
  return (
    <section className="py-16" id="experience">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">
          Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Experience</span>
        </h2>
        <p className="text-[#ADB7BE] text-center mb-12 text-lg">My professional journey and contributions</p>
        
        <div className="space-y-8 max-w-6xl mx-auto">
          {workExperiences.map((experience, index) => (
            <div 
              key={experience.id} 
              className={`flex flex-col lg:flex-row items-center gap-8 p-6 rounded-xl bg-[#181818] border border-[#33353F] hover:border-purple-500/50 transition-all duration-300 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className="lg:w-1/3 w-full">
                <div className="relative w-full h-48 lg:h-56 rounded-lg overflow-hidden bg-gradient-to-br from-purple-900/20 to-pink-900/20 flex items-center justify-center">
                  <Image
                    src={experience.image}
                    alt={experience.title}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full rounded-lg"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center text-6xl text-purple-400/50" style={{display: 'none'}}>
                    💼
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-2/3 w-full space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {experience.title}
                  </h3>
                  <p className="text-xl text-purple-400 font-semibold mb-1">
                    {experience.company}
                  </p>
                  <p className="text-[#ADB7BE] text-sm mb-3">
                    {experience.period}
                  </p>
                  {experience.website && (
                    <p className="text-blue-400 text-sm mb-3">
                      Project: {experience.website}
                    </p>
                  )}
                </div>

                <p className="text-[#ADB7BE] leading-relaxed text-base">
                  {experience.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
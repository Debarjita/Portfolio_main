"use client";
import React , {useTransition, useState} from 'react'
import TabButton from './TabButton';

const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-semibold text-purple-400 mb-3">Languages</h4>
            <p className="text-lg text-[#ADB7BE]">Java, Python, C++, Go, JavaScript, C, SQL, Kotlin</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-purple-400 mb-3">Backend</h4>
            <p className="text-lg text-[#ADB7BE]">Spring Boot, Django, Node.js, Express.js, Gin, REST API, JWT</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-purple-400 mb-3">Frontend</h4>
            <p className="text-lg text-[#ADB7BE]">React, React Native, HTML5, CSS3, JavaScript</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-purple-400 mb-3">Databases</h4>
            <p className="text-lg text-[#ADB7BE]">MongoDB, PostgreSQL, MySQL, SQLite, MongoDB Atlas</p>
          </div>
        </div>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <div className="space-y-6">
          <div className="border-l-4 border-purple-500 pl-6">
            <h4 className="text-xl font-semibold text-white mb-2">Vellore Institute of Technology</h4>
            <p className="text-lg text-purple-400 mb-3">2022 - 2026</p>
            <p className="text-base text-[#ADB7BE] mb-3">Bachelors in Computer Science</p>
            <p className="text-base text-[#ADB7BE]">
              <span className="font-medium text-white">Key Skills:</span> Data Structures, Problem Solving, Object-Oriented Programming (OOP), 
              Analytical Skills, Java, C Programming, Communication, Programming Languages, Python, JavaScript, 
              C++, Research, Back-End Web Development
            </p>
          </div>
          
          <div className="border-l-4 border-purple-500 pl-6">
            <h4 className="text-xl font-semibold text-white mb-2">S.S. Public School</h4>
            <p className="text-lg text-purple-400 mb-3">2019 - 2021</p>
            <p className="text-base text-[#ADB7BE] mb-3">CBSE, Science - PCMB</p>
            <p className="text-base text-[#ADB7BE]">
              <span className="font-medium text-white">Skills:</span> Analytical Skills
            </p>
          </div>
          
          <div className="border-l-4 border-purple-500 pl-6">
            <h4 className="text-xl font-semibold text-white mb-2">Holy Cross School Agartala</h4>
            <p className="text-lg text-purple-400 mb-3">2019</p>
            <p className="text-base text-[#ADB7BE] mb-3">Indian Certificate of Secondary Education</p>
            <p className="text-base text-[#ADB7BE]">
              <span className="font-medium text-white">Skills:</span> Analytical Skills, Java, Python, Hindi
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <div className="space-y-4">
          <div className="bg-[#181818] p-4 rounded-lg border border-[#33353F]">
            <h4 className="text-lg font-semibold text-white mb-2">Microsoft Certified: Azure AI Fundamentals</h4>
            <p className="text-purple-400">Microsoft • July 2024</p>
          </div>
          
          <div className="bg-[#181818] p-4 rounded-lg border border-[#33353F]">
            <h4 className="text-lg font-semibold text-white mb-2">AWS Knowledge: Cloud Essentials</h4>
            <p className="text-purple-400">AWS • December 2024</p>
          </div>
          
          <div className="bg-[#181818] p-4 rounded-lg border border-[#33353F]">
            <h4 className="text-lg font-semibold text-white mb-2">AWS Knowledge: Compute</h4>
            <p className="text-purple-400">AWS • December 2024</p>
          </div>
          
          <div className="bg-[#181818] p-4 rounded-lg border border-[#33353F]">
            <h4 className="text-lg font-semibold text-white mb-2">AWS Knowledge: Serverless</h4>
            <p className="text-purple-400">AWS • January 2025</p>
          </div>
          
          <div className="bg-[#181818] p-4 rounded-lg border border-[#33353F]">
            <h4 className="text-lg font-semibold text-white mb-2">AWS Educate: Getting Started with Storage</h4>
            <p className="text-purple-400">AWS • December 2024</p>
          </div>
          
          <div className="bg-[#181818] p-4 rounded-lg border border-[#33353F]">
            <h4 className="text-lg font-semibold text-white mb-2">AWS Educate: Getting Started with Networking</h4>
            <p className="text-purple-400">AWS • December 2024</p>
          </div>
          
          <div className="bg-[#181818] p-4 rounded-lg border border-[#33353F]">
            <h4 className="text-lg font-semibold text-white mb-2">AWS Educate: Getting Started with Security</h4>
            <p className="text-purple-400">AWS • December 2024</p>
          </div>
        </div>
      ),
    },
  ];

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white py-16" id="about">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Centered layout without image */}
        <div className="text-center">
          <h2 className="text-5xl font-bold text-white mb-8">About Me</h2>
          <p className="text-xl lg:text-2xl text-[#ADB7BE] mb-12 leading-relaxed">
            Debarjita Bhattacharjee, a dedicated full-stack web developer, brings a profound passion for crafting 
            interactive and responsive applications. Armed with valuable skills and experience, I specialize in 
            leveraging versatile tech stacks. As a quick learner, I thrive on challenges that expand my knowledge, 
            contributing to cutting-edge projects. My collaborative nature makes me an enthusiastic team player, 
            eager to create exceptional and innovative applications through continuous learning and staying abreast 
            of the latest industry trends. Let&apos;s embark on a journey to build something amazing together!
          </p>
          
          {/* Tab buttons */}
          <div className="flex flex-row justify-center mb-12 space-x-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              <span className="text-xl">Skills</span>
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              <span className="text-xl">Education</span>
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              <span className="text-xl">Certifications</span>
            </TabButton>
          </div>
          
          {/* Tab content */}
          <div className="text-left max-w-3xl mx-auto">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
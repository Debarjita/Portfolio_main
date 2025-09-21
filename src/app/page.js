import React from 'react';
import Image from 'next/image';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import ProjectsSection from './components/ProjectSection';
import EmailSection from './components/EmailSection';
import Footer from './components/Footer';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <style>{`
        html {
          scroll-behavior: smooth;
          
        }
      `}</style>
      <Navbar />
      <div className='container mx-auto px-12 py-4 mt-24'>
        <HeroSection />
        
        <About/>
        <WorkExperience/>
        <ProjectsSection/>
        <EmailSection/>
        <Footer/>
      </div>
    </main>
  );
}
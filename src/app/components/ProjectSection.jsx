"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";

const projectsData = [
  {
    id: 1,
    title: "Vehicle Management System",
    subtitle: "Full Stack Enterprise Application",
    description: "Architected enterprise vehicle management system with Django REST Framework handling 1000+ users across 50+ organizations. Integrated AI-powered features including facial recognition for driver verification using OpenCV, automatic license plate scanning with Tesseract OCR achieving 92% accuracy.",
    fullDescription: "• Implemented real-time vehicle tracking using WebSocket and Django Channels with Redis for live fleet monitoring\n• Built comprehensive RBAC system with 4 user hierarchies managing multi-tenant data isolation\n• Developed intelligent scheduling algorithm using Python reducing manual vehicle assignment time by 75%\n• Created responsive React dashboard with real-time analytics and mobile-first design\n• Initial Version: Built MVP with Node.js/Express and MongoDB Atlas, later migrated to Django for better scalability",
    technologies: ["Django", "PostgreSQL", "React", "OpenCV", "Tesseract OCR", "Redis", "WebSocket"],
    image: "/images/projects/vehicle-management.png",
    gitUrl: "https://github.com/debarjita/vehicle-management",
    liveUrl: "#",
    featured: true
  },
  {
    id: 2,
    title: "AI-Powered Car Buying Assistant ",
    subtitle: "LangGraph and OpenAI application",
    description: "Built conversational AI agent using LangGraph and GPT-4 for intelligent car purchasing recommendations  ",
    fullDescription: " Developed automated web scraping pipeline extracting 100+ car listings with real-time market analysis,Implemented state-based workflow management with natural language processing for user requirement gathering ,Created extensible architecture supporting multiple platforms with both CLI and web interfaces",
    technologies: ["Python", "LangGraph", "OpenAI", "Playwright "],
    image: "/images/projects/genai.png",
    gitUrl: "https://github.com/Debarjita/Smart-Product-Buyer-AI-Agent",
    liveUrl: "#",
    featured: true
  },
  {
    id: 3,
    title: "File Management System",
    subtitle: "High-Performance API",
    description: "Developed high-performance REST API handling 10,000+ daily file operations with secure upload/download. Implemented MongoDB GridFS for large file storage (up to 16MB+), optimizing storage by 35%.",
    fullDescription: "• Containerized with Docker using multi-stage builds, reducing deployment time by 60%\n• Built comprehensive audit logging for compliance requirements\n• Implemented JWT authentication for secure access control\n• Optimized file handling with efficient streaming and chunked uploads",
    technologies: ["Go", "Gin", "MongoDB GridFS", "JWT", "Docker"],
    image: "/images/projects/file-management.png",
    gitUrl: "https://github.com/debarjita/file-management",
    liveUrl: "#",
    featured: true
  },
  {
    id: 4,
    title: "CRM System",
    subtitle: "Full Stack Campaign management Application",
    description: "A comprehensive customer relationship management platform with intelligent segmentation, personalized campaign delivery, and AI-powered insights.",
    fullDescription: "Built a fully functional Mini CRM Platform from scratch ,Implemented async processing with Redis queues for secure data ingestion , Designed a dynamic campaign builder with flexible segmentation, Delivered real-time campaign execution (90%+ success simulation) , Integrated Google OAuth 2.0 login with session handling , Added rate limiting, CORS protection, and secure session management",
    technologies: ["React", "Tailwind CSS", "MongoDB", "Redis", "Docker", "Railway", "Node"],
    image: "/images/projects/CRM.png",
    gitUrl: "https://github.com/Debarjita/CRM_mini",
    liveUrl: "#",
    featured: true
  },
  {
    id: 5,
    title: "Movie Review System",
    subtitle: "Interactive Movie Platform",
    description: "Built an interactive platform for searching movies and managing reviews with a clean, user-friendly interface. Features comprehensive movie database integration and user review management system.",
    fullDescription: "• Implemented movie search functionality with external API integration\n• Built user authentication and review management system\n• Created responsive design for optimal mobile and desktop experience\n• Integrated movie ratings and recommendation features",
    technologies: ["HTML", "CSS", "Node.js", "Express", "MongoDB", "MySQL"],
    image: "/images/projects/movie-review.png",
    gitUrl: "https://github.com/debarjita/movie-review-system",
    liveUrl: "https://debarjita.github.io/review-website",
    featured: false
  },
  {
    id: 6,
    title: "E-commerce Website",
    subtitle: "Full-Stack Shopping Platform",
    description: "This is a full-stack e-commerce application with a React and Tailwind CSS frontend supported by an Express backend with SQLite, utilizing JWT for secure authentication and AJV for JSON validation.",
    fullDescription: "• Built complete shopping cart functionality with secure checkout process\n• Implemented user authentication and authorization with JWT tokens\n• Created admin panel for product and order management\n• Integrated payment processing and order tracking features\n• Responsive design with modern UI/UX principles",
    technologies: ["React", "Tailwind CSS", "Express", "SQLite", "JWT", "AJV"],
    image: "/images/projects/ecommerce.png",
    gitUrl: "https://github.com/debarjita/ecommerce-website",
    liveUrl: "#",
    featured: false
  }
];

const ProjectCard = ({ project, index }) => {
  const [expanded, setExpanded] = useState(false);
  const buttonId = `project-button-${project.id}`;
  const [mounted, setMounted] = useState(false);
  
  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`${
        project.featured 
          ? 'lg:col-span-2 bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-500/30' 
          : 'bg-[#181818] border-[#33353F]'
      } border rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 group`}
    >
      {/* Image Section */}
      <div className="relative h-48 lg:h-56 overflow-hidden">
        <div
          className="w-full h-full bg-gradient-to-br from-purple-900/40 to-pink-900/40 flex items-center justify-center"
          style={{ 
            backgroundImage: `url(${project.image})`, 
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#181818] bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="flex space-x-4">
              <Link
                href={project.gitUrl}
                className="w-12 h-12 border-2 border-[#ADB7BE] rounded-full flex items-center justify-center hover:border-white transition-colors"
              >
                <CodeBracketIcon className="w-6 h-6 text-[#ADB7BE] hover:text-white" />
              </Link>
              {project.liveUrl !== "#" && (
                <Link
                  href={project.liveUrl}
                  className="w-12 h-12 border-2 border-[#ADB7BE] rounded-full flex items-center justify-center hover:border-white transition-colors"
                >
                  <EyeIcon className="w-6 h-6 text-[#ADB7BE] hover:text-white" />
                </Link>
              )}
            </div>
          </div>
          
          {/* Fallback icon if image doesn't load */}
          <div className="text-6xl text-purple-400/50">💻</div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
          <p className="text-purple-400 font-medium text-sm">{project.subtitle}</p>
        </div>

        <p className="text-[#ADB7BE] text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Expandable Full Description */}
        {expanded && (
          <div className="text-[#ADB7BE] text-sm leading-relaxed space-y-2">
            {project.fullDescription.split('\n').map((line, i) => (
              <p key={i} className="pl-2">{line}</p>
            ))}
          </div>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs border border-purple-500/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4">
          <button
            key={buttonId}
            onClick={() => setExpanded(!expanded)}
            className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
            suppressHydrationWarning
          >
            {mounted ? (expanded ? 'Show Less' : 'Read More') : 'Read More'}
          </button>
          
          <div className="flex space-x-3">
            <Link
              href={project.gitUrl}
              className="text-[#ADB7BE] hover:text-white transition-colors"
            >
              <span className="text-sm">Code</span>
            </Link>
            {project.liveUrl !== "#" && (
              <Link
                href={project.liveUrl}
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                <span className="text-sm">Live Demo</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Projects</span>
          </h2>
          <p className="text-[#ADB7BE] text-lg max-w-2xl mx-auto">
            Showcasing my technical expertise through impactful projects that solve real-world problems
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
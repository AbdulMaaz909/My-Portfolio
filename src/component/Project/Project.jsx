"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react"; // for icons

// Variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Example Project Data
const projects = [
  {
    title: "Xtorc Website Portfolio",
    desc: "An advanced, performance-optimized Next.js/Tailwind application for a product catalog, demonstrating mastery of Framer Motion and complex Mega-Menu state management.",
    img: "/Project_1.png",
    github: "https://github.com/dev-nexcore/xtroc",
    demo: "https://xtorcind.com",
    
  },
  {
    title: "Consultancy Platform",
    desc: "Consultancy Platform where users can pay for expert advice through a secure payment system. Built as a full-stack MERN application with an admin dashboard to manage sessions and users.",
    img: "/project_2.png",
    github: "https://github.com/Code4Bharat1/shourk-app-dev",
    demo: "https://your-demo.com",
  },
  {
    title: "Security Platform website",
    desc: "Security Platform website to ensure websites are secure and properly configured. Built with a focus on real-time monitoring and collaboration with the cybersecurity team.",
    img: "/project_3.png",
    github: "https://github.com/Code4Bharat1/security-platform",
    demo: "https://security-platform.code4bharat.com/",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-6 md:px-12">
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto"
      >
        {/* Heading */}
        <motion.h2
          variants={item}
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 text-transparent bg-clip-text"
        >
          My Projects
        </motion.h2>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={item}
              className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-500"
            >
              {/* Project Image */}
              <div className="relative group">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-56 object-content group-hover:opacity-80 transition duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-500">
                  <a
                    href={project.demo}
                    target="_blank"
                    className="mx-2 p-3 bg-indigo-600 rounded-full hover:bg-indigo-700 transition"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    className="mx-2 p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="text-gray-400">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Projects;

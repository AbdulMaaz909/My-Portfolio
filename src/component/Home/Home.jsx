"use client";
import React from "react";
import { motion } from "framer-motion";

// ✅ Define animation variants
const textParent = {
  hidden: { opacity: 0, x: -200 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.3, // animate children one by one
    },
  },
};

const textChild = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Home = () => {
  return (
    <div id="home" className="bg-black text-white flex flex-col justify-center">
      <section  className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-20">
        
        {/* Left Content */}
        {/* ⬇️ Changed this to use variants */}
        <motion.div
          className="md:text-left text-center space-y-6 md:w-1/2"
          variants={textParent}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            variants={textChild}
            className="text-7xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 text-transparent bg-clip-text leading-tight"
          >
            I'm Maaz
          </motion.h1>

          <motion.h2
            variants={textChild}
            className="text-4xl font-semibold text-gray-300"
          >
            Software Developer
          </motion.h2>

          <motion.p
            variants={textChild}
            className="text-lg text-gray-400 leading-relaxed"
          >
            I have <span className="text-indigo-400 font-medium">1 year of on-site experience.</span><br />
            Worked on both <span className="text-purple-400 font-medium">national and international projects.</span><br />
            I understand how the industry operates and deliver solutions for <span className="text-pink-400 font-medium">real-world projects.</span>
          </motion.p>

          <motion.div
            variants={textChild}
            className="flex space-x-4 pt-6 px-8 md:px-0"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium rounded-lg shadow-lg hover:shadow-indigo-500/50 transition transform hover:scale-105"
            >
              Got a Project?
            </a>
            <a
              href="/resume.pdf" // change with actual resume path
              target="_blank"
              className="px-6 py-3 border border-gray-500 hover:border-indigo-500 text-gray-200 hover:text-white rounded-lg transition transform hover:scale-105 shadow-lg"
            >
              My Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          className="mt-12 md:mt-0 md:w-1/2 flex justify-center"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <img
            src="/admin.jpg"
            alt="Profile"
            className="w-96 h-96 object-cover rounded-full shadow-xl border-4 border-indigo-600 hover:shadow-indigo-500/50 hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </section>
    </div>
  );
};

export default Home;

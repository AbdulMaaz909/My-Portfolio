"use client";
import React from "react";
import { motion } from "framer-motion";

// Variants for stagger animation
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

const About = () => {
  return (
    <div
      id="about"
      className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-6 md:px-12"
    >
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show" // 🔥 Animates on scroll
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-6xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center gap-12"
      >
        {/* Left Side: Image */}
        <motion.div variants={item} className="md:w-1/2 flex justify-center">
          <img
            src="/admin_2.jpg" // 👉 Replace with your image
            alt="About Me"
            className="w-80 h-80 object-cover rounded-2xl shadow-2xl border-4 border-indigo-600 hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Right Side: Content with staggered children */}
        <motion.div
          variants={container}
          className="md:w-1/2 space-y-6"
        >
          <motion.h2
            variants={item}
            className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 text-transparent bg-clip-text"
          >
            About Me
          </motion.h2>

          <motion.p
            variants={item}
            className="text-lg text-gray-300 leading-relaxed"
          >
            Hello! 👋 I'm <span className="text-indigo-400 font-semibold">Maaz</span>, 
            a passionate <span className="text-purple-400 font-semibold">Software Developer </span> 
            who loves creating sleek, user-friendly, and functional applications.
            With hands-on experience in both{" "}
            <span className="text-pink-400 font-semibold">national and international projects</span>, 
            I understand how to turn ideas into real-world solutions.
          </motion.p>

          <motion.p
            variants={item}
            className="text-lg text-gray-400 leading-relaxed"
          >
            Beyond coding, I’m always exploring new technologies, improving my skills, 
            and collaborating with creative minds. 🚀 My goal is to craft software 
            that not only works but also <span className="text-indigo-400">inspires people</span>.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={item}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a
            //   variants={item}
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium rounded-lg shadow-lg hover:shadow-indigo-500/50 transition transform hover:scale-105"
            >
              View My Work
            </a>
            <a
            //   variants={item}
              href="#contact"
              className="px-6 py-3 border border-gray-500 hover:border-indigo-500 text-gray-200 hover:text-white rounded-lg shadow-lg transition transform hover:scale-105"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default About;

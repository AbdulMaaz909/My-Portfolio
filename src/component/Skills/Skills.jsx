"use client";
import React from "react";
import { motion } from "framer-motion";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Skill Data
const skills = [
  { name: "HTML", color: "from-orange-400 to-yellow-500" },
  { name: "CSS", color: "from-blue-400 to-indigo-500" },
  { name: "JavaScript", color: "from-yellow-400 to-orange-500" },
  { name: "Next.js", color: "from-gray-400 to-black" },
  { name: "React", color: "from-blue-400 to-cyan-500" },
  { name: "Node.js", color: "from-green-400 to-green-600" },
  { name: "Express.js", color: "from-gray-500 to-gray-700" },
  { name: "Python", color: "from-blue-400 to-yellow-500" },
  { name: "MongoDB", color: "from-green-400 to-green-600" },
  { name: "SQL", color: "from-indigo-400 to-purple-500" },
  { name: "Git", color: "from-red-400 to-red-600" },
  { name: "GitHub", color: "from-gray-700 to-black" },
];

const Skills = () => {
  return (
    <div id="skills" className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-6 md:px-12">
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl mx-auto"
      >
        {/* Heading */}
        <motion.h2
          variants={item}
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 text-transparent bg-clip-text"
        >
          My Skills
        </motion.h2>

        {/* Skills Grid */}
        <motion.div
          variants={container}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative p-6 rounded-2xl shadow-xl group cursor-pointer transform hover:scale-105 transition-transform duration-300"
            >
              {/* Skill Circle */}
              <div
                className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center text-white text-lg font-bold shadow-lg group-hover:shadow-indigo-500/50 transition duration-500`}
              >
                {skill.name}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Skills;

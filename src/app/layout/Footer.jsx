"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, LinkedIn, Twitter, Mail } from "lucide-react";

// Animation variants
const container = {
  hidden: { opacity: 0, y: 40 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 } 
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-12 px-6 md:px-12">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6"
      >
        {/* Left: Brand / Name */}
        <motion.div variants={item}>
          <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500">
            Maaz
          </h1>
          <p className="text-gray-400 mt-2">Creating beautiful web experiences.</p>
        </motion.div>

        {/* Center: Social Links */}
        <motion.div variants={item} className="flex gap-6 mt-4 md:mt-0">
          <a href="https://github.com/yourusername" 
          target="_blank" 
          className="hover:text-white transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/yourusername" 
          target="_blank" 
          className="hover:text-blue-500 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://twitter.com/yourusername" 
          target="_blank" 
          className="hover:text-blue-400 transition-colors">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="mailto:maaz@example.com" 
          className="hover:text-pink-500 transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>

        {/* Right: Contact / Copyright */}
        <motion.div variants={item} className="text-center md:text-right text-gray-400 mt-4 md:mt-0">
          <p>© {new Date().getFullYear()} Maaz. All rights reserved.</p>
          <p className="mt-1">Mumbai, India</p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;

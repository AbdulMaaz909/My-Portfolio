"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Hello, my name is ${formData.name}. Email: ${formData.email}. Message: ${formData.message}`;
    const phone = "+919049081419"; // your WhatsApp number
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, "_blank");
  };

  return (
    <div
      id="contact"
      className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-6 md:px-12"
    >
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto"
      >
        {/* Heading */}
        <motion.h2
          variants={item}
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 text-transparent bg-clip-text"
        >
          Contact Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side: Contact Info */}
          <motion.div
            variants={container}
            className="space-y-8 py-2 text-center md:text-left text-3xl"
          >
            <motion.div variants={item} className="flex items-center gap-4 cursor-pointer">
              <Mail className="w-6 h-6 text-indigo-400" />
              <a
                href="mailto:abdulmaaz827@gmail.com"
                className="text-gray-300 hover:text-indigo-400 transition"
              >
                abdulmaaz827@gmail.com
              </a>
            </motion.div>

            <motion.div variants={item} className="flex items-center gap-4 cursor-pointer">
              <Phone className="w-6 h-6 text-purple-400" />
              <a
                href="https://wa.me/919049081419"
                target="_blank"
                className="text-gray-300 hover:text-purple-400 transition"
              >
                +91 9049081419
              </a>
            </motion.div>

            <motion.div variants={item} className="flex items-center gap-4 cursor-pointer">
              <MapPin className="w-6 h-6 text-pink-400" />
              <a
                href="https://www.google.com/maps/search/?api=1&query=Mahim,+Mumbai,+India"
                target="_blank"
                className="text-gray-300 hover:text-pink-400 transition"
              >
                Mahim, Mumbai, India
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.form
            variants={container}
            className="bg-gray-800 p-8 rounded-2xl shadow-xl space-y-6"
            onSubmit={handleSubmit}
          >
            <motion.input
              variants={item}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-gray-900 text-gray-200 border border-gray-700 focus:border-indigo-500 outline-none"
              required
            />
            <motion.input
              variants={item}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-gray-900 text-gray-200 border border-gray-700 focus:border-purple-500 outline-none"
              required
            />
            <motion.textarea
              variants={item}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-3 rounded-lg bg-gray-900 text-gray-200 border border-gray-700 focus:border-pink-500 outline-none"
              required
            ></motion.textarea>

            <motion.button
              variants={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium rounded-lg shadow-lg hover:shadow-indigo-500/50 transition"
            >
              Send Message via WhatsApp
            </motion.button>
          </motion.form>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;

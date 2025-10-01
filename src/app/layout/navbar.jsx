'use client'
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const name = "Maaz"; 

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-black shadow-lg backdrop-blur-md bg-opacity-70">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Left Side: Name/Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 hover:scale-105 transition-transform duration-300"
            >
              {name}
            </a>
          </div>

          {/* Right Side: Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 group"
                >
                  {item.name}
                  {/* Underline animation */}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-400 transition-all group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium transition duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

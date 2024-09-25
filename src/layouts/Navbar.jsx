import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-green-300 via-teal-100 to-blue-100 shadow-lg z-50">
      <div className="container mx-auto px-6 lg:px-20 flex justify-between items-center py-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src="/logo.png" alt="ReverieBot Logo" className="w-10 h-10" />
          <h1 className="text-3xl font-bold ml-2">ReverieBot</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8">
          <li className="group relative">
            <a href="#home" className="text-lg hover:">
              Home
            </a>
            <span className="absolute left-0 bottom-0 w-full h-1 bg-teal-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </li>
          <li className="group relative">
            <Link to='/dashboard/summary' className="text-lg hover:">
              Dashboard
            </Link>
            <span className="absolute left-0 bottom-0 w-full h-1 bg-teal-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </li>
          <li className="group relative">
            <a href="#plans" className="text-lg hover:">
              Plans
            </a>
            <span className="absolute left-0 bottom-0 w-full h-1 bg-teal-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </li>
          <li className="group relative">
            <a href="#faqs" className="text-lg hover:">
              FAQs
            </a>
            <span className="absolute left-0 bottom-0 w-full h-1 bg-teal-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </li>
          <li className="group relative">
            <a href="#contact" className="text-lg hover:">
              Contact Us
            </a>
            <span className="absolute left-0 bottom-0 w-full h-1 bg-teal-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </li>

          {/* Signup Button */}
          <li>
            <Link to="/signup" className="ml-4 bg-green-700 text-white px-4 py-3 rounded-lg hover:bg-green-600 transition duration-300">
              Signup
            </Link>
          </li>
          <li>
            <Link to="/Login" className="ml-4 bg-green-700 text-white px-4 py-3 rounded-lg hover:bg-green-600 transition duration-300">
              Login
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden focus:outline-none hover:"
        >
          {isOpen ? <XIcon className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } lg:hidden absolute top-16 left-0 w-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 shadow-lg p-6`}
        >
          <ul className="space-y-4">
            <li>
              <a href="#home" className="block text-lg hover:">
                Home
              </a>
            </li>
            <li>
              <a href="#dashboard" className="block text-lg hover:">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#plans" className="block text-lg hover:">
                Plans
              </a>
            </li>
            <li>
              <a href="#faqs" className="block text-lg hover:">
                FAQs
              </a>
            </li>
            <li>
              <a href="#contact" className="block text-lg hover:">
                Contact Us
              </a>
            </li>

            {/* Signup Button in Mobile */}
            <li>
              <Link to="/signup" className="block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition duration-300">
                Signup
              </Link>
            </li>
            <li>
              <Link to="/Login" className="block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition duration-300">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

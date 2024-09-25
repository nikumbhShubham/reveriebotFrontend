import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import signup from "../../assets/signup.webp"
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-300 via-teal-100 to-white">
      
      <div className="w-full max-w-6xl bg-white shadow-2xl rounded-lg overflow-hidden flex flex-col md:flex-row">
        
        
        <motion.div
          className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center"
          initial={{ opacity: 0, x: '-100vw' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 120, duration: 0.8 }}
        >
       
          <div className="text-center mb-8">
            <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-teal-500 to-blue-600">ReveriaBot</h1>
          </div>

          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Create Your Account</h2>

          <form>
          
            <div className="mb-6">
              <label htmlFor="username" className="block text-gray-600 mb-2">Username</label>
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-indigo-500">
                <span className="px-3 text-gray-500">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                <input
                  type="text"
                  id="username"
                  placeholder="Your Username"
                  className="w-full py-2 px-3 outline-none focus:outline-none"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-600 mb-2">Email</label>
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-indigo-500">
                <span className="px-3 text-gray-500">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  className="w-full py-2 px-3 outline-none focus:outline-none"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-600 mb-2">Password</label>
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-indigo-500">
                <span className="px-3 text-gray-500">
                  <FontAwesomeIcon icon={faLock} />
                </span>
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  className="w-full py-2 px-3 outline-none focus:outline-none"
                />
              </div>
            </div>
            <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-all font-semibold mb-4">
              Sign Up
            </button>

           
            <div className="text-center">
              <p className="text-gray-500 mb-3">or continue with</p>
              <button className="w-full flex justify-center items-center bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-all font-semibold">
                <FontAwesomeIcon icon={faGoogle} className="mr-2" />
                Continue with Google
              </button>
            </div>
            <div className="text-center mt-6">
              <p className="text-gray-500">Already have an account? <Link to="/login" className="text-indigo-600 hover:underline">Login</Link></p>
            </div>
          </form>
        </motion.div>

        {/* Right Section: Image */}
        <motion.div
          className="hidden md:block w-full md:w-1/2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={signup}
            alt="Signup"
            className="object-cover h-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Signup;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import hero from "../../assets/hero.webp"
import Navbar from '../../layouts/Navbar';
import { Link } from 'react-router-dom';

const rotatingWords = ["Copy Trading", "AI Solutions", "Quant Strategies"];

const useTypewriter = (words, delay = 150) => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    if (isTyping) {
      if (letterIndex < words[wordIndex].length) {
        const timeout = setTimeout(() => {
          setText(text + words[wordIndex][letterIndex]);
          setLetterIndex(letterIndex + 1);
        }, delay);
        return () => clearTimeout(timeout);
      } else {
        // Pause after fully typing the word
        setTimeout(() => {
          setIsTyping(false);
        }, 1000); // 1 second pause
      }
    } else {
      if (letterIndex > 0) {
        const timeout = setTimeout(() => {
          setText(text.slice(0, -1));
          setLetterIndex(letterIndex - 1);
        }, delay);
        return () => clearTimeout(timeout);
      } else {
        // Move to the next word
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsTyping(true);
      }
    }
  }, [text, letterIndex, isTyping, wordIndex, words, delay]);

  return text;
};

const HeroSection = () => {
  const animatedText = useTypewriter(rotatingWords, 100); // Adjust delay for typing speed

  return (
    <div className="bg-gradient-to-r from-green-50 to-white min-h-screen flex flex-col justify-center items-center relative">
      {/* Navbar */}
        <Navbar/>

      {/* Hero Section */}
      <div className="container mx-auto px-6 lg:px-24 flex flex-col lg:flex-row items-center justify-center lg:justify-between mt-16">
        
        <div className="text-center lg:text-left lg:w-1/2 mb-10 lg:mb-0">
        
          <motion.h1
            className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-teal-500 to-blue-600 mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            ReverieBot
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-teal-500 to-blue-600"
            style={{ minHeight: '60px', lineHeight: '60px' }} 
          >
            {animatedText}
          </motion.div>

          <p className="text-lg text-gray-600 mt-4">
            Explore the best copy trading platforms in India, supporting major Indian brokers like Zerodha, Angel Broking, Fyers, Finvasia, and Alice Blue across NSE, BSE, and MCX exchanges.
          </p>

          <div className="flex space-x-4 mt-6 justify-center lg:justify-start">
            <Link to='/dashboard/summary'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition"
            >
              Dashboard
            </motion.button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition"
            >
              Watch Videos
            </motion.button>
          </div>
        </div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:w-1/2 mt-12 lg:mt-0"
        >
          <motion.img
            src={hero}
            alt="Laptop showing trading platform"
            className="w-full"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;

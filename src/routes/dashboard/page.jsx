import React from "react";
import Slider from "react-slick"; // Importing React Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";
import {Link} from "react-router-dom"

const DashboardPage = () => {
    const { theme } = useTheme();
    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <div className="p-6 space-y-8">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
            <div className="col-span-2 bg-blue-500 p-6 rounded-lg shadow-md flex flex-col lg:flex-row items-center justify-between text-white">
              
                <div className="space-y-4 lg:w-2/3">
                    <h2 className="text-3xl font-bold">Welcome Back!</h2>
                    <p className="text-lg">
                        We're glad to have you back. Here's a summary of your activities.
                    </p>
                    <div className="space-x-4">
                        <Link to='/dashboard/copytrading'>
                        <button className="bg-white text-blue-500 px-4 py-2 rounded-md">
                            Copy Trading
                        </button>
                        </Link>
                        <Link to='/dashboard/account'>
                        <button className="bg-transparent border-white border-2 px-4 py-2 text-white rounded-md">
                            Account configuration
                        </button>
                        </Link>

                    </div>
                </div>
               
                <div className="lg:w-1/3 mt-6 lg:mt-0">
                    <img
                        src="https://via.placeholder.com/300" 
                        alt="Welcome back"
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>

            {/* Section 2 - Feature Video Carousel */}
            <div className="col-span-1">
                <motion.h3 
                    className="text-xl font-semibold text-gray-800 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Featured Videos
                </motion.h3>
                <Slider {...carouselSettings}>
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="p-4">
                            <div className="relative h-64 bg-cover bg-center rounded-lg shadow-lg" 
                                style={{
                                    backgroundImage: `url(https://via.placeholder.com/600x400)`
                                }}>
                                <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded">
                                    <h4>Video Title {i}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>

        {/* Section 3 - Plan Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
           
            <motion.div 
                className="bg-white shadow-lg p-4 rounded-md"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h4 className="text-lg font-semibold">Plan Name</h4>
                <p>Professional</p>
            </motion.div>

  
            <motion.div 
                className="bg-white shadow-lg p-4 rounded-md"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h4 className="text-lg font-semibold">Days Remaining</h4>
                <p>7 Days</p>
            </motion.div>

          
            <motion.div 
                className="bg-white shadow-lg p-4 rounded-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h4 className="text-lg font-semibold">Validity</h4>
                <p>29 Sep 2024</p>
            </motion.div>
        </div>
    </div>
    );
};

export default DashboardPage;

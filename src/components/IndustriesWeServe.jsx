import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCar,
  FaWifi,
  FaMobileAlt,
  FaCloud,
  FaLaptopCode,
  FaIndustry,
  FaArrowRight,
} from "react-icons/fa";

// Array of industry data (Unchanged)
const industries = [
  {
    name: "Automotive",
    description:
      "Developing cutting-edge software for connected vehicles, autonomous driving, and in-car infotainment systems. Our expertise ensures reliable, low-latency performance for critical systems.",
    icon: FaCar,
  },
  {
    name: "IoT",
    description:
      "Building secure and scalable SoC solutions for smart homes, industrial IoT, and consumer electronics. We specialize in low-power and highly integrated chip architectures.",
    icon: FaWifi,
  },
  {
    name: "Telecommunications",
    description:
      "Providing robust chip design and network solutions for 5G/6G infrastructure, edge processing, and high-throughput mobile applications.",
    icon: FaMobileAlt,
  },
  {
    name: "Cloud Computing",
    description:
      "Architecting high-performance computing (HPC) and data center acceleration chips optimized for AI/ML workloads and efficient data processing in the cloud.",
    icon: FaCloud,
  },
  {
    name: "Fintech",
    description:
      "Creating secure and efficient digital banking, payment processing, and financial management hardware requiring advanced encryption and low-latency transactions.",
    icon: FaLaptopCode,
  },
  {
    name: "Manufacturing",
    description:
      "Integrating smart factory solutions and robotics requiring industrial-grade embedded systems, precise control logic, and high reliability in harsh environments.",
    icon: FaIndustry,
  },
];

const IndustriesWeServe = () => {
  // State now stores the index of the actively featured industry
  const [featuredIndustryIndex, setFeaturedIndustryIndex] = useState(0); 

  // Get the currently featured data object
  const featuredIndustry = industries[featuredIndustryIndex];

  const handleCardClick = (index) => {
    setFeaturedIndustryIndex(index);
  };

  return (
    <div className="bg-gray-950 py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
            Industries <span className="text-cyan-400">We Serve</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Our specialized expertise powers **digital transformation** across diverse, high-growth sectors.
          </p>
        </div>

        {/* Industry Grid - Optimized for Mobile (2 columns default) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {industries.map((industry, index) => {
            const isActive = featuredIndustryIndex === index;

            return (
              <motion.button
                key={industry.name}
                className={`
                  flex flex-col items-center justify-center h-full text-center p-4 border-2 rounded-xl transition-all duration-300 backdrop-blur-sm 
                  ${
                    isActive
                      ? "bg-gray-900 border-cyan-500 shadow-xl shadow-cyan-900/50 scale-[1.05]" // Larger scale up for active/focus state
                      : "bg-gray-900/50 border-gray-700 hover:border-cyan-700 hover:bg-gray-800/70"
                  }
                  focus:outline-none focus:ring-2 focus:ring-cyan-500
                `}
                onClick={() => handleCardClick(index)}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }} // Noticeable tap feedback for touchscreens
              >
                {/* Icon */}
                <div className="p-3 rounded-full bg-gray-800 border-2 border-cyan-900/50 mb-3">
                  <industry.icon className="w-6 h-6 text-cyan-400" />
                </div>

                {/* Title - Adjust font size for dense mobile grid */}
                <h3 className="text-sm sm:text-lg font-bold text-white tracking-wide">
                  {industry.name}
                </h3>
              </motion.button>
            );
          })}
        </div>

        {/* Featured Content Area (Futuristic Panel) */}
        <div className="mt-16 bg-gray-900 border border-cyan-900/50 p-6 sm:p-8 rounded-xl shadow-2xl shadow-cyan-900/30">
          <AnimatePresence mode="wait">
            <motion.div
              key={featuredIndustry.name} // Key changes on feature change
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center space-x-3 sm:space-x-4 mb-4">
                <span className="p-3 rounded-lg bg-gray-800 border border-cyan-700 text-cyan-400 flex-shrink-0">
                  <featuredIndustry.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </span>
                <h3 className="text-xl sm:text-3xl font-extrabold text-white leading-tight">
                  {featuredIndustry.name} Solutions
                </h3>
              </div>
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed border-t border-gray-800 pt-4">
                {featuredIndustry.description}
              </p>

              <motion.button 
                className="mt-6 flex items-center space-x-2 text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
                whileHover={{ x: 5 }}
              >
                <span>Learn More</span>
                <FaArrowRight className="w-4 h-4" />
              </motion.button>

            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default IndustriesWeServe;

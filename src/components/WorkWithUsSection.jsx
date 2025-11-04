import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const images = [
  { src: "https://via.placeholder.com/400x450/4B5563/D1D5DB?text=Team+Event+1", alt: "Team Event 1" },
  { src: "https://via.placeholder.com/300x350/4B5563/D1D5DB?text=Award+Ceremony", alt: "Award Ceremony" },
  { src: "https://via.placeholder.com/450x300/4B5563/D1D5DB?text=Office+Celebration", alt: "Office Celebration" },
  { src: "https://via.placeholder.com/350x400/4B5563/D1D5DB?text=Team+Event+2", alt: "Team Event 2" },
  { src: "https://via.placeholder.com/300x450/4B5563/D1D5DB?text=Group+Photo", alt: "Group Photo" },
];

export default function WorkWithUsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotate: -5 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.8,
      },
    },
  };

  // SVG paths for the decorative lines (simplified examples)
  const line1 = "M10 80 Q 50 10, 100 80 T 190 20"; // Example complex path
  const line2 = "M20 20 C 60 0, 80 100, 120 80"; // Example complex path
  const line3 = "M10 50 L 50 10 L 90 50 L 50 90 Z"; // Example simple path

  return (
    <section className="bg-gray-100 py-24 text-gray-900 relative overflow-hidden">
      {/* Dynamic background elements (can be adapted from your example) */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-200 opacity-70"></div>

      {/* Decorative SVG lines - simplified for demonstration */}
      <svg className="absolute top-1/4 left-1/4 w-32 h-32 text-green-400 opacity-60 animate-pulse-slow" viewBox="0 0 200 100" fill="none" stroke="currentColor" strokeWidth="2">
        <path d={line1} />
      </svg>
      <svg className="absolute bottom-1/4 right-1/4 w-24 h-24 text-blue-400 opacity-60 animate-pulse-slow delay-100" viewBox="0 0 150 100" fill="none" stroke="currentColor" strokeWidth="2">
        <path d={line2} />
      </svg>
      <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 text-purple-400 opacity-60 animate-pulse-slow delay-200" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
        <path d={line3} />
      </svg>


      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Work with us
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mt-4">
            Join us on our path to excellence and innovation.
          </p>
        </div>

        {/* Image Grid */}
        <motion.div
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-12 md:gap-y-0 gap-x-0 items-center justify-center min-h-[500px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Using custom positioning and transform for overlapping effect */}
          <motion.div variants={itemVariants} className="absolute top-[10%] left-[5%] md:left-[10%] lg:left-[5%] w-[80%] md:w-[45%] lg:w-[20%] rounded-3xl shadow-2xl overflow-hidden group hover:scale-105 transition-transform duration-300">
            <img src={images[0].src} alt={images[0].alt} className="w-full h-full object-cover rounded-3xl" />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white text-xl font-bold">
              {images[0].alt}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="absolute top-[40%] right-[5%] md:right-[5%] lg:right-[30%] w-[70%] md:w-[35%] lg:w-[18%] rounded-3xl shadow-2xl overflow-hidden group hover:scale-105 transition-transform duration-300">
            <img src={images[1].src} alt={images[1].alt} className="w-full h-full object-cover rounded-3xl" />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white text-xl font-bold">
              {images[1].alt}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="absolute top-[60%] left-[10%] md:left-[35%] lg:left-[40%] w-[70%] md:w-[40%] lg:w-[22%] rounded-3xl shadow-2xl overflow-hidden group hover:scale-105 transition-transform duration-300">
            <img src={images[2].src} alt={images[2].alt} className="w-full h-full object-cover rounded-3xl" />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white text-xl font-bold">
              {images[2].alt}
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="absolute top-[20%] right-[0%] md:right-[20%] lg:right-[10%] w-[75%] md:w-[40%] lg:w-[25%] rounded-3xl shadow-2xl overflow-hidden group hover:scale-105 transition-transform duration-300">
            <img src={images[3].src} alt={images[3].alt} className="w-full h-full object-cover rounded-3xl" />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white text-xl font-bold">
              {images[3].alt}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="absolute top-[50%] left-[20%] md:left-[15%] lg:left-[70%] w-[65%] md:w-[30%] lg:w-[18%] rounded-3xl shadow-2xl overflow-hidden group hover:scale-105 transition-transform duration-300">
            <img src={images[4].src} alt={images[4].alt} className="w-full h-full object-cover rounded-3xl" />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white text-xl font-bold">
              {images[4].alt}
            </div>
          </motion.div>
        </motion.div>

        {/* Apply Now Button */}
        <div className="text-center mt-20">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.5, duration: 0.6 }}
             viewport={{ once: true, amount: 0.5 }}
          >
            <Link
              to="/careers"
              className="inline-block px-10 py-4 bg-gray-800 text-white font-semibold text-lg rounded-full shadow-lg hover:bg-gray-700 transition-colors duration-300 transform hover:scale-105"
            >
              Apply now
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
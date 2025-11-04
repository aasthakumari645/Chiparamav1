import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from "framer-motion";

export default function EngagementZoneFuturistic() {
  return (
    <section className="py-24 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Contact Information and Intro */}
        <div className="text-center lg:text-left">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Contact <span className="text-cyan-400">Us</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl lg:max-w-none mx-auto mb-10">
            Connect with our engineering experts to discuss your ASIC, SoC, or staffing needs. Our core team is ready to analyze your requirements and provide a detailed blueprint.
          </p>
          
          {/* Contact Details Grid */}
          <div className="space-y-6">
            <div className="flex items-center justify-center lg:justify-start space-x-4 text-gray-300">
              <FaEnvelope className="w-6 h-6 text-cyan-500 flex-shrink-0" />
              <a href="mailto:contact@chiparama.com" className="text-lg hover:text-cyan-400 transition-colors">
                contact@chiparama.com
              </a>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-4 text-gray-300">
              <FaPhoneAlt className="w-6 h-6 text-cyan-500 flex-shrink-0" />
              <span className="text-lg">+1-(408) 594-8864</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-4 text-gray-300">
              <FaMapMarkerAlt className="w-6 h-6 text-cyan-500 flex-shrink-0" />
              <span className="text-lg">10605 Jonwood Way Austin TX 78753</span>
            </div>
          </div>
        </div>

        {/* Right Column: The Contact Form (Futuristic Panel) */}
        <motion.form
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full bg-gray-900 p-8 md:p-12 rounded-2xl shadow-2xl shadow-cyan-900/30 space-y-6 border border-cyan-900/50"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-5 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all duration-300"
              placeholder="Dwip"
              defaultValue="Dwip" // Using saved user information for personalization
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-5 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all duration-300"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Your Project Overview
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full px-5 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all duration-300"
              placeholder="Tell us about your technical requirements, timeline, and goals..."
            ></textarea>
          </div>

          <motion.button
            type="submit"
            className="w-full py-4 bg-cyan-600 text-white font-bold rounded-lg hover:bg-cyan-700 transition-all duration-300 shadow-lg shadow-cyan-600/30"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Deploy Inquiry
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
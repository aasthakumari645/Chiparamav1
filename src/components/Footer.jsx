import React from "react";
import { FaLinkedin, FaTwitter, FaGithub, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 border-b border-gray-700 pb-12 mb-8">
          
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <h3 className="text-3xl font-bold text-white tracking-tight">Chiparama</h3>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              Leading the future of semiconductor innovation with 
              cutting-edge design and engineering.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/" className="hover:text-[#009B72] transition-colors duration-200">Home</a></li>
              <li><a href="/about" className="hover:text-[#009B72] transition-colors duration-200">About Us</a></li>
              <li><a href="/careers" className="hover:text-[#009B72] transition-colors duration-200">Careers</a></li>
              <li><a href="/contact" className="hover:text-[#009B72] transition-colors duration-200">Contact Us</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-5">
              <a href="#" className="hover:text-[#009B72] transition-colors duration-200 text-2xl">
                <FaLinkedin />
              </a>
              <a href="#" className="hover:text-[#009B72] transition-colors duration-200 text-2xl">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-[#009B72] transition-colors duration-200 text-2xl">
                <FaGithub />
              </a>
              <a href="#" className="hover:text-[#009B72] transition-colors duration-200 text-2xl">
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Chiparama. All rights reserved.</p>
          <p className="mt-4 md:mt-0">
            Crafted with <span className="text-red-500">❤️</span> by 
            <span className="text-[#009B72] font-semibold"> Chiparama Team</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

import React, { useState } from 'react';
import { FaPaperPlane, FaTimes, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function ExpandingCTAButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Container for the expanding icons */}
      <div
        className={`flex flex-col items-center space-y-4 mb-4 transition-all duration-300 transform origin-bottom ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
      >
        {/* Social Media Links */}
        <a
          href="https://www.linkedin.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-blue-600 rounded-full text-white shadow-lg transition-transform duration-300 hover:scale-125"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="w-6 h-6" />
        </a>
        <a
          href="https://www.instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-pink-600 rounded-full text-white shadow-lg transition-transform duration-300 hover:scale-125"
          aria-label="Instagram"
        >
          <FaInstagram className="w-6 h-6" />
        </a>
        <a
          href="https://twitter.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-blue-400 rounded-full text-white shadow-lg transition-transform duration-300 hover:scale-125"
          aria-label="Twitter"
        >
          <FaTwitter className="w-6 h-6" />
        </a>
      </div>

      {/* Main button that expands/collapses the icons */}
      <button
        onClick={handleButtonClick}
        className="
          relative z-50
          flex items-center justify-center
          w-16 h-16 rounded-full
          bg-gradient-to-r from-blue-600 to-blue-800
          text-white font-bold
          shadow-xl transition-all duration-300
          transform hover:scale-105 hover:shadow-2xl
        "
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <FaTimes className="w-6 h-6 animate-spin-once" />
        ) : (
          <FaPaperPlane className="w-6 h-6" />
        )}
      </button>
    </div>
  );
}
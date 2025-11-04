import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Replaced with inline SVG for compatibility

/**
 * GoToTopButton Component
 * Displays a fixed button in the bottom-right corner when the user scrolls down,
 * and scrolls the page smoothly back to the top when clicked.
 */
const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to 300px
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll the window back to the top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  
  // Inline SVG Icon for the Up Chevron
  const ChevronUpIcon = (props) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  );

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          // FIX APPLIED: Changed 'bottom-6' to 'bottom-20' to clear the FixedCTAButton
          className="fixed bottom-40 right-10 p-4 rounded-full bg-cyan-600 text-white shadow-xl hover:bg-cyan-500 transition-colors duration-300 z-50 focus:outline-none focus:ring-4 focus:ring-cyan-400 focus:ring-opacity-50 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          aria-label="Scroll to top"
        >
          {/* Using the inline SVG component */}
          <ChevronUpIcon className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default GoToTopButton;

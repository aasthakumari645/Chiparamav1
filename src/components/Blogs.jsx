import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'; // FIX: Replaced react-icons/fa with lucide-react
import { motion } from 'framer-motion';
import { link } from 'react-router-dom';

// Blog posts from PDF
const blogPosts = [
  {
    id: 1,
    title: 'The Role of Semiconductors in Modern Technology',
    summary:
      'Semiconductors are the invisible force powering everything from smartphones to AI systems, driving global innovation, efficiency, and economic stability.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2940&auto=format&fit=crop', // Semiconductor chip image
    date: 'Sept 2025',
    link: 'blog1',
  },
  {
    id: 2,
    title: 'Custom Chip Design – Why Businesses Need Tailored Solutions for Automation',
    summary:
      'Custom chip design gives businesses a competitive edge by optimizing performance, boosting efficiency, and enabling AI-driven automation at scale.',
    image: 'https://www.pwc.nl/nl/actueel-publicaties/assets/images/semicon-in-nl-v2.jpg', // Circuit board
    date: 'Sept 2025',
    link: 'blog2',
  },
  {
    id: 3,
    title: 'Semiconductor Automation – How Smart Chips Transform Business Operations',
    summary:
      'Smart chips enable IoT integration, AI-driven insights, and edge computing — redefining operations across manufacturing, healthcare, logistics, and energy.',
    image: 'https://investinholland.com/wp-content/uploads/2024/01/Semicon-Netherlands-2-1024x574.jpeg', // Automation/robotics
    date: 'Sept 2025',
    link: 'blog3',
  },
  {
    id: 4,
    title: 'Semiconductor Trends 2025 and Beyond',
    summary:
      'From 3D chip architecture and AI accelerators to green semiconductors and quantum computing — explore the trends shaping the next decade of innovation.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmkjGVX7oAJmgPnboqap2UFHKSUm9-m1LEeKs0fw18dXMLaOh0yzK549eSKwfvtvjYleY&usqp=CAU', // Futuristic chips
    date: 'Sept 2025',
    link: 'blog4',
  },

];

// Helper component for the individual blog card
const BlogCard = ({ post }) => (
  <motion.div
    className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-xl h-full flex flex-col"
    whileHover={{
      scale: 1.05,
      boxShadow: '0 15px 30px rgba(0, 255, 255, 0.2)',
      borderColor: '#00FFFF',
    }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
  >
    {/* Image */}
    <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden">
      <img
        className="object-cover w-full h-48 filter grayscale-[30%] hover:grayscale-0 transition duration-500"
        src={post.image}
        alt={post.title}
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/1E293B/E0F7FA?text=No+Image' }}
      />
    </div>

    <div className="p-6 flex flex-col flex-grow">
      <span className="text-sm font-medium text-cyan-500">
        {post.date}
      </span>
      <h3 className="mt-2 text-xl font-bold text-white leading-tight flex-grow">
        <a
          href={post.link}
          className="hover:text-cyan-400 transition-colors duration-200 line-clamp-2"
        >
          {post.title}
        </a>
      </h3>
      <p className="mt-3 text-gray-400 text-sm line-clamp-3">{post.summary}</p>
      
      {/* Read More Link */}
      <div className="mt-6 pt-2 group self-start">
        <a
          href={post.link}
          className="inline-flex items-center text-cyan-400 font-semibold hover:text-white transition-colors duration-300"
        >
          Read More
          {/* Replaced FaArrowRight with ArrowRight */}
          <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
    </div>
  </motion.div>
);

const BlogSection = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Check scroll position to enable/disable buttons
  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1); // -1 for floating point safety
    }
  };

  useEffect(() => {
    // Initial check and setup scroll listener
    checkScrollPosition();
    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', checkScrollPosition);
      window.addEventListener('resize', checkScrollPosition);
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', checkScrollPosition);
      }
      window.removeEventListener('resize', checkScrollPosition);
    };
  }, []);

  // Function to smoothly scroll the carousel
  const scroll = (direction) => {
    if (scrollRef.current) {
      // Calculate the width of a single card + gap
      // The container has a gap-6 (1.5rem = 24px)
      // On LG screens, the card width is 1/3, so we scroll by roughly 1/3 of the container width
      const containerWidth = scrollRef.current.clientWidth;
      let scrollAmount;

      if (containerWidth >= 1024) { // lg breakpoint
        scrollAmount = containerWidth / 3; 
      } else if (containerWidth >= 768) { // md breakpoint
        scrollAmount = containerWidth / 2;
      } else { // sm/default
        scrollAmount = containerWidth;
      }

      const newScrollLeft = scrollRef.current.scrollLeft + (direction * scrollAmount);
      
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="bg-gray-950 py-24 px-4 sm:px-6 lg:px-8 font-sans relative">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight">
            From Our <span className="text-cyan-400">Blog</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            Explore insights and trends shaping the semiconductor industry — from cutting-edge designs to automation and the future of technology.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons (Desktop only) */}
          <div className="hidden lg:block">
            {/* Previous Button */}
            <motion.button
              onClick={() => scroll(-1)}
              disabled={!canScrollLeft}
              className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-20 p-4 rounded-full bg-gray-800 transition-opacity duration-300
                ${canScrollLeft ? 'opacity-100 hover:bg-cyan-600 shadow-lg text-white' : 'opacity-40 cursor-not-allowed text-gray-400'}
              `}
              aria-label="Previous Post"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              >
              {/* Replaced FaArrowLeft with ChevronLeft */}
              <ChevronLeft className="w-5 h-5" /> 
            </motion.button>
            
            {/* Next Button */}
            <motion.button
              onClick={() => scroll(1)}
              disabled={!canScrollRight}
              className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-20 p-4 rounded-full bg-gray-800 transition-opacity duration-300
                ${canScrollRight ? 'opacity-100 hover:bg-cyan-600 shadow-lg text-white' : 'opacity-40 cursor-not-allowed text-gray-400'}
              `}
              aria-label="Next Post"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Replaced FaArrowRight with ChevronRight */}
              <ChevronRight className="w-5 h-5" /> 
            </motion.button>
          </div>

          {/* Scrollable Track */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-scroll pb-4 scrollbar-hide"
            style={{ 
                // Hide scrollbar on WebKit browsers (Chrome, Safari)
                WebkitOverflowScrolling: 'touch',
                scrollbarWidth: 'none', // Firefox
                msOverflowStyle: 'none', // IE/Edge
            }}
          >
            {blogPosts.map((post) => (
              <div 
                key={post.id} 
                className="flex-shrink-0 w-full sm:w-11/12 md:w-[calc(50%-12px)] lg:w-[calc(33.333333%-16px)]" // Adjusted widths for 3 visible cards
              >
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to Action or Mobile Scroll Indicator */}
        <div className="mt-12 text-center">
             <p className="text-gray-500 text-sm lg:hidden">
                &larr; Scroll horizontally to view more posts &rarr;
            </p>
            <a
                href="/news-blogs"
                className="mt-6 inline-flex items-center text-lg font-semibold px-8 py-3 rounded-full bg-cyan-600 text-white hover:bg-cyan-500 transition-colors duration-300 shadow-xl"
            >
                Visit Full Blog
            </a>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;

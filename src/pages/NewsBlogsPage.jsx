import React from 'react';
import { Link } from "react-router-dom";

// Dummy data for news and blog posts
const posts = [
  {
    id: 1,
    title: "The Role of Semiconductors in Modern Technology",
    date: "October 2, 2025",
    author: "Jane Doe",
    image: "https://www.capgemini.com/in-en/wp-content/uploads/sites/18/2025/01/Semiconductor-LP-2880x1800-1.jpg",
    excerpt: "Semiconductors are the backbone of modern technology, powering devices from smartphones to AI systems...",
    link: "/blog1",
  },
  {
    id: 2,
    title: "Custom Chip Design – Why Businesses Need Tailored Solutions",
    date: "October 2, 2025",
    author: "John Smith",
    image: "https://www.agsdevices.com/wp-content/uploads/2024/06/what-are-semiconductors-hero-image.jpg",
    excerpt: "Custom chip design provides performance optimization, energy efficiency, and enhanced security for businesses...",
    link: "/blog2",
  },
  {
    id: 3,
    title: "Semiconductor Automation – How Smart Chips Transform Business Operations",
    date: "October 2, 2025",
    author: "Emily Clark",
    image: "https://www.global-imi.com/sites/default/files/Two%20New%20Semiconductors%20for%202024%20and%20Beyond.jpg",
    excerpt: "Smart chips enable IoT integration, AI-driven insights, and edge computing, transforming operations across industries...",
    link: "/blog3",
  },
  {
    id: 4,
    title: "Semiconductor Trends 2025 and Beyond",
    date: "October 2, 2025",
    author: "Alex Johnson",
    image: "https://etimg.etb2bimg.com/photo/109156591.cms",
    excerpt: "From 3D chip architecture to AI accelerators and green semiconductors, stay ahead of emerging trends...",
    link: "/blog4",
  },
];

export default function NewsBlogsPage() {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
          News & Blogs
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Stay up-to-date with the latest insights from our team and industry experts.
        </p>
      </div>

      {/* Main Blog Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white transition-transform duration-300 hover:scale-105">
            
            {/* Image */}
            <div className="flex-shrink-0">
              <img
                className="h-48 w-full object-cover"
                src={post.image}
                alt={post.title}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/600x400/1f2937/d1d5db?text=Image+Loading+Error";
                }}
              />
            </div>
            
            {/* Content */}
            <div className="flex-1 p-6 flex flex-col justify-between">
              <div className="flex-1">
                <Link to={post.link} className="block mt-2">
                  <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                  <p className="mt-3 text-base text-gray-500">{post.excerpt}</p>
                </Link>
              </div>

              {/* Author & Date */}
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <span className="sr-only">{post.author}</span>
                  <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                    {post.author.charAt(0)}
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">{post.author}</p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time dateTime={post.date}>{post.date}</time>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

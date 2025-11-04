import React from 'react';

export default function CandidateMenuPreview() {
  return (
    <div className="py-8 bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-between bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-6 md:p-8">
          <p className="text-xl md:text-2xl font-semibold text-white">
            Looking for engineering roles?
          </p>
          <a 
            href="/careers" 
            className="text-lg md:text-xl font-bold text-blue-400 hover:text-blue-300 transition-colors duration-300 whitespace-nowrap"
          >
            → Visit Careers
          </a>
        </div>
      </div>
    </div>
  );
}
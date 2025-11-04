import React from "react";

export default function ContactPage() {
  return (
    <section className="bg-gray-900 text-white py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Contact Form Section */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-blue-400 tracking-tight">
            Get in Touch
          </h1>
          <p className="text-gray-400 text-lg mb-12 leading-relaxed">
            Have a question, a project in mind, or just want to say hello? Fill out the form below, and our team will get back to you shortly.
          </p>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-5 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300"
                placeholder="Prashant Gautam"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-5 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full px-5 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Location & Contact Info Section */}
        <div className="bg-gray-800 p-8 md:p-12 rounded-2xl shadow-2xl space-y-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Our Location
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-sm mx-auto md:mx-0">
              Stop by our office or send us a letter. We are always ready to meet and discuss how we can help your business.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <span className="text-blue-400 text-2xl">📍</span>
              <div>
                <h4 className="font-semibold text-xl text-white">Address</h4>
                <p className="text-gray-400">
                  10605 Jonwood Way Austin TX 78753
                  

                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-blue-400 text-2xl">📞</span>
              <div>
                <h4 className="font-semibold text-xl text-white">Phone</h4>
                <a href="tel:+1-(408) 594-8864" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  +1-(408) 594-8864
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-blue-400 text-2xl">📧</span>
              <div>
                <h4 className="font-semibold text-xl text-white">Email</h4>
                <a href="mailto:contact@chiparama.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  contact@chiparama.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
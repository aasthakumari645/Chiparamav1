import React from 'react';
import { Link } from "react-router-dom";
/**
 * Renders a single, detailed blog post page.
 * Uses mock data for demonstration.
 */
const BlogPage1 = () => {
  // --- Blog Post Data ---
  const post = {
    title: "The Role of Semiconductors in Modern Technology",
    author: "Tech Insights Team",
    date: "October 2, 2025",
    imageUrl: "https://placehold.co/1200x500/0f172a/06b6d4?text=Semiconductors+in+Action",
    content: [
      {
        type: "paragraph",
        text: "Semiconductors are the backbone of modern technology, powering everything from our smartphones and laptops to AI systems and self-driving cars. They are the tiny, powerful devices that drive the digital revolution, and both businesses and consumers rely on them for innovation and efficiency."
      },
      {
        type: "paragraph",
        text: "A semiconductor is a material with electrical conductivity between a conductor and an insulator, with silicon being the most common. These chips are vital for consumer electronics, healthcare devices, and the automotive industry. They also drive innovation in artificial intelligence, the Internet of Things (IoT), and 5G connectivity."
      },
      {
        type: "paragraph",
        text: "While challenges like chip shortages and the demand for miniaturization exist, they also present opportunities for more resilient supply chains and sustainable manufacturing. Ultimately, semiconductors are the invisible force behind technological progress, and companies that embrace this innovation will be the leaders of tomorrow."
      },
      {
        type: "heading",
        text: "The Foundation of a Connected World"
      },
      {
        type: "paragraph",
        text: "Semiconductors are more than just components; they are the fundamental building blocks of the modern digital world. From the smartphone in your pocket to the powerful servers in data centres, these tiny yet complex devices are the engines of innovation. Their presence is so pervasive that our society's economic stability, national security, and daily convenience are inextricably linked to the semiconductor industry."
      },
      {
        type: "paragraph",
        text: "They are the silent architects of our interconnected society, enabling everything from real-time communication to global supply chain management. This blog post delves into the vital, multifaceted role semiconductors play in shaping the modern world and driving the technological progress that we so often take for granted."
      },
      {
        type: "heading",
        text: "The Pillars of Progress: Semiconductors in Action"
      },
      {
        type: "list",
        items: [
          "**Consumer Electronics:** Semiconductors are the brains of our devices. A smartphone's CPU (Central Processing Unit) and GPU (Graphics Processing Unit), for example, are highly sophisticated chips that manage everything from app performance to high-resolution video playback. Wearable devices and smart home gadgets rely on low-power semiconductors to operate efficiently for extended periods.",
          "**Healthcare and Medicine:** Advanced diagnostic machines like MRIs and CT scanners are powered by powerful processors. Wearable health trackers use tiny chips to monitor vital signs in real-time, while next-generation medical implants and point-of-care diagnostics are enabled by specialized, ultra-compact semiconductors.",
          "**Automotive Industry:** Modern vehicles are mobile computers. Semiconductors are crucial for ADAS (Advanced Driver-Assistance Systems), engine management, and entertainment systems. The rise of electric vehicles (EVs) has made them even more critical, with chips managing everything from battery charging and power delivery to motor control.",
          "**Industrial Automation and IoT:** In a smart factory, semiconductors are embedded in sensors, robotic arms, and control systems, enabling seamless communication and real-time data analysis. These chips allow for predictive maintenance, where machines can signal when they need servicing before a failure occurs, and autonomous factory operations that dramatically increase efficiency."
        ]
      },
      {
        type: "heading",
        text: "Semiconductors Driving Innovation: The Next Frontier"
      },
      {
        type: "paragraph",
        text: "Beyond their established roles, semiconductors are enabling the next wave of technological breakthroughs. Artificial Intelligence (AI) is powered by highly parallelized AI accelerators and GPUs, which can process the massive datasets required for machine learning and deep neural networks."
      },
      {
        type: "paragraph",
        text: "The Internet of Things (IoT), with its billions of connected devices, is made possible by low-power chips that allow sensors to communicate wirelessly. Furthermore, the high-speed data transfer of 5G networks relies on sophisticated radio-frequency (RF) chips to connect devices and people with unprecedented speed."
      },
      {
        type: "heading",
        text: "Navigating Challenges and Seizing Opportunities"
      },
      {
        type: "paragraph",
        text: "The semiconductor industry is not without its challenges. Recent global disruptions have highlighted the fragility of complex supply chains, leading to widespread chip shortages that impacted numerous industries. This has spurred a global push for domestic manufacturing to build more resilient supply chains."
      },
      {
        type: "paragraph",
        text: "The relentless demand for miniaturization continues to push the boundaries of physics, with researchers exploring new materials and 3D chip architectures to overcome the limitations of traditional designs. Furthermore, the industry is increasingly focused on sustainability, developing eco-friendly manufacturing processes."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-green-700 transition">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/news-blogs" className="hover:text-green-700 transition">News & Blogs</Link>
          <span className="mx-2">/</span>
          <span>{post.title}</span>
        </div>

        <header className="mb-10 border-b pb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <p className="font-medium text-green-700">{post.author}</p>
            <span>•</span>
            <p>{post.date}</p>
          </div>
        </header>

        <figure className="mb-12 rounded-xl overflow-hidden shadow-2xl">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-auto object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/1200x500/1f2937/d1d5db?text=Image+Loading+Error";
            }}
          />
        </figure>

        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg prose-green max-w-none">
            {post.content.map((block, index) => {
              if (block.type === 'paragraph') {
                return <p key={index} className="text-gray-700 leading-relaxed text-lg mb-6">{block.text}</p>;
              }
              if (block.type === 'heading') {
                return <h2 key={index} className="text-3xl font-bold text-gray-800 mt-10 mb-4 border-b pb-2">{block.text}</h2>;
              }
              if (block.type === 'list') {
                return (
                  <ul key={index} className="list-disc list-inside space-y-2 pl-5 text-lg text-gray-700 mb-6">
                    {block.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}
          </article>
        </div>

        <div className="max-w-4xl mx-auto mt-16 pt-8 border-t border-gray-200">
          <p className="text-xl font-semibold text-gray-800 mb-4">Ready to discuss your next project?</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 transition duration-150"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPage1;

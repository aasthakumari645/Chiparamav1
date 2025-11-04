import React from 'react';
import { Zap, Puzzle, Handshake } from 'lucide-react'; // FIX: Replaced react-icons/fa with lucide-react

const values = [
  {
    name: 'Innovation',
    description: 'We push the boundaries of what is possible, constantly exploring new technologies to stay ahead.',
    icon: Zap, // Replaced FaBolt with Zap
  },
  {
    name: 'Excellence',
    description: 'Our commitment to quality ensures every project we deliver exceeds expectations and industry standards.',
    icon: Puzzle, // Replaced FaPuzzlePiece with Puzzle
  },
  {
    name: 'Integrity',
    description: 'We operate with complete transparency and honesty, building trust with every client.',
    icon: Handshake, // Replaced FaHandshake with Handshake
  },
];

const teamMembers = [
  {
    name: 'Saurabh Mishra',
    title: 'President & Chief Executive Officer',
    bio: 'Saurabh’s vision drives Chiparama’s edge in semiconductor consulting. With over twenty years leading global engineering teams, he’s recognized for turning complex ASIC and embedded projects into first-pass silicon successes. Saurabh excels at building strong, collaborative cultures and pioneering solutions across India, the US, and beyond. Clients trust him for reliability, speed, and breakthrough results—whether launching new products or tackling the industry’s toughest engineering challenges.',
    image: 'https://img1.wsimg.com/isteam/ip/220ef3fb-1d22-4d11-bc42-d9a443f327d0/CROPPED-DSC00008_Saurabh_Mishra.jpg/:/',
  },
  {
    name: 'Prashant Gautam ',
    title: 'Executive Director - Business Operations',
    bio: 'Prashant powers Chiparama’s growth and operational excellence. With more than 15 years at the intersection of business and technology, he is a master at scaling operations and driving sales momentum. Prashant connects high-caliber talent with transformative projects for global semiconductor leaders, fueling client success across multiple geographies and project scopes. His strategic mindset and hands-on approach keep teams agile and clients ahead of the curve, ensuring every engagement delivers measurable value, accelerated timelines, and lasting impact.',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQF120lOExaVYQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1689609259088?e=1762387200&v=beta&t=3Be0fPxKPrGicUCDw_UcxheWG20a4AsE6xhJzs5Mum4',
  },
];

const advisors = [
  {
    name: 'Dr. Alan Smith',
    title: 'Advisor – Semiconductor Strategy',
    bio: 'Former VP at Intel with 25+ years in chip design and strategy.',
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=2670&auto=format&fit=crop',
  },
  {
    name: 'Maria Gonzalez',
    title: 'Advisor – Business Development',
    bio: 'Helps drive global partnerships and scaling strategies for deep tech startups.',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=2670&auto=format&fit=crop',
  },
];

const clients = [
  { name: 'Meta', logo: 'https://logos-world.net/wp-content/uploads/2021/11/Meta-Symbol.png', region: 'USA' },
  { name: 'Tenstorrent', logo: 'https://cdn.prod.website-files.com/619c5a34100fe677d0c61e04/66ed8880ff59ab137de39ad7_Tenstorrent%20Log-Updated%202024.png', region: 'Canada' },
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg', region: 'USA' },
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg', region: 'USA' },
  { name: 'Tesla', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png', region: 'USA' },
  { name: 'Skyverse', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXNU3JmeHzpJklAB9DoKCS_g5kIbn5XJYb2w&s', region: 'China' },
];


export default function CompanyPage() {
  return (
    <div className="bg-gray-900 text-white font-sans overflow-hidden">

    
      {/* Hero Section */}
      <section className="relative h-[100vh] flex items-center justify-center px-6 overflow-hidden scroll-smooth">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1518131346337-b647f523c937?q=80&w=2670&auto=format&fit=crop')",
          }}
        ></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/60 to-gray-900/95"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 drop-shadow-lg">
              Shaping the Future
            </span>
            <br />
            <span className="text-blue-200">of Silicon Innovation</span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 leading-relaxed">
            We are a collective of visionary engineers and designers dedicated to
            pushing the boundaries of semiconductor technology and intelligent systems.
          </p>

          {/* Down Arrow Button */}
          <a
            href="#about"
            className="inline-block mt-4 animate-bounce text-blue-400 hover:text-blue-300 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        {/* Subtle Animated Light Effect */}
        <div className="absolute -top-1/2 left-1/2 w-[140%] h-[140%] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-transparent blur-3xl animate-pulse"></div>
      </section>



      {/* About Us & Our Values */}
      <section className="py-24 px-6" id="about">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Our Story & Mission
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Chiparama is a forward-thinking semiconductor company dedicated
               to driving innovation through smart chip technology. Our mission 
               is to empower businesses across industries—such as manufacturing, 
               healthcare, logistics, and energy—by delivering advanced 
               semiconductor solutions that enhance efficiency, automation, and 
               sustainability. By leveraging cutting-edge technologies like 3D chip 
               architecture, AI accelerators, and edge computing, we help clients 
               stay ahead in a rapidly evolving digital world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.name}
                className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 shadow-lg text-center transform transition-transform duration-300 hover:scale-[1.05]"
              >
                <div className="flex justify-center mb-4">
                  {/* Icon component used directly */}
                  <value.icon className="w-12 h-12 text-blue-400" /> 
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {value.name}
                </h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Meet Our Leadership
          </h2>
          <p className="text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
            Our team is comprised of industry veterans and passionate innovators,
            committed to turning your vision into a reality.
          </p>

          {/* Centered Grid */}
          <div className="flex justify-center">
            {/* Keeping lg:grid-cols-2 to center the two members on large screens */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 shadow-lg text-center"
                >
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                  <p className="text-blue-400 font-medium mb-4">{member.title}</p>
                  <p className="text-gray-400">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Trusted Advisors 
      <section className="py-24 px-6 bg-gray-950">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Trusted Advisors
          </h2>
          <p className="text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
            Guided by renowned experts who bring decades of experience in
            semiconductors and business strategy.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {advisors.map((advisor) => (
              <div
                key={advisor.name}
                className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 shadow-lg text-center"
              >
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6">
                  <img
                    src={advisor.image}
                    alt={advisor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {advisor.name}
                </h3>
                <p className="text-blue-400 font-medium mb-4">
                  {advisor.title}
                </p>
                <p className="text-gray-400">{advisor.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Clients Section
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Clients We Work With
          </h2>
          <p className="text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
            We are proud to collaborate with leading companies shaping the
            future of technology.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-center">
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex justify-center items-center"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-16 object-contain opacity-80 hover:opacity-100 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="py-24 px-6 bg-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ready to Build the Future?
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-8">
            Partner with us to bring your next-generation product to life.
          </p>
          <a
            href="#"
            className="inline-block py-4 px-10 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}

import React from "react";

const logos = [
  { src: "https://cdn.iconscout.com/icon/free/png-256/intel-282143.png", alt: "Intel" },
  { src: "https://cdn.iconscout.com/icon/free/png-256/nvidia-2-283088.png", alt: "NVIDIA" },
  { src: "https://cdn.iconscout.com/icon/free/png-256/samsung-24-283091.png", alt: "Samsung" },
  { src: "https://cdn.iconscout.com/icon/free/png-256/qualcomm-283084.png", alt: "Qualcomm" },
  { src: "https://cdn.iconscout.com/icon/free/png-256/amd-1-283030.png", alt: "AMD" },
  { src: "https://cdn.iconscout.com/icon/free/png-256/arm-4-282155.png", alt: "ARM" },
  { src: "https://cdn.iconscout.com/icon/free/png-256/google-160-202720.png", alt: "Google" },
  { src: "https://cdn.iconscout.com/icon/free/png-256/microsoft-221-283074.png", alt: "Microsoft" },
];

export default function LogoBandFuturistic() {
  return (
    <section className="bg-gray-950 py-20 overflow-hidden font-sans">
      <style>
        {`
        /* Slowed down animation duration for a smoother, high-end feel */
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 35s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0%); }
        }
        `}
      </style>
      
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Validated by <span className="text-cyan-400">Industry Leaders</span>
        </h2>
        <p className="text-gray-400 mt-3 max-w-3xl mx-auto text-lg">
          We are proud to partner with the world's most innovative technology and semiconductor companies.
        </p>
      </div>
      
      <div className="relative space-y-8">
        {/* Top Row: Scrolls Left */}
        <div className="flex w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <div className="flex justify-around items-center space-x-16 animate-marquee">
            {/* Duplicate logos to create a seamless loop */}
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                // Removed grayscale and brightness for full color. Reduced initial opacity.
                className="h-14 w-auto opacity-40 hover:opacity-100 transition-opacity duration-500 flex-shrink-0"
              />
            ))}
          </div>
        </div>
        
        {/* Bottom Row: Scrolls Right */}
        <div className="flex w-full overflow-hidden [mask-image:_linear-gradient(to_left,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <div className="flex justify-around items-center space-x-16 animate-marquee-reverse">
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="h-14 w-auto opacity-40 hover:opacity-100 transition-opacity duration-500 flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
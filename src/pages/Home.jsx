import React from "react";
import Hero from "../components/Hero";

import Contact from "../components/Contact";



import Services from "../components/Services";
import Solutions from "../components/OurSolutions";

import BlogSection from "../components/Blogs";
import CompanyDetailsSection from "../components/CompanyDetails";


export default function Home() {
  return (
    <>
      <Hero />
      <CompanyDetailsSection />
     


      <Solutions />
      <Services />
      {/* <LogoBand /> */}
      {/* <TestimonialsSection /> */}
      <BlogSection />


      <Contact />

    </>
  );
}

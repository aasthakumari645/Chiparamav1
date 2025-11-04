import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Footer from "./components/Footer";
import CareersPage from "./pages/CareersPage";
import ContactPage from "./pages/ContactPage";
import CandidatePage from "./pages/CandidatePage";
import CompanyPage from "./pages/CompanyPage";
import FixedCTAButton from "./components/FixedCTAButton"; 
import ServicePage from "./pages/ServicePage";
import NewsBlogsPage from "./pages/NewsBlogsPage";
import GoToTopButton from "./components/GoToTopButton"; // Import the GoToTopButton
import BlogPage1 from "./pages/BlogPage1";
import BlogPage2 from "./pages/BlogPage2";
import BlogPage3 from "./pages/BlogPage3";
import BlogPage4 from "./pages/BlogPage4";
import CandidateProfilePage from "./pages/CandidateProfilePage";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <Router>
      <div className="font-sans bg-white text-primary">
        <Navbar />
        <main className="pt-20"> {/* padding to avoid overlap with fixed navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/candidates" element={<CandidatePage />} />
            <Route path="/company" element={<CompanyPage />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/news-blogs" element={<NewsBlogsPage/>}/>
            <Route path="/blog1" element={<BlogPage1/>}/>
            <Route path="/blog2" element={<BlogPage2/>}/>
            <Route path="/blog3" element={<BlogPage3/>}/>
            <Route path="/blog4" element={<BlogPage4/>}/>
            <Route path="/candidateprofile" element={<CandidateProfilePage/>}/>


          </Routes>
        </main>
        
        {/* Fixed utility components rendered outside the main content flow */}
        <FixedCTAButton />
  
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;

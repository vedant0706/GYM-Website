import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import About from "../Components/About";
import About1 from '../Components/About1';
import Contact from '../Components/Contact';
import { Link } from 'react-router-dom';

import AOS from "aos";
import "aos/dist/aos.css";

const AboutPage = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <div data-aos="fade-right">
      <Navbar />

      {/* Hero Section */}
      <div className="overflow-hidden">
        <div className="flex flex-col md:flex-row items-center h-[400px] w-full bg-center bg-cover bg-[url(/public/scott-webb-5IsdIqwwNP4-unsplash.jpg)]">
          <div className="text-white px-5 sm:px-10 md:px-20 py-10 md:py-25 text-center md:text-left">
            <div className="text-lg sm:text-xl mb-3 text-center">
              <Link to="/home" className="hover:text-sky-400">Home</Link>
              <span className="mx-1">/</span>
              <span className="text-sky-400">About us</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-[50px] font-semibold font-serif">ABOUT US</h1>
          </div>
        </div>

        {/* Top scrolling banner */}
        <div className="w-full overflow-hidden bg-sky-400 h-[60px] sm:h-[80px]">
          <div className="inline-block whitespace-nowrap animate-scroll text-black font-semibold m-2">
            <span className="text-[25px] sm:text-[40px]">DEVELOPMENT + STEAM BATH + CROSSFIT BATCHES + GOAL ACHIEVEMENT + PROFESSIONAL TRAINING + STEAM BATH + CROSSFIT BATCHES + GOAL ACHIEVEMENT + PROFESSIONAL TRAINING</span>
          </div>
        </div>

        {/* About Sections */}
        <About />
        <About1 />

      

        {/* Contact Section */}
        <Contact />
      </div>
    </div>
  );
};

export default AboutPage;

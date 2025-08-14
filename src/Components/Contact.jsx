import React from 'react';
import { Link } from 'react-router-dom';
import CopyContext from "./CopyContext.jsx";
import CopyContextMail from "./CopyContextMail.jsx";
import SendMail from "./SendMail.jsx";

const Contact = () => {
  return (
    <div className="bg-black w-full overflow-hidden text-white">
       <div className="w-full overflow-hidden bg-sky-400 h-[100px]">
                <div className="inline-block whitespace-nowrap animate-scroll text-black font-semibold m-5">
                    <span className="text-[40px]">DEVELOPMENT + STEAM BATH + CROSSFIT BATCHES + GOAL ACHIEVEMENT + PROFESSIONAL TRAINING + STEAM BATH + CROSSFIT BATCHES + GOAL ACHIEVEMENT + PROFESSIONAL TRAINING</span>
                </div>
            </div>

      {/* Top Section */}
      <div className="flex flex-col md:flex-row flex-wrap justify-between md:justify-around gap-10 p-5 md:p-10">

        {/* Logo & Description */}
        <div className="flex flex-col items-center md:items-start md:w-1/4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <a href="/home">
              <img src="/dumbbell-solid-full.svg" alt="Dumbell" className="w-16 md:w-20 p-2 bg-sky-400 rounded-md" />
            </a>
            <span className="text-2xl md:text-4xl font-bold">SP Fitness World</span>
          </div>
          <p className="mt-4 text-gray-400 text-sm md:text-base leading-relaxed">
            Transform your body and mind with our state-of-the-art equipment, professional trainers, and personalized programs designed for your success.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start md:w-1/4 text-center md:text-left">
          <h3 className="font-semibold text-lg md:text-xl mb-3">Quick Links</h3>
          <Link to="/home" className="text-gray-400 hover:text-sky-400 mb-2">Home</Link>
          <Link to="/about" className="text-gray-400 hover:text-sky-400 mb-2">About Us</Link>
          <Link to="/calculator" className="text-gray-400 hover:text-sky-400 mb-2">BMI Calculator</Link>
          <Link to="/contact" className="text-gray-400 hover:text-sky-400 mb-2">Contact Us</Link>
        </div>

        {/* Our Services */}
        <div className="flex flex-col items-center md:items-start md:w-1/4 text-center md:text-left">
          <h3 className="font-semibold text-lg md:text-xl mb-3">Our Services</h3>
          <ul className="text-gray-400 text-sm md:text-base space-y-1">
            <li>Personal Training</li>
            <li>Group Classes</li>
            <li>CrossFit Batches</li>
            <li>Nutrition Guidance</li>
            <li>Steam Bath</li>
            <li>Progress Tracking</li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div className="flex flex-col items-center md:items-start md:w-1/4 text-center md:text-left">
          <h3 className="font-semibold text-lg md:text-xl mb-3">Get in Touch</h3>

          <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
            <img src="/phone-solid-full.svg" alt="Phone" className="w-6 h-6" />
            <span className="text-gray-400 cursor-pointer hover:text-sky-400 font-semibold"><CopyContext /></span>
          </div>

          <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
            <img src="/envelope-solid-full.svg" alt="Email" className="w-6 h-6" />
            <span className="text-gray-400 cursor-pointer hover:text-sky-400 font-semibold"><CopyContextMail /></span>
          </div>

          <div className="flex items-center gap-2 mb-1 justify-center md:justify-start">
            <img src="/location-dot-solid-full.svg" alt="Location" className="w-6 h-6" />
            <span className="text-gray-400">Sarnaik Nagar, Padali - Balinga Road,</span>
          </div>
          <span className="text-gray-400 block px-4 md:px-0">Padali Khurd, Kolhapur.</span>

          <div className="mt-6 text-center md:text-left">
            <h4 className="font-semibold text-base md:text-lg">Stay Updated</h4>
            <p className="text-gray-400 text-sm md:text-base mb-2">Get fitness tips and exclusive offers</p>
            <SendMail />
          </div>
        </div>

      </div>

      {/* Divider */}
      <hr className="border-sky-400" />

      {/* Footer */}
      <footer className="bg-black text-gray-400">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-5">
          <p className="text-center sm:text-left text-sm md:text-base mb-2 sm:mb-0">
            <span className="text-2xl">© Copyright 2025 SP Fitness World.</span>
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <img src="/instagram-brands-solid-full.svg" alt="Instagram" className="w-15 h-15 p-1 rounded-full hover:bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600" />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <img src="/facebook-brands-solid-full.svg" alt="Facebook" className="w-15 h-15 p-1 rounded-full hover:bg-sky-400" />
            </a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
              <img src="/x-twitter-brands-solid-full.svg" alt="X" className="w-15 h-15 p-1 rounded-full hover:bg-gray-900" />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
              <img src="/youtube-brands-solid-full.svg" alt="YouTube" className="w-15 h-15 p-1 rounded-full hover:bg-red-600" />
            </a>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Contact;

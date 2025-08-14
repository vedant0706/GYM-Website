import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 w-full ">
      <nav className="bg-black text-white">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo and Gym Name */}
          <div className="flex items-center space-x-3">
            <a href="#" target="_blank">
              <img
                src="/dumbbell-solid-full.svg"
                alt="Dumbell"
                className="bg-sky-400 w-15 rounded-md p-2"
              />
            </a>
            <Link
              to="/home"
              className="text-4xl font-bold hover:text-sky-400"
            >
              SP Fitness World
            </Link>
          </div>

          {/* Hamburger Button for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Links & Social Icons */}
          <div className={`md:flex md:items-center md:space-x-6 ${isOpen ? "block" : "hidden"} w-full md:w-auto mt-2 md:mt-0`}>
            {/* Menu Links */}
            <div className="flex flex-col md:flex-row md:space-x-6 text-center md:text-left">
              <Link to="/home" className="text-lg hover:text-sky-400 text-[20px] my-1 md:my-0">Home</Link>
              <Link to="/about" className="text-lg hover:text-sky-400 text-[20px] my-1 md:my-0">About Us</Link>
              <Link to="/calculator" className="text-lg hover:text-sky-400 text-[20px] my-1 md:my-0">BMI Calculator</Link>
              <Link to="/contact" className="text-lg hover:text-sky-400 text-[20px] my-1 md:my-0">Contact Us</Link>
            </div>

            {/* Social Icons */}
            <div className="flex flex-row space-x-3 mt-2 md:mt-0 justify-center md:justify-start">
              <a href="https://www.instagram.com/" target="_blank">
                <img src="/instagram-brands-solid-full.svg" alt="Instagram" className="w-15 h-15 hover:bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-full p-1" />
              </a>
              <a href="https://www.facebook.com/" target="_blank">
                <img src="/facebook-brands-solid-full.svg" alt="Facebook" className="w-15 h-15 hover:bg-sky-400 rounded-full p-1" />
              </a>
              <a href="https://x.com/" target="_blank">
                <img src="/x-twitter-brands-solid-full.svg" alt="Twitter" className="w-15 h-15 hover:bg-gray-900 rounded-full p-1" />
              </a>
              <a href="https://www.youtube.com/" target="_blank">
                <img src="/youtube-brands-solid-full.svg" alt="YouTube" className="w-15 h-15 hover:bg-red-600 rounded-full p-1" />
              </a>
            </div>
          </div>
        </div>
      </nav>
      <hr className="text-sky-400" />
    </div>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 w-full">
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
              to="/"
              className="text-4xl font-bold hover:text-sky-400"
            >
              SP Fitness World
            </Link>
          </div>

          {/* Links & Social Icons */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {/* Menu Links */}
            <div className="flex flex-row md:space-x-6 text-center md:text-left">
              <Link
                to="/home"
                className="text-lg hover:text-sky-400 text-[20px]"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-lg hover:text-sky-400 text-[20px]"
              >
                About Us
              </Link>
              <Link
                to="/calculator"
                className="text-lg hover:text-sky-400 text-[20px]"
              >
                BMI Calculator
              </Link>
              <Link
                to="/contact"
                className="text-lg hover:text-sky-400 text-[20px]"
              >
                Contact Us
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex flex-row space-x-3 ml-4">
              <a href="https://www.instagram.com/" target="_blank">
                <img
                  src="/instagram-brands-solid-full.svg"
                  alt="Instagram"
                  className="w-15 h-15 hover:bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-full p-1"
                />
              </a>
              <a href="https://www.facebook.com/" target="_blank">
                <img
                  src="/facebook-brands-solid-full.svg"
                  alt="Facebook"
                  className="w-15 h-15 hover:bg-sky-400 rounded-full p-1"
                />
              </a>
              <a href="https://x.com/" target="_blank">
                <img
                  src="/x-twitter-brands-solid-full.svg"
                  alt="Twitter"
                  className="w-15 h-15 hover:bg-gray-900 rounded-full p-1"
                />
              </a>
              <a href="https://www.youtube.com/" target="_blank">
                <img
                  src="/youtube-brands-solid-full.svg"
                  alt="YouTube"
                  className="w-15 h-15 hover:bg-red-600 rounded-full p-1"
                />
              </a>
            </div>
          </div>

          {/* Three Dots Button (kept) */}
          <Link
            to="/hamburger"
            className="bg-transparent border-1 rounded-full w-10 h-10 p-1 hover:bg-sky-400 hover:scale-110 cursor-pointer"
          >
            <img src="/ellipsis-solid-full.svg" alt="Menu" />
          </Link>
        </div>
      </nav>

      <hr className="text-sky-400" />
    </div>
  );
};

export default Navbar;

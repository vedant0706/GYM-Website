import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/"); // Redirects to homepage
  };

  return (
    <div className="bg-black w-full min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-4 md:px-6 py-4 text-white">
        {/* Left Logo */}
        <a
          href="/"
          className="text-2xl md:text-4xl flex flex-row items-center font-bold gap-2 md:gap-3 hover:text-sky-400 cursor-pointer"
        >
          <img
            src="/public/dumbbell-solid-full.svg"
            className="w-8 h-8 md:w-10 md:h-10 bg-sky-400 p-1 rounded-lg"
            alt=""
          />
          SP Fitness World
        </a>

        {/* Right Side - Close Button */}
        <button
          onClick={handleClose}
          className="bg-white text-black text-lg md:text-xl font-bold w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded shadow hover:bg-gray-200"
        >
          <span className="text-2xl md:text-[45px] flex items-center justify-center mb-1 md:mb-3">
            &times;
          </span>
        </button>
      </nav>
      <hr className="border-sky-400" />

      {/* Main Content */}
      <div className="w-full max-w-6xl mx-auto p-6 md:p-8 pt-16 md:pt-24 flex flex-col md:flex-row gap-10 md:gap-0 justify-between">
        {/* Left Section */}
        <div className="space-y-6 md:space-y-8 max-w-sm">
          {/* Brand Text */}
          <div className="text-2xl md:text-4xl flex flex-row items-center gap-2 md:gap-3 font-extrabold text-white">
            <img
              src="/public/dumbbell-solid-full.svg"
              className="w-10 h-10 md:w-14 md:h-14 bg-sky-400 rounded-full p-1"
              alt=""
            />
            SP FITNESS
          </div>

          {/* Contact Info */}
          <div className="space-y-4 md:space-y-6">
            <div className="cursor-pointer">
              <h3 className="font-bold text-white flex items-center gap-2">
                <img
                  src="/public/phone-solid-full.svg"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full p-1 hover:bg-white"
                  alt=""
                />{" "}
                CALL US
              </h3>
              <div className="text-white text-sm md:text-base font-semibold hover:text-sky-400">
                +91 8080562314
              </div>
            </div>

            <div>
              <h3 className="font-bold text-white flex items-center gap-2">
                <img
                  src="/public/location-dot-solid-full.svg"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full p-1 hover:bg-white"
                  alt=""
                />{" "}
                WE ARE HERE
              </h3>
              <a
                href="https://www.google.com/maps"
                className="text-gray-300 text-sm md:text-base hover:text-sky-400 font-semibold"
              >
                Sarnaik Nagar, Padali - Balinga Road, Padali Khurd, Kolhapur.
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-2 md:gap-3">
            <a
              href="https://www.facebook.com/"
              className="bg-[#0f172a] border flex gap-2 items-center text-white hover:text-black border-blue-400 px-3 py-1 rounded-full text-sm md:text-base font-bold hover:bg-blue-600 hover:border-white"
            >
              <img
                src="/public/facebook-brands-solid-full.svg"
                className="w-5 h-5 md:w-6 md:h-6"
                alt=""
              />
              Facebook
            </a>
            <a
              href="https://x.com/"
              className="bg-[#0f172a] border flex gap-2 items-center text-white hover:text-black border-blue-400 px-3 py-1 rounded-full text-sm md:text-base font-bold hover:bg-gray-700 hover:border-white"
            >
              <img
                src="/public/x-twitter-brands-solid-full.svg"
                className="w-5 h-5 md:w-6 md:h-6"
                alt=""
              />
              Twitter
            </a>
            <a
              href="https://www.instagram.com/"
              className="bg-[#0f172a] border flex gap-2 items-center text-white hover:text-black border-blue-400 px-3 py-1 rounded-full text-sm md:text-base font-bold hover:bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:border-white"
            >
              <img
                src="/public/instagram-brands-solid-full.svg"
                className="w-5 h-5 md:w-6 md:h-6"
                alt=""
              />
              Instagram
            </a>
            <a
              href="https://www.youtube.com/"
              className="bg-[#0f172a] border flex gap-2 items-center text-white hover:text-black border-blue-400 px-3 py-1 rounded-full text-sm md:text-base font-bold hover:bg-red-600 hover:border-white"
            >
              <img
                src="/public/youtube-brands-solid-full.svg"
                className="w-5 h-5 md:w-6 md:h-6"
                alt=""
              />
              YouTube
            </a>
          </div>
        </div>

        {/* Right Section (Menu Links) */}
        <div className="flex flex-col text-left space-y-4 md:space-y-6 text-xl md:text-3xl gap-3 md:gap-5 w-full md:w-2/3 px-2 md:px-10">
          <Link
            to="/"
            className="text-white font-bold border-gray-600 hover:text-blue-400 mt-2 md:mt-5"
          >
            HOME
            <hr className="border-gray-700 mt-1 md:mt-2" />
          </Link>
          <Link
            to="/about"
            className="text-white font-bold border-gray-600 hover:text-blue-400"
          >
            ABOUT US
            <hr className="border-gray-700 mt-1 md:mt-2" />
          </Link>
          <Link
            to="/calculator"
            className="text-white font-bold border-gray-600 hover:text-blue-400"
          >
            BMI CALCULATOR
            <hr className="border-gray-700 mt-1 md:mt-2" />
          </Link>
          <Link
            to="/contact"
            className="text-white font-bold border-gray-600 hover:text-blue-400"
          >
            CONTACT US
            <hr className="border-gray-700 mt-1 md:mt-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}

import React from 'react'
import Home2 from './Home2'
import { Link } from "react-router-dom"



const Home = () => {
   

    return (
        <div className="w-full h-full overflow-hidden">
            {/* Background Section */}
            <div className="w-full bg-center bg-cover bg-[url('/home-bg.jpg')]">
                {/* Main Banner Text */}
                <div className="text-2xl sm:text-3xl font-semibold py-10 sm:py-20 px-4 sm:px-20 rounded-full">
                    <span className="border-sky-400 rounded-3xl px-4">
                        <span className="text-white">FITNESS FOR EVERYONE</span>
                    </span>
                </div>

                {/* Heading and Description */}
                <div className="text-white px-4 sm:px-20">
                    <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold leading-snug sm:leading-tight">
                        NO MATTER <br />
                        YOUR <span className="text-sky-400">FITNESS</span><br />
                        <span className="text-sky-400">LEVEL</span>
                    </h1>
                    <br />
                    <p className="text-gray-300 text-base sm:text-lg">
                        Transform your body and mind with our state-of-the-art<br /> equipment, professional trainers, and personalized programs <br /> designed for your success.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 mt-5 mb-7">
                        <div className="bg-sky-400 text-black rounded-lg font-bold hover:scale-110 transition transform duration-200">
                            <div className="py-3 px-5 sm:py-5 sm:px-5 text-center"><Link to="/contact">Get Started</Link></div>
                        </div>

                        <Home2 />
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-row items-center text-xl sm:text-xl font-bold text-sky-400 gap-2 mb-6">
                        <img src="/phone-solid-full.svg" alt="Phone" className="w-5 h-5 sm:w-7 sm:h-7" />
                        +91 9326228186
                    </div>

                    {/* Stats Card */}
                    <div className="flex items-end mt-10">
                        <div className="flex flex-col sm:flex-row items-center bg-black rounded-2xl p-6 sm:p-10 w-full sm:w-[700px] h-auto">
                            <div className="text-left text-white">
                                <h1 className="text-2xl sm:text-3xl font-serif font-bold">GIVE YOUR BODY THE BEST FORM</h1>
                                <p className="text-lg sm:text-xl font-serif text-sky-500 mt-2 font-semibold">SHAPING YOUR MUSCLES</p>
                                <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mt-6">
                                    <div className="text-center">
                                        <p className="text-xl sm:text-2xl font-bold text-blue-400 mt-4 sm:mt-10">500+</p>
                                        <p className="text-sm text-gray-400">Happy Members</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-xl sm:text-2xl font-bold text-blue-400 mt-4 sm:mt-10">50+</p>
                                        <p className="text-sm text-gray-400">Expert Trainers</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="text-gray-400 w-full mt-5" />

                {/* Marquee / Scrolling Text */}
                 <div className="w-full overflow-hidden bg-sky-400 h-[100px]">
                <div className="inline-block whitespace-nowrap animate-scroll text-black font-semibold m-5">
                    <span className="text-[40px]">DEVELOPMENT + STEAM BATH + CROSSFIT BATCHES + GOAL ACHIEVEMENT + PROFESSIONAL TRAINING + STEAM BATH + CROSSFIT BATCHES + GOAL ACHIEVEMENT + PROFESSIONAL TRAINING</span>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Home

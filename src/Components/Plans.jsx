import React from 'react'
import { Link } from 'react-router-dom'

const Plans = () => {
    return (
        <div className="bg-[#151515] w-full overflow-hidden px-4 sm:px-10">
            <p className="flex justify-center mt-10">
                <span className="text-white text-xl sm:text-2xl bg-[#131c1c] border border-sky-400 rounded-2xl py-3 px-4 hover:text-black hover:bg-sky-400">
                    Pricing Plans
                </span>
            </p>

            <h1 className="text-white font-serif mt-5 text-3xl sm:text-5xl font-bold text-center leading-none">FIT FOR EVERY</h1>
            <h1 className="text-sky-500 font-serif font-bold text-3xl sm:text-5xl text-center leading-none">BUDGET</h1>

            <p className="text-gray-400 text-base sm:text-lg text-center mt-5">
                Choose the perfect plan for your fitness goals. Start your transformation journey today with our flexible membership options.
            </p>

            <div className="flex justify-center mt-5">
                <div className="text-center bg-sky-400 text-black py-3 px-6 sm:px-16 rounded-lg shadow-lg bg-opacity-90 backdrop-blur-sm animate-blink">
                    <h2 className="text-lg font-semibold flex justify-center items-center gap-2">
                        <img src="/crown-solid-full.svg" alt="crown" className="w-6 h-6 sm:w-7 sm:h-7"/>
                        <span>PRE-LAUNCH OFFER</span>
                    </h2>
                    <p className="text-sm sm:text-md mt-2 font-semibold">Save up to 40% on annual memberships. Limited time only!</p>
                </div>
            </div>

            {/* Plans Cards */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-10">
                {/* Basic Plan */}
                <div className="bg-[linear-gradient(145deg,_#000000,_#1a1a1a,_#33333333,_#000000)] text-white w-full sm:w-72 flex flex-col items-center p-6 border border-gray-700 rounded-2xl hover:border-sky-400 hover:scale-105 transition">
                    <img src="/bolt-solid-full.svg" alt="bolt" className="w-12 h-12 rounded-full mt-1 border border-sky-400"/>
                    <h2 className="text-2xl sm:text-3xl font-bold mt-4">Basic</h2>
                    <p className="text-gray-400 text-center mt-2">Perfect for beginners starting their fitness journey</p>
                    <p className="text-sky-400 font-serif text-2xl sm:text-3xl font-bold mt-3">₹2,999</p>
                    <p className="mt-1 text-center">3 MONTHS</p>
                    <ul className="mt-3 space-y-1 list-disc list-inside text-left">
                        <li>Gym Access (6 AM - 10 PM)</li>
                        <li>Basic Equipment Usage</li>
                        <li>Locker Facility</li>
                        <li>Free Fitness Assessment</li>
                        <li>Mobile App Access</li>
                    </ul>
                    <Link to="/contact" className="mt-4 bg-[#191919] border border-sky-400 rounded p-2 w-full text-center font-bold hover:bg-sky-400 hover:text-black">Choose Plan</Link>
                </div>

                {/* Premium Plan */}
                <div className="bg-[#131c1c] text-white w-full sm:w-72 flex flex-col items-center p-6 border border-gray-700 rounded-2xl hover:border-sky-400 hover:scale-105 transition">
                    <img src="/crown-solid-full (1).svg" alt="crown" className="w-12 h-12 rounded-full border border-sky-400"/>
                    <h2 className="text-2xl sm:text-3xl font-bold mt-4">Premium</h2>
                    <p className="text-gray-400 text-center mt-2">Most popular plan with comprehensive benefits</p>
                    <p className="text-sky-400 font-serif text-2xl sm:text-3xl font-bold mt-3">₹8,999</p>
                    <p className="mt-1 text-center">PER YEAR</p>
                    <ul className="mt-3 space-y-1 list-disc list-inside text-left text-sm">
                        <li>24/7 Gym Access</li>
                        <li>CrossFit Batches</li>
                        <li>Free Diet Plan</li>
                        <li>Access to Lockers</li>
                        <li>Gym Bag Included</li>
                        <li>Personal Training (2 sessions)</li>
                        <li>Steam Bath Access</li>
                        <li>Nutrition Guidance</li>
                        <li>Progress Tracking</li>
                    </ul>
                    <Link to="/contact" className="mt-4 bg-[#191919] border border-sky-400 rounded p-2 w-full text-center font-bold hover:bg-sky-400 hover:text-black">Choose Plan</Link>
                </div>

                {/* Elite Plan */}
                <div className="bg-[linear-gradient(145deg,_#000000,_#1a1a1a,_#33333333,_#000000)] text-white w-full sm:w-72 flex flex-col items-center p-6 border border-gray-700 rounded-2xl hover:border-sky-400 hover:scale-105 transition">
                    <img src="/star-solid-full.svg" alt="star" className="w-12 h-12 rounded-full border border-sky-400"/>
                    <h2 className="text-2xl sm:text-3xl font-bold mt-4">Elite</h2>
                    <p className="text-gray-400 text-center mt-2">Ultimate fitness experience with premium services</p>
                    <p className="text-sky-400 font-serif text-2xl sm:text-3xl font-bold mt-3">₹14,999</p>
                    <p className="mt-1 text-center">PER YEAR</p>
                    <ul className="mt-3 space-y-1 list-disc list-inside text-left text-sm">
                        <li>Everything in Premium</li>
                        <li>Unlimited Personal Training</li>
                        <li>Dedicated Fitness Coach</li>
                        <li>Custom Meal Plans</li>
                        <li>Supplement Guidance</li>
                        <li>Body Composition Analysis</li>
                        <li>Priority Class Booking</li>
                        <li>Guest Passes (2/month)</li>
                        <li>Recovery Therapy Sessions</li>
                    </ul>
                    <Link to="/contact" className="mt-4 bg-[#191919] border border-sky-400 rounded p-2 w-full text-center hover:bg-sky-400 hover:text-black">Choose Plan</Link>
                </div>
            </div>

            <p className="text-gray-400 text-center mt-10 text-base sm:text-lg">All plans include access to our mobile app and fitness tracking tools</p>

            <ul className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 text-sm sm:text-lg mt-5 text-center">
                <li className="text-sky-500">No Hidden Fees</li>
                <li className="text-sky-500">Cancel Anytime</li>
                <li className="text-sky-500">Money Back Guarantee</li>
                <li className="text-sky-500">Free Trial Available</li>
            </ul>

            <div className="flex justify-center mb-10 mt-10">
                <div className="bg-[linear-gradient(145deg,_#000000,_#1a1a1a,_#33333333,_#000000)] text-center w-full sm:w-96 rounded-2xl p-6">
                    <span className="text-white text-2xl sm:text-4xl font-semibold flex justify-center">Need a Customer Plan?</span>
                    <p className="text-gray-400 mt-2 text-base sm:text-lg">We offer tailored membership packages for corporate groups, families, and special requirements.</p>
                    <Link to="/contact" className="mt-4 inline-block bg-sky-400 text-black p-2 rounded-2xl font-bold hover:bg-black hover:text-white">Contact Our Team</Link>
                </div>
            </div>

        </div>
    )
}

export default Plans

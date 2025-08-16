import React from 'react'
import {Link} from 'react-router-dom'

const About1 = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      
      {/* Header Section */}
      <div className="bg-black w-full py-10 px-5 sm:px-10">
        <header className="text-sky-400 text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-semibold text-center mb-5">
          Transforming Lives Through Fitness
        </header>
        <div className="text-center text-gray-400 text-sm sm:text-lg md:text-xl space-y-1">
          <p>For over a decade, SP Fitness World has been dedicated to helping individuals</p>
          <p>achieve their fitness goals through professional training, quality equipment, and</p>
          <p>unwavering support.</p>
        </div>
      </div>

      {/* Stats Section */}
      {/* Stats Section */}
<div className="bg-[#191919] w-full py-10 px-5">
  <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
    
    <div className="flex flex-col items-center justify-center p-4">
      <img src="/people-group-solid-full.svg" alt="members" className="w-12 h-12 mb-2"/>
      <h3 className="text-2xl text-white sm:text-3xl md:text-[30px] font-bold">500+</h3>
      <p className="text-gray-400 text-sm sm:text-lg">Happy Members</p>
    </div>

    <div className="flex flex-col items-center justify-center p-4">
      <img src="/clock-solid-full.svg" alt="experience" className="w-12 h-12 mb-2"/>
      <h3 className="text-2xl text-white sm:text-3xl md:text-[30px] font-bold">10+</h3>
      <p className="text-gray-400 text-sm sm:text-lg">Years Experience</p>
    </div>

    <div className="flex flex-col items-center justify-center p-4">
      <img src="/bullseye-solid-full.svg" alt="goals" className="w-12 h-12 mb-2"/>
      <h3 className="text-2xl text-white sm:text-3xl md:text-[30px] font-bold">1000+</h3>
      <p className="text-gray-400 text-sm sm:text-lg">Goals Achieved</p>
    </div>

    <div className="flex flex-col items-center justify-center p-4">
      <img src="/trophy-solid-full.svg" alt="awards" className="w-12 h-12 mb-2"/>
      <h3 className="text-2xl text-white sm:text-3xl md:text-[30px] font-bold">15+</h3>
      <p className="text-gray-400 text-sm sm:text-lg">Awards Won</p>
    </div>

  </div>
</div>


      {/* Story Section */}
      <div className="bg-black w-full px-5 sm:px-10 lg:px-20 py-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          
          {/* Text */}
          <div className="flex-1">
            <h1 className="text-white font-semibold text-2xl sm:text-3xl md:text-[35px] mb-5">Our Story</h1>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg">
              SP Fitness World was founded with a simple mission: to make fitness accessible, enjoyable, and effective for everyone. What started as a small gym has grown into a comprehensive fitness center that serves hundreds of members.
            </p>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg mt-5">
              Our journey has been driven by the belief that fitness is not just about physical transformation, but about building confidence, discipline, and a healthier lifestyle. We've witnessed countless success stories and continue to be inspired by our members' achievements.
            </p>
            <div className="bg-sky-400 mt-7 h-10 w-40 sm:w-48 flex items-center justify-center rounded-2xl font-bold cursor-pointer hover:scale-110">
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1">
            <img src="/GYM-bg.png" alt="Gym-Background" className="rounded-2xl border border-gray-800 w-full max-w-md mx-auto"/>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-[#191919] w-full px-5 sm:px-10 py-10">
        <h1 className="text-white text-2xl sm:text-3xl md:text-[35px] font-bold text-center mb-5">What We Stand For</h1>
        <p className="text-gray-400 text-sm sm:text-base md:text-lg text-center mb-10">
          Our core values guide everything we do and shape the experience we provide to our members.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          <div className="p-6 rounded-lg border border-gray-700 hover:border-sky-400">
            <h2 className="text-xl sm:text-2xl text-white font-bold">Professional Excellence</h2>
            <p className="mt-2 text-gray-400 text-sm sm:text-base">Our certified trainers provide expert guidance with personalized workout plans tailored to your fitness level and goals.</p>
          </div>
          <div className="p-6 rounded-lg border border-gray-700 hover:border-sky-400">
            <h2 className="text-xl sm:text-2xl text-white font-bold">Quality Equipment</h2>
            <p className="mt-2 text-gray-400 text-sm sm:text-base">State-of-the-art cardio and strength training equipment to ensure effective and safe workouts for all fitness levels.</p>
          </div>
          <div className="p-6 rounded-lg border border-gray-700 hover:border-sky-400">
            <h2 className="text-xl sm:text-2xl text-white font-bold">Goal Achievement</h2>
            <p className="mt-2 text-gray-400 text-sm sm:text-base">We focus on helping you achieve your specific fitness goals through structured programs and consistent support.</p>
          </div>
          <div className="p-6 rounded-lg border border-gray-700 hover:border-sky-400">
            <h2 className="text-xl sm:text-2xl text-white font-bold">Community Support</h2>
            <p className="mt-2 text-gray-400 text-sm sm:text-base">Join a supportive community of fitness enthusiasts who motivate and inspire each other to reach new heights.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About1

import React from 'react'



const About = () => {
  return (
    <div className="bg-[#151515] w-full h-full overflow-hidden">
      <div>
        {/* Section Title */}
        <p className="flex justify-center">
          <span className="text-white text-xl sm:text-2xl bg-[#131c1c] border border-sky-400 rounded-2xl mt-10 py-3 px-4 hover:text-black hover:bg-sky-400">
            What We Offer
          </span>
        </p>

        {/* Headings */}
        <div className="mt-10 px-4 sm:px-10 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold leading-snug sm:leading-tight text-white">
            THE BEST
          </h1>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold leading-snug sm:leading-tight text-white">
            STANDARDS
          </h1>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold leading-snug sm:leading-tight text-sky-500">
            ANYWHERE
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-base sm:text-lg mt-4 leading-relaxed">
            Experience world-class facilities and services designed to help you
            achieve your fitness goals faster than ever before.
          </p>
        </div>

        {/* Cards Section */}
        <div className="mt-10 mb-15 flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-6 px-4">
          {/* Card 1 */}
          <div className="w-full sm:w-80 max-w-sm hover:border-sky-400 hover:scale-105 border border-[#1d1d1d] flex justify-center rounded-2xl transition-transform duration-200">
            <div className="bg-black text-white rounded-2xl overflow-hidden">
              <img
                src="/public/p-1.jpg"
                alt="Goal Achievement"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold text-blue-400">
                  GOAL ACHIEVEMENT & DIET
                </h2>
                <p className="mt-2 text-gray-300 text-sm sm:text-base">
                  We help you reach your fitness goals with personalised support.
                  Our tailored diet plans complement your training for optimal results.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full sm:w-80 max-w-sm hover:border-sky-400 hover:scale-105 border border-[#1d1d1d] flex justify-center rounded-2xl transition-transform duration-200">
            <div className="bg-black text-white rounded-2xl overflow-hidden">
              <img
                src="/public/p-2.jpg"
                alt="Professional Trainers"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold text-blue-400">
                  PROFESSIONAL TRAINERS
                </h2>
                <p className="mt-2 text-gray-300 text-sm sm:text-base">
                  Our certified trainers provide expert guidance and motivation. They ensure your workouts are effective and aligned with your goals.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full sm:w-80 max-w-sm hover:border-sky-400 hover:scale-105 border border-[#1d1d1d] flex justify-center rounded-2xl transition-transform duration-200">
            <div className="bg-black text-white rounded-2xl overflow-hidden">
              <img
                src="/public/p-3.jpg"
                alt="Cardio Equipment"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold text-blue-400">
                  CARDIO & MUSCLE TRAINING EQUIPMENT
                </h2>
                <p className="mt-2 text-gray-300 text-sm sm:text-base">
                  We offer top-quality cardio machines and strength training equipment. Enhance your fitness with machines designed for all levels.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="w-full sm:w-80 max-w-sm hover:border-sky-400 hover:scale-105 border border-[#1d1d1d] flex justify-center rounded-2xl transition-transform duration-200">
            <div className="bg-black text-white rounded-2xl overflow-hidden">
              <img
                src="/public/p-04.jpg"
                alt="Steam Bath"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold text-blue-400">
                  STEAM BATH 
                </h2>
                <br />
                <p className="mt-2 text-gray-300 text-sm sm:text-base">
                  Relax and recover in our rejuvenating steam bath. It helps soothe muscles and promotes faster recovery after intense workouts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default About;

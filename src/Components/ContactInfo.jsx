import React from 'react'
import MapComponent from './MapComponent'

const ContactInfo = () => {
  return (
    <div className="bg-black w-full overflow-x-hidden-hidden"> 
   <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto p-6">
     
      <div className="text-white">
       
        <p className="text-sky-500 font-medium">About Gymort</p>
        <h1 className="text-4xl font-bold uppercase leading-tight mt-2">
          Find us here,<br /> make real results.
        </h1>
        <p className="mt-4 text-gray-500">
          Get in touch to discuss your employee wellbeing needs today.
          Please give us a call, drop us an email or fill out the contact form.
        </p>

      
        <div className="grid grid-cols-2 gap-6 mt-8">
          <div className="text-white">
            <h2 className="text-lg font-bold uppercase">We are here</h2>
            <p className="mt-2">
              Sarnaik Nagar, Padali -<br />
              Malinga Road, Padali<br />
              Khurd, Kolhapur.
            </p>
          </div>
          <div className="text-white">
            <h2 className="text-lg font-bold uppercase">We are open</h2>
            <p className="mt-2">Mon - Fri: 05:00 AM - 10:00 PM</p>
            <p>Sat - Sun: 05:00 AM - 01:00 PM</p>
          </div>
        </div>

     
        <div className="mt-6">
          <h2 className="text-lg font-bold uppercase">Call us</h2>
          <p className="mt-1 text-sky-500 cursor-pointer">+91 8080652314</p>
        </div>

       
        <div className="flex space-x-4 mt-6">
           <div className="flex flex-row gap-3">
             <a href="https://www.instagram.com/" target="_blank" className="">
              <img src="/public/instagram-brands-solid-full.svg" alt="Instagram"
                className="text-white bg-transparent rounded-full  border-solid w-12 p-1 hover:bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600" />
            </a>

            <a href="https://www.facebook.com/" target="_blank" className="">
              <img src="/public/facebook-brands-solid-full.svg" alt="Instagram"
                className="text-white bg-transparent rounded-full  border-solid w-12 p-1 hover:bg-sky-400" />
            </a>

            <a href="https://x.com/" target="_blank" className="">
              <img src="/public/x-twitter-brands-solid-full.svg" alt="Instagram"
                className="text-white bg-transparent rounded-full  border-solid w-12  p-1 hover:bg-gray-900" />
            </a>

            <a href="https://www.youtube.com/" target="_blank" className="">
              <img src="/public/youtube-brands-solid-full.svg" alt="Instagram"
                className="bg-transparent rounded-full  border-solid w-12  p-1 hover:bg-red-600" />
            </a>
          </div>
        </div>
      </div>

      
      <div className="text-white">
        <h2 className="text-2xl font-bold uppercase">Contact us</h2>
        <p className="text-sm text-gray-500 mt-1">
          Your email address will not be published. Required fields are marked*
        </p>

        <form className="text-white mt-6 space-y-4">
          <div className="text-white grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" placeholder="Your Name*" className="text-white  border p-3 w-full" required/>
            <input type="email" placeholder="Your Email Address*" className="text-white  border p-3 w-full" required/>
          </div>
          <input type="tel" placeholder="Phone*" className="border p-3 w-full" required/>
          <input type="text" placeholder="Subject*" className="border p-3 w-full" required/>
          <textarea placeholder="Drop us a few lines here..." className="border p-3 w-full h-28"></textarea>

          <button type="submit" className="bg-sky-500 text-white px-6 py-3 font-semibold rounded-2xl hover:bg-sky-600 flex items-center space-x-2">
            <span>Submit Now</span>
          </button>
        </form>
      </div>
    </div>
    <form className="mt-10 pb-20">
      <MapComponent />
    </form>
    </div>
  )
}

export default ContactInfo
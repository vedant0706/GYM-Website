import React, {useEffect} from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
import Contact from '../Components/Contact'
import ContactInfo from '../Components/ContactInfo'

import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {
   useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);
  return (
    <div data-aos="fade-right">
      <Navbar />
      <div className="overflow-hidden">
      <div className="flex flex-row items-center h-[400px] w-screen bg-center bg-cover bg-[url(/public/scott-webb-5IsdIqwwNP4-unsplash.jpg)]">
        <div className="text-white px-20 py-25">
          <Link to="/home" className="text-[30px] hover:text-sky-400">Home</Link>
          <span className="text-[30px] text-white"> / </span>
          <span className="text-[30px] text-sky-400">Contact us</span>
          <h1 className="text-white text-[50px] font-semibold font-serif">CONTACT US</h1>
        </div>
      </div>

     <div className="w-full overflow-hidden bg-sky-400 h-[100px]">
      <div className="inline-block whitespace-nowrap animate-scroll text-black font-semibold m-5">
        <span className="text-[40px]">DEVELOPMENT + STEAM BATH + CROSSFIT BATCHES + GOAL ACHIEVEMENT + PROFESSIONAL TRAINING + STEAM BATH + CROSSFIT BATCHES + GOAL ACHIEVEMENT + PROFESSIONAL TRAINING</span>
      </div>
    </div>
      <ContactInfo/>
      
      <Contact />
      </div>
    </div>
  )
}

export default ContactPage
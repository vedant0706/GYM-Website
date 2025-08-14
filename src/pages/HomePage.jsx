import React, {useEffect} from 'react'
import Navbar from '../Components/Navbar';
import Home from '../Components/Home';
import BMI from '../Components/BMI';
import Plans from '../Components/Plans';
import Contact from '../Components/Contact';
import About from '../Components/About';

import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(() => {
  AOS.init({ duration: 2000, once: true });
}, []);

  return (
    <div data-aos="fade-down">
          <Navbar />
          <Home />
          <About />
          <BMI />
          <Plans />
          <Contact />
    </div>
  )
}

export default HomePage
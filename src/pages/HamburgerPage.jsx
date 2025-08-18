import React, { useEffect } from 'react';
import Hamburger from '../Components/Hamburger';

import AOS from "aos";
import "aos/dist/aos.css";

const HamburgerPage = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <div data-aos="fade-bottom">
      <Hamburger />
    </div>
  );
};

export default HamburgerPage;

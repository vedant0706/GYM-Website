import { Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BMIPage from './pages/BMIPage';
import ContactPage from './pages/ContactPage';
import HamburgerPage from "./pages/HamburgerPage";

const App = () => (


  <div className="h-screen overflow-y-scroll blue-scrollbar">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hamburger" element={<HamburgerPage/>}/>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/calculator" element={<BMIPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
  </div>


);

export default App;
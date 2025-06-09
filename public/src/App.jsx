import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Menu from "./Menu/Menu.jsx";
import NavigationBar from "./NavBar/NavigationBar.jsx";
import HomePage from "./HomePage.jsx";
import AboutPage from "./AboutPage.jsx";
import Catering from "./Catering.jsx";
import HoursLocation from "./HoursLocation.jsx";
import Footer from "./Footer.jsx";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
  }, []);

  return (
    <Router basename="/Woodside-Deli-Website">
      <ScrollToTop />
      <div className="overflow-x-hidden">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/hours-location" element={<HoursLocation />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/catering" element={<Catering />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

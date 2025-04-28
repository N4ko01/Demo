import React from "react";
import Nav from "../Body/nav/Nav.jsx";
import HomePage from "../Body/home/HomePage.jsx"
import Footer from "../Body/footer/Footer.jsx";
import CareerOptions from "../Body/Content/careeroptions/CareerOptions.jsx";
import AboutUs from "../Body/Content/aboutus/AboutUs.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const NavRoutes = () => {
  return (
    <BrowserRouter>
      <div className="main-container">
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/Aboutus" element={<AboutUs />} />
          <Route path="/salas" element={<CareerOptions />} />
          <Route path="/*" element={<h1>Error404</h1>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default NavRoutes;

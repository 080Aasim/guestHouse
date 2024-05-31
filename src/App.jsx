import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import { Room } from "./components/Room";
import Home from "./components/Home";
import ScrollToTop from "./components/ScrollToTop";
import Breakfast from "./components/Breakfast";
import Contact from "./components/Contact";
import Activities from "./components/Activities";
import ScrollAnimation from "./components/ScrollAnimation";

import "./App.css";

function App() {
  return (
    <div className="container">
      <ScrollToTop />
      <ScrollAnimation />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Rooms" element={<Room />} />
        <Route path="/Breakfast" element={<Breakfast />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Activities" element={<Activities />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import { Room } from "./components/Room";
import Home from "./components/Home";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";
import Breakfast from "./components/Breakfast";

function App() {
  return (
    <div className="container">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Rooms" element={<Room />} />
        <Route path="/Breakfast" element={<Breakfast />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

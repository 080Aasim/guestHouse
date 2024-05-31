import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import ScrollToTop from "./components/ScrollToTop";

import ScrollAnimation from "./components/ScrollAnimation";

import "./App.css";
import AnimatedRoute from "./components/AnimatedRoute";

function App() {
  return (
    <div className="container">
      <ScrollToTop />
      <ScrollAnimation />
      <Navbar />
      <AnimatedRoute />
      <Footer />
    </div>
  );
}

export default App;

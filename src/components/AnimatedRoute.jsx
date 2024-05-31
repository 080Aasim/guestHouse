import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Breakfast from "./Breakfast";
import Contact from "./Contact";
import Activities from "./Activities";
import { Room } from "./Room";
import Home from "./Home";
import NotFound from "./NotFound";

import { AnimatePresence } from "framer-motion";

function AnimatedRoute() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/Rooms" element={<Room />} />
        <Route path="/Breakfast" element={<Breakfast />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Activities" element={<Activities />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoute;

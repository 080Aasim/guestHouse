import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/asset0.png";
import { motion } from "framer-motion";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="links">
        <ul>
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <NavLink
              to="/"
              className="link"
              style={(isActive) => {
                isActive ? "active" : "deactive";
              }}
            >
              HOME
            </NavLink>
          </motion.li>

          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <NavLink
              to="/Rooms"
              className="link"
              style={(isActive) => {
                isActive ? "active" : "deactive";
              }}
            >
              ROOMS
            </NavLink>
          </motion.li>

          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <NavLink
              to="/Breakfast"
              className="link"
              style={(isActive) => {
                isActive ? "active" : "deactive";
              }}
            >
              BREAKFAST
            </NavLink>
          </motion.li>

          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <NavLink
              to="/Activities"
              className="link"
              style={(isActive) => {
                isActive ? "active" : "deactive";
              }}
            >
              ACTIVITIES
            </NavLink>
          </motion.li>

          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <NavLink
              to="/Contact"
              className="link"
              style={(isActive) => {
                isActive ? "active" : "deactive";
              }}
            >
              CONTACT
            </NavLink>
          </motion.li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

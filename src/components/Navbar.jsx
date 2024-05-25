import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/asset0.png";
import "./Navbar.css";
function Navbar() {
  return (
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="links">
          <ul>
            <li>
              <NavLink
                to="/"
                className="link"
                style={(isActive) => {
                  isActive ? "active" : "deactive";
                }}
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Rooms"
                className="link"
                style={(isActive) => {
                  isActive ? "active" : "deactive";
                }}
              >
                ROOMS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Breakfast"
                className="link"
                style={(isActive) => {
                  isActive ? "active" : "deactive";
                }}
              >
                BREAKFAST
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Activities"
                className="link"
                style={(isActive) => {
                  isActive ? "active" : "deactive";
                }}
              >
                ACTIVITIES
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Contact"
                className="link"
                style={(isActive) => {
                  isActive ? "active" : "deactive";
                }}
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
  );
}

export default Navbar;

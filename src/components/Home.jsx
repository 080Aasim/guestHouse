import React from "react";
import { Product } from "../cardInfo";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Home.css";
function Home() {
  return (
    <div>
      <div className="section-1">
        <img src={Product[0].image} alt="" />
        <div className="titles">
          <h1>Bed & Breakfast</h1>
          <h4>The Blackwater Ridge House</h4>
          <motion.button
            whileHover={{
              scale: 1.2,
            }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            BUILD YOUR WEBSITE
          </motion.button>
        </div>
      </div>
      <div className="section-2">
        <div className="top">
          <div className="l-text">
            <h2>Welcome to the historic house in Blackwater Ridge</h2>
          </div>
          <div className="r-text">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>
            <p>
              Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis
              dolore te feugait nulla facilisi.
            </p>
          </div>
        </div>
        <div className="bottom">
          <div className="display">
            <div className="c-display1">
              <Link to="/Rooms#top" className="d-link">
                <motion.h2
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                >
                  Rooms & Rates
                </motion.h2>
              </Link>
            </div>
            <div className="c-display2">
              <Link to="/Breakfast" className="d-link">
                <motion.h2
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                >
                  Breakfast & Dinning
                </motion.h2>
              </Link>
            </div>
            <div className="c-display3">
              <Link to="/Activities" className="d-link">
                <motion.h2
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                >
                  The area & attractions
                </motion.h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

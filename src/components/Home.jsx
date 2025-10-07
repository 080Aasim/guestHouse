import React from "react";
import { Product } from "../cardInfo";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Home.css";
function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="section-1">
        <div className="box">
          <div className="img">
            <img
              src={Product[0].image}
              // whileHover={{ scale: [null, 1.4, 1.3] }}
              // transition={{ duration: 0.3 }}
            />
          </div>
          <motion.div
            className="titles"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ease: "easeIn", duration: 2 }}
          >
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
          </motion.div>
        </div>
      </div>
      <div className="section-2">
        <div className="top">
          <motion.div
            className="l-text"
            initial="hidden"
            whileInView={{scale: 1.3}}
            // viewport={{once: true}}
            transition={{ease: "easeIn" , duration: 2}}
          >
            <h2>Welcome to the historic house in Blackwater Ridge</h2>
          </motion.div>
          <motion.div
            className="r-text"
          >
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
          </motion.div>
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
    </motion.div>
  );
}

export default Home;

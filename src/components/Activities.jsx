import React from "react";
import "./Activities.css";
import { motion } from "framer-motion";
function Activities() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <div className="pic">
          <img
            src="https://images.unsplash.com/photo-1593739742226-5e5e2fdb1f1c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="a-sec">
          <div className="a-top">
            <div className="a-top-left">
              <h3>
                Enhance your stay with curated activities for an unique
                experience.
              </h3>
            </div>
            <div className="a-top-right">
              <p>
                Whether you’re hiking, cycling, or kayaking your way through the
                area, the Blackwater Ridge is one of the most beautiful places
                on earth. With a host of rivers, lakes, forests, mountains, and
                wildlife refuges, this area will leave you in awe.
              </p>
              <p>
                For more information, read about the local wineries,
                restaurants, attractions and events.
              </p>
            </div>
          </div>
          <div className="a-bottom"></div>
        </div>
      </div>
    </motion.div>
  );
}

export default Activities;

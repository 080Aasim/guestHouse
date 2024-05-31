import React from "react";
import "./Room.css";
import { motion } from "framer-motion";
import { Product } from "../cardInfo";

export const Room = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="hero-section">
        <div className="img">
          <img
            src="https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2057&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="text">
          <div className="left-text">
            <h2>
              The Blackwater ridge reflects the charm and ambiance of our fine
              wine country location.
            </h2>
          </div>
          <div className="right-text">
            <p>
              All our rooms are tastefully appointed and feature queen sized
              beds and private bathroom. Toiletries and hair dryers are
              provided. Some rooms have tub with shower and others have shower
              only. Rooms on the back side of the house have a fireplace and
              vineyard views. Those on the front of the house have three windows
              and hillside view. The inn has central air conditioning. A two
              course gourmet breakfast is included with your room rate. Coffee
              and tea are available all day.
              <h5>
                1. Check in is between 2 p.m. and 6 p.m. Special arrangements
                can be made for late arrivals. Check-out is at 10 a.m.
              </h5>
              <h5>
                2. Children 12 years and older are welcome. However, our rooms
                are double occupancy only and cannot accommodate extra beds or
                people.
              </h5>
              <h5>3. No smoking is allowed on the property.</h5>
              <h5>
                4. Pets are not allowed, but we can assist you in finding local
                lodging for your pet.
              </h5>
            </p>
          </div>
        </div>
      </div>
      <div className="card-section">
        {Product.map((item) => (
          <div key={item.id} className="card">
            <div className="r-img">
              <img src={item.image} alt="room-image" className="room-img" />
            </div>
            <div className="lower-card">
              <div className="title">
                <h3>{item.roomType}</h3>
              </div>
              <div className="price">From ${item.price}</div>
              <div className="about">
                <h4>{item.about.type1}</h4>
                <h4>{item.about.type2}</h4>
                <h4>{item.about.type3}</h4>
                <h4>{item.about.type4}</h4>
                <h4>{item.about.type5}</h4>
              </div>
              <div className="btn">
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  BOOK NOW
                </motion.button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

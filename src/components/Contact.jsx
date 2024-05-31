import React, { useState } from "react";
import "./Contact.css";
import { Envelope } from "phosphor-react";
import SimpleMap from "./GoogleMap";
import { motion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form Submitted", formData);
  };

  return (
    <>
      <div className="contact">
        <div className="left">
          <SimpleMap />
        </div>
        <div className="right">
          <h3>Send us a message</h3>
          <form onSubmit={handleSubmit}>
            <div className="inp">
              <label htmlFor="name">Your name: </label>
              <motion.input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                whileFocus={{ scale: 1.1 }}
              />
            </div>
            <div className="inp">
              <label htmlFor="email">Your e-mail: </label>
              <motion.input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                whileFocus={{ scale: 1.1 }}
              />
            </div>
            <div className="inp">
              <label htmlFor="message">Your message: </label>
              <motion.textarea
                type="text"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={7}
                className="textarea"
                whileFocus={{ scale: 1.1 }}
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.2 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              type="submit"
            >
              Send
            </motion.button>
          </form>
          <div className="email">
            <h3>Or contact us directly</h3>
            <h4>
              <Envelope size={28} weight="fill" /> info at bookyourtravel{" "}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

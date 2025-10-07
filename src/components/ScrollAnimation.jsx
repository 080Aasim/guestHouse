import React from 'react'
import { motion, useSpring } from "framer-motion";
import { useScroll } from "framer-motion";


function ScrollAnimation() {
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress)
  return (
    <motion.div
    style={{
      position: "fixed",
      top: 0,
      left: "99%",
      right: 0,
      height: "100%",
      width: "8px",
      background: "white",
      transformOrigin: "top",
      borderRadius: "8px",
    //   zIndex: 9999,
      scaleY
    }}
  />
  )
}

export default ScrollAnimation

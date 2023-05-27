import React from "react";
import { motion } from "framer-motion";

const BounceText = ({ children }) => {
  const animate = { scale: [1, 0.95, 1], opacity: 1 };
  const transition = {
    ease: "linear",
    duration: 0.8,
    repeat: "infinity",
    repeatType: "mirror",
  };

  return (
    <motion.p animate={animate} transition={transition}>
      {children}
    </motion.p>
  );
};

export default BounceText;

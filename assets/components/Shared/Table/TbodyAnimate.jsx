import React from "react";
import { motion } from "framer-motion";

const TbodyAnimate = ({ children }) => {
  return (
    <motion.tbody
      initial={{ x: -5, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.tbody>
  );
};

export default TbodyAnimate;

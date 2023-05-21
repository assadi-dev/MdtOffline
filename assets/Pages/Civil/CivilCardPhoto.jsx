import React from "react";
import { CivilPhoto } from "./Civil.styled";
import { motion, stagger } from "framer-motion";

const CivilCardPhoto = ({ src, index }) => {
  return (
    <motion.div
      initial={{ x: -15, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.45, type: "tween", delay: index * 0.15 }}
    >
      <CivilPhoto className="photo-item" src={src} />
    </motion.div>
  );
};

export default CivilCardPhoto;

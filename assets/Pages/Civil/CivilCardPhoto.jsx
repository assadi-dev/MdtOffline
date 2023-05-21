import React from "react";
import { CivilPhoto } from "./Civil.styled";
import { motion } from "framer-motion";

const CivilCardPhoto = ({ src }) => {
  return (
    <motion.div
      initial={{ x: -15, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.45, type: "tween" }}
    >
      <CivilPhoto src={src} />
    </motion.div>
  );
};

export default CivilCardPhoto;

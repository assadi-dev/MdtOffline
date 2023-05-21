import React from "react";
import { CivilPhoto } from "./Civil.styled";
import { motion, stagger } from "framer-motion";

const CivilCardPhoto = ({ src, index }) => {
  return <CivilPhoto className="photo-item" src={src} />;
};

export default CivilCardPhoto;

import React, { useState, useEffect, useRef } from "react";
import { EyesOffOutline, EyesOnOutline } from "../../SVG/Connexion.svg";

const ShowpasswordBtn = ({ inputRefElement, ...props }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (inputRefElement) {
      show
        ? inputRefElement.current.setAttribute("type", "text")
        : inputRefElement.current.setAttribute("type", "password");
    }
  }, [inputRefElement, show]);

  const toggleBtn = () => {
    setShow((current) => !current);
  };

  const RenderIcon = () => {
    return show ? <EyesOffOutline /> : <EyesOnOutline />;
  };

  return (
    <span {...props} onClick={toggleBtn}>
      <RenderIcon />
    </span>
  );
};

export default ShowpasswordBtn;

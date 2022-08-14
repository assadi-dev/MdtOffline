import React from "react";
import { Circle } from "./Button.styled";
import PropTypes from "prop-types";

const CircleButtonIcon = ({ icon, ...props }) => {
  return <Circle {...props}>{icon}</Circle>;
};
CircleButtonIcon.proptypes = {
  icon: PropTypes.element,
};
CircleButtonIcon.defaultProps = {
  icon: "",
};

export default CircleButtonIcon;

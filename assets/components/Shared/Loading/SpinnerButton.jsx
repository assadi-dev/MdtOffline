import React from "react";
import { SpinnerCircularFixed } from "spinners-react";

const SpinnerButton = ({ ...props }) => {
  return (
    <SpinnerCircularFixed
      {...props}
      size={18}
      color="#fff"
      secondaryColor="#FFFFFF50"
      speed={250}
      style={{ marginLeft: 8 }}
    />
  );
};

export default SpinnerButton;

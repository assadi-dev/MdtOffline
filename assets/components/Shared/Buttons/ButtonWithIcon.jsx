import React from "react";
import { ButtonStyled } from "./Button.styled";
import PropTypes from "prop-types";

const ButtonWithIcon = ({ icon, name, ...props }) => {
  return (
    <ButtonStyled {...props} onClick={() => onClick()}>
      {icon}
      {name}
    </ButtonStyled>
  );
};

ButtonWithIcon.proptypes = {
  name: PropTypes.string,
  icon: PropTypes.element,
};

export default ButtonWithIcon;

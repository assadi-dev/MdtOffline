import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  LeftCol,
  NavContainer,
  PageTitle,
  PanicButton,
  RightCol,
} from "./Navbar.styled";
import UserConnect from "./UserConnect";
import ServicesBtn from "./ServicesBtn/ServicesBtn";

const Navbar = ({ name }) => {
  const [toggleButton, setToggleButton] = useState({
    service: false,
    panic: false,
  });

  const toggleOnPanic = () => {
    setToggleButton((prevState) => {
      return { ...prevState, panic: !prevState.panic };
    });
  };

  return (
    <NavContainer>
      <LeftCol>
        <PageTitle>{name}</PageTitle>
      </LeftCol>
      <RightCol>
        <PanicButton active={toggleButton.panic} onClick={toggleOnPanic}>
          CODE-99
        </PanicButton>

        <ServicesBtn />
        <UserConnect />
      </RightCol>
    </NavContainer>
  );
};

Navbar.proptypes = {
  name: PropTypes.string,
};
Navbar.defaultProps = {
  name: "",
};

export default Navbar;

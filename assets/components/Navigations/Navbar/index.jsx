import React, { useState } from "react";
import PropTypes from "prop-types";

import { PlayFilled, PlayOutline } from "../../SVG";
import {
  LeftCol,
  NavContainer,
  PageTitle,
  PanicButton,
  RightCol,
  ServiceButton,
} from "./Navbar.styled";
import UserConnect from "./UserConnect";

const Navbar = ({ name }) => {
  const [toggleButton, setToggleButton] = useState({
    service: false,
    panic: false,
  });

  const toggleOnService = () => {
    setToggleButton((prevState) => {
      return { ...prevState, service: !prevState.service };
    });
  };

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
        <ServiceButton active={toggleButton.service} onClick={toggleOnService}>
          {toggleButton.service ? <PlayFilled /> : <PlayOutline />}
        </ServiceButton>
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

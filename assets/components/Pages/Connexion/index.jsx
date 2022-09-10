import React from "react";
import Input from "../../Shared/Input";
import { LockIconOutLined, UserIconOutLined } from "../../SVG/Connexion.svg";
import {
  CardConnexion,
  CardConnexionBody,
  CardConnexionHeader,
  CardFooterConnexion,
  TextError,
  Wrapper,
} from "./Connexion.styled";
import InputConnexion from "./InputConnexion";
import SingIn from "./SingIn";

const Connexion = () => {
  return (
    <Wrapper>
      <CardConnexion>
        <CardConnexionHeader>
          <h2 className="title">CONNEXION</h2>
        </CardConnexionHeader>
        <CardConnexionBody>
          <SingIn />
        </CardConnexionBody>
      </CardConnexion>
    </Wrapper>
  );
};

export default Connexion;
